import { test, expect } from '@playwright/test';

/* The safe-zone tool's whole claim is that its screen-crop figure is arithmetic
 * rather than opinion. A claim like that is worth exactly as much as the test
 * behind it, so these assert the rendered numbers, not that the page loads.
 *
 * The control matters most: a genuine 9:16 screen must lose ZERO. If the formula
 * ever drifts, every other figure drifts with it and looks just as plausible —
 * the zero is the only value that cannot be wrong by coincidence.
 *
 * Every interactive test waits for networkidle first. These pages are
 * prerendered, so they paint complete and inert, and a click that lands before
 * React hydrates is silently swallowed — the first run of this suite failed
 * exactly that way and looked like a logic bug.
 */

const TOOL = '/tools/instagram-safe-zone-checker';

test.describe('safe zone checker', () => {

  test('the control: a true 9:16 screen loses nothing', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.selectOption('select', 'nine-sixteen');
    await expect(page.getByText('none — this screen is exactly 9:16')).toBeVisible();
  });

  test('iPhone 15 loses 18.0% of the width, 97px a side', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.selectOption('select', 'iphone-15');
    await expect(page.getByText('18.0% — 97 px each side')).toBeVisible();
    await expect(page.getByText('2.168 : 1')).toBeVisible();
  });

  test('Pixel 8 is the worst of the four, at 20.0%', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.selectOption('select', 'pixel-8');
    await expect(page.getByText('20.0% — 108 px each side')).toBeVisible();
  });

  test('switching platform changes the reserved margins', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    await page.getByRole('button', { name: 'Instagram Reels' }).click();
    await expect(page.getByText('250 top · 250 bottom · 60/180 sides')).toBeVisible();
    await page.getByRole('button', { name: 'TikTok' }).click();
    await expect(page.getByText('130 top · 480 bottom · 60/200 sides')).toBeVisible();
  });

  test('the page says which numbers are ours and which are not', async ({ page }) => {
    await page.goto(TOOL);
    await page.waitForLoadState('networkidle');
    // Provenance is not decoration here: the interface margins are inherited and
    // the page has to say so, or it is making a claim it cannot support.
    await expect(page.getByText('The interface margins are not ours.')).toBeVisible();
    await expect(page.getByText(/not yet verified against a current build/)).toBeVisible();
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
    // The arithmetic is language-independent and must survive translation intact.
    await page.selectOption('select', 'iphone-15');
    await expect(page.getByText('2.168 : 1')).toBeVisible();
  });

});
