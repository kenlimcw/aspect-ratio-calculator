"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import {
  RATIOS,
  DEFAULT_RATIO,
  screenSize,
  compareAtSameDiagonal,
  sameDiagonalSurprise,
  convert,
  fmt1,
  pct1,
  type RatioId,
  type Unit,
} from "@/lib/tools/screen-size-calculator";

/* A diagonal alone under-specifies a screen; the widget exists to make that
 * visible rather than just to do the division. So it always renders three
 * things, not one: the dimensions for the ratio you picked, the same
 * diagonal run through every other ratio (the table), and the specific
 * 16:9-vs-21:9 trade the brief calls out by name (the callout). All three
 * come from the same `screenSize` call in the engine file — nothing here
 * re-derives the geometry.
 */
export function ScreenSizeCalculator() {
  const { t } = useTranslation();
  const M = (k: string, v?: Record<string, string>) => t("screenSizeTool", k, v);

  const [ratioId, setRatioId] = useState<RatioId>(DEFAULT_RATIO);
  const [unit, setUnit] = useState<Unit>("in");
  // Kept as a string so the field can hold "", "3.", etc. while typing;
  // parsed on every render rather than in an onChange handler so a paste or
  // an autofill is handled the same way as a keystroke.
  const [diagonalStr, setDiagonalStr] = useState("34");

  const diagonal = parseFloat(diagonalStr);
  const valid = Number.isFinite(diagonal) && diagonal > 0;

  // The button label and every interpolated "{unit}" must read the same word,
  // so both are driven off this one translated value rather than the raw
  // internal "in"/"cm" code — otherwise a locale that renames the button
  // (e.g. inches -> "po") would still print the untranslated code everywhere
  // a number is shown.
  const unitLabel = unit === "in" ? M("unitIn") : M("unitCm");

  const ratio = RATIOS.find((r) => r.id === ratioId) ?? RATIOS[0];
  const size = useMemo(() => (valid ? screenSize(diagonal, ratio.r) : null), [valid, diagonal, ratio]);
  const table = useMemo(
    () => (valid ? compareAtSameDiagonal(diagonal) : []),
    [valid, diagonal],
  );
  const surprise = useMemo(
    () => (valid ? sameDiagonalSurprise(diagonal) : null),
    [valid, diagonal],
  );

  function setUnitAndConvert(next: Unit) {
    if (next === unit) return;
    if (valid) setDiagonalStr(fmt1(convert(diagonal, unit, next)));
    setUnit(next);
  }

  return (
    <div className="w-full">
      {/* ── ratio + unit + diagonal ──────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-4">
        {RATIOS.map((r) => (
          <button
            data-ratio={r.id}
            key={r.id}
            type="button"
            onClick={() => setRatioId(r.id)}
            aria-pressed={r.id === ratioId}
            className="px-3 py-2 text-sm rounded-md border transition-colors"
            style={{
              borderColor: r.id === ratioId ? "var(--accent)" : "var(--border)",
              background: r.id === ratioId ? "var(--accent-glow)" : "var(--surface)",
              color: r.id === ratioId ? "var(--accent)" : "var(--foreground-dim)",
            }}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap items-end gap-3 mb-6">
        <div className="flex-1 min-w-[10rem]">
          <label
            htmlFor="screen-size-diagonal"
            className="block text-xs uppercase tracking-wider mb-2"
            style={{ color: "var(--muted)" }}
          >
            {M("diagonalLabel")}
          </label>
          <input
            id="screen-size-diagonal"
            type="number"
            inputMode="decimal"
            min="0"
            step="0.1"
            value={diagonalStr}
            onChange={(e) => setDiagonalStr(e.target.value)}
            className="w-full px-3 py-2 text-sm rounded-md font-mono"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
          />
        </div>
        <div className="flex gap-2">
          {(["in", "cm"] as Unit[]).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnitAndConvert(u)}
              aria-pressed={u === unit}
              className="px-3 py-2 text-sm rounded-md border transition-colors"
              style={{
                borderColor: u === unit ? "var(--accent)" : "var(--border)",
                background: u === unit ? "var(--accent-glow)" : "var(--surface)",
                color: u === unit ? "var(--accent)" : "var(--foreground-dim)",
              }}
            >
              {u === "in" ? M("unitIn") : M("unitCm")}
            </button>
          ))}
        </div>
      </div>

      {/* ── the number people came for ───────────────────────────── */}
      {!valid || !size ? (
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          {M("invalidDiagonal")}
        </p>
      ) : (
        <>
          <Row
            label={M("dimensionsLabel", { ratio: ratio.label })}
            value={M("dimensionsFormat", { width: fmt1(size.width), height: fmt1(size.height), unit: unitLabel })}
            strong
          />
          <Row label={M("areaLabel")} value={M("areaFormat", { area: fmt1(size.area), unit: unitLabel })} />

          {/* ── same diagonal, five different rectangles ───────────── */}
          <h3 className="text-sm font-semibold mt-6 mb-2" style={{ color: "var(--foreground)" }}>
            {M("compareHeading", { d: fmt1(diagonal), unit: unitLabel })}
          </h3>
          <div className="text-sm" style={{ color: "var(--foreground-dim)" }}>
            {table.map(({ ratio: r, size: s }) => (
              <div
                key={r.id}
                className="flex justify-between gap-4 py-1.5"
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <span
                  className="font-mono"
                  style={{ color: r.id === ratioId ? "var(--accent)" : "var(--foreground-dim)" }}
                >
                  {r.label}
                </span>
                <span className="font-mono text-right">
                  {M("compareRowFormat", { width: fmt1(s.width), height: fmt1(s.height), unit: unitLabel, area: fmt1(s.area) })}
                </span>
              </div>
            ))}
          </div>

          {/* ── the surprise: same diagonal, less height AND less area ── */}
          {surprise && (
            <p
              className="mt-4 text-sm leading-relaxed p-3 rounded-md"
              style={{ background: "var(--accent-glow)", color: "var(--foreground)" }}
            >
              {M("surprise", {
                d: fmt1(diagonal),
                unit: unitLabel,
                h169: fmt1(surprise.a.height),
                a169: fmt1(surprise.a.area),
                h219: fmt1(surprise.b.height),
                a219: fmt1(surprise.b.area),
                pctHeight: pct1(surprise.heightLostFraction),
                pctArea: pct1(surprise.areaLostFraction),
              })}
            </p>
          )}
        </>
      )}
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-4 py-2 text-sm" style={{ borderBottom: "1px solid var(--border)" }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span className="font-mono text-right" style={{ color: strong ? "var(--accent)" : "var(--foreground)" }}>
        {value}
      </span>
    </div>
  );
}
