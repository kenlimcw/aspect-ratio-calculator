"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import {
  SENSORS,
  FULL_FRAME,
  diagonal,
  equivalence,
  formatCrop,
} from "@/lib/tools/sensor-crop-factor";

/* One diagram, all six formats overlaid on a common centre and scaled in
 * proportion to their real millimetre width and height — not six icons at
 * arbitrary sizes, which is how most "sensor size comparison" pages
 * misrepresent just how much bigger full frame is than a 1-inch sensor.
 * Drawn largest-first so a small sensor is never hidden behind one painted
 * on top of it. Percentages of a fixed box, the same trick the reference
 * safe-zone frame uses, so it stays honest at any rendered size.
 */
// Scaled off the WIDEST and TALLEST sensor in the list — medium format,
// 44 × 33mm — not off full frame. Full frame is the crop-factor reference,
// but it is not the biggest sensor here, and sizing the box to it clipped
// medium format's rectangle against its own container.
const MAX_SENSOR_W = Math.max(...SENSORS.map((s) => s.w));
const MAX_SENSOR_H = Math.max(...SENSORS.map((s) => s.h));
const DIAGRAM_W = 220; // px the widest sensor maps to
const SCALE = DIAGRAM_W / MAX_SENSOR_W;
const DIAGRAM_H = MAX_SENSOR_H * SCALE;
const BY_SIZE_DESC = [...SENSORS].sort((a, b) => diagonal(b) - diagonal(a));

export function SensorCropCalculator() {
  const { t } = useTranslation();
  const M = (k: string, v?: Record<string, string>) => t("sensorCropTool", k, v);

  // APS-C Canon, not full frame: the identity case is the control, not the
  // headline, so it should be one click away rather than what loads by
  // default and looks like nothing is happening.
  const [sensorId, setSensorId] = useState(SENSORS[1].id);

  // The input keeps whatever the visitor is typing, including "", "-" or a
  // half-finished decimal — a text field has to tolerate all of those. The
  // NUMBER used for the maths only moves when a full valid positive value has
  // landed, so clearing the field to retype it doesn't flash the results to
  // zero (parseFloat("") is NaN, and NaN or a negative focal length has no
  // physical meaning to compute an equivalent for).
  const [focalStr, setFocalStr] = useState("50");
  const [apertureStr, setApertureStr] = useState("2.8");
  const [focal, setFocal] = useState(50);
  const [aperture, setAperture] = useState(2.8);

  const updateFocal = (v: string) => {
    setFocalStr(v);
    const n = parseFloat(v);
    if (Number.isFinite(n) && n > 0) setFocal(n);
  };
  const updateAperture = (v: string) => {
    setApertureStr(v);
    const n = parseFloat(v);
    if (Number.isFinite(n) && n > 0) setAperture(n);
  };

  const sensor = SENSORS.find((s) => s.id === sensorId) ?? SENSORS[0];

  const result = useMemo(() => equivalence(sensor, focal, aperture), [sensor, focal, aperture]);
  const sensorDiag = useMemo(() => diagonal(sensor), [sensor]);
  const fullFrameDiag = useMemo(() => diagonal(FULL_FRAME), []);
  const isFullFrame = sensor.id === FULL_FRAME.id;

  return (
    <div className="w-full">
      {/* ── sensor picker ────────────────────────────────────────── */}
      <div
        className="flex flex-wrap gap-2 mb-5"
        role="group"
        aria-label={M("sensorPickerLabel")}
      >
        {SENSORS.map((s) => (
          <button
            data-sensor={s.id}
            key={s.id}
            type="button"
            onClick={() => setSensorId(s.id)}
            aria-pressed={s.id === sensorId}
            className="px-3 py-2 text-sm rounded-md border transition-colors text-left"
            style={{
              borderColor: s.id === sensorId ? "var(--accent)" : "var(--border)",
              background: s.id === sensorId ? "var(--accent-glow)" : "var(--surface)",
              color: s.id === sensorId ? "var(--accent)" : "var(--foreground-dim)",
            }}
          >
            <span className="block">{M(s.msgKey)}</span>
            <span className="block text-xs font-mono opacity-70">
              {s.w} × {s.h} mm
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* ── size-comparison diagram ──────────────────────────────── */}
        <div className="mx-auto md:mx-0 shrink-0">
          <div
            className="relative"
            style={{ width: DIAGRAM_W, height: DIAGRAM_H }}
            role="img"
            aria-label={M("diagramAlt")}
          >
            {BY_SIZE_DESC.map((s) => (
              <div
                key={s.id}
                className="absolute rounded-sm"
                style={{
                  width: s.w * SCALE,
                  height: s.h * SCALE,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  border: s.id === sensorId ? "2px solid var(--accent)" : "1px solid var(--border)",
                  background: s.id === sensorId ? "var(--accent-glow)" : "transparent",
                }}
              />
            ))}
          </div>
          <p className="text-center text-xs mt-2 font-mono" style={{ color: "var(--muted)" }}>
            {M("diagramCaption")}
          </p>
        </div>

        {/* ── the numbers ────────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          <Row
            label={M("diagonalLabel")}
            value={M("diagonalValue", { sensor: sensorDiag.toFixed(2), full: fullFrameDiag.toFixed(2) })}
          />
          <Row label={M("cropFactorLabel")} value={formatCrop(result.cropFactor)} strong />

          <div className="grid grid-cols-2 gap-3 mt-5 mb-2">
            <div>
              <label
                className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                {M("focalLabel")}
              </label>
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="1"
                value={focalStr}
                onChange={(e) => updateFocal(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-md font-mono"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}
              />
            </div>
            <div>
              <label
                className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: "var(--muted)" }}
              >
                {M("apertureLabel")}
              </label>
              <input
                type="number"
                inputMode="decimal"
                min="0"
                step="0.1"
                value={apertureStr}
                onChange={(e) => updateAperture(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-md font-mono"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", color: "var(--foreground)" }}
              />
            </div>
          </div>

          <Row
            label={M("equivFocalLabel")}
            value={M("equivFocalValue", { value: result.equivFocalLength.toFixed(1) })}
            strong
          />
          <Row
            label={M("equivApertureLabel")}
            value={M("equivApertureValue", { value: result.equivAperture.toFixed(2) })}
            strong
          />

          {/* The line the brief exists to force onto the page: this number
            * is a depth-of-field figure, and reads as an exposure figure if
            * nobody says otherwise. */}
          <p
            className="mt-4 text-sm leading-relaxed p-3 rounded-md"
            style={{ background: "var(--accent-glow)", color: "var(--foreground)" }}
          >
            {M("exposureNote", { aperture: aperture.toFixed(1) })}
          </p>

          {isFullFrame && (
            <p className="mt-3 text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
              {M("fullFrameNote")}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div
      className="flex justify-between gap-4 py-2 text-sm"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span
        className="font-mono text-right"
        style={{ color: strong ? "var(--accent)" : "var(--foreground)" }}
      >
        {value}
      </span>
    </div>
  );
}
