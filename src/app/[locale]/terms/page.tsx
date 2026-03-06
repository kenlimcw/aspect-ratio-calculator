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
  const alternates = getAlternates("/terms", localeConfig.urlPrefix);
  const ts = messages.terms ?? {};

  return {
    title: ts.metaTitle ?? "Terms of Service | Aspect Ratio Calculator",
    description: ts.metaDescription ?? "Terms of Service for Aspect Ratio Calculator. Free online tool governed by Australian law.",
    openGraph: {
      title: ts.metaTitle ?? "Terms of Service | Aspect Ratio Calculator",
      description: ts.metaDescription ?? "Terms of Service for Aspect Ratio Calculator.",
      url: `${BASE_URL}${localeConfig.urlPrefix}/terms`,
    },
    alternates,
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale: localeSegment } = await params;
  const localeConfig = getLocaleFromSegment(localeSegment);
  const messages = await getMessages(localeConfig.code);

  const ts = messages.terms ?? {};
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
                    <Link href="/en/terms" className="text-[var(--accent)] hover:underline underline-offset-2">
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
            {ts.title ?? "Terms of Service"}
          </h1>
          <p className="text-[var(--muted)] text-sm">
            {(legal.effectiveDate ?? "Effective date: {date}").replace("{date}", EFFECTIVE_DATE)}
          </p>
        </div>

        <div className="space-y-4">
          {/* 1. Acceptance */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s1Title ?? "1. Acceptance of Terms"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {ts.s1text ?? "By accessing or using Aspect Ratio Calculator at aspect-ratio-calculator.com (the \"Service\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to these Terms, please do not use the Service. These Terms apply to all visitors, users, and others who access or use the Service."}
            </p>
          </div>

          {/* 2. Description of Service */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s2Title ?? "2. Description of Service"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {ts.s2p1 ?? "Aspect Ratio Calculator is a free online Progressive Web App (PWA) that calculates, converts, and identifies aspect ratios for images, videos, and screens. No account or sign-up is required to use the free tier."}
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {ts.s2p2 ?? "We may offer a Pro tier (\"Pro\") with additional features for a one-time purchase price. Current pricing and features for Pro are displayed at the point of purchase. The Service is provided for informational and utility purposes only; results are provided as a convenience and should be independently verified for mission-critical applications."}
            </p>
          </div>

          {/* 3. No Warranties */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s3Title ?? "3. No Warranties"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {ts.s3p1 ?? "The Service is provided on an \"as is\" and \"as available\" basis, without warranty of any kind, express or implied. To the maximum extent permitted by applicable law, we disclaim all warranties, including but not limited to:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>{ts.s3list1 ?? "Warranties of merchantability or fitness for a particular purpose"}</li>
              <li>{ts.s3list2 ?? "Accuracy, completeness, or reliability of calculation results"}</li>
              <li>{ts.s3list3 ?? "Uninterrupted or error-free operation of the Service"}</li>
              <li>{ts.s3list4 ?? "That the Service will meet your specific requirements"}</li>
              <li>{ts.s3list5 ?? "Security or absence of viruses or harmful components"}</li>
            </ul>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              {ts.s3acl ?? "Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy conferred by the Australian Consumer Law that cannot lawfully be excluded, restricted, or modified."}
            </p>
          </div>

          {/* 4. Limitation of Liability */}
          <div className="seo-card border-[var(--accent)]/20">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s4Title ?? "4. Limitation of Liability"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {ts.s4p1 ?? "To the maximum extent permitted by applicable law, in no event shall Aspect Ratio Calculator, its operators, affiliates, licensors, service providers, employees, agents, officers, or directors be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed mb-3">
              <li>{ts.s4list1 ?? "Loss of profits, revenue, or data"}</li>
              <li>{ts.s4list2 ?? "Business interruption or loss of goodwill"}</li>
              <li>{ts.s4list3 ?? "Cost of substitute services"}</li>
              <li>{ts.s4list4 ?? "Any damages arising from reliance on calculation results"}</li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-[var(--accent)]/8 border border-[var(--accent)]/20">
              <p className="text-sm text-[var(--foreground)] font-medium leading-relaxed">
                {ts.s4liability ?? "Maximum Aggregate Liability: Our total aggregate liability to you for any and all claims arising from or related to the use of the Service shall not exceed the amount you actually paid for the Service during the twelve (12) months immediately preceding the claim. For users of the free tier, this limit is AUD $0.00. For Pro tier users, this limit is the one-time Pro purchase price you paid."}
              </p>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              {ts.s4closing ?? "These limitations apply regardless of the legal theory on which the claim is based. Some jurisdictions do not allow the exclusion or limitation of certain warranties or damages; in such cases, our liability will be limited to the greatest extent permitted by applicable law."}
            </p>
          </div>

          {/* 5. Intellectual Property */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s5Title ?? "5. Intellectual Property & Copyright"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {ts.s5p1 ?? "All content on the Service \u2014 including but not limited to the software, user interface, design, text, graphics, and data tables \u2014 is the exclusive property of Aspect Ratio Calculator and is protected by Australian and international copyright, trademark, and other intellectual property laws."}
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {ts.s5p2 ?? "You are granted a limited, non-exclusive, non-transferable licence to access and use the Service for your personal, non-commercial purposes. This licence does not include:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>{ts.s5list1 ?? "Reproducing or distributing any part of the Service"}</li>
              <li>{ts.s5list2 ?? "Creating derivative works based on the Service"}</li>
              <li>{ts.s5list3 ?? "Commercially exploiting any content or features of the Service without written permission"}</li>
              <li>{ts.s5list4 ?? "Reverse engineering or decompiling the software"}</li>
            </ul>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              &copy; {new Date().getFullYear()} aspect-ratio-calculator.com. All
              rights reserved.
            </p>
          </div>

          {/* 6. User Conduct */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s6Title ?? "6. Acceptable Use"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              {ts.s6intro ?? "You agree not to use the Service in any way that:"}
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>{ts.s6list1 ?? "Involves automated scraping, crawling, or data extraction beyond normal browser usage"}</li>
              <li>{ts.s6list2 ?? "Attempts to circumvent, disable, or interfere with security features"}</li>
              <li>{ts.s6list3 ?? "Places unreasonable load on the Service infrastructure"}</li>
              <li>{ts.s6list4 ?? "Violates any applicable law or regulation"}</li>
              <li>{ts.s6list5 ?? "Infringes on the rights of any third party"}</li>
            </ul>
          </div>

          {/* 7. Third-Party Links */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s7Title ?? "7. Third-Party Services"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {ts.s7text ?? "The Service may contain links to or integrate with third-party websites or services (including WhatsApp, Telegram, and social media platforms for sharing). These are provided for your convenience only. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party services. Your use of third-party services is governed solely by the terms of those services."}
            </p>
          </div>

          {/* 8. Changes */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s8Title ?? "8. Changes to These Terms"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {ts.s8text ?? "We reserve the right to modify these Terms at any time at our sole discretion. When we make material changes, we will update the effective date at the top of this page. Your continued use of the Service after any such modification constitutes your acceptance of the updated Terms. We encourage you to review these Terms periodically."}
            </p>
          </div>

          {/* 9. Governing Law */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s9Title ?? "9. Governing Law & Jurisdiction"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {ts.s9text ?? "These Terms are governed by and construed in accordance with the laws of New South Wales, Australia, and the Commonwealth of Australia, without regard to conflict of law principles. The Australian Consumer Law applies to the extent applicable. Any dispute arising from or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of New South Wales, Australia."}
            </p>
          </div>

          {/* 10. Contact */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              {ts.s10Title ?? "10. Contact & Feedback"}
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {ts.s10text ?? "If you have any questions about these Terms, please use the feedback widget available on the main calculator page."}
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
