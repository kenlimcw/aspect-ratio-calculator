import { test, expect } from '@playwright/test';

/* A URL you declare must be the URL you serve.
 *
 * The sitemap listed `/es/` for all thirteen locale home pages, the site
 * answered those with a 308 to `/es`, and the page at `/es` then declared a
 * canonical of `/es/` — pointing at a URL that redirects away from the page
 * declaring it. Google cannot honour a canonical that bounces, and a sitemap
 * entry that redirects is not indexed as listed. Thirteen of the site's
 * forty-one real pages, and the most valuable thirteen after the root.
 *
 * All three statements came from one expression, `${urlPrefix}${path}`, which
 * is correct for every path that is not exactly "/". So this file checks the
 * agreement rather than the expression: declared == served == canonical.
 *
 * Deep paths were never affected and are sampled anyway — the bug was in the
 * general helper, so the general case is what has to stay honest. */

const LOCALE_ROOTS = ['/', '/es', '/pt', '/id', '/fr', '/ja', '/zh-hans', '/zh-hant'];
const DEEP = ['/tools', '/es/ratio/16-9', '/ja/platform/youtube', '/pt/blog/what-is-aspect-ratio'];

test('no sitemap URL redirects', async ({ request, baseURL }) => {
  const xml = await (await request.get('/sitemap.xml')).text();
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(locs.length, 'sitemap should not be empty').toBeGreaterThan(100);

  /* Only the roots could carry the defect, and checking all 533 over the
   * network would dominate the suite's runtime. Every locale root plus a
   * spread of deep paths covers both sides of the branch in localeUrl. */
  const origin = new URL(baseURL!).origin;
  const candidates = locs.filter((u) => {
    const path = new URL(u).pathname;
    return path === '/' || /^\/[a-z-]{2,7}\/?$/.test(path);
  });
  expect(candidates.length, 'the locale home pages must be in the sitemap').toBeGreaterThanOrEqual(8);

  for (const loc of candidates) {
    const url = origin + new URL(loc).pathname;
    const res = await request.get(url, { maxRedirects: 0 });
    expect(res.status(), `${loc} is declared in the sitemap but does not serve 200`).toBe(200);
  }
});

for (const path of [...LOCALE_ROOTS, ...DEEP]) {
  test(`canonical on ${path} points at a URL that serves 200`, async ({ page, request, baseURL }) => {
    await page.goto(path);
    const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
    expect(canonical, `${path} must declare a canonical`).toBeTruthy();

    /* The canonical is an absolute production URL; follow the same path on
     * whichever origin is under test so this works on localhost and previews
     * as well as production. */
    const origin = new URL(baseURL!).origin;
    const target = origin + new URL(canonical!).pathname;

    const res = await request.get(target, { maxRedirects: 0 });
    expect(res.status(),
      `${path} declares canonical ${canonical}, which redirects instead of serving the page`
    ).toBe(200);
  });
}

test('hreflang alternates do not point at redirects either', async ({ page, request, baseURL }) => {
  await page.goto('/es');
  const hrefs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((ls) =>
    ls.map((l) => l.getAttribute('href')).filter((h): h is string => !!h)
  );
  expect(hrefs.length, 'the locale home page should carry its hreflang cluster').toBeGreaterThanOrEqual(8);

  const origin = new URL(baseURL!).origin;
  for (const href of hrefs) {
    const res = await request.get(origin + new URL(href).pathname, { maxRedirects: 0 });
    expect(res.status(), `hreflang alternate ${href} redirects`).toBe(200);
  }
});
