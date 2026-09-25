import { test, expect } from '@playwright/test';

/* This tool's whole claim is that crop factor is arithmetic — full frame's
 * diagonal over the sensor's own — rather than a table someone typed in once
 * and never checked. The control matters most: full frame divided by itself
 * has to land on exactly 1.000×. If the formula ever drifted (a hardcoded
 * 43.27 instead of a computed diagonal, say), every OTHER figure would drift
 * with it and look just as plausible — the identity is the only value that
 * cannot be wrong by coincidence.
 *
 * Every interactive test waits for networkidle first: these pages are
 * prerendered, so they paint complete and inert, and a click that lands
 * before React hydrates is silently swallowed (see safe-zone-tool.spec.ts).
 */

const TOOL = '/tools/sensor-crop-factor';

test.describe('sensor crop factor calculator', () => {

  test('the control: full frame divided by itself is exactly 1.000×', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /Full frame/ }).click();
    await expect(page.getByText('1.000×', { exact: true })).toBeVisible();
    // Crop factor 1 means the equivalents equal the raw inputs unchanged.
    await expect(page.getByText('50.0 mm equivalent', { exact: true })).toBeVisible();
    await expect(page.getByText('f/2.80 equivalent depth of field')).toBeVisible();
  });

  test('default APS-C Canon: 50mm f/2.8 gives crop 1.613×, 80.7mm, f/4.52', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('1.613×', { exact: true })).toBeVisible();
    await expect(page.getByText('80.7 mm equivalent', { exact: true })).toBeVisible();
    await expect(page.getByText('f/4.52 equivalent depth of field')).toBeVisible();
  });

  test('Micro Four Thirds computes to the ~2x crop factor the format is known by', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /Micro Four Thirds/ }).click();
    await expect(page.getByText('1.999×', { exact: true })).toBeVisible();
  });

  test('medium format is larger than full frame, so its crop factor is below 1', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: /Medium format/ }).click();
    await expect(page.getByText('0.787×', { exact: true })).toBeVisible();
  });

  test('changing focal length and aperture recomputes both equivalents', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    const inputs = page.locator('input[type="number"]');
    await inputs.nth(0).fill('35');
    await inputs.nth(1).fill('1.8');
    await expect(page.getByText('56.5 mm equivalent', { exact: true })).toBeVisible();
    await expect(page.getByText('f/2.90 equivalent depth of field')).toBeVisible();
  });

  test('the page says equivalent aperture changes depth of field, not exposure', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await expect(page.getByText(/changes depth of field, not exposure/)).toBeVisible();
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
    // Selected by data-sensor, not by label and not by position. A label match
    // would test the English string in a Japanese page; "first button" picked
    // up the language switcher in the header. The arithmetic is
    // language-independent and must survive translation intact.
    await page.locator('[data-sensor="full-frame"]').click();
    await expect(page.getByText('1.000×', { exact: true })).toBeVisible();
  });

});
