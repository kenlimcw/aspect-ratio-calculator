import Link from "next/link";
import { FooterFeedbackLink } from "@/components/FooterFeedbackLink";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
        <span>© {year} aspect-ratio-calculator.com. All rights reserved.</span>
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
          <span className="text-[var(--border)]">·</span>
          <FooterFeedbackLink />
          <span className="text-[var(--border)]">·</span>
          <span>Free tool, no sign-up required</span>
        </nav>
      </div>
    </footer>
  );
}
