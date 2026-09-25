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

      {/* Copyright & Legal */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <span>{t("footer", "copyright").replace("{year}", String(year))}</span>
          <SiteSearch className="mb-4 sm:mb-0 sm:me-auto" />
          <nav className="flex items-center gap-4" aria-label="Site information">
            <Link
              href={`${prefix}/about`}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {t("aboutPage", "title")}
            </Link>
            <Link
              href={`${prefix}/contact`}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {t("contactPage", "title")}
            </Link>
            <Link
              href={`${prefix}/developers`}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {t("developersPage", "title")}
            </Link>
            <a
              href="/openapi.json"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              openapi.json
            </a>
            <span className="text-[var(--border)]">&middot;</span>
            <Link
              href={`${prefix}/terms`}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {t("footer", "termsOfService")}
            </Link>
            <Link
              href={`${prefix}/privacy`}
              className="hover:text-[var(--foreground)] transition-colors"
            >
              {t("footer", "privacyPolicy")}
            </Link>
            <span className="text-[var(--border)]">&middot;</span>
            <CookieSettingsLink />
            <span className="text-[var(--border)]">&middot;</span>
            <FooterFeedbackLink />
            <span className="text-[var(--border)]">&middot;</span>
            <span>{t("footer", "freeTool")}</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
