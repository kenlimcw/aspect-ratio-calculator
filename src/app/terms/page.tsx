import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Aspect Ratio Calculator",
  description:
    "Terms of Service for Aspect Ratio Calculator. Free online tool governed by Australian law. Read our terms before using the service.",
  openGraph: {
    title: "Terms of Service | Aspect Ratio Calculator",
    description: "Terms of Service for Aspect Ratio Calculator.",
    url: "https://aspect-ratio-calculator.com/terms",
  },
};

const EFFECTIVE_DATE = "1 March 2026";

export default function TermsPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-3 tracking-tight">
            Terms of Service
          </h1>
          <p className="text-[var(--muted)] text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="space-y-4">
          {/* 1. Acceptance */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              By accessing or using Aspect Ratio Calculator at{" "}
              <strong className="text-[var(--foreground)]">
                aspect-ratio-calculator.com
              </strong>{" "}
              (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of
              Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, please
              do not use the Service. These Terms apply to all visitors, users,
              and others who access or use the Service.
            </p>
          </div>

          {/* 2. Description of Service */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              2. Description of Service
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              Aspect Ratio Calculator is a free online Progressive Web App (PWA)
              that calculates, converts, and identifies aspect ratios for images,
              videos, and screens. No account or sign-up is required to use the
              free tier.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              We may offer a Pro tier (&ldquo;Pro&rdquo;) with additional features for a
              one-time purchase price. Current pricing and features for Pro are
              displayed at the point of purchase. The Service is provided for
              informational and utility purposes only; results are provided as a
              convenience and should be independently verified for
              mission-critical applications.
            </p>
          </div>

          {/* 3. No Warranties */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              3. No Warranties
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
              basis, without warranty of any kind, express or implied. To the
              maximum extent permitted by applicable law, we disclaim all
              warranties, including but not limited to:
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Warranties of merchantability or fitness for a particular purpose</li>
              <li>Accuracy, completeness, or reliability of calculation results</li>
              <li>Uninterrupted or error-free operation of the Service</li>
              <li>That the Service will meet your specific requirements</li>
              <li>Security or absence of viruses or harmful components</li>
            </ul>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              Nothing in these Terms excludes, restricts, or modifies any
              consumer guarantee, right, or remedy conferred by the Australian
              Consumer Law that cannot lawfully be excluded, restricted, or
              modified.
            </p>
          </div>

          {/* 4. Limitation of Liability */}
          <div className="seo-card border-[var(--accent)]/20">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              4. Limitation of Liability
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              To the maximum extent permitted by applicable law, in no event
              shall Aspect Ratio Calculator, its operators, affiliates,
              licensors, service providers, employees, agents, officers, or
              directors be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed mb-3">
              <li>Loss of profits, revenue, or data</li>
              <li>Business interruption or loss of goodwill</li>
              <li>Cost of substitute services</li>
              <li>Any damages arising from reliance on calculation results</li>
            </ul>
            <div className="mt-4 p-3 rounded-lg bg-[var(--accent)]/8 border border-[var(--accent)]/20">
              <p className="text-sm text-[var(--foreground)] font-medium leading-relaxed">
                Maximum Aggregate Liability: Our total aggregate liability to
                you for any and all claims arising from or related to the use of
                the Service shall not exceed the amount you actually paid for
                the Service during the twelve (12) months immediately preceding
                the claim. For users of the free tier, this limit is{" "}
                <strong>AUD $0.00</strong>. For Pro tier users, this limit is
                the one-time Pro purchase price you paid.
              </p>
            </div>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              These limitations apply regardless of the legal theory on which
              the claim is based. Some jurisdictions do not allow the exclusion
              or limitation of certain warranties or damages; in such cases, our
              liability will be limited to the greatest extent permitted by
              applicable law.
            </p>
          </div>

          {/* 5. Intellectual Property */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              5. Intellectual Property &amp; Copyright
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              All content on the Service — including but not limited to the
              software, user interface, design, text, graphics, and data tables —
              is the exclusive property of Aspect Ratio Calculator and is
              protected by Australian and international copyright, trademark,
              and other intellectual property laws.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              You are granted a limited, non-exclusive, non-transferable licence
              to access and use the Service for your personal, non-commercial
              purposes. This licence does not include:
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>Reproducing or distributing any part of the Service</li>
              <li>Creating derivative works based on the Service</li>
              <li>
                Commercially exploiting any content or features of the Service
                without written permission
              </li>
              <li>Reverse engineering or decompiling the software</li>
            </ul>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              © {new Date().getFullYear()} aspect-ratio-calculator.com. All
              rights reserved.
            </p>
          </div>

          {/* 6. User Conduct */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              6. Acceptable Use
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              You agree not to use the Service in any way that:
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>
                Involves automated scraping, crawling, or data extraction beyond
                normal browser usage
              </li>
              <li>Attempts to circumvent, disable, or interfere with security features</li>
              <li>Places unreasonable load on the Service infrastructure</li>
              <li>Violates any applicable law or regulation</li>
              <li>Infringes on the rights of any third party</li>
            </ul>
          </div>

          {/* 7. Third-Party Links */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              7. Third-Party Services
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The Service may contain links to or integrate with third-party
              websites or services (including WhatsApp, Telegram, and social
              media platforms for sharing). These are provided for your
              convenience only. We have no control over, and assume no
              responsibility for, the content, privacy policies, or practices of
              any third-party services. Your use of third-party services is
              governed solely by the terms of those services.
            </p>
          </div>

          {/* 8. Changes */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              8. Changes to These Terms
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              We reserve the right to modify these Terms at any time at our sole
              discretion. When we make material changes, we will update the
              effective date at the top of this page. Your continued use of the
              Service after any such modification constitutes your acceptance of
              the updated Terms. We encourage you to review these Terms
              periodically.
            </p>
          </div>

          {/* 9. Governing Law */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              9. Governing Law &amp; Jurisdiction
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              These Terms are governed by and construed in accordance with the
              laws of New South Wales, Australia, and the Commonwealth of
              Australia, without regard to conflict of law principles. The
              Australian Consumer Law (Schedule 2 of the{" "}
              <em>Competition and Consumer Act 2010</em> (Cth)) applies to the
              extent applicable. Any dispute arising from or relating to these
              Terms or the Service shall be subject to the exclusive jurisdiction
              of the courts of New South Wales, Australia.
            </p>
          </div>

          {/* 10. Contact */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              10. Contact &amp; Feedback
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              If you have any questions about these Terms, please use the
              feedback widget available on the{" "}
              <Link
                href="/"
                className="text-[var(--accent)] hover:underline underline-offset-2"
              >
                main calculator page
              </Link>
              . We aim to respond to all enquiries within 5 business days.
            </p>
          </div>

          <p className="text-xs text-[var(--muted)] text-center pt-2 pb-6">
            Last updated: {EFFECTIVE_DATE}
          </p>
        </div>
      </div>
    </main>
  );
}
