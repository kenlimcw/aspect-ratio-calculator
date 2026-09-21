import type { Metadata } from "next";
import Link from "next/link";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getMessages } from "@/i18n/get-messages";
import { ORG_ID, SITE_NAME, jsonLd } from "@/lib/schema";

/* Documentation for the URL API.
 *
 * An API nobody can find is not a surface, it is a secret — so this is linked
 * from the footer, and therefore from the homepage. Endpoints, parameter names
 * and example URLs stay in English on every locale, because that is what you
 * type; only the prose around them is translated. */
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
  const dp = messages.developersPage ?? {};

  return {
    title: `${dp.heading ?? "Developer API"} — ${SITE_NAME}`,
    description: dp.lead,
    alternates: getAlternates("/developers", localeConfig.urlPrefix),
  };
}

function Endpoint({ method, path, example }: { method: string; path: string; example: string }) {
  return (
    <div className="mt-3 font-mono text-xs">
      <div className="text-[var(--muted)]">
        <span className="text-[var(--accent)]">{method}</span> {path}
      </div>
      <a
        href={example}
        className="mt-1 block break-all text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
      >
        {example}
      </a>
    </div>
  );
}

export default async function DevelopersPage({ params }: Props) {
  const { locale: segment } = await params;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const dp = messages.developersPage ?? {};
  const prefix = localeConfig.urlPrefix;

  const shellExample = ['curl -H "Accept: application/json"', `${BASE_URL}/ratio/16-9`].join(" ");

  const apiJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebAPI",
    "@id": `${BASE_URL}/developers#api`,
    name: "Aspect Ratio Calculator API",
    description: dp.lead,
    url: `${BASE_URL}${prefix}/developers`,
    documentation: `${BASE_URL}/openapi.json`,
    provider: { "@id": ORG_ID },
    termsOfService: `${BASE_URL}/terms`,
    // A callable action, declared as one. This is the forward-looking half of
    // agent readiness: not "here is a page about us" but "here is how to call us".
    potentialAction: {
      "@type": "ConsumeAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/api/ratio?width={width}&height={height}`,
        contentType: "application/json",
        httpMethod: "GET",
      },
    },
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(apiJsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.common?.home ?? "Home"}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{dp.title ?? "API"}</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {dp.heading ?? "Developer API"}
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">{dp.lead}</p>
        </div>

        <div className="space-y-4">
          <section id="ratio" className="seo-card">
            <h2
              id="aspect-ratio-arithmetic"
              className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight"
            >
              {dp.ratioTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{dp.ratio}</p>
            <Endpoint
              method="GET"
              path="/api/ratio?width={width}&height={height}"
              example={`${BASE_URL}/api/ratio?width=1920&height=1080`}
            />
            <Endpoint
              method="GET"
              path="/api/ratio?ratio={w:h}&width={width}"
              example={`${BASE_URL}/api/ratio?ratio=21:9&width=2560`}
            />
          </section>

          <section id="content" className="seo-card">
            <h2
              id="pages-as-data"
              className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight"
            >
              {dp.contentTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{dp.content}</p>
            <Endpoint
              method="GET"
              path="/api/content?path={path}"
              example={`${BASE_URL}/api/content?path=/ratio/16-9`}
            />
            <p className="mt-3 text-[var(--muted)] text-xs">{dp.exampleLabel}</p>
            <pre className="mt-1 overflow-x-auto rounded-md border border-[var(--border)] p-3 font-mono text-xs text-[var(--muted)]">
              {shellExample}
            </pre>
          </section>

          <section id="openapi" className="seo-card">
            <h2
              id="machine-readable-specification"
              className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight"
            >
              {dp.specTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{dp.spec}</p>
            <Endpoint method="GET" path="/openapi.json" example={`${BASE_URL}/openapi.json`} />
          </section>

          <section id="cors" className="seo-card">
            <h2
              id="calling-from-a-browser"
              className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight"
            >
              {dp.corsTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{dp.cors}</p>
          </section>

          <section id="terms" className="seo-card">
            <h2
              id="terms"
              className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight"
            >
              {dp.termsTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              {dp.terms}{" "}
              <Link href={`${prefix}/terms`} className="text-[var(--accent)] hover:underline">
                {messages.footer?.termsOfService ?? "Terms of Service"}
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
