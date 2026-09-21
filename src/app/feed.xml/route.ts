import { ARTICLE_DATA } from "@/lib/seo-data";
import { BASE_URL } from "@/i18n/config";
import { articleDates } from "@/lib/article-meta";
import { SITE_NAME } from "@/lib/schema";

/* An RSS 2.0 feed of the articles.
 *
 * /feed, /rss.xml and /feed.xml all returned the homepage before this, because
 * the proxy skips dotted paths and [locale] accepted anything. This is the one
 * subscription surface with no platform sitting between the site and a reader,
 * and aggregators and retrieval pipelines poll feeds — none of them poll a
 * homepage.
 *
 * English only, which is the locale served at the root. Per-locale feeds are a
 * real thing to want, but an empty or machine-translated feed per language is
 * not better than one good one.
 */
export const dynamic = "force-static";

/** RFC 822, which is what RSS 2.0 requires — not ISO 8601. */
function rfc822(date: string): string {
  return new Date(`${date}T00:00:00Z`).toUTCString();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const entries = Object.entries(ARTICLE_DATA)
    .map(([slug, data]) => ({ slug, data, dates: articleDates(slug) }))
    .sort((a, b) => b.dates.published.localeCompare(a.dates.published));

  const newest = entries[0]?.dates.modified ?? "2026-03-03";

  const items = entries
    .map(({ slug, data, dates }) => {
      const url = `${BASE_URL}/blog/${slug}`;
      return `    <item>
      <title>${escapeXml(data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(data.description)}</description>
      <pubDate>${rfc822(dates.published)}</pubDate>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${BASE_URL}/blog</link>
    <description>Guides to aspect ratios for social media, video, photography and screens.</description>
    <language>en</language>
    <lastBuildDate>${rfc822(newest)}</lastBuildDate>
    <atom:link href="${BASE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
