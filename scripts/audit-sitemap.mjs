#!/usr/bin/env node
/**
 * Crawl every URL in the sitemap and assert the invariants that make a page
 * indexable. Exits non-zero on any violation.
 *
 * Why this exists, and why it crawls all of them.
 *
 * For months the thirteen locale home pages declared a canonical pointing at
 * a URL that 308-redirects away from the page declaring it. Google cannot
 * honour a canonical that bounces. It went unnoticed through several rounds
 * of checking because every check was a SAMPLE — twenty URLs, then twenty
 * five — and thirteen bad URLs out of 533 hide from a sample almost every
 * time. The defect was not subtle. The method was.
 *
 * So: no sampling. 533 requests take about a minute against a CDN and the
 * whole point is that the count is the coverage.
 *
 * Run against production before or after a deploy:
 *   node scripts/audit-sitemap.mjs
 *   node scripts/audit-sitemap.mjs --base https://<preview>.vercel.app
 *
 * Preview deployments need the bypass secret in VERCEL_PROTECTION_BYPASS.
 */

const args = process.argv.slice(2);
const argOf = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] ? args[i + 1] : fallback;
};

const BASE = (argOf('--base', 'https://aspect-ratio-calculator.com')).replace(/\/$/, '');
const CONCURRENCY = Number(argOf('--concurrency', '8'));
const headers = {
  'user-agent': 'ARC-audit/1.0 (+owner self-audit)',
  ...(process.env.VERCEL_PROTECTION_BYPASS
    ? { 'x-vercel-protection-bypass': process.env.VERCEL_PROTECTION_BYPASS }
    : {}),
};

/** Follow nothing. A redirect is a finding, not a detour. */
const fetchRaw = (url) => fetch(url, { headers, redirect: 'manual' });

async function mapLimit(items, limit, fn) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i], i);
      }
    })
  );
  return out;
}

const pick = (html, re) => (html.match(re)?.[1] ?? '').trim();

async function inspect(url) {
  const res = await fetchRaw(url);
  if (res.status !== 200) {
    return { url, status: res.status, location: res.headers.get('location') ?? '' };
  }
  const html = await res.text();
  return {
    url,
    status: 200,
    canonical: pick(html, /<link rel="canonical" href="([^"]+)"/i),
    title: pick(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    hreflang: (html.match(/hreflang="/gi) ?? []).length,
    noindex: /<meta name="robots"[^>]*noindex/i.test(html),
  };
}

const problems = [];
const fail = (rule, url, detail) => problems.push({ rule, url, detail });

const sitemapUrl = `${BASE}/sitemap.xml`;
const smRes = await fetchRaw(sitemapUrl);
if (smRes.status !== 200) {
  console.error(`sitemap ${sitemapUrl} returned ${smRes.status}`);
  process.exit(2);
}
const locs = [...(await smRes.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (locs.length < 100) {
  console.error(`sitemap has only ${locs.length} URLs — refusing to call that a pass`);
  process.exit(2);
}

/* Sitemap URLs are absolute production URLs even on a preview, so rewrite the
 * origin to whatever is under test while keeping the path. */
const toBase = (u) => BASE + new URL(u).pathname;

console.log(`auditing ${locs.length} URLs against ${BASE}`);
const rows = await mapLimit(locs, CONCURRENCY, (loc) => inspect(toBase(loc)));

for (const [i, r] of rows.entries()) {
  const declared = locs[i];
  if (r.status !== 200) {
    fail('sitemap URL does not serve 200', declared, `${r.status}${r.location ? ' -> ' + r.location : ''}`);
    continue;
  }
  if (!r.canonical) fail('no canonical', declared, '');
  if (r.noindex) fail('noindex on a sitemap URL', declared, '');
  if (!r.title) fail('no title', declared, '');
  if (r.hreflang === 0) fail('no hreflang cluster', declared, '');
}

/* The defect that started this: a canonical that redirects. Resolve each
 * DISTINCT canonical once rather than per-page. */
const canonicals = [...new Set(rows.filter((r) => r.canonical).map((r) => toBase(r.canonical)))];
const canonStatus = new Map(
  await mapLimit(canonicals, CONCURRENCY, async (u) => [u, (await fetchRaw(u)).status])
);
for (const [i, r] of rows.entries()) {
  if (!r.canonical) continue;
  const st = canonStatus.get(toBase(r.canonical));
  if (st !== 200) {
    fail('canonical does not serve 200', locs[i], `canonical ${r.canonical} -> ${st}`);
  }
}

/* Identical titles across a locale cluster mean the page was never actually
 * translated, and Google reads thirteen copies of one page. */
const SEG = /^\/(es|pt|id|fr|ja|zh-hans|zh-hant|ar|uk|pl|ro|vi)(?=\/|$)/;
const clusters = new Map();
for (const r of rows) {
  if (r.status !== 200 || !r.title) continue;
  const id = new URL(r.url).pathname.replace(SEG, '') || '/';
  if (!clusters.has(id)) clusters.set(id, { titles: new Set(), pages: 0 });
  const c = clusters.get(id);
  c.titles.add(r.title);
  /* Count only pages that actually produced a title. Counting the cluster's
   * total membership instead reported "/" as untranslated across 13 pages
   * when twelve of those pages were redirecting and had no title to compare —
   * one title from one page is not evidence of anything. A rail that cries
   * wolf is a rail people learn to skip. */
  c.pages += 1;
}
for (const [id, { titles, pages }] of clusters) {
  if (titles.size === 1 && pages > 3) {
    fail('same title in every locale (untranslated)', id, `${pages} translated pages share one title`);
  }
}

const byRule = problems.reduce((a, p) => ((a[p.rule] = (a[p.rule] ?? 0) + 1), a), {});
console.log(`\n${rows.length} URLs checked, ${problems.length} violations`);
for (const [rule, n] of Object.entries(byRule)) console.log(`  ${n.toString().padStart(4)}  ${rule}`);
if (problems.length) {
  console.log('');
  for (const p of problems.slice(0, 40)) {
    console.log(`  ${p.rule}: ${p.url}${p.detail ? '  (' + p.detail + ')' : ''}`);
  }
  if (problems.length > 40) console.log(`  … and ${problems.length - 40} more`);
  process.exit(1);
}
console.log('all invariants hold');
