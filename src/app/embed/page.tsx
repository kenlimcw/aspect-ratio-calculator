import type { Metadata } from "next";
import { I18nProvider } from "@/components/I18nProvider";
import { EmbedCalculator } from "@/components/EmbedCalculator";
import { getMessages } from "@/i18n/get-messages";
import { DEFAULT_LOCALE, getLocaleConfig, urlSegmentToLocale } from "@/i18n/config";

/* The embeddable widget.
 *
 * Deliberately OUTSIDE the [locale] segment. Putting it under [locale] would
 * mint thirteen more URLs on a site whose measured problem is that Google
 * indexes six of five hundred and thirty-three. One route, a `lang` parameter,
 * and it never enters the sitemap.
 *
 * noindex for the same reason, and because its content duplicates the home
 * page's calculator. The widget's job is to be framed on other people's sites
 * and send a credit back — not to rank.
 *
 * Framing is allowed here and nowhere else: `vercel.json` withholds
 * X-Frame-Options from this path and `src/proxy.ts` sets `frame-ancestors *`
 * for it alone. Both halves are required; either on its own still blocks it.
 */

export const metadata: Metadata = {
  title: "Aspect Ratio Calculator — embeddable widget",
  robots: { index: false, follow: false },
};

function clampDim(raw: string | undefined, fallback: number): number {
  const n = Number(raw);
  /* A host controls these values through the iframe URL, so they are
   * untrusted input even though nothing here touches a database. Bound them
   * to something a dimension can plausibly be. */
  if (!Number.isFinite(n) || !Number.isInteger(n) || n < 1 || n > 1_000_000) return fallback;
  return n;
}

export default async function EmbedPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const one = (k: string) => (Array.isArray(sp[k]) ? sp[k][0] : sp[k]) as string | undefined;

  const locale = urlSegmentToLocale((one("lang") ?? "").toLowerCase()) ?? DEFAULT_LOCALE;
  const cfg = getLocaleConfig(locale);
  const messages = await getMessages(locale);

  const w = clampDim(one("w"), 1920);
  const h = clampDim(one("h"), 1080);

  /* `theme=light` opts out of the site's dark default. The attribute is what
   * globals.css keys its light overrides on. */
  const theme = one("theme") === "light" ? "light" : "dark";

  return (
    <div data-theme={theme} dir={cfg.dir} lang={cfg.hreflang}
         className="bg-[var(--background)] text-[var(--foreground)]">
      <I18nProvider locale={locale} dir={cfg.dir} messages={messages}>
        <EmbedCalculator initialW={w} initialH={h} />
      </I18nProvider>
    </div>
  );
}
