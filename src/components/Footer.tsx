"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FooterFeedbackLink } from "@/components/FooterFeedbackLink";
import { CookieSettingsLink } from "@/components/CookieConsent";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslation } from "@/components/I18nProvider";
import { SiteSearch } from "@/components/SiteSearch";
import { RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";
import { TOOL_DATA, TOOL_SLUGS } from "@/lib/tools-data";

/** Serializable SEO titles passed from server layout */
export interface FooterSeoData {
  ratioLabels: Record<string, string>;
  platformNames: Record<string, string>;
  articleTitles: Record<string, string>;
}
import { LOCALES, type LocaleConfig } from "@/i18n/config";

function getBasePath(pathname: string): string {
  for (const locale of LOCALES) {
    if (locale.code === "en") continue;
    const prefix = `/${locale.urlSegment}`;
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return pathname.slice(prefix.length) || "/";
    }
  }
  return pathname;
}

function buildLocalePath(basePath: string, locale: LocaleConfig): string {
  if (locale.code === "en") return basePath;
  return `${locale.urlPrefix}${basePath}`;
}

export function Footer({ locale: localeProp, seoData }: { locale?: string; seoData?: FooterSeoData }) {
  const { t, locale: ctxLocale } = useTranslation();
  const locale = localeProp ?? ctxLocale;
  const pathname = usePathname();
  const year = new Date().getFullYear();

  const prefix = locale === "en" ? "" : `/${LOCALES.find((l) => l.code === locale)?.urlSegment ?? locale}`;

  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      {/* Explore Navigation */}
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-xs">
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "aspectRatios")}
            </h4>
            <ul className="space-y-1.5">
              {RATIO_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${prefix}/ratio/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {seoData?.ratioLabels[slug] ?? slug} {t("common", "ratio")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "platforms")}
            </h4>
            <ul className="space-y-1.5">
              {PLATFORM_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${prefix}/platform/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {seoData?.platformNames[slug] ?? slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "guides")}
            </h4>
            <ul className="space-y-1.5">
              {ARTICLE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${prefix}/blog/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {seoData?.articleTitles[slug] ?? slug}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Tools sit in the footer, not only on the hub, because the footer is
            * the one component on every page: it is what turns six new URLs
            * from orphans into pages the crawler can reach from anywhere. */}
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "tools")}
            </h4>
            <ul className="space-y-1.5">
              {TOOL_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`${prefix}/tools/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {t(TOOL_DATA[slug].ns, "navLabel")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "language")}
            </h4>
            <ul className="space-y-1.5">
              {LOCALES.map((l) => {
                const basePath = getBasePath(pathname);
                const href = buildLocalePath(basePath, l);
                return (
                  <li key={l.code}>
                    <a
                      href={href}
                      className={`transition-colors ${
                        l.code === locale
                          ? "text-[var(--accent)] font-medium"
                          : "text-[var(--muted)] hover:text-[var(--accent)]"
                      }`}
                    >
                      {l.nativeName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright & Legal
        *
        * Three earlier attempts at this: one 536px row that scrolled the page
        * sideways, then a wrapped thicket, then three widely spaced bands that
        * left more air than content. This is the tight version — two link rows
        * and a copyright line, centred at every width.
        *
        * Centred rather than split left/right because there is not enough here
        * to justify two edges; nine short links pushed apart just read as a
        * gap. "Free tool, no sign-up required" is gone: it was marketing in a
        * legal strip, and the price is already obvious by the time anyone
        * reaches the bottom of the page.
        */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col items-center gap-3 text-xs text-[var(--muted)]">
          <SiteSearch />

          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
            aria-label={t("footer", "siteLinks")}
          >
            <Link href={`${prefix}/about`} className="hover:text-[var(--foreground)] transition-colors">
              {t("aboutPage", "title")}
            </Link>
            <Link href={`${prefix}/contact`} className="hover:text-[var(--foreground)] transition-colors">
              {t("contactPage", "title")}
            </Link>
            <Link href={`${prefix}/developers`} className="hover:text-[var(--foreground)] transition-colors">
              {t("developersPage", "title")}
            </Link>
            <a href="/openapi.json" className="hover:text-[var(--foreground)] transition-colors">
              openapi.json
            </a>
            <FooterFeedbackLink />
          </nav>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5"
            aria-label={t("footer", "legalLinks")}
          >
            <Link href={`${prefix}/terms`} className="hover:text-[var(--foreground)] transition-colors">
              {t("footer", "termsOfService")}
            </Link>
            <Link href={`${prefix}/privacy`} className="hover:text-[var(--foreground)] transition-colors">
              {t("footer", "privacyPolicy")}
            </Link>
            <CookieSettingsLink />
          </nav>

          <span className="text-center text-[var(--muted)]/80">
            {t("footer", "copyright").replace("{year}", String(year))}
          </span>
        </div>
      </div>
    </footer>
  );
}
