import type { Metadata } from "next";
import Link from "next/link";
import { LOCALE_SEGMENTS, getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getMessages } from "@/i18n/get-messages";
import { OpenFeedbackButton } from "@/components/OpenFeedbackButton";
import { ORG_ID, SITE_NAME, jsonLd } from "@/lib/schema";

/* A route to a human.
 *
 * There was none: the only way to reach anyone was a floating widget that a
 * visitor could permanently dismiss, and /.well-known/security.txt had nowhere
 * to point. This page is that destination. It reuses the existing widget rather
 * than shipping a second form, so there is still exactly one thing to maintain
 * and one endpoint that receives. */
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
  const cp = messages.contactPage ?? {};

  return {
    title: `${cp.heading ?? "Contact"} — ${SITE_NAME}`,
    description: cp.lead,
    alternates: getAlternates("/contact", localeConfig.urlPrefix),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale: segment } = await params;
  const localeConfig = getLocaleFromSegment(segment);
  const messages = await getMessages(localeConfig.code);
  const cp = messages.contactPage ?? {};
  const prefix = localeConfig.urlPrefix;

  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE_URL}${prefix}/contact`,
    url: `${BASE_URL}${prefix}/contact`,
    name: cp.heading ?? "Contact",
    description: cp.lead,
    inLanguage: localeConfig.hreflang,
    isPartOf: { "@id": `${BASE_URL}/#website` },
    mainEntity: { "@id": ORG_ID },
  };

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(contactJsonLd) }}
      />

      <div className="max-w-2xl mx-auto">
        <nav className="text-xs text-[var(--muted)] mb-8 flex items-center gap-1.5">
          <Link href={`${prefix}/`} className="hover:text-[var(--foreground)] transition-colors">
            {messages.common?.home ?? "Home"}
          </Link>
          <span>/</span>
          <span className="text-[var(--foreground)]">{cp.title ?? "Contact"}</span>
        </nav>

        <div className="mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-4 tracking-tight leading-tight">
            {cp.heading ?? "Contact"}
          </h1>
          <p className="text-[var(--muted)] text-sm md:text-base leading-relaxed">{cp.lead}</p>
        </div>

        <div className="space-y-4">
          <section className="seo-card">
            <h2 className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
              {cp.feedbackTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{cp.feedback}</p>
            <OpenFeedbackButton label={cp.feedbackButton ?? "Open the feedback form"} />
          </section>

          <section className="seo-card">
            <h2 className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
              {cp.securityTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              {cp.security}{" "}
              <a
                href="/.well-known/security.txt"
                className="text-[var(--accent)] hover:underline"
              >
                /.well-known/security.txt
              </a>
            </p>
          </section>

          <section className="seo-card">
            <h2 className="font-display text-lg md:text-xl font-semibold text-[var(--foreground)] mb-2 tracking-tight">
              {cp.dataTitle}
            </h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">
              {cp.data}{" "}
              <Link href={`${prefix}/privacy`} className="text-[var(--accent)] hover:underline">
                {messages.privacy?.title ?? "Privacy"}
              </Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
