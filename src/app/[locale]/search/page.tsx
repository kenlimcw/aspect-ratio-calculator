import type { Metadata } from "next";
import Link from "next/link";
import { LOCALE_SEGMENTS, getLocaleFromSegment } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getMessages } from "@/i18n/get-messages";
import { getSeoData } from "@/i18n/get-seo-data";
import { SiteSearch } from "@/components/SiteSearch";

/* Search across the catalogue.
 *
 * 377 pages across fourteen ratios, seven platforms and six guides is enough
 * that "find me 4:5" should not mean scrolling the homepage. It runs on the
 * server over the same data the pages are built from, so there is no index to
 * fall out of date and nothing to ship to the browser.
 *
 * Deliberately `noindex`: a search results page is thin, infinitely variable and
 * exactly what Google's own guidance says to keep out of an index. It exists for
 * people and for the SearchAction, not to be a page in its own right.
 */
interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: segment } = await params;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const sp = messages.searchPage ?? {};

  return {
    title: `${sp.heading ?? "Search"} — ${messages.meta?.siteTitle ?? "Aspect Ratio Calculator"}`,
    robots: { index: false, follow: true },
    alternates: getAlternates("/search", localeConfig.urlPrefix),
  };
}

interface Hit {
  url: string;
  title: string;
  description: string;
}

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale: segment } = await params;
  const { q } = await searchParams;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const seoData = await getSeoData(localeConfig.code);
  const sp = messages.searchPage ?? {};
  const prefix = localeConfig.urlPrefix;

  const query = (q ?? "").trim();
  // Fold the separators people actually type: 16:9, 16x9, 16/9 and 16-9 are one
  // query, and the slug is written with a dash.
  const needle = query.toLowerCase().replace(/[:x/]/g, "-");

  const matches = (...fields: (string | undefined)[]) =>
    needle.length > 0 &&
    fields.some((f) => (f ?? "").toLowerCase().replace(/[:x/]/g, "-").includes(needle));

  const ratios: Hit[] = Object.entries(seoData.RATIO_DATA)
    .filter(([slug, d]) => matches(slug, d.label, d.title, d.explanation))
    .map(([slug, d]) => ({
      url: `${prefix}/ratio/${slug}`,
      title: `${d.label} — ${d.title.split("—")[1]?.trim() ?? d.title}`,
      description: d.description,
    }));

  const platforms: Hit[] = Object.entries(seoData.PLATFORM_DATA)
    .filter(([slug, d]) => matches(slug, d.name, d.title, d.description))
    .map(([slug, d]) => ({
      url: `${prefix}/platform/${slug}`,
      title: d.name,
      description: d.description,
    }));

  const guides: Hit[] = Object.entries(seoData.ARTICLE_DATA)
    .filter(([slug, d]) => matches(slug, d.title, d.description, d.intro))
    .map(([slug, d]) => ({
      url: `${prefix}/blog/${slug}`,
      title: d.title,
      description: d.description,
    }));

  const total = ratios.length + platforms.length + guides.length;
  const groups: [string, Hit[]][] = [
    [sp.groupRatios ?? "Aspect ratios", ratios],
    [sp.groupPlatforms ?? "Platforms", platforms],
    [sp.groupGuides ?? "Guides", guides],
  ];

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.common?.home ?? "Home"}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{sp.title ?? "Search"}</span>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-6 tracking-tight leading-tight">
          {sp.heading ?? "Search"}
        </h1>

        <div className="mb-8">
          <SiteSearch />
        </div>

        {query === "" ? (
          <p className="text-[var(--muted)] text-sm">{sp.emptyPrompt}</p>
        ) : total === 0 ? (
          <p className="text-[var(--muted)] text-sm">
            {(sp.noResults ?? "Nothing matched “{query}”.").replace("{query}", query)}
          </p>
        ) : (
          <>
            <p className="text-[var(--muted)] text-sm mb-6">
              {(sp.resultsFor ?? "Results for “{query}”").replace("{query}", query)}
              {" · "}
              {(sp.count ?? "{count} found").replace("{count}", String(total))}
            </p>

            <div className="space-y-8">
              {groups
                .filter(([, hits]) => hits.length > 0)
                .map(([label, hits]) => (
                  <section key={label}>
                    <h2 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-3">
                      {label}
                    </h2>
                    <div className="space-y-3">
                      {hits.map((hit) => (
                        <article key={hit.url} className="seo-card">
                          <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">
                            <Link
                              href={hit.url}
                              className="hover:text-[var(--accent)] transition-colors"
                            >
                              {hit.title}
                            </Link>
                          </h3>
                          <p className="text-[var(--muted)] text-xs leading-relaxed">
                            {hit.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </section>
                ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
}
