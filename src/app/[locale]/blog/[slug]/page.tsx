import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLE_SLUGS } from "@/lib/seo-data";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getSeoData } from "@/i18n/get-seo-data";
import { getMessages } from "@/i18n/get-messages";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.flatMap((locale) =>
    ARTICLE_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const seoData = await getSeoData(localeConfig.code);
  const data = seoData.ARTICLE_DATA[slug];
  if (!data) return {};
  const alternates = getAlternates(`/blog/${slug}`, localeConfig.urlPrefix);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}${localeConfig.urlPrefix}/blog/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const seoData = await getSeoData(localeConfig.code);
  const data = seoData.ARTICLE_DATA[slug];
  if (!data) notFound();

  const bp = messages.blogPage ?? {};
  const prefix = localeConfig.urlPrefix;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: data.title,
    description: data.description,
    url: `${BASE_URL}${prefix}/blog/${slug}`,
    datePublished: "2026-01-15",
    publisher: {
      "@type": "Organization",
      name: "Aspect Ratio Calculator",
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
        name: bp.blog ?? "Blog",
        item: `${BASE_URL}${prefix}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `${BASE_URL}${prefix}/blog/${slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.common?.home ?? "Home"}
          </Link>
          <span>/</span>
          <span>{bp.blog ?? "Blog"}</span>
          <span>/</span>
          <span className="text-[var(--foreground)]">{data.title}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div className="space-y-4">
          {/* Article Sections */}
          {data.sections.map((section, index) => (
            <div key={index} className="seo-card">
              <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
                {section.heading}
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
                {section.body}
              </p>

              {section.list && section.list.length > 0 && (
                <ul className="space-y-2 mb-3">
                  {section.list.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">{"\u2192"}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="overflow-x-auto -mx-1.5 mt-3">
                  <table className="w-full text-left border-collapse seo-table">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        {section.table.headers.map((header, i) => (
                          <th key={i}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                          {row.map((cell, cellIndex) => (
                            <td
                              key={cellIndex}
                              className={
                                cellIndex === 0
                                  ? "font-medium text-[var(--foreground)]"
                                  : "text-[var(--muted)]"
                              }
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {/* Conclusion */}
          <div className="seo-card">
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {data.conclusion}
            </p>
          </div>

          {/* CTA */}
          <div className="seo-card text-center">
            <p className="text-sm text-[var(--muted)] mb-4">
              {bp.readyToPractice ?? "Ready to put this into practice?"}
            </p>
            <Link
              href={`${prefix}/`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
            >
              {bp.tryCalculator ?? "Try the Free Aspect Ratio Calculator \u2192"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
