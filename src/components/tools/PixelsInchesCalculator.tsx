"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import { printSizeTable, formatMeasurement } from "@/lib/tools/pixels-to-inches";

/* One pixel size, three DPI standards, and that table is both conversions the
 * brief distinguishes: read the 300 row and you have "what size is this at
 * the standard I chose"; read the 150 row instead and you have "how big can
 * this go and still count as acceptable" — the reverse question, answered by
 * the same division. The 72 row is deliberately the odd one out: it exists to
 * be visibly meaningless for a screen, which is the confusion this page has
 * to resolve rather than repeat.
 */
export function PixelsInchesCalculator() {
  const { t } = useTranslation();
  const M = (k: string, v?: Record<string, string>) => t("pixelsInchesTool", k, v);

  // 3000×4500 is not an arbitrary default. 3000 is the control (exactly 10in
  // at 300 DPI, exactly 20in at 150, no rounding either way), and together
  // they are a real 2:3 photo ratio, so every row in the table lands on a
  // size a print shop actually sells rather than an odd decimal.
  const [widthPx, setWidthPx] = useState(3000);
  const [heightPx, setHeightPx] = useState(4500);

  const rows = useMemo(() => printSizeTable(widthPx, heightPx), [widthPx, heightPx]);

  const onWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    if (Number.isFinite(n) && n > 0) setWidthPx(n);
  };
  const onHeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    if (Number.isFinite(n) && n > 0) setHeightPx(n);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4 mb-6">
        <label className="flex-1 min-w-[140px]">
          <span
            className="block text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--muted)" }}
          >
            {M("widthLabel")}
          </span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            value={widthPx}
            onChange={onWidth}
            data-testid="width-input"
            className="w-full px-3 py-2 text-sm rounded-md font-mono"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          />
        </label>
        <label className="flex-1 min-w-[140px]">
          <span
            className="block text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--muted)" }}
          >
            {M("heightLabel")}
          </span>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            value={heightPx}
            onChange={onHeight}
            data-testid="height-input"
            className="w-full px-3 py-2 text-sm rounded-md font-mono"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          />
        </label>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr style={{ borderBottom: "1px solid var(--border)" }}>
              <th className="text-left py-2 font-normal" style={{ color: "var(--muted)" }}>
                {M("tableStandard")}
              </th>
              <th className="text-right py-2 font-normal" style={{ color: "var(--muted)" }}>
                {M("tableWidth")}
              </th>
              <th className="text-right py-2 font-normal" style={{ color: "var(--muted)" }}>
                {M("tableHeight")}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dpi.id} style={{ borderBottom: "1px solid var(--border)" }}>
                <td className="py-3 pr-2">
                  <div style={{ color: "var(--foreground)" }}>
                    {M(`${row.dpi.msg}Label`)}
                    {row.dpi.id === "large-format" && (
                      <span
                        className="ml-2 text-xs px-2 py-0.5 rounded-full align-middle"
                        style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                      >
                        {M("acceptableBadge")}
                      </span>
                    )}
                  </div>
                  <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                    {M(`${row.dpi.msg}Note`)}
                  </div>
                </td>
                <td
                  className="py-3 text-right font-mono"
                  style={{ color: row.dpi.id === "print" ? "var(--accent)" : "var(--foreground)" }}
                >
                  {M("sizeFormat", {
                    inches: formatMeasurement(row.width.inches),
                    cm: formatMeasurement(row.width.cm),
                  })}
                </td>
                <td
                  className="py-3 text-right font-mono"
                  style={{ color: row.dpi.id === "print" ? "var(--accent)" : "var(--foreground)" }}
                >
                  {M("sizeFormat", {
                    inches: formatMeasurement(row.height.inches),
                    cm: formatMeasurement(row.height.cm),
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* The confusion the whole page exists to resolve, stated plainly. */}
      <div
        className="mt-6 text-xs leading-relaxed p-3 rounded-md"
        style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
      >
        <p>
          <strong style={{ color: "var(--foreground-dim)" }}>{M("noDpiHeading")}</strong>{" "}
          {M("noDpiBody")}
        </p>
      </div>
    </div>
  );
}
