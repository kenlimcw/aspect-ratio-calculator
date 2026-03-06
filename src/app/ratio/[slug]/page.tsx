import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { RATIO_DATA, RATIO_SLUGS, PLATFORM_DATA } from "@/lib/seo-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return RATIO_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = RATIO_DATA[slug];
  if (!data) return {};
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://aspect-ratio-calculator.com/ratio/${slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function RatioPage({ params }: Props) {
  const { slug } = await params;
  const data = RATIO_DATA[slug];
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
        name: `${data.label} Aspect Ratio`,
        item: `https://aspect-ratio-calculator.com/ratio/${slug}`,
      },
    ],
  };

  const calcUrl = `/?rw=${data.w}&rh=${data.h}&mode=scale`;
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
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Aspect Ratio Calculator
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{data.label}</span>
        </nav>

        {/* Hero */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {data.label}{" "}
            <span className="text-[var(--accent)]">Aspect Ratio</span>
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed mb-6">
            {data.explanation}
          </p>
          <Link
            href={calcUrl}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
          >
            Open {data.label} Calculator →
          </Link>
        </div>

        <div className="space-y-4">
          {/* Common Dimensions */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-4">
              Common {data.label} Dimensions
            </h2>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>Name</th>
                    <th>Width</th>
                    <th>Height</th>
                    <th>Common Use</th>
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
              Where is {data.label} Used?
            </h2>
            <ul className="space-y-2">
              {data.useCases.map((use) => (
                <li key={use} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                  <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">→</span>
                  {use}
                </li>
              ))}
            </ul>
          </div>

          {/* CSS Code Snippet */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              CSS for {data.label}
            </h2>
            <p className="text-sm text-[var(--muted)] mb-3">
              Use these CSS snippets to enforce the {data.label} ratio on any element:
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

          {/* Related Ratios */}
          {data.relatedRatios.length > 0 && (
            <div className="seo-card">
              <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
                Related Aspect Ratios
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.relatedRatios.map((rs) => {
                  const related = RATIO_DATA[rs];
                  if (!related) return null;
                  return (
                    <Link
                      key={rs}
                      href={`/ratio/${rs}`}
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
                Platforms Using {data.label}
              </h2>
              <div className="flex flex-wrap gap-2">
                {data.relatedPlatforms.map((ps) => {
                  const platform = PLATFORM_DATA[ps];
                  if (!platform) return null;
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
          )}

          {/* CTA */}
          <div className="seo-card text-center">
            <p className="text-sm text-[var(--muted)] mb-4">
              Ready to calculate {data.label} dimensions? Our free calculator handles any width or height instantly.
            </p>
            <Link
              href={calcUrl}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
            >
              Use the {data.label} Calculator →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
