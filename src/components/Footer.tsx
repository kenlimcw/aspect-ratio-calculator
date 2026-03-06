import Link from "next/link";
import { FooterFeedbackLink } from "@/components/FooterFeedbackLink";
import { RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA, RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS } from "@/lib/seo-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      {/* ── Explore Navigation ── */}
      <div className="max-w-2xl mx-auto px-4 pt-8 pb-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              Aspect Ratios
            </h4>
            <ul className="space-y-1.5">
              {RATIO_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/ratio/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {RATIO_DATA[slug].label} Ratio
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              Platforms
            </h4>
            <ul className="space-y-1.5">
              {PLATFORM_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/platform/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {PLATFORM_DATA[slug].name} Sizes
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-[var(--foreground)] mb-2 uppercase tracking-wider">
              Guides
            </h4>
            <ul className="space-y-1.5">
              {ARTICLE_SLUGS.map((slug) => (
                <li key={slug}>
                  <Link
                    href={`/blog/${slug}`}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {ARTICLE_DATA[slug].title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Copyright & Legal ── */}
      <div className="border-t border-[var(--border)]">
        <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
          <span>&copy; {year} aspect-ratio-calculator.com. All rights reserved.</span>
          <nav className="flex items-center gap-4" aria-label="Legal">
            <Link
              href="/terms"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[var(--foreground)] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[var(--border)]">&middot;</span>
            <FooterFeedbackLink />
            <span className="text-[var(--border)]">&middot;</span>
            <span>Free tool, no sign-up required</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
