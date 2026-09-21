/* Publication dates for the articles.
 *
 * These were `datePublished: "2026-01-15"` hardcoded on the template, so all six
 * articles claimed one date and none of them was the right one. The dates below
 * are the commit dates on which each article actually entered the repository.
 *
 * `modified` equals `published` for every article, because none has been
 * substantively rewritten since. That is the whole discipline: a modified date
 * is a claim that the content changed, and bumping it on a build or a
 * translation pass is how a site teaches crawlers to stop believing its dates.
 * Change `modified` when you change the words, and not otherwise.
 */
export interface ArticleDates {
  published: string;
  modified: string;
}

const D = (published: string, modified: string = published): ArticleDates => ({ published, modified });

export const ARTICLE_DATES: Record<string, ArticleDates> = {
  "what-is-aspect-ratio": D("2026-03-03"),
  "how-to-calculate-aspect-ratio": D("2026-03-03"),
  "aspect-ratio-social-media-guide-2026": D("2026-03-03"),
  "16-9-vs-4-3-aspect-ratio": D("2026-03-03"),
  "how-to-resize-image-without-losing-quality": D("2026-03-03"),
  "install-aspect-ratio-calculator": D("2026-03-08"),
};

/** Falls back to the earliest real publication date rather than to "today":
 *  an unknown date must never render as fresh. */
export function articleDates(slug: string): ArticleDates {
  return ARTICLE_DATES[slug] ?? D("2026-03-03");
}
