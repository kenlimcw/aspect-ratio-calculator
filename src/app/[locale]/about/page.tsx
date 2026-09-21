import type { Metadata } from "next";
import Link from "next/link";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getMessages } from "@/i18n/get-messages";
import { ORG_ID, SITE_NAME, jsonLd } from "@/lib/schema";

/* Who publishes this site and what it actually does.
 *
 * An anonymous site is discounted by human quality raters and by models alike —
 * there was nothing here to discount or trust either way. This page states what
 * the tool is, how it handles your files, and how to reach whoever maintains
 * it, and the Organization schema in the layout points its contactPoint here. */
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
  const ap = messages.aboutPage ?? {};

  return {
    title: `${ap.heading ?? "About"} — ${SITE_NAME}`,
    description: ap.lead,
    alternates: getAlternates("/about", localeConfig.urlPrefix),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale: segment } = await params;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const ap = messages.aboutPage ?? {};
  const prefix = localeConfig.urlPrefix;

  const sections = [
    { title: ap.whatItDoesTitle, body: ap.whatItDoes },
    { title: ap.privacyTitle, body: ap.privacy },
    { title: ap.languagesTitle, body: ap.languages },
    { title: ap.maintenanceTitle, body: ap.maintenance },
  ].filter((s) => s.title && s.body);

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${BASE_URL}${prefix}/about`,
    url: `${BASE_URL}${prefix}/about`,
    name: ap.heading ?? "About",
    description: ap.lead,
    inLanguage: localeConfig.hreflang,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntity: { "@id": ORG_ID },
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(aboutJsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.common?.home ?? "Home"}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{ap.title ?? "About"}</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {ap.heading ?? "About the Aspect Ratio Calculator"}
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">{ap.lead}</p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.title} className="seo-card">
              <h2 className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
                {section.title}
              </h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{section.body}</p>
            </section>
          ))}

          <section className="seo-card">
            <h2 className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
              {ap.contactCta}
            </h2>
            <Link
              href={`${prefix}/contact`}
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              {ap.contactLink ?? "Get in touch"}
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
