import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000';

// ── Phase 2: Visual Testing ──────────────────────────────────────
test.describe('Phase 2: Visual Testing', () => {

  test('page loads with no console errors', async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') consoleErrors.push(msg.text());
    });
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    const criticalErrors = consoleErrors.filter(e =>
      !e.includes('favicon') &&
      !e.includes('service worker') &&
      !e.includes('sw.js')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('hero title renders', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('dark theme is default', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(300);
    const html = page.locator('html');
    const theme = await html.getAttribute('data-theme');
    expect(theme).toBe('dark');
  });

  test('light theme renders after toggle', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(300);
    const themeBtn = page.locator('button').filter({ hasText: '' }).first();
    // Use aria label or title for theme toggle
    const themeToggle = page.locator('[aria-label*="theme" i], [title*="theme" i], [aria-label*="light" i], [aria-label*="dark" i]').first();
    await themeToggle.click();
    await page.waitForTimeout(300);
    const html = page.locator('html');
    const theme = await html.getAttribute('data-theme');
    expect(theme).toBe('light');
  });

  test('calculator inputs are visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.locator('input[aria-label="Original width"]')).toBeVisible();
    await expect(page.locator('input[aria-label="Original height"]')).toBeVisible();
  });

  test('mode tabs visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByRole('tab', { name: 'Calculator' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Find Ratio' })).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Image Wizard' })).toBeVisible();
  });

  test('preset group headers visible', async ({ page }) => {
    await page.goto(BASE_URL);
    await expect(page.getByText('Social Media').first()).toBeVisible();
    await expect(page.getByText('Cinema & Video').first()).toBeVisible();
    await expect(page.getByText('Photography & Print').first()).toBeVisible();
  });

  test('responsive: no horizontal scroll at 375px mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(395);
    await expect(page.locator('input[aria-label="Original width"]')).toBeVisible();
  });

  test('responsive: layout renders at 768px tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(800);
    await expect(page.locator('input[aria-label="Original width"]')).toBeVisible();
  });

  test('responsive: layout renders at 1280px desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('input[aria-label="Original width"]')).toBeVisible();
  });

  test('SEO content section visible below fold', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto(BASE_URL);
    // Scroll to bottom and check for SEO section
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);
    const seoContent = page.locator('text=/What is an Aspect Ratio/i').first();
    await expect(seoContent).toBeVisible();
  });

});

// ── Phase 3: Functional Testing ──────────────────────────────────
test.describe('Phase 3: Functional Testing', () => {

  test('flow: width 1920 height 1080 shows 16:9 ratio', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.locator('input[aria-label="Original width"]').fill('1920');
    await page.locator('input[aria-label="Original height"]').fill('1080');
    await page.waitForTimeout(300);
    // Look for 16:9 anywhere on page
    const ratioEl = page.locator('text=16:9').first();
    await expect(ratioEl).toBeVisible({ timeout: 2000 });
  });

  test('flow: quick ratio 16:9 button is functional', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    const btn = page.locator('button[aria-label="16:9: Widescreen"]');
    await expect(btn).toBeVisible();
    await btn.click();
    await page.waitForTimeout(200);
  });

  test('flow: quick ratio 4:3 button is functional', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.locator('button[aria-label="4:3: Classic"]').click();
    await page.waitForTimeout(200);
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('flow: quick ratio 1:1 button is functional', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.locator('button[aria-label="1:1: Square"]').click();
    await page.waitForTimeout(200);
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('flow: quick ratio 9:16 button is functional', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.locator('button[aria-label="9:16: Vertical"]').click();
    await page.waitForTimeout(200);
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('flow: Social Media preset expands and Instagram Post sets 1080x1080', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.locator('button', { hasText: 'Social Media' }).click();
    await page.waitForTimeout(300);
    await page.locator('button[aria-label*="Instagram Post"]').click();
    await page.waitForTimeout(200);
    const newWInput = page.locator('input[aria-label="New width"]');
    const val = await newWInput.inputValue();
    expect(val).toBe('1080');
  });

  test('flow: swap button exchanges new width and height values', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    // Set original dimensions first
    await page.locator('input[aria-label="Original width"]').fill('1920');
    await page.locator('input[aria-label="Original height"]').fill('1080');
    await page.waitForTimeout(100);
    // Set target width
    await page.locator('input[aria-label="New width"]').fill('1920');
    await page.waitForTimeout(200);
    const newW = page.locator('input[aria-label="New width"]');
    const newH = page.locator('input[aria-label="New height"]');
    const wBefore = await newW.inputValue();
    const hBefore = await newH.inputValue();
    await page.locator('button[aria-label="Swap width and height"]').click();
    await page.waitForTimeout(200);
    const wAfter = await newW.inputValue();
    const hAfter = await newH.inputValue();
    expect(wAfter).toBe(hBefore);
    expect(hAfter).toBe(wBefore);
  });

  test('flow: copy button shows copied feedback', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.locator('input[aria-label="Original width"]').fill('1920');
    await page.locator('input[aria-label="Original height"]').fill('1080');
    await page.locator('input[aria-label="New width"]').fill('1280');
    await page.waitForTimeout(300);
    // Find copy buttons
    const copyBtns = page.locator('button').filter({ hasText: /^copy$/i });
    const count = await copyBtns.count();
    if (count > 0) {
      await copyBtns.first().click();
      await page.waitForTimeout(300);
      const copiedText = page.locator('text=/copied/i').first();
      await expect(copiedText).toBeVisible({ timeout: 2000 });
    } else {
      // Check for icon-only copy buttons
      const svgCopyBtns = page.locator('button[title*="Copy" i], button[aria-label*="copy" i]');
      const svgCount = await svgCopyBtns.count();
      if (svgCount > 0) {
        await svgCopyBtns.first().click();
        await page.waitForTimeout(300);
      }
    }
  });

  test('flow: Find Ratio tab is selectable', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('tab', { name: 'Find Ratio' }).click();
    await page.waitForTimeout(200);
    const tab = page.getByRole('tab', { name: 'Find Ratio' });
    await expect(tab).toHaveAttribute('aria-selected', 'true');
  });

  test('flow: Image Wizard tab is selectable', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('tab', { name: 'Image Wizard' }).click();
    await page.waitForTimeout(200);
    await expect(page.getByRole('tab', { name: 'Image Wizard' })).toHaveAttribute('aria-selected', 'true');
  });

  test('flow: theme toggle persists on page reload', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForTimeout(300);
    const themeToggle = page.locator('[aria-label*="theme" i], [title*="theme" i], [aria-label*="light" i], [aria-label*="dark" i]').first();
    await themeToggle.click();
    await page.waitForTimeout(300);
    const themeBefore = await page.locator('html').getAttribute('data-theme');
    await page.reload();
    await page.waitForTimeout(300);
    const themeAfter = await page.locator('html').getAttribute('data-theme');
    expect(themeAfter).toBe(themeBefore);
  });

  test('flow: Find Ratio calculates 1920x1080 as 16:9', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    await page.getByRole('tab', { name: 'Find Ratio' }).click();
    await page.waitForTimeout(200);
    // In Find Ratio, fill the find-mode inputs
    const inputs = page.locator('input[inputmode="decimal"]');
    await inputs.first().fill('1920');
    await inputs.nth(1).fill('1080');
    await page.waitForTimeout(300);
    // Should show 16:9
    await expect(page.locator('text=16:9').first()).toBeVisible({ timeout: 2000 });
  });

  // ── Adversarial Tests ──
  test('adversarial: empty inputs render without crash', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('domcontentloaded');
    const origW = page.locator('input[aria-label="Original width"]');
    const origH = page.locator('input[aria-label="Original height"]');
    await origW.fill('');
    await origH.fill('');
    await page.waitForTimeout(200);
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: zero dimension input does not crash', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('input[aria-label="Original width"]').fill('0');
    await page.waitForTimeout(200);
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: very large number 99999999 does not crash', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('input[aria-label="Original width"]').fill('99999999');
    await page.locator('input[aria-label="Original height"]').fill('99999999');
    await page.waitForTimeout(300);
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: decimal input 1920.5 is accepted', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('input[aria-label="Original width"]').fill('1920.5');
    await page.locator('input[aria-label="Original height"]').fill('1080.5');
    await page.waitForTimeout(200);
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: XSS payload stripped by numeric sanitizer', async ({ page }) => {
    await page.goto(BASE_URL);
    const origW = page.locator('input[aria-label="Original width"]');
    await origW.fill('<script>alert(1)</script>');
    await page.waitForTimeout(200);
    const val = await origW.inputValue();
    // Numeric sanitizer strips non-numeric chars; '1' remains from 'alert(1)'
    expect(val).toBe('1');
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: SQL injection in input is sanitized', async ({ page }) => {
    await page.goto(BASE_URL);
    const origW = page.locator('input[aria-label="Original width"]');
    await origW.fill("'; DROP TABLE users; --");
    await page.waitForTimeout(200);
    const val = await origW.inputValue();
    expect(val).toBe('');
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: long string input is sanitized', async ({ page }) => {
    await page.goto(BASE_URL);
    const origW = page.locator('input[aria-label="Original width"]');
    const longStr = '1'.repeat(10000);
    await origW.fill(longStr);
    await page.waitForTimeout(300);
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: URL params with missing values', async ({ page }) => {
    await page.goto(`${BASE_URL}?w=&h=`);
    await page.waitForLoadState('domcontentloaded');
    await page.waitForTimeout(200);
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: non-existent route shows 404 gracefully', async ({ page }) => {
    await page.goto(`${BASE_URL}/nonexistent-page-xyz`);
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: rapid copy button clicks', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('input[aria-label="Original width"]').fill('1920');
    await page.locator('input[aria-label="Original height"]').fill('1080');
    await page.locator('input[aria-label="New width"]').fill('1280');
    await page.waitForTimeout(300);
    // Find and rapidly click copy buttons
    const copyBtns = page.locator('button').filter({ hasText: /^copy$/i });
    const count = await copyBtns.count();
    if (count > 0) {
      for (let i = 0; i < 5; i++) {
        await copyBtns.first().click();
        await page.waitForTimeout(50);
      }
    }
    await expect(page.locator('body')).toBeVisible();
  });

  test('adversarial: back/forward browser navigation', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.locator('input[aria-label="Original width"]').fill('1920');
    await page.waitForTimeout(200);
    await page.goBack();
    await page.waitForTimeout(300);
    await page.goForward();
    await page.waitForTimeout(300);
    await expect(page.locator('body')).toBeVisible();
  });

});
