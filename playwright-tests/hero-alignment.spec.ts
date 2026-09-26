import { test, expect, type Page } from '@playwright/test';

/* Does the hero line up with the page underneath it?
 *
 * It did not, for five commits, and nothing caught it — not the build, not
 * tsc, not eslint, not the i18n check, and not me looking at screenshots.
 *
 * The defect: `Calculator.tsx` roots itself at `max-w-xl` (576px) inside the
 * page's `max-w-2xl` (672px), so `mx-auto` insets it 48px a side. The hero was
 * a direct child of the outer container and never had that inset, so its mark
 * sat 48px left of the tab bar, "Original Size" and every label below it.
 *
 * Why looking at it failed:
 *
 *   - Below 576px BOTH containers collapse to the gutter and the gap is 0px.
 *     A 375px screenshot cannot show this bug. Most of mine were at 375px.
 *   - At 1100px the hero sits at x=214 and the content at x=262. Every crop I
 *     took to inspect the hero started at x=230-250 — inside the gap, with the
 *     left edge cut off. The evidence was in the frame and then cropped away.
 *
 * So the assertion is not "the hero looks right", which is what I kept
 * checking. It is "the hero and the thing below it begin on the same line",
 * measured from the live DOM, at widths chosen to include the ones where the
 * two containers actually differ.
 */

/* 375 is below both caps (no inset possible), 700 and 1100 are above them.
 * A test that only ran the first would have passed throughout the bug. */
const WIDTHS = [375, 700, 1100];

async function leftEdges(page: Page) {
  return page.evaluate(() => {
    const q = (s: string) => document.querySelector(s);
    const mark = q('.hero-lockup .hero-mark');
    /* The calculator's own root, by an explicit anchor attribute.
     * My first attempt took "the first button on the page" — which is now in
     * the site header, so the test measured the header and failed everywhere.
     * A named anchor says what is being compared and survives a refactor. */
    const anchor = q('[data-calculator-root]');
    if (!mark || !anchor) return null;
    return {
      mark: mark.getBoundingClientRect().left,
      content: anchor.getBoundingClientRect().left,
    };
  });
}

test.describe('hero alignment', () => {
  for (const width of WIDTHS) {
    test(`the mark starts on the page's content edge at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      const e = await leftEdges(page);
      expect(e, 'hero mark and the calculator root must both be present').not.toBeNull();

      /* 2px, not 0: the mark is a solid shape and the control next to it is
       * a bordered box, so their antialiased edges land a subpixel apart. 48
       * is the failure this exists to catch; 2 is measurement noise. */
      expect(
        Math.abs(e!.mark - e!.content),
        `mark at ${e!.mark}, content at ${e!.content} — the hero is in a different container`,
      ).toBeLessThanOrEqual(2);
    });
  }

  test('the containers themselves agree, not just this one render', async ({ page }) => {
    await page.setViewportSize({ width: 1100, height: 900 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const widths = await page.evaluate(() => {
      const shell = document.querySelector('.hero-shell');
      const anchor = document.querySelector('[data-calculator-root]');
      return shell && anchor
        ? { shell: shell.getBoundingClientRect().width, content: anchor.getBoundingClientRect().width }
        : null;
    });
    expect(widths).not.toBeNull();
    /* Equal widths and equal left edges together mean one container, which is
     * the property that actually has to hold. */
    expect(Math.abs(widths!.shell - widths!.content)).toBeLessThanOrEqual(2);
  });
});
