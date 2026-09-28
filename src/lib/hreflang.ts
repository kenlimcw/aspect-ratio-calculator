import { LOCALES, localeUrl } from "@/i18n/config";

/**
 * Returns Next.js metadata `alternates` object for a given path.
 * Includes self-referencing canonical + all hreflang alternates + x-default.
 *
 * Every URL goes through `localeUrl`, which is the only place that knows a
 * locale prefix and a bare "/" must not be concatenated — see the note there.
 */
export function getAlternates(path: string, currentLocalePrefix: string) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale.hreflang] = localeUrl(locale.urlPrefix, path);
  }
  languages["x-default"] = localeUrl("", path);

  return {
    canonical: localeUrl(currentLocalePrefix, path),
    languages,
  };
}
