import { test, expect } from '@playwright/test';

/* This tool's whole claim is that a print's crop percentage is arithmetic
 * over a published ratio, not a guess — so these tests assert the rendered
 * numbers, never just that the page loads.
 *
 * The control matters most: a 3:2 photo on a 6x4 print (rule 2's identity
 * case, both exactly 1.5:1) must show ZERO. If the ratio-comparison formula
 * ever drifts, every percentage drifts with it and looks just as plausible —
 * the zero is the only value that cannot be wrong by coincidence.
 *
 * Every interactive test waits for networkidle first. These pages are
 * prerendered and paint complete and inert; a click before React hydrates is
 * silently swallowed (the reference cell's own suite hit this first).
 */

const TOOL = '/tools/print-crop-calculator';

test.describe('print crop calculator', () => {

  test('the control: a 3:2 photo on a 6x4 print loses nothing', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // Selected explicitly, because the page deliberately does NOT open on the
    // identity case: a tool reached from "how much does 8x10 crop" that greets
    // you with "nothing is cut" has answered a question nobody asked.
    await page.selectOption('select', '6x4');
    await expect(page.getByText('0% — this shape already matches the print, nothing is cut')).toBeVisible();
    await expect(page.getByText('1.500 : 1')).toHaveCount(2); // photo shape and print shape agree exactly
  });

  test('a second control: a square photo on a square print also loses nothing', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: '1:1 — square photos' }).click();
    await page.selectOption('select', 'square');
    await expect(page.getByText('0% — this shape already matches the print, nothing is cut')).toBeVisible();
  });

  test('3:2 on a 5x7 loses 6.7% off the sides, 0.25in each side', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.selectOption('select', '5x7');
    await expect(page.getByText('6.7% off the left and right edges — 0.25 in each side')).toBeVisible();
    await expect(page.getByText('1.400 : 1')).toBeVisible();
  });

  test('3:2 on an 8x10 loses 16.7%, matching the brief exactly', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.selectOption('select', '8x10');
    await expect(page.getByText('16.7% off the left and right edges — 1.00 in each side')).toBeVisible();
  });

  test('4:3 crops the OPPOSITE edge from 3:2 on the same 6x4 print', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: '4:3 — most phone cameras' }).click();
    await page.selectOption('select', '6x4');
    // 4:3 is narrower than 6x4's 1.5, so it loses top and bottom here — and on
    // an 8x10, which is narrower than 4:3, the same photo loses left and right.
    // One shape, two prints, opposite edges: that is the fact2 claim, and it
    // fails loudly if the axis logic is backwards.
    await expect(page.getByText('11.1% off the top and bottom edges — 0.25 in each side')).toBeVisible();
    await page.selectOption('select', '8x10');
    await expect(page.getByText(/off the left and right edges/)).toBeVisible();
  });

  test('8x10 and 10x8 are the same shape: 4:3 loses the identical 6.3% on both', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: '4:3 — most phone cameras' }).click();
    await page.selectOption('select', '8x10');
    await expect(page.getByText(/^6\.3% off/)).toBeVisible();
    await page.selectOption('select', '10x8');
    await expect(page.getByText(/^6\.3% off/)).toBeVisible();
  });

  test('switching units converts the same crop into centimetres', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.selectOption('select', '5x7');
    await expect(page.getByText('0.25 in each side')).toBeVisible();
    await page.getByRole('button', { name: 'cm', exact: true }).click();
    await expect(page.getByText('0.6 cm each side')).toBeVisible();
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

  test('renders in a non-English locale with the arithmetic intact', async ({ page }) => {
    await page.goto(`/ja${TOOL}`);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('h1')).toBeVisible();
    // Only the digits are asserted here, not the surrounding words — those
    // are prose that gets translated, and the reference cell's own /ja test
    // makes the same choice for the same reason.
    await page.selectOption('select', '8x10');
    await expect(page.getByText('1.250 : 1')).toBeVisible();
  });

});
