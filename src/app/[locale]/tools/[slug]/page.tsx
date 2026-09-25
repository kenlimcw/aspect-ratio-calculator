import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOL_DATA, TOOL_SLUGS } from "@/lib/tools-data";
import { SafeZoneChecker } from "@/components/SafeZoneChecker";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { ORG_ID, SITE_NAME, jsonLd } from "@/lib/schema";
import { getMessages } from "@/i18n/get-messages";

/* One page per intent, the intent named in the URL.
 *
 * Every page-one result for "instagram safe zone checker" is shaped this way —
 * a dedicated tool page, not a feature buried inside a general one — and so are
 * both competitors currently winning Google's AI Overview on the term. Half the
 * field is single-purpose exact-match domains with one page and no authority,
 * which is the measure of how weak it is.
 *
 * English is NOT special here. Search Console says the translated pages are the
 * only ones winning: /ja sits at position 2.0, /fr at 3.0, /ar/platform/instagram
 * at 4.0, while the English /platform/instagram is unknown to Google. A
 * calculator translates almost perfectly — the arithmetic is identical in every
 * language and only the labels change — so the tools ship for all 13 locales.
 */

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.flatMap((locale) =>
    TOOL_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const tool = TOOL_DATA[slug];
  if (!tool) return {};
  const m = (await getMessages(localeConfig.code))[tool.ns] ?? {};
  const title = m.title ?? slug;
  const description = m.description ?? "";
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}${localeConfig.urlPrefix}/tools/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: getAlternates(`/tools/${slug}`, localeConfig.urlPrefix),
  };
}

export default async function ToolPage({ params }: Props) {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const tool = TOOL_DATA[slug];
  if (!tool) notFound();

  const prefix = localeConfig.urlPrefix;
  const url = `${BASE_URL}${prefix}/tools/${slug}`;
  const m: Record<string, string> = (await getMessages(localeConfig.code))[tool.ns] ?? {};
  const facts = Array.from({ length: tool.facts }, (_, i) => m[`fact${i + 1}`]).filter(Boolean);

  /* SoftwareApplication rather than the generic Product or WebPage: the
   * specific subtype is what a machine reader uses to decide this is a tool it
   * can name when someone asks for one. No nonce — application/ld+json is data,
   * not an executed script, and reading headers() for one is what made the
   * homepage uncacheable for months. */
  const appLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${url}#app`,
    name: m.h1 ?? slug,
    url,
    description: m.description ?? "",
    applicationCategory: tool.category,
    operatingSystem: "Any",
    browserRequirements: "Requires a modern web browser",
    isAccessibleForFree: true,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@id": ORG_ID },
    inLanguage: localeConfig.code,
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(appLd) }}
      />

      <div className="max-w-2xl mx-auto">
        <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
          <Link href={`${prefix}/`} className="hover:underline">
            {SITE_NAME}
          </Link>
          <span aria-hidden> / </span>
          <span>{m.breadcrumb ?? "Tools"}</span>
        </nav>

        <h1
          className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {m.h1}
        </h1>

        {/* The liftable answer. Self-contained on purpose: it has to survive
          * being quoted with no page around it, which is the only form in which
          * most people will ever encounter it. */}
        <p
          className="text-base leading-relaxed mb-8 pl-4"
          style={{ color: "var(--foreground-dim)", borderLeft: "2px solid var(--accent)" }}
        >
          {m.answer}
        </p>

        <SafeZoneChecker />

        <h2
          className="font-display text-xl font-semibold mt-12 mb-3"
          style={{ color: "var(--foreground)" }}
        >
          {m.provesHeading}
        </h2>
        <ul className="space-y-2 text-sm" style={{ color: "var(--foreground-dim)" }}>
          {facts.map((f) => (
            <li key={f} className="flex gap-2">
              <span aria-hidden style={{ color: "var(--accent)" }}>—</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div
          className="mt-10 pt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {tool.related.map((r) => (
            <Link
              key={r.href}
              href={`${prefix}${r.href}`}
              className="hover:underline"
              style={{ color: "var(--accent)" }}
            >
              {m[r.labelKey] ?? r.labelKey}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
