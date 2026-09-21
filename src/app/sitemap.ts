import type { MetadataRoute } from "next";
import { LOCALES, BASE_URL } from "@/i18n/config";
import { RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";
import { CONTENT_REVISED } from "@/lib/content-revised";
import { articleDates } from "@/lib/article-meta";

function makeLanguages(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale.hreflang] = `${BASE_URL}${locale.urlPrefix}${path}`;
  }
  languages["x-default"] = `${BASE_URL}${path}`;
  return languages;
}

/* One entry per locale for a path, carrying the date that path's content
 * actually last changed — not the time this build happened to run. */
function localizedEntries(
  path: string,
  lastModified: string,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
  priority: number,
): MetadataRoute.Sitemap {
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}${locale.urlPrefix}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates: { languages: makeLanguages(path) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { home, ratioAndPlatform, legal, siteInfo } = CONTENT_REVISED;
  return [
    ...localizedEntries("/", home, "weekly", 1.0),
    ...localizedEntries("/about", siteInfo, "yearly", 0.5),
    ...localizedEntries("/contact", siteInfo, "yearly", 0.4),
    ...localizedEntries("/developers", siteInfo, "monthly", 0.6),
    ...localizedEntries("/blog", siteInfo, "monthly", 0.6),
    ...localizedEntries("/terms", legal, "yearly", 0.3),
    ...localizedEntries("/privacy", legal, "yearly", 0.3),
    ...RATIO_SLUGS.flatMap((slug) =>
      localizedEntries(`/ratio/${slug}`, ratioAndPlatform, "monthly", 0.8)),
    ...PLATFORM_SLUGS.flatMap((slug) =>
      localizedEntries(`/platform/${slug}`, ratioAndPlatform, "monthly", 0.8)),
    // Articles change one at a time, so each carries its own date.
    ...ARTICLE_SLUGS.flatMap((slug) =>
      localizedEntries(`/blog/${slug}`, articleDates(slug).modified, "monthly", 0.7)),
  ];
}
