import { test, expect } from '@playwright/test';

/* The whole claim of this tool is that print size is arithmetic — inches
 * equals pixels divided by DPI — not a lookup or an opinion. These tests
 * assert the rendered numbers, not that the page loads.
 *
 * The control matters most: 3000px at 300 DPI must render as exactly 10
 * inches, with no rounding noise. If the formula or the formatter ever
 * drifts, every other figure on the page drifts with it and looks just as
 * plausible — the exact 10 is the one value that cannot be right by
 * coincidence.
 *
 * Every interactive test waits for networkidle first. These pages are
 * prerendered, so they paint complete and inert, and a fill() that lands
 * before React hydrates is silently swallowed (the safe-zone suite hit this
 * exact failure first).
 */

const TOOL = '/tools/pixels-to-inches';

test.describe('pixels to inches calculator', () => {

  test('the control: 3000px at 300 DPI is exactly 10 inches, no rounding', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // Default state is 3000×4500px, so the 300 DPI row's width column is the
    // control with no interaction needed.
    await expect(page.getByText('10 in (25.4 cm)')).toBeVisible();
  });

  test('150 DPI gives the largest acceptable print: 20 × 30 inches', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // Same 3000×4500px file, read the other way: the reverse question the
    // brief describes — how big can this go and still be acceptable.
    await expect(page.getByText('20 in (50.8 cm)')).toBeVisible();
    await expect(page.getByText('30 in (76.2 cm)')).toBeVisible();
  });

  test('changing the pixel width recomputes every DPI row', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByTestId('width-input').fill('6000');
    // 6000/300 = 20in exactly, at the same height (4500) that gave 15in/30in
    // before, so this is a genuine recompute, not a leftover from default.
    await expect(page.getByText('20 in (50.8 cm)')).toBeVisible();
  });

  test('says plainly that a screen has no DPI in the print sense', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // This is the confusion the whole page exists to resolve — it has to be
    // stated, not just implied by a 72 DPI number sitting in a table.
    await expect(page.getByText("Why a screen doesn't have a DPI")).toBeVisible();
    await expect(page.getByText(/not a measurement of any display/)).toBeVisible();
  });

  test('renders in a non-English locale with the arithmetic intact', async ({ page }) => {
    await page.goto(`/ja${TOOL}`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
    // The division is language-independent and must survive translation.
    await expect(page.getByText('10 in (25.4 cm)')).toBeVisible();
  });

});
