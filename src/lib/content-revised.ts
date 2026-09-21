/* When each section's content actually last changed.
 *
 * The sitemap used to stamp `new Date()` on all 390 URLs, so every deploy told
 * every crawler that the entire site had changed at that instant. That is
 * indistinguishable from telling it nothing — except that it costs crawl budget
 * to say, and it trains a crawler to stop believing the field.
 *
 * These are dates, not timestamps, and they are maintained BY HAND. That is the
 * point: a `lastmod` is a claim that the content changed, so it should only move
 * when someone changes the content. If you edit the ratio or platform copy in
 * seo-data.ts, bump RATIO_AND_PLATFORM in the same commit. If you do not, leave
 * it alone — a stale-but-true date is worth more than a fresh lie.
 *
 * Articles have their own per-slug dates in article-meta.ts, because they change
 * one at a time.
 */
export const CONTENT_REVISED = {
  /** The calculator itself — the app, not the copy around it. */
  home: "2026-03-08",
  /** RATIO_DATA and PLATFORM_DATA in seo-data.ts; they are edited together. */
  ratioAndPlatform: "2026-03-08",
  /** The legal pages carry their own visible effective date; keep them in step. */
  legal: "2026-03-01",
  /** About, Contact, the blog index and the developer documentation. */
  siteInfo: "2026-09-21",
} as const;
