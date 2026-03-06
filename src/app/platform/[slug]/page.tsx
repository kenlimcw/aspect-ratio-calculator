import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PLATFORM_DATA, PLATFORM_SLUGS, RATIO_DATA } from "@/lib/seo-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PLATFORM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = PLATFORM_DATA[slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://aspect-ratio-calculator.com/platform/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const data = PLATFORM_DATA[slug];
  if (!data) notFound();

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
        name: "Home",
        item: "https://aspect-ratio-calculator.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${data.name} Image Sizes`,
        item: `https://aspect-ratio-calculator.com/platform/${slug}`,
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
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{data.name}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            <span className="text-[var(--accent)]">{data.name}</span> Image Sizes{" "}
            &amp; Aspect Ratios{" "}
            <span className="text-[var(--muted)] font-normal text-2xl">(2026)</span>
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6">
            {data.intro}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
          >
            Open Aspect Ratio Calculator →
          </Link>
        </div>

        <div className="space-y-4">
          {/* Formats Table */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              All {data.name} Image &amp; Video Sizes
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>Format</th>
                    <th>Dimensions</th>
                    <th>Ratio</th>
                    <th>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {data.formats.map((fmt) => (
                    <tr key={fmt.type}>
                      <td className="font-medium text-[var(--foreground)]">{fmt.type}</td>
                      <td className="font-mono text-[var(--accent)]">
                        {fmt.width} × {fmt.height}
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
              {data.name} Image Tips
            </h2>
            <ul className="space-y-2">
              {data.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✓</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              Frequently Asked Questions
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
                Aspect Ratios Used by {data.name}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.relatedRatios.map((rs) => {
                  const ratio = RATIO_DATA[rs];
                  if (!ratio) return null;
                  return (
                    <Link
                      key={rs}
                      href={`/ratio/${rs}`}
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
              Other Platform Guides
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherPlatforms.map((ps) => {
                const platform = PLATFORM_DATA[ps];
                return (
                  <Link
                    key={ps}
                    href={`/platform/${ps}`}
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
              Need to verify or convert a {data.name} dimension?
            </p>
            <p className="text-xs text-[var(--muted)] mb-4">
              Enter any width and height in our free calculator to get the ratio,
              quality analysis, and CSS values instantly.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
            >
              Free Aspect Ratio Calculator →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
