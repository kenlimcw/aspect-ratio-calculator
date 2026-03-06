import type { MetadataRoute } from "next";
import { LOCALES, BASE_URL } from "@/i18n/config";
import { RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";

function makeLanguages(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale.hreflang] = `${BASE_URL}${locale.urlPrefix}${path}`;
  }
  languages["x-default"] = `${BASE_URL}${path}`;
  return languages;
}

function localizedEntries(
  path: string,
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
  priority: number,
): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return LOCALES.map((locale) => ({
    url: `${BASE_URL}${locale.urlPrefix}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
    alternates: { languages: makeLanguages(path) },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...localizedEntries("/", "weekly", 1.0),
    ...localizedEntries("/terms", "yearly", 0.3),
    ...localizedEntries("/privacy", "yearly", 0.3),
    ...RATIO_SLUGS.flatMap((slug) => localizedEntries(`/ratio/${slug}`, "monthly", 0.8)),
    ...PLATFORM_SLUGS.flatMap((slug) => localizedEntries(`/platform/${slug}`, "monthly", 0.8)),
    ...ARTICLE_SLUGS.flatMap((slug) => localizedEntries(`/blog/${slug}`, "monthly", 0.7)),
  ];
}
