"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ArcLogo } from "@/components/ArcLogo";
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

/* Five items per column, with the toggle owned by the section.
 *
 * It was per-column first, which put five separate "More" buttons in one
 * block — five controls doing the same job, and a reader deciding five times.
 * One button under the grid opens every column at once.
 *
 * Every item stays in the DOM — the overflow is `hidden`, not absent —
 * because these links are how a crawler reaches the ratio, platform, guide,
 * tool and locale pages.
 */
function FooterList({ items, expanded, cap = 5 }: {
  items: React.ReactNode[];
  expanded: boolean;
  cap?: number;
}) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li key={i} hidden={!expanded && i >= cap}>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Footer({ locale: localeProp, seoData }: { locale?: string; seoData?: FooterSeoData }) {
  const { t, locale: ctxLocale } = useTranslation();
  const locale = localeProp ?? ctxLocale;
  const pathname = usePathname();
  const year = new Date().getFullYear();

  /* The five link columns collapse on a phone and stay open on a desktop.
   *
   * Rendered OPEN on the server, then closed after mount when the viewport is
   * narrow — not the other way round. These links are how a crawler reaches
   * the ratio, platform, guide and tool pages, which is the entire reason this
   * block exists on a site whose problem was that Google stopped crawling it;
   * shipping them inside a closed <details> is not a risk worth taking to save
   * one render. It also means a desktop never flashes.
   *
   * <details> rather than a hand-rolled accordion: keyboard, screen readers
   * and find-in-page all work without writing any of it. */
  const [open, setOpen] = useState(true);

  /* One toggle for all five columns. Five separate "More" buttons in one
   * block was five controls doing the same job and a reader deciding five
   * times. */
  const [showAll, setShowAll] = useState(false);
  /* Five rows everywhere, three in Guides. A cap counts items, and the eye
   * counts lines: a guide title wraps to two, so five of them stand twice as
   * deep as five ratios. Three brings the column back level with its
   * neighbours, which is the point of capping at all. */
  const CAP = 5;
  const CAP_GUIDES = 3;
  const hiddenCount =
    Math.max(0, RATIO_SLUGS.length - CAP) +
    Math.max(0, PLATFORM_SLUGS.length - CAP) +
    Math.max(0, ARTICLE_SLUGS.length - CAP_GUIDES) +
    Math.max(0, TOOL_SLUGS.length - CAP) +
    Math.max(0, LOCALES.length - CAP);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setOpen(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const prefix = locale === "en" ? "" : `/${LOCALES.find((l) => l.code === locale)?.urlSegment ?? locale}`;

  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      {/* Explore Navigation */}
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6 text-xs">
          <details open={open} className="footer-col">
            <summary className="footer-sum font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "aspectRatios")}
            </summary>
            <FooterList
              expanded={showAll}
              items={RATIO_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`${prefix}/ratio/${slug}`}
                  className="whitespace-nowrap text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {seoData?.ratioLabels[slug] ?? slug} {t("common", "ratio")}
                </Link>
              ))}
            />
          </details>
          <details open={open} className="footer-col">
            <summary className="footer-sum font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "platforms")}
            </summary>
            <FooterList
              expanded={showAll}
              items={PLATFORM_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`${prefix}/platform/${slug}`}
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {seoData?.platformNames[slug] ?? slug}
                </Link>
              ))}
            />
          </details>
          <details open={open} className="footer-col">
            <summary className="footer-sum font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "guides")}
            </summary>
            <FooterList
              expanded={showAll}
              cap={CAP_GUIDES}
              items={ARTICLE_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`${prefix}/blog/${slug}`}
                  /* Full titles run to three lines each — "How to Calculate
                   * Aspect Ratio: The Complete Guide". Two still identifies
                   * an article you already know the subject of. */
                  className="line-clamp-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {seoData?.articleTitles[slug] ?? slug}
                </Link>
              ))}
            />
          </details>
          {/* Tools sit in the footer, not only on the hub, because the footer is
            * the one component on every page: it is what turns six new URLs
            * from orphans into pages the crawler can reach from anywhere. */}
          <details open={open} className="footer-col">
            <summary className="footer-sum font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "tools")}
            </summary>
            <FooterList
              expanded={showAll}
              items={TOOL_SLUGS.map((slug) => (
                <Link
                  key={slug}
                  href={`${prefix}/tools/${slug}`}
                  className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                >
                  {t(TOOL_DATA[slug].ns, "navLabel")}
                </Link>
              ))}
            />
          </details>
          <details open={open} className="footer-col">
            <summary className="footer-sum font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              {t("footer", "language")}
            </summary>
            <FooterList
              expanded={showAll}
              items={LOCALES.map((l) => (
                <a
                  key={l.code}
                  href={buildLocalePath(getBasePath(pathname), l)}
                  className={`transition-colors ${
                    l.code === locale
                      ? "text-[var(--accent)] font-medium"
                      : "text-[var(--muted)] hover:text-[var(--accent)]"
                  }`}
                >
                  {l.nativeName}
                </a>
              ))}
            />
          </details>
        </div>

        {hiddenCount > 0 && (
          <div className="mt-5 flex justify-center">
            {/* A chevron, not a word. It sits under five columns that each
              * already close with one, so the same mark reading "there is more
              * below" is the consistent thing — and it needs no translation.
              * The words stay as the accessible name. */}
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              aria-expanded={showAll}
              aria-label={
                showAll ? t("footer", "less") : `${t("footer", "more")} (${hiddenCount})`
              }
              title={
                showAll ? t("footer", "less") : `${t("footer", "more")} (${hiddenCount})`
              }
              className="flex items-center justify-center rounded-full border text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
              style={{ width: 34, height: 34, borderColor: "var(--border)" }}
            >
              <ChevronDown
                size={16}
                aria-hidden
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
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
        {/* pb-24 on a phone: the Feedback widget is fixed to the bottom-left and
            * was sitting on top of the copyright line. */}
        <div className="max-w-2xl mx-auto px-4 pt-6 pb-24 sm:pb-6 flex flex-col items-center gap-3 text-xs text-[var(--muted)]">
          {/* The mark opens the closing block rather than ending it — it reads
            * as the site signing its name before the utilities, not as a
            * footnote after them. */}
          <ArcLogo
            style={{ width: 22, height: 22, color: "var(--muted)" }}
            title={`${t("homePage", "heroTitle")} ${t("homePage", "heroTitleAccent")}`}
          />
          <SiteSearch />

          {/* One row, centred. Seven short links split across two rows read
            * as two unrelated groups; together they are just "everything else
            * on this site", which is what a footer meta row is. */}
          <nav
            /* lowercase: these are utilities, not headings, and setting them
             * in lower case drops them a level without shrinking them further.
             * A transform, not rewritten strings — it leaves the translations
             * alone and is a no-op in scripts that have no case. */
            /* [&_button]:lowercase as well as lowercase: Feedback and Cookies
             * are <button>s, and a button does not inherit text-transform from
             * its parent the way the links beside it do. */
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 lowercase [&_button]:lowercase"
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
            <FooterFeedbackLink />
            <Link href={`${prefix}/terms`} className="hover:text-[var(--foreground)] transition-colors">
              {t("footer", "termsOfService")}
            </Link>
            <Link href={`${prefix}/privacy`} className="hover:text-[var(--foreground)] transition-colors">
              {t("footer", "privacyPolicy")}
            </Link>
            <CookieSettingsLink />
          </nav>

          <span className="text-center lowercase text-[var(--muted)]/80">
            {t("footer", "copyright").replace("{year}", String(year))}
          </span>
        </div>
      </div>
    </footer>
  );
}
