import type { Metadata } from "next";
import Link from "next/link";
import { TOOL_DATA, TOOL_SLUGS } from "@/lib/tools-data";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getMessages } from "@/i18n/get-messages";
import { ORG_ID, SITE_NAME, jsonLd } from "@/lib/schema";

/* The hub the tool pages hang off.
 *
 * Six tool pages existed with nothing linking to them: reachable by typing the
 * URL, and by nothing else. That is a worse problem than it first looks. Google
 * finds pages by following links, and a URL that appears only in a sitemap with
 * no internal link pointing at it is the textbook shape of "Discovered —
 * currently not indexed" — which is the exact failure this whole piece of work
 * exists to fix. Shipping 78 orphan URLs onto a site that Google has already
 * stopped crawling would have made the problem worse, not better.
 *
 * So: this hub, a card per tool on the home page, and a column in the footer
 * that puts every tool one click from every page on the site.
 */

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const m = (await getMessages(localeConfig.code)).toolsPage ?? {};
  return {
    title: m.title,
    description: m.description,
    openGraph: {
      title: m.title,
      description: m.description,
      url: `${BASE_URL}${localeConfig.urlPrefix}/tools`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates: getAlternates("/tools", localeConfig.urlPrefix),
  };
}

export default async function ToolsIndex({ params }: Props) {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const m: Record<string, string> = messages.toolsPage ?? {};
  const prefix = localeConfig.urlPrefix;

  /* An ItemList so the hub is machine-readable as a collection rather than as
   * six unrelated links — the same reason each tool page carries
   * SoftwareApplication rather than generic WebPage markup. */
  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${BASE_URL}${prefix}/tools#list`,
    name: m.title,
    publisher: { "@id": ORG_ID },
    itemListElement: TOOL_SLUGS.map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE_URL}${prefix}/tools/${slug}`,
      name: (messages[TOOL_DATA[slug].ns] ?? {}).navLabel ?? slug,
    })),
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(listLd) }} />

      <div className="max-w-2xl mx-auto">
        <nav className="text-xs mb-5" style={{ color: "var(--muted)" }}>
          <Link href={`${prefix}/`} className="hover:underline">{SITE_NAME}</Link>
          <span aria-hidden> / </span>
          <span>{m.heading}</span>
        </nav>

        <h1
          className="font-display text-3xl md:text-4xl font-semibold mb-4 tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          {m.h1}
        </h1>
        <p className="text-base leading-relaxed mb-8" style={{ color: "var(--foreground-dim)" }}>
          {m.intro}
        </p>

        <ul className="space-y-3">
          {TOOL_SLUGS.map((slug) => {
            const t: Record<string, string> = messages[TOOL_DATA[slug].ns] ?? {};
            return (
              <li key={slug}>
                <Link
                  href={`${prefix}/tools/${slug}`}
                  className="block p-4 rounded-lg border transition-colors"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <span
                    className="block font-semibold mb-1"
                    style={{ color: "var(--foreground)" }}
                  >
                    {t.navLabel ?? slug}
                  </span>
                  <span className="block text-sm" style={{ color: "var(--muted)" }}>
                    {t.tagline}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
