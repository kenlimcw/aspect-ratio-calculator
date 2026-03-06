import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RATIO_SLUGS } from "@/lib/seo-data";
import { RatioCalculator } from "@/components/RatioCalculator";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getSeoData } from "@/i18n/get-seo-data";
import { getMessages } from "@/i18n/get-messages";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.flatMap((locale) =>
    RATIO_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const seoData = await getSeoData(localeConfig.code);
  const data = seoData.RATIO_DATA[slug];
  if (!data) return {};
  const alternates = getAlternates(`/ratio/${slug}`, localeConfig.urlPrefix);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}${localeConfig.urlPrefix}/ratio/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates,
  };
}

export default async function RatioPage({ params }: Props) {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const seoData = await getSeoData(localeConfig.code);
  const data = seoData.RATIO_DATA[slug];
  if (!data) notFound();

  const rp = messages.ratioPage ?? {};
  const prefix = localeConfig.urlPrefix;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: messages.common?.home ?? "Home",
        item: `${BASE_URL}${prefix}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${data.label} ${rp.aspectRatio ?? "Aspect Ratio"}`,
        item: `${BASE_URL}${prefix}/ratio/${slug}`,
      },
    ],
  };

  const calcUrl = `${prefix}/?rw=${data.w}&rh=${data.h}&mode=scale`;
  const paddingBottom = ((data.h / data.w) * 100).toFixed(4);

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
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
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.meta?.siteTitle ?? "Aspect Ratio Calculator"}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{data.label}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {data.label}{" "}
            <span className="text-[var(--accent)]">{rp.aspectRatio ?? "Aspect Ratio"}</span>
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6">
            {data.explanation}
          </p>

          {/* Inline calculator locked to this ratio */}
          <RatioCalculator w={data.w} h={data.h} label={data.label} calcUrl={calcUrl} />
        </div>

        <div className="space-y-4">
          {/* Common Dimensions */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              {(rp.commonDimensions ?? "Common {label} Dimensions").replace("{label}", data.label)}
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>{rp.tableName ?? "Name"}</th>
                    <th>{rp.tableWidth ?? "Width"}</th>
                    <th>{rp.tableHeight ?? "Height"}</th>
                    <th>{rp.tableCommonUse ?? "Common Use"}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.dimensions.map((dim) => (
                    <tr key={dim.name}>
                      <td className="font-medium text-[var(--foreground)]">{dim.name}</td>
                      <td className="font-mono text-[var(--accent)]">{dim.width.toLocaleString()}</td>
                      <td className="font-mono text-[var(--foreground-dim)]">{dim.height.toLocaleString()}</td>
                      <td className="text-[var(--muted)]">{dim.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Use Cases */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {(rp.whereUsed ?? "Where is {label} Used?").replace("{label}", data.label)}
            </h2>
            <ul className="space-y-2">
              {data.useCases.map((use) => (
                <li key={use} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">{"\u2192"}</span>
                  {use}
                </li>
              ))}
            </ul>
          </div>

          {/* CSS Code Snippet */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {(rp.cssFor ?? "CSS for {label}").replace("{label}", data.label)}
            </h2>
            <p className="text-sm text-[var(--muted)] mb-3">
              {(rp.paddingBottomTrick ?? "Use these CSS snippets to enforce the {label} ratio on any element:").replace("{label}", data.label)}
            </p>
            <div className="space-y-2">
              <div className="rounded-md bg-[var(--background)] border border-[var(--border)] p-3">
                <p className="text-xs text-[var(--muted)] mb-1">Modern (CSS aspect-ratio)</p>
                <code className="font-mono text-sm text-[var(--accent)]">
                  aspect-ratio: {data.cssValue};
                </code>
              </div>
              <div className="rounded-md bg-[var(--background)] border border-[var(--border)] p-3">
                <p className="text-xs text-[var(--muted)] mb-1">Legacy (padding-bottom hack)</p>
                <code className="font-mono text-sm text-[var(--accent)]">
                  padding-bottom: {paddingBottom}%;
                </code>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              {rp.faq ?? "Frequently Asked Questions"}
            </h2>
            <div className="space-y-3">
              {data.faq.map((item) => (
                <details
                  key={item.q}
                  className="group border border-[var(--border)] rounded-lg overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-3 px-4 py-3 cursor-pointer text-sm font-medium text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors list-none">
                    {item.q}
                    <span className="text-[var(--accent)] flex-shrink-0 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-4 pb-4 pt-2 text-sm text-[var(--muted)] leading-relaxed border-t border-[var(--border)]">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </div>

          {/* Related Ratios */}
          {data.relatedRatios.length > 0 && (
            <div className="seo-card">
              <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
                {rp.relatedRatios ?? "Related Aspect Ratios"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.relatedRatios.map((rs) => {
                  const related = seoData.RATIO_DATA[rs];
                  if (!related) return null;
                  return (
                    <Link
                      key={rs}
                      href={`${prefix}/ratio/${rs}`}
                      className="px-3 py-1.5 text-sm font-mono rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {related.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Platforms Using This Ratio */}
          {data.relatedPlatforms.length > 0 && (
            <div className="seo-card">
              <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
                {(rp.platformsUsing ?? "Platforms Using {label}").replace("{label}", data.label)}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.relatedPlatforms.map((ps) => {
                  const platform = seoData.PLATFORM_DATA[ps];
                  if (!platform) return null;
                  return (
                    <Link
                      key={ps}
                      href={`${prefix}/platform/${ps}`}
                      className="px-3 py-1.5 text-sm rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {platform.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="seo-card text-center">
            <p className="text-sm text-[var(--muted)] mb-4">
              {(rp.readyToCalculate ?? "Ready to calculate {label} dimensions? Our free calculator handles any width or height instantly.").replace("{label}", data.label)}
            </p>
            <Link
              href={calcUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
            >
              {(rp.useCalculator ?? "Use the {label} Calculator").replace("{label}", data.label)} {"\u2192"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
