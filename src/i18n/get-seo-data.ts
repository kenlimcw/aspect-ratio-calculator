import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

interface SeoDataModule {
  RATIO_DATA: Record<string, RatioData>;
  PLATFORM_DATA: Record<string, PlatformData>;
  ARTICLE_DATA: Record<string, ArticleData>;
}

export async function getSeoData(locale: string): Promise<SeoDataModule> {
  // Always load English as the base — provides complete data for all keys
  const enMod = await import("./seo-data/en");
  const base: SeoDataModule = {
    RATIO_DATA: enMod.RATIO_DATA,
    PLATFORM_DATA: enMod.PLATFORM_DATA,
    ARTICLE_DATA: enMod.ARTICLE_DATA,
  };

  if (locale === "en") return base;

  try {
    const mod = await import(`./seo-data/${locale}`);
    return {
      // For RATIO and PLATFORM, locale files provide complete data — use as-is
      RATIO_DATA: mod.RATIO_DATA ?? base.RATIO_DATA,
      PLATFORM_DATA: mod.PLATFORM_DATA ?? base.PLATFORM_DATA,
      // Key-level merge: locale articles override English; keys only in English
      // (e.g. newly added articles) fall back to English automatically
      ARTICLE_DATA: { ...base.ARTICLE_DATA, ...mod.ARTICLE_DATA },
    };
  } catch {
    // Locale file missing entirely — return English
    return base;
  }
}
