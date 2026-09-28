import { test, expect } from '@playwright/test';

/* The footer's Language column is the only place on the site where a reader
 * can change language, and for the whole life of the i18n build every link in
 * it was dead on English pages: /es/en/tools, /pt/en/tools, and so on.
 *
 * It survived because nothing ever followed one. The links rendered, they
 * looked plausible, and the pages they pointed at returned a styled 404 rather
 * than an error anyone would notice. So this test follows them.
 *
 * Checked on an English page AND a prefixed one. The bug existed only on
 * English — the prefixed locales strip their own segment correctly — so a
 * suite that tested Spanish alone would have passed throughout. */

const LOCALE_HREF = /^\/(es|pt|id|fr|ja|zh-hans|zh-hant|de|ru|ar|ko)(\/|$)/;

for (const page of ['/', '/tools']) {
  test(`footer language links resolve on ${page}`, async ({ page: p, baseURL }) => {
    await p.goto(page);

    const hrefs = await p.locator('footer a').evaluateAll((as) =>
      as.map((a) => a.getAttribute('href')).filter((h): h is string => !!h)
    );
    const localeLinks = hrefs.filter((h) => LOCALE_HREF.test(h));

    /* If the column ever stops rendering, an empty list must not read as a
     * pass — that is exactly how a link check quietly stops checking. */
    expect(localeLinks.length, 'footer should offer other languages').toBeGreaterThanOrEqual(5);

    /* The shape assertion catches the original defect directly: no locale link
     * may carry a second locale segment after the first. */
    for (const href of localeLinks) {
      expect(href, `${href} has a doubled locale segment`).not.toMatch(
        /^\/[a-z-]+\/(en|es|pt|id|fr|ja|zh-hans|zh-hant|de|ru|ar|ko)(\/|$)/
      );
    }

    /* And then actually fetch them, because a well-formed URL that 404s is
     * still a dead link. */
    for (const href of localeLinks.slice(0, 6)) {
      const res = await p.request.get(new URL(href, baseURL).toString());
      expect(res.status(), `${href} should not 404`).toBeLessThan(400);
    }
  });
}

test('English page does not leak the internal /en segment', async ({ page }) => {
  await page.goto('/tools');
  const hrefs = await page.locator('footer a').evaluateAll((as) =>
    as.map((a) => a.getAttribute('href') ?? '')
  );
  /* /en is the rewrite target, never a public URL. Its appearance in rendered
   * markup means the internal path escaped into a link. */
  expect(hrefs.filter((h) => /^\/en(\/|$)/.test(h))).toEqual([]);
});
