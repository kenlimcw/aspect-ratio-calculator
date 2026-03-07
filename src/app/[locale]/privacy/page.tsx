import type { Metadata } from "next";
import Link from "next/link";
import { getLocaleFromSegment, BASE_URL } from "@/i18n/config";
import { getAlternates } from "@/lib/hreflang";
import { getMessages } from "@/i18n/get-messages";

interface Props {
  params: Promise<{ locale: string }>;
}

const EFFECTIVE_DATE = "1 March 2026";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);
  const alternates = getAlternates("/privacy", localeConfig.urlPrefix);
  const pv = messages.privacy ?? {};

  return {
    title: pv.metaTitle ?? "Privacy Policy | Aspect Ratio Calculator",
    description: pv.metaDescription ?? "Privacy Policy for Aspect Ratio Calculator. We collect minimal data and respect your privacy.",
    openGraph: {
      title: pv.metaTitle ?? "Privacy Policy | Aspect Ratio Calculator",
      description: pv.metaDescription ?? "How Aspect Ratio Calculator handles your data. Minimal collection, no tracking cookies.",
      url: `${BASE_URL}${localeConfig.urlPrefix}/privacy`,
    },
    alternates,
  };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);

  const pv = messages.privacy ?? {};
  const legal = messages.legal ?? {};
  const prefix = localeConfig.urlPrefix;
  const isEnglish = localeConfig.code === "en";

  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        {/* Translation disclaimer banner for non-English locales */}
        {!isEnglish && (
          <div className="mb-6 p-4 rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/5 text-sm text-[var(--muted)]">
            {(() => {
              const banner = legal.disclaimerBanner ?? "This translation is provided for convenience. The <link>English version</link> is the authoritative version.";
              const parts = banner.split(/<link>(.*?)<\/link>/);
              if (parts.length === 3) {
                return (
                  <>
                    {parts[0]}
                    <Link href="/en/privacy" className="text-[var(--accent)] hover:underline underline-offset-2">
                      {parts[1]}
                    </Link>
                    {parts[2]}
                  </>
                );
              }
              return banner;
            })()}
          </div>
        )}

        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-3 tracking-tight">
            {pv.title ?? "Privacy Policy"}
          </h1>
          <p className="text-[var(--muted)] text-sm">
            {(legal.effectiveDate ?? "Effective date: {date}").replace("{date}", EFFECTIVE_DATE)}
          </p>
        </div>

        <div className="space-y-4">
          {/* Intro */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s1Title ?? "1. Introduction"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {pv.s1p1 ?? "Aspect Ratio Calculator (\"we\", \"us\", or \"our\") operates aspect-ratio-calculator.com (the \"Service\"). This Privacy Policy explains how we collect, use, and protect information when you use our Service."}
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {pv.s1p2 ?? "We are committed to protecting your privacy. This tool is designed to work with minimal data \u2014 the calculator runs entirely in your browser and we do not store your calculation inputs or results."}
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s1p3 ?? "This Privacy Policy complies with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). If you have any concerns, please contact us using the feedback widget on the calculator page."}
            </p>
          </div>

          {/* Data We Collect */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s2Title ?? "2. Information We Collect"}
            </h2>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              {pv.s2h1 ?? "Information we do NOT collect"}
            </h3>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed mb-4">
              <li>{pv.s2list1 ?? "No account registration or login is required"}</li>
              <li>{pv.s2list2 ?? "Your calculation inputs (dimensions, ratios, images) are processed locally in your browser and never transmitted to our servers"}</li>
              <li>{pv.s2list3 ?? "We do not store any personal identification information"}</li>
              <li>{pv.s2list4 ?? "We do not sell, trade, or rent your data to third parties"}</li>
            </ul>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              {pv.s2h2 ?? "Analytics (with your consent)"}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              {pv.s2analytics ?? "We use Vercel Analytics to collect anonymous, aggregated data about how the Service is used. This includes page views, general geographic region (country level only), device type, and referring source. Vercel Analytics does not use cookies, does not fingerprint your browser, and does not collect personally identifiable information (PII)."}
            </p>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              {pv.s2h2b ?? "Optional analytics (Google Analytics & Microsoft Clarity)"}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              {pv.s2ga4clarity ?? "With your consent, we also use Google Analytics 4 and Microsoft Clarity to understand visitor behaviour in more detail. These tools set cookies and may collect your approximate location and device information. You can accept or decline these cookies via the cookie banner shown on your first visit, or change your preference at any time via the Cookie Settings link."}
            </p>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              {pv.s2h3 ?? "Feedback form"}
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s2feedback ?? "If you voluntarily submit feedback through our feedback widget, we collect the content of your message and, if provided, your email address. This information is used solely to respond to your feedback. It is transmitted via Resend (a transactional email service) and is not shared with any other third party."}
            </p>
          </div>

          {/* Cookies */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s3Title ?? "3. Cookies & Local Storage"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {pv.s3p1 ?? "We do not use tracking cookies or advertising cookies. Your theme preference (light or dark mode) may be stored in your browser's localStorage so that it persists across visits. This data stays on your device and is never transmitted to us."}
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s3p2 ?? "If you install the Service as a PWA (Progressive Web App), a service worker is registered in your browser to enable offline functionality. The service worker caches application assets only; it does not collect or transmit any personal data."}
            </p>
          </div>

          {/* Third-party services */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s4Title ?? "4. Third-Party Services"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {pv.s4intro ?? "The Service uses the following third-party services:"}
            </p>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>{pv.s4tableService ?? "Service"}</th>
                    <th>{pv.s4tablePurpose ?? "Purpose"}</th>
                    <th>{pv.s4tablePolicy ?? "Privacy Policy"}</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Vercel", pv.s4vercelPurpose ?? "Hosting & anonymous analytics (cookieless)", "vercel.com/legal/privacy-policy"],
                    ["Resend", pv.s4resendPurpose ?? "Feedback email delivery", "resend.com/legal/privacy-policy"],
                    ["Google Analytics", pv.s4ga4Purpose ?? "Optional usage analytics (cookies, requires consent)", "policies.google.com/privacy"],
                    ["Microsoft Clarity", pv.s4clarityPurpose ?? "Optional session analytics (cookies, requires consent)", "privacy.microsoft.com/en-us/privacystatement"],
                  ].map(([service, purpose, policy]) => (
                    <tr key={service}>
                      <td className="font-medium text-[var(--foreground)]">
                        {service}
                      </td>
                      <td className="text-[var(--muted)]">{purpose}</td>
                      <td className="font-mono text-[10px] text-[var(--muted)]">
                        {policy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              {pv.s4disclaimer ?? "We are not responsible for the privacy practices of these third-party services. We encourage you to review their individual privacy policies."}
            </p>
          </div>

          {/* Your rights */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s5Title ?? "5. Your Privacy Rights"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {pv.s5intro ?? "Under the Australian Privacy Principles, you have the right to:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>{pv.s5list1 ?? "Request access to any personal information we hold about you"}</li>
              <li>{pv.s5list2 ?? "Request correction of any inaccurate personal information"}</li>
              <li>{pv.s5list3 ?? "Request deletion of any personal information you have voluntarily provided (e.g., via the feedback form)"}</li>
              <li>{pv.s5list4 ?? "Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au if you believe we have breached your privacy"}</li>
            </ul>

            <p className="text-sm text-[var(--muted)] leading-relaxed mt-4 mb-2">
              {pv.s5introGdpr ?? "If you are in the EU/EEA or UK, you also have the right to:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>{pv.s5gdpr1 ?? "Data portability — receive your personal data in a structured, machine-readable format (Art. 20 GDPR)"}</li>
              <li>{pv.s5gdpr2 ?? "Restriction of processing — ask us to pause processing of your data in certain circumstances (Art. 18 GDPR)"}</li>
              <li>{pv.s5gdpr3 ?? "Object to processing — object to processing based on legitimate interests (Art. 21 GDPR)"}</li>
              <li>{pv.s5gdpr4 ?? "Not be subject to solely automated decisions that produce legal or similarly significant effects (Art. 22 GDPR) — we do not carry out any such automated decision-making"}</li>
              <li>{pv.s5gdpr5 ?? "Lodge a complaint with your local EU/EEA Data Protection Authority (DPA) — find your DPA at edpb.europa.eu/about-edpb/about-edpb/members_en"}</li>
            </ul>

            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              {pv.s5contact ?? "To exercise any of these rights, please contact us via the feedback widget on the calculator page."}
            </p>
          </div>

          {/* Lawful Basis (GDPR) */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s5bTitle ?? "5b. Lawful Basis for Processing (GDPR)"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {pv.s5bIntro ?? "Where GDPR applies, we rely on the following lawful bases:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>{pv.s5bList1 ?? "Essential operations (theme preference, offline cache): Legitimate interests (Art. 6(1)(f)) — necessary to deliver the Service you requested"}</li>
              <li>{pv.s5bList2 ?? "Analytics cookies (Google Analytics & Clarity): Consent (Art. 6(1)(a)) — only set after you accept via the cookie banner"}</li>
              <li>{pv.s5bList3 ?? "Feedback email: Legitimate interests (Art. 6(1)(f)) — to respond to your message"}</li>
            </ul>
          </div>

          {/* Retention */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s6Title ?? "6. Data Retention"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s6text ?? "Feedback form submissions (including any email address you provide) are retained only as long as necessary to address your enquiry, after which they are deleted. Anonymous analytics data (aggregated page view counts) may be retained indefinitely as it contains no personally identifiable information."}
            </p>
          </div>

          {/* Children */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s7Title ?? "7. Children's Privacy"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s7text ?? "The Service is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will take steps to delete it promptly."}
            </p>
          </div>

          {/* International */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s8Title ?? "8. International Users"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s8text ?? "The Service is operated from Australia. If you are accessing the Service from outside Australia, please be aware that your information may be processed in Australia and other countries where our service providers operate. By using the Service, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection rules."}
            </p>
          </div>

          {/* Changes */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s9Title ?? "9. Changes to This Policy"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s9text ?? "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. When we make changes, we will update the effective date at the top of this page. We encourage you to review this policy periodically. Continued use of the Service after changes are posted constitutes your acceptance of the updated policy."}
            </p>
          </div>

          {/* Contact */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {pv.s10Title ?? "10. Contact Us"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {pv.s10text ?? "If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please use the feedback widget on the calculator page."}
            </p>
          </div>

          <p className="text-xs text-[var(--muted)] text-center pt-2 pb-6">
            {(legal.lastUpdated ?? "Last updated: {date}").replace("{date}", EFFECTIVE_DATE)}
          </p>
        </div>
      </div>
    </main>
  );
}
