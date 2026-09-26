import { test, expect, type Page } from '@playwright/test';

/* No page ships without a way in.
 *
 * Six tool pages were built, deployed to the branch, prerendered in thirteen
 * locales — and nothing on the site linked to any of them. Reachable by typing
 * the URL and by nothing else.
 *
 * That is not only a usability miss. Google finds pages by following links, and
 * a URL that appears in a sitemap with no internal link pointing at it is the
 * textbook shape of "Discovered — currently not indexed". On a site whose whole
 * diagnosed problem is that Google stopped crawling it, adding orphans makes the
 * problem worse. The fix was easy; noticing was the hard part, and a human
 * noticed rather than any of the tests.
 *
 * So this is the rail. Add a tool without linking it and this fails.
 */

const TOOLS = [
  'instagram-safe-zone-checker',
  'print-crop-calculator',
  'screen-size-calculator',
  'sensor-crop-factor',
  'pixels-to-inches',
  'why-instagram-crops-reels',
];

async function hrefsOn(page: Page, url: string): Promise<string[]> {
  await page.goto(url);
  await page.waitForLoadState('domcontentloaded');
  return page.locator('a[href]').evaluateAll((as: HTMLAnchorElement[]) =>
    as.map((a) => a.getAttribute('href') ?? ''));
}

test.describe('no orphan pages', () => {

  test('every tool is linked from the home page', async ({ page }) => {
    const hrefs = await hrefsOn(page, '/');
    for (const slug of TOOLS) {
      expect(hrefs, `${slug} is not linked from the home page`)
        .toContain(`/tools/${slug}`);
    }
  });

  test('every tool is linked from the footer, so from every page', async ({ page }) => {
    // Checked on a deep page rather than the home page: the footer is what makes
    // a tool reachable from somewhere a crawler landed by accident.
    const hrefs = await hrefsOn(page, '/ratio/16-9');
    for (const slug of TOOLS) {
      expect(hrefs, `${slug} is missing from the footer`)
        .toContain(`/tools/${slug}`);
    }
  });

  test('the hub lists every tool, and the home page links the hub', async ({ page }) => {
    const home = await hrefsOn(page, '/');
    expect(home, 'the /tools hub is not linked from the home page').toContain('/tools');

    const hub = await hrefsOn(page, '/tools');
    for (const slug of TOOLS) {
      expect(hub, `${slug} is missing from the hub`).toContain(`/tools/${slug}`);
    }
  });

  test('a non-English locale keeps its own prefix on those links', async ({ page }) => {
    // A tool linked as /tools/... from /ja would send a Japanese reader to the
    // English page and split the crawl across two URLs for one resource.
    const hrefs = await hrefsOn(page, '/ja');
    for (const slug of TOOLS) {
      expect(hrefs, `${slug} is not linked with the /ja prefix`)
        .toContain(`/ja/tools/${slug}`);
    }
  });

});
