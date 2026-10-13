"use client";

import type React from "react";
import { CopyButton } from "@/components/CopyButton";

/* The label-and-value row the tool calculators lay their answers out in.
 *
 * This was three byte-identical local `Row` helpers — one each in
 * PrintCropCalculator, ScreenSizeCalculator and SensorCropCalculator. They are
 * one component now because the copy button had to be added to all three, and
 * adding the same thing in three places is how they came to be three copies in
 * the first place.
 *
 * `value` stays React.ReactNode because PrintCrop passes a unit toggle through
 * it. `copyValue` is therefore a separate plain string rather than something
 * derived from the node: you cannot put JSX on a clipboard, and the row that
 * holds a pair of buttons is not a row anyone wants to copy.
 */
export function ResultRow({
  label,
  value,
  strong,
  copyValue,
  copyLabel,
  surface,
}: {
  label: string;
  value: React.ReactNode;
  strong?: boolean;
  /** Plain text for the clipboard. Omit and no button is rendered. */
  copyValue?: string;
  /** Analytics label for which field this is. Required with copyValue. */
  copyLabel?: string;
  /** Analytics label for which calculator. Required with copyValue. */
  surface?: string;
}) {
  return (
    <div
      className="flex justify-between gap-4 py-2 text-sm"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span className="inline-flex items-center gap-2">
        <span
          className="font-mono text-right"
          style={{ color: strong ? "var(--accent)" : "var(--foreground)" }}
        >
          {value}
        </span>
        {copyValue && copyLabel && surface && (
          <CopyButton value={copyValue} label={copyLabel} surface={surface} compact />
        )}
      </span>
    </div>
  );
}
