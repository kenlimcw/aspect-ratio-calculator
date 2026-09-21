"use client";

import { useTranslation } from "@/components/I18nProvider";
import { getLocaleConfig } from "@/i18n/config";

/* The search box.
 *
 * A plain GET form, deliberately: it works with no JavaScript, it is one element
 * for a crawler to understand, and the results land at a real URL that can be
 * linked, shared and read. That real endpoint is also what makes the WebSite
 * SearchAction in the schema an honest statement rather than a claim about a
 * page that does not exist.
 */
export function SiteSearch({ className = "" }: { className?: string }) {
  const { locale, t } = useTranslation();
  const prefix = getLocaleConfig(locale).urlPrefix;

  return (
    <form
      action={`${prefix}/search`}
      method="get"
      role="search"
      className={`flex items-center gap-2 w-full max-w-sm ${className}`}
    >
      <label htmlFor="site-search" className="sr-only">
        {t("searchPage", "label")}
      </label>
      <input
        id="site-search"
        type="search"
        name="q"
        placeholder={t("searchPage", "placeholder")}
        className="flex-1 min-w-0 rounded-md border border-[var(--border)] bg-transparent px-3 py-1.5 text-xs text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"
      />
      <button
        type="submit"
        className="rounded-md border border-[var(--border)] px-3 py-1.5 text-xs font-medium text-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
      >
        {t("searchPage", "submit")}
      </button>
    </form>
  );
}
