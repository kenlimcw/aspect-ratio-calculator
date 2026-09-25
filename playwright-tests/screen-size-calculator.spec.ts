import { test, expect } from '@playwright/test';

/* This tool's whole claim is that width and height fall out of the diagonal
 * and the ratio by the Pythagorean theorem, not by a rounded rule of thumb.
 * So these assert rendered numbers, not that the page loads.
 *
 * The control matters most: a 3-4-5 triangle is a known-exact case, so a
 * diagonal of 5 at 4:3 MUST render as exactly 4.0 x 3.0 — not "close to 4",
 * because a drifting formula would still look close to 4 at this scale.
 *
 * Numeric assertions use `exact: true`. The comparison table repeats the
 * same width/height numbers with an area suffix appended ("4.0 x 3.0 in —
 * 12.0 in2"), so a substring match on "4.0 x 3.0 in" is ambiguous — it is
 * contained in both. Exact match pins it to the one span that IS that string.
 *
 * Every interactive test waits for networkidle first: these pages are
 * prerendered, so they paint complete and inert, and a click before React
 * hydrates is silently swallowed (see safe-zone-tool.spec.ts, which hit this
 * for real on its first run).
 */

const TOOL = '/tools/screen-size-calculator';

test.describe('screen size calculator', () => {

  test('the control: a 5-unit diagonal at 4:3 is exactly 4.0 x 3.0', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: '4:3', exact: true }).click();
    await page.getByLabel('Diagonal', { exact: true }).fill('5');
    await expect(page.getByText('4.0 × 3.0 in', { exact: true })).toBeVisible();
    await expect(page.getByText('12.0 in²', { exact: true })).toBeVisible();
  });

  test('a 34in 16:9 screen (the default) is 29.6 x 16.7 in, 494.0 in²', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await expect(page.getByText('29.6 × 16.7 in', { exact: true })).toBeVisible();
    await expect(page.getByText('494.0 in²', { exact: true })).toBeVisible();
  });

  test('switching ratio at the same diagonal changes the rectangle, not the diagonal', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // Still 34in, now 21:9: shorter and less area than the 16:9 default above.
    await page.locator('[data-ratio="21-9"]').click();
    await expect(page.getByText('31.3 × 13.4 in', { exact: true })).toBeVisible();
    await expect(page.getByText('418.6 in²', { exact: true })).toBeVisible();
  });

  test('the surprise: 21:9 loses height and area a diagonal spec hides', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // This comparison is diagonal-independent — it is a ratio of two ratios,
    // so the same 19.7% / 15.3% holds at 34in, 5in or 100in.
    await expect(page.getByText(/19\.7% less height and 15\.3% less area/)).toBeVisible();
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

  test('renders in a non-English locale with the same arithmetic', async ({ page }) => {
    await page.goto(`/ja${TOOL}`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
    // The geometry is language-independent and must survive translation intact.
    await expect(page.getByText('29.6 × 16.7 in', { exact: true })).toBeVisible();
  });

});
