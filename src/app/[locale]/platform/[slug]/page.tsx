import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLATFORM_SLUGS } from "@/lib/seo-data";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getSeoData } from "@/i18n/get-seo-data";
import { getMessages } from "@/i18n/get-messages";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return LOCALE_SEGMENTS.flatMap((locale) =>
    PLATFORM_SLUGS.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const seoData = await getSeoData(localeConfig.code);
  const data = seoData.PLATFORM_DATA[slug];
  if (!data) return {};
  const alternates = getAlternates(`/platform/${slug}`, localeConfig.urlPrefix);
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${BASE_URL}${localeConfig.urlPrefix}/platform/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
    alternates,
  };
}

export default async function PlatformPage({ params }: Props) {
  const { locale: localeSegment, slug } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const seoData = await getSeoData(localeConfig.code);
  const data = seoData.PLATFORM_DATA[slug];
  if (!data) notFound();

  const pp = messages.platformPage ?? {};
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
        name: `${data.name} ${pp.imageSizes ?? "Image Sizes"}`,
        item: `${BASE_URL}${prefix}/platform/${slug}`,
      },
    ],
  };

  // Get other platforms for cross-linking (exclude current)
  const otherPlatforms = PLATFORM_SLUGS.filter((s) => s !== slug);

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
          <span className="text-[var(--foreground)]">{data.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            <span className="text-[var(--accent)]">{data.name}</span> {pp.imageSizes ?? "Image Sizes"}{" "}
            {pp.aspectRatios ?? "& Aspect Ratios"}{" "}
            <span className="text-[var(--muted)] font-normal text-2xl">(2026)</span>
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6">
            {data.intro}
          </p>
          <Link
            href={`${prefix}/`}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
          >
            {pp.openCalculator ?? "Open Aspect Ratio Calculator \u2192"}
          </Link>
        </div>

        <div className="space-y-4">
          {/* Formats Table */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              {(pp.allSizes ?? "All {name} Image & Video Sizes").replace("{name}", data.name)}
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>{pp.tableFormat ?? "Format"}</th>
                    <th>{pp.tableDimensions ?? "Dimensions"}</th>
                    <th>{pp.tableRatio ?? "Ratio"}</th>
                    <th>{pp.tableNotes ?? "Notes"}</th>
                  </tr>
                </thead>
                <tbody>
                  {data.formats.map((fmt) => (
                    <tr key={fmt.type}>
                      <td className="font-medium text-[var(--foreground)]">{fmt.type}</td>
                      <td className="font-mono text-[var(--accent)]">
                        {fmt.width} {"\u00d7"} {fmt.height}
                      </td>
                      <td className="font-mono text-[var(--foreground-dim)]">{fmt.ratio}</td>
                      <td className="text-[var(--muted)]">{fmt.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Tips */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {(pp.imageTips ?? "{name} Image Tips").replace("{name}", data.name)}
            </h2>
            <ul className="space-y-2">
              {data.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">{"\u2713"}</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              {pp.faq ?? "Frequently Asked Questions"}
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

          {/* Aspect Ratios Used by This Platform */}
          {data.relatedRatios.length > 0 && (
            <div className="seo-card">
              <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
                {(pp.ratiosUsedBy ?? "Aspect Ratios Used by {name}").replace("{name}", data.name)}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.relatedRatios.map((rs) => {
                  const ratio = seoData.RATIO_DATA[rs];
                  if (!ratio) return null;
                  return (
                    <Link
                      key={rs}
                      href={`${prefix}/ratio/${rs}`}
                      className="px-3 py-1.5 text-sm font-mono rounded-md border border-[var(--border)] text-[var(--foreground-dim)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
                    >
                      {ratio.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Other Platforms */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pp.otherPlatforms ?? "Other Platform Guides"}
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherPlatforms.map((ps) => {
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

          {/* CTA */}
          <div className="seo-card text-center">
            <p className="text-sm text-[var(--muted)] mb-2">
              {data.description}
            </p>
            <Link
              href={`${prefix}/`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors mt-4"
            >
              {pp.openCalculator ?? "Free Aspect Ratio Calculator \u2192"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
