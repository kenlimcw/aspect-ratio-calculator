"use client";

import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { useTranslation } from "@/components/I18nProvider";
import { CopyButton } from "@/components/CopyButton";
import { track } from "@/lib/analytics";

interface Props {
  w: number; // ratio width unit  e.g. 16
  h: number; // ratio height unit e.g. 9
  label: string; // e.g. "16:9"
  calcUrl: string; // link to full calculator pre-set to this ratio
}

export function RatioCalculator({ w, h, label, calcUrl }: Props) {
  const { t } = useTranslation();
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lastEdited, setLastEdited] = useState<"w" | "h" | null>(null);

  /* `calc_run` fires AT MOST ONCE per mount, deliberately.
   *
   * The question it exists to answer is "of the people who land here, how many
   * actually compute something" — so one event per page view makes GA4's
   * totalUsers for the event the answer directly. Firing per keystroke would
   * make the count a measure of typing speed; these handlers run on every
   * change event, so "1920" alone would be four calculations.
   *
   * It is declared in src/lib/analytics.ts and, until now, was never called
   * from anywhere in the app — so the site's single most common action had no
   * measurement at all. */
  const calcRunFired = useRef(false);
  const markCalcRun = useCallback(() => {
    if (calcRunFired.current) return;
    calcRunFired.current = true;
    track("calc_run", { surface: "ratio_page", ratio: label });
  }, [label]);

  const handleWidth = useCallback(
    (val: string) => {
      setWidth(val);
      setLastEdited("w");
      const n = parseFloat(val);
      if (!isNaN(n) && n > 0) {
        const computed = Math.round((n * h) / w);
        setHeight(String(computed));
        markCalcRun();
      } else {
        setHeight("");
      }
    },
    [w, h, markCalcRun]
  );

  const handleHeight = useCallback(
    (val: string) => {
      setHeight(val);
      setLastEdited("h");
      const n = parseFloat(val);
      if (!isNaN(n) && n > 0) {
        const computed = Math.round((n * w) / h);
        setWidth(String(computed));
        markCalcRun();
      } else {
        setWidth("");
      }
    },
    [w, h, markCalcRun]
  );

  const hasResult = width !== "" && height !== "";
  const decimal = (w / h).toFixed(3);

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-0.5">
            {t("ratioCalculator", "quickCalculator")}
          </p>
          <p className="text-xs text-[var(--muted)]">
            {t("ratioCalculator", "lockedTo")}{" "}
            <span className="font-mono text-[var(--accent)]">{label}</span>
            {" "}({decimal}:1) — {t("ratioCalculator", "typeEitherDimension")}
          </p>
        </div>
        <div
          className="w-12 h-8 rounded border-2 border-[var(--accent)] opacity-60 flex-shrink-0"
          style={{ aspectRatio: `${w}/${h}` }}
          aria-hidden="true"
        />
      </div>

      {/* Inputs */}
      <div className="flex items-center gap-3">
        {/* Width */}
        <div className="flex-1">
          <label className="block text-xs text-[var(--muted)] mb-1.5 font-medium">
            {t("ratioCalculator", "width")} <span className="text-[var(--muted)] font-normal">{t("ratioCalculator", "px")}</span>
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="1"
            placeholder={t("ratioCalculator", "egWidth")}
            value={width}
            onChange={(e) => handleWidth(e.target.value)}
            className="
              w-full rounded-lg border border-[var(--border)] bg-[var(--background)]
              px-3 py-2.5 text-sm font-mono text-[var(--foreground)]
              placeholder:text-[var(--muted)] outline-none
              focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30
              transition-colors
            "
          />
        </div>

        {/* Divider */}
        <div className="flex flex-col items-center gap-0.5 pt-5 flex-shrink-0">
          <span className="text-xs font-mono text-[var(--accent)] font-bold">{w}</span>
          <div className="w-px h-4 bg-[var(--border)]" />
          <span className="text-xs font-mono text-[var(--muted)]">{h}</span>
        </div>

        {/* Height */}
        <div className="flex-1">
          <label className="block text-xs text-[var(--muted)] mb-1.5 font-medium">
            {t("ratioCalculator", "height")} <span className="text-[var(--muted)] font-normal">{t("ratioCalculator", "px")}</span>
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="1"
            placeholder={t("ratioCalculator", "egHeight")}
            value={height}
            onChange={(e) => handleHeight(e.target.value)}
            className="
              w-full rounded-lg border border-[var(--border)] bg-[var(--background)]
              px-3 py-2.5 text-sm font-mono text-[var(--foreground)]
              placeholder:text-[var(--muted)] outline-none
              focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/30
              transition-colors
            "
          />
        </div>
      </div>

      {/* Result bar */}
      {hasResult && (
        <div className="mt-3 flex items-center justify-between gap-2 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent)]/20 px-3 py-2">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[var(--accent)] text-xs">✓</span>
            <p className="text-xs text-[var(--foreground-dim)]">
              <span className="font-mono text-[var(--foreground)]">{Number(width).toLocaleString()}</span>
              {" × "}
              <span className="font-mono text-[var(--foreground)]">{Number(height).toLocaleString()}</span>
              {" px — "}
              {t("ratioCalculator", "calculatedFor", { dimension: t("ratioCalculator", lastEdited === "w" ? "height" : "width"), label })}
            </p>
          </div>
          {/* The dead-click target. Clarity logged 42 dead clicks in three days
            * clustered on these pages, because this bar renders accent-coloured
            * monospace numbers exactly like Calculator.tsx's result, which has
            * always had a copy button. The format matches that one — `W × H` —
            * so a value copied from any calculator on the site looks the same. */}
          <CopyButton
            value={`${width} × ${height}`}
            label="ratio-dims"
            surface="ratio_page"
          />
        </div>
      )}

      {/* Full calculator link */}
      <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between">
        <p className="text-xs text-[var(--muted)]">
          {t("ratioCalculator", "needMore")}
        </p>
        <Link
          href={calcUrl}
          className="text-xs font-medium text-[var(--accent)] hover:underline flex-shrink-0"
        >
          {t("ratioCalculator", "fullCalculator")}
        </Link>
      </div>
    </div>
  );
}
