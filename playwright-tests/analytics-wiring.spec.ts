import { test, expect } from '@playwright/test';

/* Analytics fails silently on both sides, which is why it needs a test at all.
 *
 * Two defects shipped and survived for the life of the site. Clarity's beacons
 * were refused by a CSP that enumerated three of its collector hosts and
 * missed the ones it actually used. GA4's loader built `gtag` with rest
 * parameters, so `gtag("config", ID)` pushed a real array where gtag.js
 * expects an `arguments` object — the script loaded, recognised nothing, and
 * sent no pageview. In both cases the app threw no error, the vendor's
 * dashboard simply showed no traffic, and "no traffic" is indistinguishable
 * from "nobody visited".
 *
 * So these assert on the mechanism, not on a number appearing in a dashboard
 * a week later.
 *
 * `x-vercel-ip-country` comes from the config, which puts the run outside the
 * EEA, so consent is recorded automatically and the loaders run.
 *
 * The loaders are also gated to the production hostname, because a test run
 * against 127.0.0.1 was sending real hits to the real GA4 property — 329 of
 * 427 sessions on 2026-09-30 came from localhost. So the mechanism tests set
 * __arcForceAnalytics, and the gate itself gets its own test below. Forcing
 * it in two tests while never testing the gate would be how the gate quietly
 * stops working. */

test.describe('analytics wiring', () => {

  test('gtag pushes arguments objects, not arrays', async ({ page }) => {
    await page.addInitScript(() => { window.__arcForceAnalytics = true; });
    await page.goto('/tools');
    await page.waitForFunction(() => (window.dataLayer?.length ?? 0) >= 2, null, { timeout: 15000 });

    const kinds = await page.evaluate(() =>
      (window.dataLayer ?? []).map((e) => Object.prototype.toString.call(e))
    );

    /* gtag.js dispatches on the `arguments` shape. An Array is data and is
     * ignored, so this exact distinction is the difference between GA4
     * recording every visit and recording none. */
    expect(kinds.filter((k) => k === '[object Arguments]').length,
      'the js and config commands must be pushed as arguments objects'
    ).toBeGreaterThanOrEqual(2);
    expect(kinds, 'no command may be pushed as a plain array').not.toContain('[object Array]');
  });

  test('consent is recorded outside the EEA, so the loaders run at all', async ({ page }) => {
    await page.addInitScript(() => { window.__arcForceAnalytics = true; });
    await page.goto('/tools');
    await page.waitForFunction(() => !!localStorage.getItem('cookie-consent'), null, { timeout: 15000 });

    const consent = await page.evaluate(() => localStorage.getItem('cookie-consent'));
    expect(consent, 'a non-EEA visitor should have analytics consent stored').toContain('"analytics":true');

    /* Both tags must actually be in the document. A consent record that grants
     * analytics while nothing loads is the same empty dashboard by another
     * route. */
    await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]')).toHaveCount(1);
    await expect(page.locator('script[src*="clarity.ms/tag/"]')).toHaveCount(1);
  });

  test('the CSP admits every Clarity collector, not an enumerated few', async ({ page }) => {
    const res = await page.goto('/tools');
    const csp = res?.headers()['content-security-policy'] ?? '';
    const connect = csp.split(';').find((d) => d.trim().startsWith('connect-src')) ?? '';

    /* Clarity's collector is a lettered regional host and the letter varies by
     * visitor — g, k and u were all observed from one location in one hour.
     * Any enumerated list is a list that will be wrong for somebody, so the
     * wildcard is the assertion. */
    expect(connect, 'connect-src must wildcard clarity.ms').toContain('https://*.clarity.ms');
    expect(connect, 'GA4 posts to googletagmanager.com too').toContain('https://www.googletagmanager.com');
  });

  test('no analytics loads on a host that is not the live site', async ({ page }) => {
    /* The inverse of the two tests above, and the one that actually protects
     * the data. Without the hostname gate every local `next start` run and
     * every Vercel preview reported itself as a visitor: 329 of 427 GA4
     * sessions on 2026-09-30 carried hostName 127.0.0.1, which is our own
     * testing outnumbering the site's real audience three to one.
     *
     * No addInitScript here — this run must look like an ordinary visit to a
     * non-production host. */
    await page.goto('/tools');
    await page.waitForFunction(() => !!localStorage.getItem('cookie-consent'), null, { timeout: 15000 });

    const consent = await page.evaluate(() => localStorage.getItem('cookie-consent'));
    expect(consent, 'consent must still be granted — the gate is about the host, not consent')
      .toContain('"analytics":true');

    await expect(page.locator('script[src*="googletagmanager.com/gtag/js"]'),
      'GA4 must not load off the live hostname').toHaveCount(0);
    await expect(page.locator('script[src*="clarity.ms/tag/"]'),
      'Clarity must not load off the live hostname').toHaveCount(0);
    expect(await page.evaluate(() => window.dataLayer?.length ?? 0),
      'nothing may be pushed to the dataLayer').toBe(0);
  });
});
