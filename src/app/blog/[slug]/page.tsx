import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLE_DATA, ARTICLE_SLUGS } from "@/lib/seo-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = ARTICLE_DATA[slug];
  if (!data) return {};
  return {
    title: `${data.title} | Aspect Ratio Calculator`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      url: `https://aspect-ratio-calculator.com/blog/${slug}`,
      type: "article",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const data = ARTICLE_DATA[slug];
  if (!data) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.description,
    url: `https://aspect-ratio-calculator.com/blog/${slug}`,
    publisher: {
      "@type": "Organization",
      name: "Aspect Ratio Calculator",
      url: "https://aspect-ratio-calculator.com",
    },
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">
            Blog
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)] truncate max-w-48">{data.title}</span>
        </nav>

        {/* Article Header */}
        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {data.title}
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">
            {data.intro}
          </p>
        </div>

        {/* Article Sections */}
        <div className="space-y-4">
          {data.sections.map((section) => (
            <div key={section.heading} className="seo-card">
              <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
                {section.heading}
              </h2>
              <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">{section.body}</p>

              {section.list && (
                <ul className="space-y-2 mb-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--muted)]">
                      <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">→</span>
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
                        {section.table.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className={
                                j === 0
                                  ? "font-medium text-[var(--foreground)]"
                                  : j === 1
                                  ? "font-mono text-[var(--accent)]"
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
          <div className="seo-card border-[var(--accent)]/20">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">Summary</h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">{data.conclusion}</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white text-sm font-medium transition-colors"
            >
              Try the Free Calculator →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
