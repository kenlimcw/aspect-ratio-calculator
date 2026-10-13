"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import { copyToClipboard } from "@/lib/clipboard";
import { track } from "@/lib/analytics";

/* One copy button for every calculator on the site.
 *
 * WHY THIS EXISTS, measured rather than assumed. Microsoft Clarity recorded 42
 * dead clicks in three days — clicks on something that does not respond —
 * concentrated on the /ratio/* pages: 50% of sessions on /es/ratio/4-3, 100%
 * on /es/ratio/21-9, 17% on /ratio/16-9. Zero rage clicks, zero script errors,
 * so nothing was broken; people were tapping a result that looked copyable and
 * was not. RatioCalculator rendered the computed dimensions in accent-coloured
 * monospace, pixel-for-pixel like Calculator.tsx's result, which DOES have a
 * copy button. `copy_dimensions` had fired once in ninety days, site-wide.
 *
 * The label strings are the EXISTING calculator.copy / calculator.copied /
 * calculator.copyToClipboard keys, which are already translated in all
 * thirteen locales. No new English was introduced, because English is a
 * source for this site and not the site.
 */

interface CopyButtonProps {
  /** Exactly what lands on the clipboard. */
  value: string;
  /** Which field was copied — goes to analytics, not to the screen. */
  label: string;
  /** Which calculator the click came from, so the event can be segmented. */
  surface: string;
  /** Icon-only, for tight rows. The accessible name is unaffected. */
  compact?: boolean;
  className?: string;
}

export function CopyButton({
  value,
  label,
  surface,
  compact = false,
  className = "",
}: CopyButtonProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  /* A click, then a route change inside 1.4s, would otherwise set state on an
   * unmounted component. */
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onClick = useCallback(async () => {
    const ok = await copyToClipboard(value);
    if (!ok) return; // a failed copy must not claim success
    setCopied(true);
    track("copy_dimensions", { label, surface });
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1400);
  }, [value, label, surface]);

  const word = copied ? t("calculator", "copied") : t("calculator", "copy");

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!value}
      data-testid="copy-button"
      aria-label={t("calculator", "copyToClipboard")}
      title={t("calculator", "copyToClipboard")}
      className={
        "inline-flex flex-shrink-0 items-center gap-1 rounded-md border " +
        "border-[var(--border)] px-2 py-1 text-xs font-medium " +
        "text-[var(--muted)] transition-colors " +
        "hover:text-[var(--foreground)] hover:border-[var(--accent)] " +
        "focus-visible:outline focus-visible:outline-2 " +
        "focus-visible:outline-[var(--accent)] " +
        "disabled:opacity-40 disabled:cursor-not-allowed " +
        className
      }
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {copied ? (
          <polyline points="20 6 9 17 4 12" />
        ) : (
          <>
            <rect x="9" y="9" width="12" height="12" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </>
        )}
      </svg>
      {!compact && <span>{word}</span>}
      {/* Compact buttons still announce the change; the icon alone does not. */}
      {compact && <span className="sr-only">{word}</span>}
    </button>
  );
}
