import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";

interface SeoDataModule {
  RATIO_DATA: Record<string, RatioData>;
  PLATFORM_DATA: Record<string, PlatformData>;
  ARTICLE_DATA: Record<string, ArticleData>;
}

export async function getSeoData(locale: string): Promise<SeoDataModule> {
  try {
    const mod = await import(`./seo-data/${locale}`);
    return {
      RATIO_DATA: mod.RATIO_DATA,
      PLATFORM_DATA: mod.PLATFORM_DATA,
      ARTICLE_DATA: mod.ARTICLE_DATA,
    };
  } catch {
    // Fallback to English
    const mod = await import("./seo-data/en");
    return {
      RATIO_DATA: mod.RATIO_DATA,
      PLATFORM_DATA: mod.PLATFORM_DATA,
      ARTICLE_DATA: mod.ARTICLE_DATA,
    };
  }
}
