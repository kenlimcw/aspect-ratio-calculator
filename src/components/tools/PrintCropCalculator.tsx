"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import {
  SOURCE_RATIOS,
  PRINT_SIZES,
  cropForPrint,
  lostLengthMm,
  mmToIn,
  mmToCm,
  pct,
} from "@/lib/tools/print-crop-calculator";

type Unit = "in" | "cm";

/* One frame, two boxes. The outer box is the whole photo, drawn at its own
 * shape. The dashed inner box is what the print actually keeps once it is
 * scaled to fill the paper with no border — whatever sits between the two,
 * hatched, is the part that never reaches the print. This is the same
 * two-layer drawing the reference cell uses for its own two losses, because
 * a picture of the cut reads faster than a sentence about it.
 */
export function PrintCropCalculator() {
  const { t } = useTranslation();
  const M = (k: string, v?: Record<string, string>) => t("printCropTool", k, v);
  const [sourceId, setSourceId] = useState(SOURCE_RATIOS[0].id);
  /* Not PRINT_SIZES[0]: that is 6x4, which against the default 3:2 source is
   * the identity case, so the page would open showing "0%, nothing is cut"
   * while its own answer block talks about 6.7% and 16.7%. Open on the crop
   * the reader came to see. */
  const [printId, setPrintId] = useState(
    PRINT_SIZES.find((p) => p.id === "8x10")?.id ?? PRINT_SIZES[1].id
  );
  const [unit, setUnit] = useState<Unit>("in");

  const source = SOURCE_RATIOS.find((s) => s.id === sourceId) ?? SOURCE_RATIOS[0];
  const print = PRINT_SIZES.find((p) => p.id === printId) ?? PRINT_SIZES[0];

  const crop = useMemo(() => cropForPrint(source, print), [source, print]);
  const lostMm = useMemo(() => lostLengthMm(print, crop), [print, crop]);

  const toUnit = (mm: number) => (unit === "in" ? mmToIn(mm) : mmToCm(mm));
  const fmt = (mm: number) => toUnit(mm).toFixed(unit === "in" ? 2 : 1);
  const unitLabel = M(unit === "in" ? "unitIn" : "unitCm");
  const printLabel = print.msgKey ? M(print.msgKey) : (print.label ?? print.id);
  const cutPct = `${crop.fractionPerSide * 100}%`;

  return (
    <div className="w-full">
      {/* ── source ratio ─────────────────────────────────────────── */}
      <div className="mb-5">
        <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
          {M("sourceLabel")}
        </label>
        <div className="flex flex-wrap gap-2">
          {SOURCE_RATIOS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSourceId(s.id)}
              aria-pressed={s.id === sourceId}
              className="px-3 py-2 text-sm rounded-md border transition-colors"
              style={{
                borderColor: s.id === sourceId ? "var(--accent)" : "var(--border)",
                background: s.id === sourceId ? "var(--accent-glow)" : "var(--surface)",
                color: s.id === sourceId ? "var(--accent)" : "var(--foreground-dim)",
              }}
            >
              {s.label} — {M(s.hintKey)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* ── the frame ──────────────────────────────────────────── */}
        <div className="mx-auto md:mx-0 shrink-0">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              width: "min(248px, 72vw)",
              aspectRatio: `${source.long} / ${source.short}`,
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
            role="img"
            aria-label={M("frameAlt", { source: source.label, print: printLabel })}
          >
            {crop.croppedAxis !== "none" && (
              <>
                {/* the part the print keeps */}
                <div
                  className="absolute"
                  style={
                    crop.croppedAxis === "width"
                      ? { top: 0, bottom: 0, left: cutPct, right: cutPct, border: "1px dashed var(--accent)", background: "var(--accent-glow)" }
                      : { left: 0, right: 0, top: cutPct, bottom: cutPct, border: "1px dashed var(--accent)", background: "var(--accent-glow)" }
                  }
                />
                {/* the two strips that never reach the print */}
                {crop.croppedAxis === "width" ? (
                  <>
                    <Cut style={{ top: 0, bottom: 0, left: 0, width: cutPct }} />
                    <Cut style={{ top: 0, bottom: 0, right: 0, width: cutPct }} />
                  </>
                ) : (
                  <>
                    <Cut style={{ left: 0, right: 0, top: 0, height: cutPct }} />
                    <Cut style={{ left: 0, right: 0, bottom: 0, height: cutPct }} />
                  </>
                )}
              </>
            )}
          </div>
          <p className="text-center text-xs mt-2 font-mono" style={{ color: "var(--muted)" }}>
            {M("frameCaption", { source: source.label, print: printLabel })}
          </p>
        </div>

        {/* ── the numbers ────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
              {M("printSizeLabel")}
            </label>
            <select
              value={printId}
              onChange={(e) => setPrintId(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-md"
              style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}
            >
              {PRINT_SIZES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.msgKey ? M(p.msgKey) : p.label}
                </option>
              ))}
            </select>
          </div>

          <Row
            label={M("unitLabel")}
            value={
              <span className="inline-flex gap-1">
                {(["in", "cm"] as Unit[]).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setUnit(u)}
                    aria-pressed={unit === u}
                    className="px-2 py-0.5 text-xs rounded border"
                    style={{
                      borderColor: unit === u ? "var(--accent)" : "var(--border)",
                      color: unit === u ? "var(--accent)" : "var(--foreground-dim)",
                    }}
                  >
                    {M(u === "in" ? "unitIn" : "unitCm")}
                  </button>
                ))}
              </span>
            }
          />

          <Row
            label={M("printSizeLabel")}
            value={M("dimsFormat", { first: fmt(print.firstMm), second: fmt(print.secondMm), unit: unitLabel })}
          />
          <Row label={M("sourceShapeLabel")} value={`${crop.sourceRatio.toFixed(3)} : 1`} />
          <Row label={M("printShapeLabel")} value={`${crop.printRatio.toFixed(3)} : 1`} />

          <Row
            label={M("croppedLabel")}
            value={
              crop.croppedAxis === "none"
                ? M("noCrop")
                : M("croppedValue", {
                    pct: pct(crop.fractionLost),
                    axis: M(crop.croppedAxis === "width" ? "axisLeftRight" : "axisTopBottom"),
                    amount: M("amountFormat", { value: fmt(lostMm / 2), unit: unitLabel }),
                  })
            }
            strong={crop.croppedAxis !== "none"}
          />
        </div>
      </div>
    </div>
  );
}

function Cut({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute"
      style={{
        background:
          "repeating-linear-gradient(45deg, color-mix(in srgb, var(--accent) 34%, transparent) 0 4px, transparent 4px 8px)",
        ...style,
      }}
    />
  );
}

function Row({ label, value, strong }: { label: string; value: React.ReactNode; strong?: boolean }) {
  return (
    <div className="flex justify-between gap-4 py-2 text-sm" style={{ borderBottom: "1px solid var(--border)" }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span className="font-mono text-right" style={{ color: strong ? "var(--accent)" : "var(--foreground)" }}>
        {value}
      </span>
    </div>
  );
}
