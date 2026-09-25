/* Publication dates for the articles.
 *
 * These were `datePublished: "2026-01-15"` hardcoded on the template, so all six
 * articles claimed one date and none of them was the right one. The dates below
 * are the commit dates on which each article actually entered the repository.
 *
 * A `modified` date is a claim that the content changed. Bumping it on a build
 * or a translation pass is how a site teaches crawlers to stop believing its
 * dates, so it moves when the English words move, and not otherwise. A
 * translation is not a content change: the article did not say anything new.
 *
 * All six original articles gained a first-hand section on 2026-09-23, which is
 * why their `modified` no longer equals `published`. That is the discipline
 * working, not drifting.
 *
 * This rule is enforced, not merely described: `npm run check:lastmod` fails the
 * build when an article's English content moves without its date, and when a
 * date moves without the content. A comment is prose; the check is the rail.
 */
export interface ArticleDates {
  published: string;
  modified: string;
}

const D = (published: string, modified: string = published): ArticleDates => ({ published, modified });

export const ARTICLE_DATES: Record<string, ArticleDates> = {
  "what-is-aspect-ratio": D("2026-03-03", "2026-09-23"),
  "how-to-calculate-aspect-ratio": D("2026-03-03", "2026-09-23"),
  "aspect-ratio-social-media-guide-2026": D("2026-03-03", "2026-09-23"),
  "16-9-vs-4-3-aspect-ratio": D("2026-03-03", "2026-09-23"),
  "how-to-resize-image-without-losing-quality": D("2026-03-03", "2026-09-23"),
  "install-aspect-ratio-calculator": D("2026-03-08", "2026-09-23"),
};

/** Falls back to the earliest real publication date rather than to "today":
 *  an unknown date must never render as fresh. */
export function articleDates(slug: string): ArticleDates {
  return ARTICLE_DATES[slug] ?? D("2026-03-03");
}
