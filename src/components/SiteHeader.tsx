"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { ArcLogo } from "@/components/ArcLogo";
import { useTranslation } from "@/components/I18nProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getLocaleConfig } from "@/i18n/config";

/* The site header — which this site did not have.
 *
 * Until now the only sitewide chrome was a floating language switcher and the
 * footer, and the site search lived INSIDE the footer. So on a tool page or an
 * article there was no persistent route anywhere: you scrolled to the bottom,
 * or you used the back button. With six tools that is survivable. With the
 * tools and guides now planned it is not, and every page added makes it worse.
 *
 * Three jobs, and no more than three: say where you are, offer the three
 * shelves, and put search one tap away instead of one scroll away. The search
 * control is the existing GET form's endpoint — a link to /search rather than a
 * second input — so there is still exactly one search implementation.
 */

const SHELVES = [
  { href: "/tools", key: "navTools" },
  { href: "/blog", key: "navGuides" },
  { href: "/ratio/16-9", key: "navReference", match: ["/ratio", "/platform"] },
] as const;

export function SiteHeader() {
  const { t, locale } = useTranslation();
  const prefix = getLocaleConfig(locale).urlPrefix;
  const pathname = usePathname() ?? "";

  const isOn = (href: string, match?: readonly string[]) => {
    const here = prefix ? pathname.slice(prefix.length) || "/" : pathname;
    return (match ?? [href]).some((m) => here === m || here.startsWith(m + "/"));
  };

  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-md"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--background) 86%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-5xl items-center gap-1 px-4" style={{ minHeight: 56 }}>
        <Link
          href={`${prefix}/`}
          className="flex shrink-0 items-center gap-2 py-2 pe-2"
          style={{ color: "var(--foreground)" }}
        >
          {/* 22px: under the ~28px floor where the inner letters resolve, so the
            * wordmark carries the name and the mark carries recognition. */}
          <ArcLogo style={{ width: 22, height: 22, color: "var(--accent)" }} />
          <span className="hidden font-display text-base font-semibold tracking-tight sm:inline sm:text-lg">
            {t("homePage", "heroTitle")}{" "}
            <span style={{ color: "var(--accent)" }}>{t("homePage", "heroTitleAccent")}</span>
          </span>
        </Link>

        <nav
          className="ms-auto flex items-center gap-0.5 overflow-x-auto"
          aria-label={t("siteNav", "label")}
          style={{ scrollbarWidth: "none" }}
        >
          {SHELVES.map(({ href, key, ...rest }) => {
            const on = isOn(href, "match" in rest ? rest.match : undefined);
            return (
              <Link
                key={key}
                href={`${prefix}${href}`}
                aria-current={on ? "page" : undefined}
                className="whitespace-nowrap rounded-lg px-2.5 py-2 text-sm transition-colors sm:px-3"
                style={{
                  color: on ? "var(--accent)" : "var(--muted)",
                  background: on ? "var(--accent-glow)" : "transparent",
                }}
              >
                {t("siteNav", key)}
              </Link>
            );
          })}
          <Link
            href={`${prefix}/search`}
            aria-label={t("searchPage", "label")}
            title={t("searchPage", "label")}
            className="flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--muted)", minWidth: 44, minHeight: 44 }}
          >
            <Search size={18} aria-hidden />
          </Link>
          <ThemeToggle />
          <LanguageSwitcher />
        </nav>
      </div>
    </header>
  );
}
