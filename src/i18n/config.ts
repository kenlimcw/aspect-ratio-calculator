export interface LocaleConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
  hreflang: string;
  urlPrefix: string;
  urlSegment: string;
}

export const LOCALES: LocaleConfig[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr", hreflang: "en", urlPrefix: "", urlSegment: "en" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr", hreflang: "es", urlPrefix: "/es", urlSegment: "es" },
  { code: "pt", name: "Portuguese", nativeName: "Português", dir: "ltr", hreflang: "pt", urlPrefix: "/pt", urlSegment: "pt" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia", dir: "ltr", hreflang: "id", urlPrefix: "/id", urlSegment: "id" },
  { code: "fr", name: "French", nativeName: "Français", dir: "ltr", hreflang: "fr", urlPrefix: "/fr", urlSegment: "fr" },
  { code: "ja", name: "Japanese", nativeName: "日本語", dir: "ltr", hreflang: "ja", urlPrefix: "/ja", urlSegment: "ja" },
  { code: "zh-Hans", name: "Simplified Chinese", nativeName: "简体中文", dir: "ltr", hreflang: "zh-Hans", urlPrefix: "/zh-hans", urlSegment: "zh-hans" },
  { code: "zh-Hant", name: "Traditional Chinese", nativeName: "繁體中文", dir: "ltr", hreflang: "zh-Hant", urlPrefix: "/zh-hant", urlSegment: "zh-hant" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl", hreflang: "ar", urlPrefix: "/ar", urlSegment: "ar" },
  { code: "uk", name: "Ukrainian", nativeName: "Українська", dir: "ltr", hreflang: "uk", urlPrefix: "/uk", urlSegment: "uk" },
  { code: "pl", name: "Polish", nativeName: "Polski", dir: "ltr", hreflang: "pl", urlPrefix: "/pl", urlSegment: "pl" },
  { code: "ro", name: "Romanian", nativeName: "Română", dir: "ltr", hreflang: "ro", urlPrefix: "/ro", urlSegment: "ro" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt", dir: "ltr", hreflang: "vi", urlPrefix: "/vi", urlSegment: "vi" },
];

export const DEFAULT_LOCALE = "en";
export const LOCALE_CODES = LOCALES.map((l) => l.code);
export const LOCALE_SEGMENTS = LOCALES.map((l) => l.urlSegment);
export const NON_DEFAULT_SEGMENTS = LOCALES.filter((l) => l.code !== DEFAULT_LOCALE).map((l) => l.urlSegment);
export const BASE_URL = "https://aspect-ratio-calculator.com";

/* Join a locale prefix to a path. `/es` + `/` is `/es`, never `/es/`.
 *
 * Both callers used to interpolate `${urlPrefix}${path}` directly, which is
 * right for every path except the one that matters most. On the locale home
 * pages it produced `/es/`, and the site answers that with a 308 to `/es`.
 * The result was a canonical pointing at a URL that redirects away from the
 * page declaring it — every locale home page told Google "my real address is
 * /es/", Google followed it and was bounced back. The same concatenation put
 * the redirecting form in the sitemap and in all 14 hreflang alternates.
 *
 * Thirteen pages, and they were the locale home pages: the highest-value URLs
 * on the site after the root. Deep paths were never affected, because they
 * never end in a slash.
 *
 * English keeps its slash: it has no prefix, and `https://…com/` is the root.
 * An empty path would be a malformed URL, and the root's two spellings are
 * equivalent anyway. */
export function localeUrl(urlPrefix: string, path: string): string {
  if (path === "/") return `${BASE_URL}${urlPrefix || "/"}`;
  return `${BASE_URL}${urlPrefix}${path}`;
}

const segmentToLocaleMap: Record<string, string> = {};
for (const l of LOCALES) {
  segmentToLocaleMap[l.urlSegment] = l.code;
}

export function urlSegmentToLocale(segment: string): string | null {
  return segmentToLocaleMap[segment.toLowerCase()] ?? null;
}

export function localeToUrlSegment(code: string): string {
  const locale = LOCALES.find((l) => l.code === code);
  return locale?.urlSegment ?? "en";
}

export function getLocaleConfig(code: string): LocaleConfig {
  return LOCALES.find((l) => l.code === code) ?? LOCALES[0];
}

export function getLocaleFromSegment(segment: string): LocaleConfig {
  const code = urlSegmentToLocale(segment);
  return code ? getLocaleConfig(code) : LOCALES[0];
}
