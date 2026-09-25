"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import { PHONES, screenCrop, pct } from "@/lib/safe-zones";
import { phoneById, DEFAULT_PHONE_ID, hasNoLoss, marginToKeepClear } from "@/lib/tools/why-instagram-crops-reels";

/* One frame, one loss — deliberately less than the reference safe-zone cell
 * draws, because that cell's interface bands are a different question this
 * page is not trying to answer. What's shown here is only the screen crop:
 * the 1080×1920 export, scaled to fill the picked phone's screen top to
 * bottom, with the two edge strips that scaling pushes off the glass shaded
 * the same way the reference cell shades its own crop overlay. The frame is
 * sized with CSS percentages of the export's own aspect ratio, not a fixed
 * picture, so the drawn strip is always the true fraction, not an
 * illustration of roughly the right size.
 */
export function PhoneCropExplainer() {
  const { t } = useTranslation();
  const M = (k: string, v?: Record<string, string>) => t("phoneCropTool", k, v);

  const [phoneId, setPhoneId] = useState(DEFAULT_PHONE_ID);
  const phone = phoneById(phoneId);
  const crop = useMemo(() => screenCrop(phone), [phone]);
  const clear = hasNoLoss(crop);

  const VIDEO_W = 1080;
  const VIDEO_H = 1920;
  const asPctW = (px: number) => `${(px / VIDEO_W) * 100}%`;

  return (
    <div className="w-full">
      {/* ── phone picker ─────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-5" role="group" aria-label={M("phonePickerLabel")}>
        {PHONES.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPhoneId(p.id)}
            aria-pressed={p.id === phoneId}
            className="px-3 py-2 text-sm rounded-md border transition-colors text-left"
            style={{
              borderColor: p.id === phoneId ? "var(--accent)" : "var(--border)",
              background: p.id === phoneId ? "var(--accent-glow)" : "var(--surface)",
              color: p.id === phoneId ? "var(--accent)" : "var(--foreground-dim)",
            }}
          >
            <span className="block">{p.msgKey ? M(p.msgKey) : p.label}</span>
            <span className="block text-xs font-mono opacity-70">
              {p.w} × {p.h}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* ── the frame ──────────────────────────────────────────── */}
        <div className="mx-auto md:mx-0 shrink-0">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{
              width: "min(248px, 72vw)",
              aspectRatio: `${VIDEO_W} / ${VIDEO_H}`,
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
            role="img"
            aria-label={M("frameAlt", { w: String(VIDEO_W), h: String(VIDEO_H) })}
          >
            {/* what survives on this screen */}
            <div
              className="absolute inset-y-0"
              style={{
                left: asPctW(crop.pxPerSide),
                right: asPctW(crop.pxPerSide),
                border: "1px dashed var(--accent)",
                background: "var(--accent-glow)",
              }}
            />
            {crop.pxPerSide > 0 && (
              <>
                <Crop style={{ top: 0, bottom: 0, left: 0, width: asPctW(crop.pxPerSide) }} />
                <Crop style={{ top: 0, bottom: 0, right: 0, width: asPctW(crop.pxPerSide) }} />
              </>
            )}
          </div>
          <p className="text-center text-xs mt-2 font-mono" style={{ color: "var(--muted)" }}>
            {VIDEO_W} × {VIDEO_H}
          </p>
        </div>

        {/* ── the numbers ────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          <Row label={M("screenShape")} value={`${crop.screenRatio.toFixed(3)} : 1`} />
          <Row
            label={M("widthLost")}
            value={
              clear
                ? M("noCrop")
                : M("widthLostValue", { pct: pct(crop.widthLost), px: String(crop.pxPerSide) })
            }
            strong={!clear}
          />

          {/* The honesty the brief is built on: say plainly there is no fix,
            * rather than let a reader keep hunting for an export setting. */}
          <p
            className="mt-4 text-sm leading-relaxed p-3 rounded-md"
            style={{ background: "var(--accent-glow)", color: "var(--foreground)" }}
          >
            {clear ? M("noFixNeeded") : M("noFixExists")}
          </p>

          <h3
            className="text-xs uppercase tracking-wider mt-5 mb-2"
            style={{ color: "var(--muted)" }}
          >
            {M("whatToDoInstead")}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-dim)" }}>
            {clear ? M("whatToDoTextZero") : M("whatToDoText", { pct: marginToKeepClear(crop) })}
          </p>
        </div>
      </div>

      {/* ── the human moment: this is a real, unanswered complaint ── */}
      <blockquote
        className="mt-8 text-sm leading-relaxed p-4 rounded-md"
        style={{ borderLeft: "2px solid var(--accent)", background: "var(--surface)", color: "var(--foreground-dim)" }}
      >
        <p>{M("quoteText")}</p>
        <footer className="mt-2 text-xs" style={{ color: "var(--muted)" }}>
          {M("quoteSource")}
        </footer>
      </blockquote>
    </div>
  );
}

function Crop({ style }: { style: React.CSSProperties }) {
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
