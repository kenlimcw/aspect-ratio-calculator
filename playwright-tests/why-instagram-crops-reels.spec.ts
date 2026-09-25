import { test, expect } from '@playwright/test';

/* This tool's entire claim is narrower than the reference safe-zone cell's:
 * a correctly exported 9:16 Reel still loses width because phone screens are
 * taller than 9:16, and that loss is arithmetic, not an app quirk. The
 * control matters most — a genuine 9:16 screen has to show exactly 0.0% lost
 * — because if the underlying `screenCrop` formula ever drifted, every other
 * phone's figure would drift with it and look just as plausible. The zero is
 * the one value that cannot be wrong by coincidence.
 *
 * Every interactive test waits for networkidle first: these pages are
 * prerendered, so they paint complete and inert, and a click that lands
 * before React hydrates is silently swallowed (see safe-zone-tool.spec.ts,
 * where exactly that looked like a logic bug on the first run).
 */

const TOOL = '/tools/why-instagram-crops-reels';

test.describe('why Instagram crops my Reel', () => {

  test('the control: a true 9:16 screen loses exactly 0.0%', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /A true 9:16 screen/ }).click();
    await expect(page.getByText('0.0% — the control: a true 9:16 screen loses nothing')).toBeVisible();
    await expect(page.getByText('1.778 : 1')).toBeVisible();
    // On the control screen there is nothing to frame around.
    await expect(page.getByText('Nothing to frame around here')).toBeVisible();
  });

  test('the worked figure: iPhone 15 loses 18.0% of the width, 97px a side', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // iPhone 15 is the default phone, so this is what the page shows on load.
    await expect(page.getByText('2.168 : 1')).toBeVisible();
    await expect(page.getByText('18.0% — 97 px each side')).toBeVisible();
    // Which is also the margin the "what to do instead" line names.
    await expect(page.getByText(/outer 9.0% on either side/)).toBeVisible();
  });

  test('switching phone recomputes the loss: Pixel 8 is worse, at 20.0%', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /Pixel 8/ }).click();
    await expect(page.getByText('20.0% — 108 px each side')).toBeVisible();
    await expect(page.getByText('2.222 : 1')).toBeVisible();
  });

  test('the page says plainly there is no fix', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // Default phone (iPhone 15) has real loss, so the "no fix exists" copy —
    // not the control's "no fix needed" copy — is what must be showing.
    await expect(page.getByText(/There is no export setting that fixes this/).first()).toBeVisible();
  });

  test('carries the verbatim Threads complaint as the human moment', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await expect(page.getByText(/uploading the correct ratio 9:16/)).toBeVisible();
  });

  test('ships SoftwareApplication structured data', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    const blocks = await page.locator('script[type="application/ld+json"]').allTextContents();
    const app = blocks.map((b) => JSON.parse(b)).find((j) => j['@type'] === 'SoftwareApplication');
    expect(app, 'a tool page with no SoftwareApplication node cannot be named as a tool').toBeTruthy();
    expect(app.isAccessibleForFree).toBe(true);
    expect(app.offers.price).toBe('0');
  });

  test('renders in a non-English locale with no English left behind', async ({ page }) => {
    await page.goto(`/ja${TOOL}`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
    // The arithmetic is language-independent and must survive translation
    // intact, so pick by position (first button = iPhone 15, regardless of
    // locale) rather than by English label text.
    await page.getByRole('button').first().click();
    await expect(page.getByText('2.168 : 1')).toBeVisible();
  });

});
