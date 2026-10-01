import { test, expect } from '@playwright/test';

/* The "Full calculator" link must not mint a crawlable URL per ratio per
 * locale, and must still work for the ones that already exist.
 *
 * One line in the ratio template produced 182 addresses — 14 ratios x 13
 * locales — all returning the homepage body at 10/10 duplicate similarity.
 * A crawler cannot know that ?rw=1920 means "same page, pre-filled"; it sees
 * an address it has not visited and files another copy. They added about a
 * third to the crawlable URL space on a site where 399 of 533 real URLs have
 * never been fetched once.
 *
 * Everything after # stays in the browser, so the fragment form is invisible
 * to crawlers and identical for a visitor. The three tests below are the
 * three ways this can regress: the link reverts, the fragment stops being
 * read, or the old query form gets dropped and 182 indexed URLs break.
 */

test.describe('calculator pre-fill', () => {

  test('the ratio page links with a fragment, never a query string', async ({ page }) => {
    await page.goto('/ratio/16-9');
    const href = await page.locator('a[href*="rw="]').first().getAttribute('href');
    expect(href, 'a "Full calculator" link must exist to test').toBeTruthy();
    expect(href!, 'the pre-fill must ride in the fragment').toContain('#rw=');
    expect(href!, 'a query string here is a crawlable duplicate of the homepage')
      .not.toContain('?rw=');
  });

  test('every locale does it, not just the default', async ({ page }) => {
    for (const prefix of ['/es', '/ja']) {
      await page.goto(`${prefix}/ratio/16-9`);
      const href = await page.locator('a[href*="rw="]').first().getAttribute('href');
      expect(href!, `${prefix} must use a fragment`).toContain('#rw=');
      expect(href!, `${prefix} must not use a query string`).not.toContain('?rw=');
    }
  });

  /* These assert on the ratio selector reading "Custom (21:9)" rather than
   * on the page containing "21:9" anywhere, because the homepage lists 21:9
   * among its presets regardless. The first version of this test asserted on
   * body text, passed with the fragment reader deleted, and was a false
   * green — the exact defect class this suite exists to catch. */

  test('a bare ratio locks the calculator — no dimensions needed', async ({ page }) => {
    await page.goto('/#rw=21&rh=9&mode=scale');
    await expect(page.getByText('Custom (21:9)')).toBeVisible({ timeout: 15000 });
  });

  test('the old query form still works — 182 of them are already indexed', async ({ page }) => {
    await page.goto('/?rw=21&rh=9&mode=scale');
    await expect(page.getByText('Custom (21:9)')).toBeVisible({ timeout: 15000 });
  });

  test('and the plain homepage locks nothing', async ({ page }) => {
    /* The control. Without it the two tests above would pass on a page that
     * always said "Custom (21:9)". */
    await page.goto('/');
    await expect(page.getByText('Custom (21:9)')).toHaveCount(0);
  });

});
