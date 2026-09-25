#!/usr/bin/env node
/* Does the sitemap tell Google the truth about what changed?
 *
 * A `lastmod` is a claim. Google stops believing a site that makes it falsely —
 * and in ARC's case it did: until 2026-09-22 the sitemap stamped every one of
 * 390 URLs on every deploy, Google stopped downloading the sitemap in March, and
 * nothing in the English tree has been crawled since 15 April.
 *
 * The rule was already written, clearly, in a comment at the top of
 * article-meta.ts. It was not followed on the one commit that mattered: six
 * articles were rewritten on 2026-09-23 and their `modified` dates stayed at
 * March. A comment is prose. This is the rail.
 *
 * Three invariants, each able to fail in only one direction:
 *
 *   C1  English content changed  ->  `modified` must move.
 *       Otherwise Google is told nothing changed and never re-fetches.
 *
 *   C2  `modified` moved  ->  English content must have changed.
 *       A date that moves on a build or a translation pass is the fresh lie that
 *       trains a crawler to ignore the field. Translations deliberately do NOT
 *       count: a translated article did not say anything new.
 *
 *   C3  An article in ARTICLE_DATA must have an ARTICLE_DATES entry.
 *       Without one, articleDates() falls back to the earliest date and a brand
 *       new article ships claiming it was written in March.
 *
 * Usage:
 *   node scripts/check-lastmod.mjs [baseRef]   # default: origin/master
 *   node scripts/check-lastmod.mjs --self-test # prove each check can fail
 */
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const SEO = "src/lib/seo-data.ts";
const META = "src/lib/article-meta.ts";

/* ── parsing ──────────────────────────────────────────────────────────────
 * Brace-matched rather than regexed: an article body is prose that contains
 * braces, quotes and apostrophes, and a regex that survives today's copy will
 * not survive tomorrow's. */

function articleBodies(src) {
  const out = new Map();
  const start = src.indexOf("ARTICLE_DATA");
  if (start === -1) return out;
  const open = src.indexOf("{", start);
  if (open === -1) return out;

  let i = open + 1, depth = 1, inStr = null, esc = false;
  let keyAt = null, key = null;

  while (i < src.length && depth > 0) {
    const c = src[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === "\\") esc = true;
      else if (c === inStr) inStr = null;
      i++; continue;
    }
    if (c === '"' || c === "'" || c === "`") { inStr = c; i++; continue; }
    if (c === "{") {
      depth++;
      if (depth === 2 && key) keyAt = i;      // start of this article's object
      i++; continue;
    }
    if (c === "}") {
      depth--;
      if (depth === 1 && key && keyAt !== null) {
        out.set(key, src.slice(keyAt, i + 1));
        key = null; keyAt = null;
      }
      i++; continue;
    }
    if (depth === 1) {
      const m = /^\s*"([a-z0-9-]+)"\s*:/.exec(src.slice(i, i + 80));
      if (m) { key = m[1]; i += m[0].length; continue; }
    }
    i++;
  }
  return out;
}

function modifiedDates(src) {
  const out = new Map();
  const block = src.slice(src.indexOf("ARTICLE_DATES"));
  const re = /"([a-z0-9-]+)"\s*:\s*D\(\s*"(\d{4}-\d{2}-\d{2})"\s*(?:,\s*"(\d{4}-\d{2}-\d{2})"\s*)?\)/g;
  let m;
  while ((m = re.exec(block))) out.set(m[1], m[3] ?? m[2]); // modified defaults to published
  return out;
}

/* ── the invariants ───────────────────────────────────────────────────── */

function compare(before, after) {
  const failures = [];
  const beforeBodies = articleBodies(before.seo);
  const afterBodies = articleBodies(after.seo);
  const beforeDates = modifiedDates(before.meta);
  const afterDates = modifiedDates(after.meta);

  for (const [slug, body] of afterBodies) {
    // C3 — a dateless article silently inherits the fallback date
    if (!afterDates.has(slug)) {
      failures.push({
        check: "C3", slug,
        message: `is in ARTICLE_DATA with no ARTICLE_DATES entry, so articleDates() ` +
                 `falls back and it will ship claiming a date it was not written on`,
      });
      continue;
    }
    const wasNew = !beforeBodies.has(slug);
    if (wasNew) continue;                     // a new article is consistent by construction

    const contentMoved = beforeBodies.get(slug) !== body;
    const dateMoved = beforeDates.get(slug) !== afterDates.get(slug);

    if (contentMoved && !dateMoved) {
      failures.push({
        check: "C1", slug,
        message: `English content changed but modified stayed at ${afterDates.get(slug)} — ` +
                 `the sitemap would tell Google this article has not changed`,
      });
    }
    if (dateMoved && !contentMoved) {
      failures.push({
        check: "C2", slug,
        message: `modified moved ${beforeDates.get(slug)} -> ${afterDates.get(slug)} with no ` +
                 `English content change — a fresh lie is how a crawler learns to ignore the field`,
      });
    }
  }
  return failures;
}

/* ── self-test: every check must be able to fail, AND pass correct work ── */

const FIX = {
  seo: (body) => `export const ARTICLE_DATA: Record<string, ArticleData> = {\n` +
                 `  "alpha": {\n    title: "Alpha",\n    sections: [{ heading: "H", body: "${body}" }],\n  },\n};\n`,
  meta: (mod) => `export const ARTICLE_DATES: Record<string, ArticleDates> = {\n` +
                 `  "alpha": D("2026-03-03"${mod ? `, "${mod}"` : ""}),\n};\n`,
};

function selfTest() {
  const cases = [
    { name: "C1 content moved, date did not",
      before: { seo: FIX.seo("old words"), meta: FIX.meta(null) },
      after: { seo: FIX.seo("new words"), meta: FIX.meta(null) },
      expect: "C1" },
    { name: "C2 date moved, content did not",
      before: { seo: FIX.seo("same words"), meta: FIX.meta(null) },
      after: { seo: FIX.seo("same words"), meta: FIX.meta("2026-09-23") },
      expect: "C2" },
    { name: "C3 article with no date entry",
      before: { seo: FIX.seo("words"), meta: FIX.meta(null) },
      after: { seo: FIX.seo("words").replace('"alpha"', '"beta"'), meta: FIX.meta(null) },
      expect: "C3" },
    { name: "correct work: both moved together",
      before: { seo: FIX.seo("old words"), meta: FIX.meta(null) },
      after: { seo: FIX.seo("new words"), meta: FIX.meta("2026-09-23") },
      expect: null },
    { name: "correct work: nothing moved",
      before: { seo: FIX.seo("same words"), meta: FIX.meta(null) },
      after: { seo: FIX.seo("same words"), meta: FIX.meta(null) },
      expect: null },
    { name: "correct work: translation only (English untouched)",
      before: { seo: FIX.seo("same words"), meta: FIX.meta(null) },
      after: { seo: FIX.seo("same words"), meta: FIX.meta(null) },
      expect: null },
  ];

  let bad = 0;
  for (const c of cases) {
    const got = compare(c.before, c.after);
    const codes = got.map((f) => f.check);
    const ok = c.expect ? codes.includes(c.expect) : codes.length === 0;
    if (!ok) bad++;
    console.log(`  ${ok ? "ok  " : "FAIL"}  ${c.name}` +
                (c.expect ? `  expected ${c.expect}, got [${codes}]` : `  expected clean, got [${codes}]`));
  }
  console.log(bad ? `\n${bad} self-test case(s) wrong — the check itself is broken`
                  : `\nall ${cases.length} self-test cases behave: each invariant can fail, and correct work passes`);
  return bad ? 1 : 0;
}

/* ── main ─────────────────────────────────────────────────────────────── */

function show(ref, path) {
  try {
    return execFileSync("git", ["show", `${ref}:${path}`], { encoding: "utf8", maxBuffer: 64e6 });
  } catch {
    return "";
  }
}

function main() {
  const args = process.argv.slice(2);
  if (args.includes("--self-test")) process.exit(selfTest());

  const base = args[0] ?? "origin/master";
  const before = { seo: show(base, SEO), meta: show(base, META) };
  if (!before.seo) {
    console.error(`cannot read ${SEO} at ${base} — pass a reachable base ref`);
    process.exit(2);
  }
  const after = { seo: readFileSync(SEO, "utf8"), meta: readFileSync(META, "utf8") };

  const failures = compare(before, after);
  if (!failures.length) {
    console.log(`lastmod truthfulness: ok against ${base}`);
    process.exit(0);
  }
  console.error(`lastmod truthfulness: ${failures.length} problem(s) against ${base}\n`);
  for (const f of failures) console.error(`  [${f.check}] ${f.slug}\n        ${f.message}\n`);
  console.error(`Fix in src/lib/article-meta.ts, in the same commit as the content change.`);
  process.exit(1);
}

main();
