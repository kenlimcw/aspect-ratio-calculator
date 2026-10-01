import { test, expect } from '@playwright/test';

/* The refusal experiment, pinned so it cannot be invalidated by accident.
 *
 * Google crawled nine English pages on 2026-09-28 and declined all nine.
 * They run 500-600 words across six identical headings, so two explanations
 * fit equally: the pages are too thin, or the domain has no reputation and
 * Google holds an unknown site to a higher bar. Those have OPPOSITE fixes —
 * rewrite everything, or write nothing and go earn links.
 *
 * /ratio/16-9 is the subject. /ratio/4-3 and /ratio/9-16 are controls: same
 * template, crawled the same day, refused the same way. If the subject flips
 * to indexed and the controls do not, thinness was the constraint.
 *
 * The experiment dies the moment somebody "improves" a control, so the
 * controls are asserted here. Deleting these tests is the honest way to end
 * it; quietly editing a control is not.
 */

const DEEP_DIVE_MARKER = 'Why 16:9 exists at all';

test.describe('refusal experiment', () => {

  const words = (page: import('@playwright/test').Page) =>
    page.evaluate(() => document.body.innerText.split(/\s+/).filter(Boolean).length);

  test('the subject is substantially bigger than its controls', async ({ page }) => {
    /* A ratio, not a magic number. Measured 2026-10-01: subject 737 words,
     * controls 360 and 339 — roughly 2x. Asserting an absolute threshold
     * would drift the first time anything unrelated is added to the layout;
     * asserting the GAP is the thing the experiment actually depends on. */
    await page.goto('/ratio/16-9');
    await expect(page.getByRole('heading', { name: DEEP_DIVE_MARKER })).toBeVisible();
    const subject = await words(page);

    await page.goto('/ratio/4-3');
    const control = await words(page);

    expect(subject / control,
      `subject ${subject} vs control ${control} — the difference IS the experiment`
    ).toBeGreaterThan(1.5);
  });

  test('the controls keep the six-heading template', async ({ page }) => {
    for (const control of ['/ratio/4-3', '/ratio/9-16']) {
      await page.goto(control);
      expect(await page.locator('h2').count(),
        `${control} must keep the template — improving a control ends the experiment`
      ).toBe(6);
      await expect(page.getByText(DEEP_DIVE_MARKER)).toHaveCount(0);
    }
  });

  test('no English leaks onto a translated page', async ({ page }) => {
    /* getSeoData merges RATIO_DATA key by key, so a locale that has its own
     * "16-9" object replaces English wholesale and never sees the new field.
     * That is what keeps the experiment English-only — and it is worth an
     * assertion, because a field-level merge would silently paste three
     * English sections onto twelve translated pages. */
    for (const locale of ['/es', '/ja']) {
      await page.goto(`${locale}/ratio/16-9`);
      await expect(page.getByText(DEEP_DIVE_MARKER)).toHaveCount(0);
    }
  });
});
