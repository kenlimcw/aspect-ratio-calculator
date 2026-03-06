"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

interface Props {
  w: number; // ratio width unit  e.g. 16
  h: number; // ratio height unit e.g. 9
  label: string; // e.g. "16:9"
  calcUrl: string; // link to full calculator pre-set to this ratio
}

export function RatioCalculator({ w, h, label, calcUrl }: Props) {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [lastEdited, setLastEdited] = useState<"w" | "h" | null>(null);

  const handleWidth = useCallback(
    (val: string) => {
      setWidth(val);
      setLastEdited("w");
      const n = parseFloat(val);
      if (!isNaN(n) && n > 0) {
        const computed = Math.round((n * h) / w);
        setHeight(String(computed));
      } else {
        setHeight("");
      }
    },
    [w, h]
  );

  const handleHeight = useCallback(
    (val: string) => {
      setHeight(val);
      setLastEdited("h");
      const n = parseFloat(val);
      if (!isNaN(n) && n > 0) {
        const computed = Math.round((n * w) / h);
        setWidth(String(computed));
      } else {
        setWidth("");
      }
    },
    [w, h]
  );

  const hasResult = width !== "" && height !== "";
  const decimal = (w / h).toFixed(3);

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-0.5">
            Quick Calculator
          </p>
          <p className="text-xs text-[var(--muted)]">
            Locked to{" "}
            <span className="font-mono text-[var(--accent)]">{label}</span>
            {" "}({decimal}:1) — type either dimension
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
            Width <span className="text-[var(--muted)] font-normal">(px)</span>
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="1"
            placeholder="e.g. 1920"
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
            Height <span className="text-[var(--muted)] font-normal">(px)</span>
          </label>
          <input
            type="number"
            inputMode="numeric"
            min="1"
            placeholder="e.g. 1080"
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
        <div className="mt-3 flex items-center gap-2 rounded-lg bg-[var(--accent-glow)] border border-[var(--accent)]/20 px-3 py-2">
          <span className="text-[var(--accent)] text-xs">✓</span>
          <p className="text-xs text-[var(--foreground-dim)]">
            <span className="font-mono text-[var(--foreground)]">{Number(width).toLocaleString()}</span>
            {" × "}
            <span className="font-mono text-[var(--foreground)]">{Number(height).toLocaleString()}</span>
            {" px — "}
            {lastEdited === "w" ? "height" : "width"} calculated for {label}
          </p>
        </div>
      )}

      {/* Full calculator link */}
      <div className="mt-3 pt-3 border-t border-[var(--border)] flex items-center justify-between">
        <p className="text-xs text-[var(--muted)]">
          Need scaling, presets, or image upload?
        </p>
        <Link
          href={calcUrl}
          className="text-xs font-medium text-[var(--accent)] hover:underline flex-shrink-0"
        >
          Full calculator →
        </Link>
      </div>
    </div>
  );
}
