import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Aspect Ratio Calculator",
  description:
    "Privacy Policy for Aspect Ratio Calculator. We collect minimal data and respect your privacy. Compliant with the Australian Privacy Act 1988.",
  openGraph: {
    title: "Privacy Policy | Aspect Ratio Calculator",
    description:
      "How Aspect Ratio Calculator handles your data. Minimal collection, no tracking cookies.",
    url: "https://aspect-ratio-calculator.com/privacy",
  },
};

const EFFECTIVE_DATE = "1 March 2026";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-8 md:py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-[var(--foreground)] mb-3 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-[var(--muted)] text-sm">
            Effective date: {EFFECTIVE_DATE}
          </p>
        </div>

        <div className="space-y-4">
          {/* Intro */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              1. Introduction
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              Aspect Ratio Calculator (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates{" "}
              <strong className="text-[var(--foreground)]">
                aspect-ratio-calculator.com
              </strong>{" "}
              (the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect,
              use, and protect information when you use our Service.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              We are committed to protecting your privacy. This tool is designed
              to work with minimal data — the calculator runs entirely in your
              browser and we do not store your calculation inputs or results.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              This Privacy Policy complies with the{" "}
              <em>Privacy Act 1988</em> (Cth) and the Australian Privacy
              Principles (APPs). If you have any concerns, please contact us
              using the feedback widget on the{" "}
              <Link
                href="/"
                className="text-[var(--accent)] hover:underline underline-offset-2"
              >
                calculator page
              </Link>
              .
            </p>
          </div>

          {/* Data We Collect */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              2. Information We Collect
            </h2>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              Information we do NOT collect
            </h3>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed mb-4">
              <li>No account registration or login is required</li>
              <li>
                Your calculation inputs (dimensions, ratios, images) are
                processed locally in your browser and never transmitted to our
                servers
              </li>
              <li>We do not store any personal identification information</li>
              <li>We do not sell, trade, or rent your data to third parties</li>
            </ul>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              Anonymous analytics
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-4">
              We use{" "}
              <strong className="text-[var(--foreground)]">
                Vercel Analytics
              </strong>{" "}
              to collect anonymous, aggregated data about how the Service is
              used. This includes page views, general geographic region (country
              level only), device type, and referring source. Vercel Analytics
              does not use cookies, does not fingerprint your browser, and does
              not collect personally identifiable information (PII).
            </p>

            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
              Feedback form
            </h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              If you voluntarily submit feedback through our feedback widget, we
              collect the content of your message and, if provided, your email
              address. This information is used solely to respond to your
              feedback. It is transmitted via{" "}
              <strong className="text-[var(--foreground)]">Resend</strong>{" "}
              (a transactional email service) and is not shared with any other
              third party.
            </p>
          </div>

          {/* Cookies */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              3. Cookies &amp; Local Storage
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              We do not use tracking cookies or advertising cookies. Your theme
              preference (light or dark mode) may be stored in your
              browser&apos;s{" "}
              <code className="font-mono text-[var(--foreground-dim)] bg-[var(--surface-hover)] px-1 rounded text-xs">
                localStorage
              </code>{" "}
              so that it persists across visits. This data stays on your device
              and is never transmitted to us.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              If you install the Service as a PWA (Progressive Web App), a
              service worker is registered in your browser to enable offline
              functionality. The service worker caches application assets only;
              it does not collect or transmit any personal data.
            </p>
          </div>

          {/* Third-party services */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              4. Third-Party Services
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              The Service uses the following third-party services:
            </p>
            <div className="overflow-x-auto -mx-1.5">
              <table className="w-full text-left border-collapse seo-table">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th>Service</th>
                    <th>Purpose</th>
                    <th>Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Vercel", "Hosting & anonymous analytics", "vercel.com/legal/privacy-policy"],
                    ["Resend", "Feedback email delivery", "resend.com/legal/privacy-policy"],
                    ["Google Fonts", "Typography (DM Sans, JetBrains Mono)", "policies.google.com/privacy"],
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
              We are not responsible for the privacy practices of these
              third-party services. We encourage you to review their individual
              privacy policies.
            </p>
          </div>

          {/* Your rights */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              5. Your Privacy Rights
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
              Under the Australian Privacy Principles, you have the right to:
            </p>
            <ul className="text-sm text-[var(--muted)] space-y-1.5 list-disc list-inside leading-relaxed">
              <li>
                Request access to any personal information we hold about you
              </li>
              <li>
                Request correction of any inaccurate personal information
              </li>
              <li>
                Request deletion of any personal information you have voluntarily
                provided (e.g., via the feedback form)
              </li>
              <li>
                Lodge a complaint with the Office of the Australian Information
                Commissioner (OAIC) at{" "}
                <span className="font-mono text-[10px] text-[var(--foreground-dim)]">
                  oaic.gov.au
                </span>{" "}
                if you believe we have breached your privacy
              </li>
            </ul>
            <p className="text-sm text-[var(--muted)] leading-relaxed mt-3">
              To exercise any of these rights, please contact us via the
              feedback widget on the{" "}
              <Link
                href="/"
                className="text-[var(--accent)] hover:underline underline-offset-2"
              >
                calculator page
              </Link>
              .
            </p>
          </div>

          {/* Retention */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              6. Data Retention
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Feedback form submissions (including any email address you
              provide) are retained for a maximum of 90 days, after which they
              are permanently deleted. Anonymous analytics data (aggregated page
              view counts) may be retained indefinitely as it contains no
              personally identifiable information.
            </p>
          </div>

          {/* Children */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The Service is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe a child has provided us with personal information,
              please contact us and we will take steps to delete it promptly.
            </p>
          </div>

          {/* International */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              8. International Users
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              The Service is operated from Australia. If you are accessing the
              Service from outside Australia, please be aware that your
              information may be processed in Australia and other countries where
              our service providers operate. By using the Service, you consent
              to the transfer of your information to countries outside your
              country of residence, which may have different data protection
              rules.
            </p>
          </div>

          {/* Changes */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              9. Changes to This Policy
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for legal, operational, or regulatory
              reasons. When we make changes, we will update the effective date at
              the top of this page. We encourage you to review this policy
              periodically. Continued use of the Service after changes are posted
              constitutes your acceptance of the updated policy.
            </p>
          </div>

          {/* Contact */}
          <div className="seo-card">
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-3">
              10. Contact Us
            </h2>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy
              Policy or our data practices, please use the feedback widget on
              the{" "}
              <Link
                href="/"
                className="text-[var(--accent)] hover:underline underline-offset-2"
              >
                calculator page
              </Link>
              . We are based in Australia and aim to respond to all privacy
              enquiries within 30 days, as required by the Australian Privacy
              Principles.
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
