import type { Metadata } from "next";
import Link from "next/link";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getSeoData } from "@/i18n/get-seo-data";
import { getMessages } from "@/i18n/get-messages";
import { articleDates } from "@/lib/article-meta";
import { ORG_ID, jsonLd } from "@/lib/schema";

/* The blog index, which did not exist.
 *
 * Both the article BreadcrumbList schema and public/llms.txt already pointed at
 * /blog, so the site was telling crawlers and assistants about a page that
 * returned 404. A breadcrumb trail whose parent is missing is worse than no
 * breadcrumb: it asserts a hierarchy and then fails to produce it.
 *
 * Deliberately built from strings that are already translated into all 13
 * locales. A hand-written English intro here would render untranslated on
 * twelve of them, which trades one visibility problem for another.
 */
interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: segment } = await params;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const label = messages.blogPage?.blog ?? "Blog";

  return {
    title: `${label} — ${messages.meta?.siteTitle ?? "Aspect Ratio Calculator"}`,
    description: messages.meta?.siteDescription,
    alternates: getAlternates("/blog", localeConfig.urlPrefix),
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { locale: segment } = await params;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const seoData = await getSeoData(localeConfig.code);
  const prefix = localeConfig.urlPrefix;
  const label = messages.blogPage?.blog ?? "Blog";

  const articles = Object.entries(seoData.ARTICLE_DATA);

  // The index IS the list, so it says so in structured data rather than
  // leaving an assistant to infer the set from whatever links it happens to see.
  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${BASE_URL}${prefix}/blog`,
    name: label,
    url: `${BASE_URL}${prefix}/blog`,
    inLanguage: localeConfig.hreflang,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    publisher: { "@id": ORG_ID },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: articles.length,
      itemListElement: articles.map(([slug, data], i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${BASE_URL}${prefix}/blog/${slug}`,
        name: data.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: messages.common?.home ?? "Home",
        item: `${BASE_URL}${prefix}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: label,
        item: `${BASE_URL}${prefix}/blog`,
      },
    ],
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(listJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbJsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.common?.home ?? "Home"}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{label}</span>
        </nav>

        <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-10 tracking-tight leading-tight">
          {label}
        </h1>

        <div className="space-y-4">
          {articles.map(([slug, data]) => {
            const dates = articleDates(slug);
            return (
              <article key={slug} className="seo-card">
                <h2 className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
                  <Link
                    href={`${prefix}/blog/${slug}`}
                    className="hover:text-[var(--accent)] transition-colors"
                  >
                    {data.title}
                  </Link>
                </h2>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-3">
                  {data.description}
                </p>
                <time
                  dateTime={dates.modified}
                  className="text-[var(--muted)] text-xs"
                >
                  {new Date(dates.modified).toLocaleDateString(localeConfig.code, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
