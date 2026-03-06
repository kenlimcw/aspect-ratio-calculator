import { LOCALES, BASE_URL } from "@/i18n/config";

/**
 * Returns Next.js metadata `alternates` object for a given path.
 * Includes self-referencing canonical + all hreflang alternates + x-default.
 */
export function getAlternates(path: string, currentLocalePrefix: string) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale.hreflang] = `${BASE_URL}${locale.urlPrefix}${path}`;
  }
  languages["x-default"] = `${BASE_URL}${path}`;

  return {
    canonical: `${BASE_URL}${currentLocalePrefix}${path}`,
    languages,
  };
}
