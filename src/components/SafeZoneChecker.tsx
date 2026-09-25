"use client";

import { useMemo, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";
import {
  PLATFORMS,
  PHONES,
  screenCrop,
  combinedSafeArea,
  pct,
} from "@/lib/safe-zones";

/* Two overlays on one frame, because they are two different losses and every
 * other safe-zone graphic shows only the first.
 *
 *   interface cover — cited, dated, and labelled as not ours
 *   screen crop     — computed here from published screen resolutions
 *
 * The frame is drawn with CSS percentages off a 1080x1920 box so it stays
 * honest at any rendered size: the overlay is the same fraction of the frame
 * that the real one is, rather than a picture of roughly the right shape.
 */
export function SafeZoneChecker() {
  const { t } = useTranslation();
  const M = (k: string, v?: Record<string, string>) => t("safeZoneTool", k, v);
  const [platformId, setPlatformId] = useState(PLATFORMS[0].id);
  const [phoneId, setPhoneId] = useState(PHONES[0].id);
  const [showScreen, setShowScreen] = useState(true);

  const platform = PLATFORMS.find((p) => p.id === platformId) ?? PLATFORMS[0];
  const phone = PHONES.find((p) => p.id === phoneId) ?? PHONES[0];

  const crop = useMemo(() => screenCrop(phone, platform.frame), [phone, platform]);
  const area = useMemo(() => combinedSafeArea(platform, phone), [platform, phone]);

  const { w: FW, h: FH } = platform.frame;
  const asPctW = (px: number) => `${(px / FW) * 100}%`;
  const asPctH = (px: number) => `${(px / FH) * 100}%`;

  return (
    <div className="w-full">
      {/* ── controls ─────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-2 mb-5">
        {PLATFORMS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setPlatformId(p.id)}
            aria-pressed={p.id === platformId}
            className="px-3 py-2 text-sm rounded-md border transition-colors"
            style={{
              borderColor: p.id === platformId ? "var(--accent)" : "var(--border)",
              background: p.id === platformId ? "var(--accent-glow)" : "var(--surface)",
              color: p.id === platformId ? "var(--accent)" : "var(--foreground-dim)",
            }}
          >
            {p.label}
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
              aspectRatio: `${FW} / ${FH}`,
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
            role="img"
            aria-label={`${platform.label} — ${M("frameAlt", { w: String(FW), h: String(FH) })}`}
          >
            {/* the clear middle */}
            <div
              className="absolute"
              style={{
                top: asPctH(platform.cover.top),
                bottom: asPctH(platform.cover.bottom),
                left: asPctW(area.left),
                right: asPctW(area.right),
                border: "1px dashed var(--accent)",
                background: "var(--accent-glow)",
              }}
            />
            {/* interface cover, top and bottom */}
            <Band style={{ top: 0, left: 0, right: 0, height: asPctH(platform.cover.top) }} />
            <Band style={{ bottom: 0, left: 0, right: 0, height: asPctH(platform.cover.bottom) }} />
            <Band style={{ top: 0, bottom: 0, left: 0, width: asPctW(platform.cover.left) }} />
            <Band style={{ top: 0, bottom: 0, right: 0, width: asPctW(platform.cover.right) }} />

            {/* screen crop, drawn over the top because it is a different loss */}
            {showScreen && crop.pxPerSide > 0 && (
              <>
                <Crop style={{ top: 0, bottom: 0, left: 0, width: asPctW(crop.pxPerSide) }} />
                <Crop style={{ top: 0, bottom: 0, right: 0, width: asPctW(crop.pxPerSide) }} />
              </>
            )}
          </div>
          <p
            className="text-center text-xs mt-2 font-mono"
            style={{ color: "var(--muted)" }}
          >
            {FW} × {FH}
          </p>
        </div>

        {/* ── the numbers ────────────────────────────────────────── */}
        <div className="flex-1 min-w-0">
          <Row label={M("clearArea")} value={`${area.width} × ${area.height} px`} strong />
          <Row
            label={M("reservedByApp")}
            value={M("reservedFormat", {
              top: String(platform.cover.top),
              bottom: String(platform.cover.bottom),
              left: String(platform.cover.left),
              right: String(platform.cover.right),
            })}
          />

          <div className="mt-5 mb-2">
            <label
              className="block text-xs uppercase tracking-wider mb-2"
              style={{ color: "var(--muted)" }}
            >
              {M("viewedOn")}
            </label>
            <select
              value={phoneId}
              onChange={(e) => setPhoneId(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-md"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              {PHONES.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.msgKey ? M(p.msgKey) : p.label} — {p.w} × {p.h}
                </option>
              ))}
            </select>
          </div>

          <Row label={M("screenShape")} value={`${crop.screenRatio.toFixed(3)} : 1`} />
          <Row
            label={M("widthLost")}
            value={
              crop.widthLost > 0
                ? M("widthLostValue", { pct: pct(crop.widthLost), px: String(crop.pxPerSide) })
                : M("noCrop")
            }
            strong={crop.widthLost > 0}
          />

          <label className="flex items-center gap-2 mt-3 text-sm cursor-pointer" style={{ color: "var(--foreground-dim)" }}>
            <input
              type="checkbox"
              checked={showScreen}
              onChange={(e) => setShowScreen(e.target.checked)}
            />
            {M("showCrop")}
          </label>

          {area.screenDominatesSides && (
            <p
              className="mt-4 text-sm leading-relaxed p-3 rounded-md"
              style={{ background: "var(--accent-glow)", color: "var(--foreground)" }}
            >
              {M("screenDominates", { px: String(crop.pxPerSide) })}
            </p>
          )}
        </div>
      </div>

      {/* ── what each strip actually contains ─────────────────────── */}
      <ul className="mt-6 text-sm space-y-1" style={{ color: "var(--foreground-dim)" }}>
        <li><strong>{M("stripTop", { px: String(platform.cover.top) })}</strong> — {M(`${platform.msg}Top`)}</li>
        <li><strong>{M("stripBottom", { px: String(platform.cover.bottom) })}</strong> — {M(`${platform.msg}Bottom`)}</li>
        <li><strong>{M("stripSides")}</strong> — {M(`${platform.msg}Sides`)}</li>
      </ul>

      {/* ── provenance. The whole point: say which numbers are ours. ── */}
      <div
        className="mt-6 text-xs leading-relaxed p-3 rounded-md"
        style={{ border: "1px solid var(--border)", color: "var(--muted)" }}
      >
        <p className="mb-2">
          <strong style={{ color: "var(--foreground-dim)" }}>{M("provenanceHeading")}</strong>{" "}
          {M("provenanceOurs")}
        </p>
        <p>
          <strong style={{ color: "var(--foreground-dim)" }}>{M("provenanceNotOurs")}</strong>{" "}
          {M(`${platform.msg}Source`)}{" "}
          {M("provenanceChecked", { date: platform.provenance.checked })}
          {platform.provenance.verified ? "" : M("provenanceUnverified")}. {M("provenanceMoves")}
        </p>
      </div>
    </div>
  );
}

function Band({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute"
      style={{ background: "color-mix(in srgb, var(--foreground) 14%, transparent)", ...style }}
    />
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
