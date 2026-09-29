import { test, expect } from '@playwright/test';

/* The widget only earns anything if it survives being on someone else's page.
 *
 * Every check here is done through a real cross-document iframe rather than by
 * loading /embed directly, because loading it directly cannot fail the way
 * that matters: the site sets X-Frame-Options: DENY and CSP frame-ancestors
 * 'none' everywhere, and /embed is the single deliberate exception. A test
 * that navigates straight to the page would pass with the framing still
 * blocked, which is the whole defect this route exists to avoid.
 */

/* Standing up a genuinely third-party host page.
 *
 * A data: URL will not do — its document has an opaque origin and Chrome
 * refuses to load the subframe at all, so every assertion fails for a reason
 * that has nothing to do with the widget. (Tried; all seven iframe tests
 * failed identically with an empty frame.)
 *
 * Instead: `localhost` and `127.0.0.1` are DIFFERENT origins to a browser
 * while reaching the same dev server. The host page is served on one and
 * frames the widget on the other, which is a real cross-document, cross-origin
 * embed — the thing being tested. `page.route` fulfils the host URL so no
 * second server is needed. */
const HOST_PATH = '/__embed_host';

async function openHost(page: import('@playwright/test').Page, baseURL: string, src: string) {
  const frameSrc = baseURL.replace('localhost', '127.0.0.1');
  const hostOrigin = baseURL.replace('127.0.0.1', 'localhost');

  await page.route(hostOrigin + HOST_PATH, (route) =>
    route.fulfill({
      status: 200,
      contentType: 'text/html',
      body: `<!doctype html><title>host</title><iframe id="w" src="${frameSrc}${src}" width="420" height="340"></iframe>`,
    })
  );
  await page.goto(hostOrigin + HOST_PATH);
}

test.describe('embeddable widget', () => {

  test('frames on a third-party origin and renders', async ({ page, baseURL }) => {
    await openHost(page, baseURL!, '/embed');
    const frame = page.frameLocator('#w');

    /* If framing were refused, the document would be empty and this times
     * out — which is exactly the assertion we want. */
    await expect(frame.locator('[data-arc-ratio]')).toBeVisible({ timeout: 15000 });
    await expect(frame.locator('[data-arc-ratio]')).toHaveText('16 : 9');
  });

  test('computes inside the frame', async ({ page, baseURL }) => {
    await openHost(page, baseURL!, '/embed');
    const frame = page.frameLocator('#w');
    await expect(frame.locator('[data-arc-ratio]')).toBeVisible({ timeout: 15000 });

    await frame.locator('#arc-w').fill('1280');
    await frame.locator('#arc-h').fill('1024');
    await expect(frame.locator('[data-arc-ratio]')).toHaveText('5 : 4');

    /* The second job: fix one side, get the other. 5:4 at width 800 is 640. */
    await frame.getByPlaceholder('Width').fill('800');
    await expect(frame.getByPlaceholder('Height')).toHaveValue('640');
  });

  test('honours w, h and lang from the URL', async ({ page, baseURL }) => {
    await openHost(page, baseURL!, '/embed?w=2560&h=1080&lang=es');
    const frame = page.frameLocator('#w');
    await expect(frame.locator('[data-arc-ratio]')).toHaveText('64 : 27', { timeout: 15000 });
    /* Spanish, not English with a Spanish flag on it. */
    await expect(frame.locator('text=Ancho').first()).toBeVisible();
  });

  test('rejects a nonsense dimension instead of rendering it', async ({ page, baseURL }) => {
    await openHost(page, baseURL!, '/embed?w=-5&h=abc');
    const frame = page.frameLocator('#w');
    /* Falls back to the default rather than NaN, an empty box or a crash. */
    await expect(frame.locator('[data-arc-ratio]')).toHaveText('16 : 9', { timeout: 15000 });
  });

  test('carries the attribution link, which is the point of the widget', async ({ page, baseURL }) => {
    await openHost(page, baseURL!, '/embed');
    const frame = page.frameLocator('#w');
    const link = frame.locator('a[href*="aspect-ratio-calculator.com"]');
    await expect(link).toBeVisible({ timeout: 15000 });
    await expect(link).toHaveAttribute('href', /utm_source=embed/);
  });

  test('reports its height to the host', async ({ page, baseURL }) => {
    await openHost(page, baseURL!, '/embed');
    const height = await page.evaluate(
      () =>
        new Promise<number>((resolve) => {
          const timer = setTimeout(() => resolve(-1), 12000);
          window.addEventListener('message', (e) => {
            if (e.data?.type === 'arc:embed:height') {
              clearTimeout(timer);
              resolve(e.data.height);
            }
          });
        })
    );
    expect(height, 'widget should postMessage its height so hosts need not guess')
      .toBeGreaterThan(80);
  });

  test('is not indexable and not in the sitemap', async ({ page, request }) => {
    await page.goto('/embed');
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);

    /* It duplicates the home page's calculator, and the site has an
     * indexation problem — it must not compete for a slot. */
    const xml = await (await request.get('/sitemap.xml')).text();
    expect(xml).not.toContain('/embed');
  });

  test('the framing exception is scoped to /embed alone', async ({ request }) => {
    /* Read through the API context, not a fetch inside the page: a
     * cross-origin fetch cannot see response headers, so an in-page read
     * returns "" and the assertion fails for a reason unrelated to the
     * policy. */
    const cspOf = async (path: string) =>
      (await request.get(path)).headers()['content-security-policy'] ?? '';

    expect(await cspOf('/embed'), '/embed must be framable — that is its whole job')
      .toContain('frame-ancestors *');

    for (const path of ['/', '/tools', '/ratio/16-9', '/es']) {
      expect(await cspOf(path), `${path} must still refuse to be framed`)
        .toContain("frame-ancestors 'none'");
    }
  });

  test('the ratio page offers the embed, pre-filled with its own ratio', async ({ page }) => {
    await page.goto('/ratio/4-3');
    const toggle = page.getByRole('button', { name: /Embed this .* calculator/i });
    await expect(toggle).toBeVisible();
    await toggle.click();
    /* Pre-filled matters: what the reader pastes should already be set to the
     * thing their article is about. */
    await expect(page.locator('code', { hasText: '/embed?w=4&h=3' })).toBeVisible();
  });
});
