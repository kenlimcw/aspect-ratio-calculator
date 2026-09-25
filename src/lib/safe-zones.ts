/* Two different things get called a "safe zone", and conflating them is why
 * every page on this subject is vague.
 *
 *   1. INTERFACE COVER — the strips of the frame the app draws its own controls
 *      over: caption stack, action rail, profile bar, progress bar. These are
 *      somebody's measurement of somebody's UI on some build, they move without
 *      announcement, and nobody who publishes them says when they looked.
 *
 *   2. SCREEN CROP — the part of a correctly-sized 9:16 upload that never
 *      reaches the glass, because phone screens are taller than 9:16 and the
 *      player fills the screen top to bottom. This is arithmetic. It does not
 *      depend on the app, it cannot be fixed by an export setting, and it is
 *      the piece nobody has published.
 *
 * The distinction matters for honesty as much as for design: (2) we can prove,
 * (1) we can only cite. So every interface figure below carries where it came
 * from and when, and `verified` says whether WE measured it rather than
 * inheriting it. An unverified number is still shown — it is the best available
 * — but it is never presented as ours.
 */

export interface SafeZoneSource {
  /** ISO date the figure was established. Stale numbers are worse than none. */
  checked: string;
  /** True only when measured from a screenshot by us, against a named build. */
  verified: boolean;
}

export interface PlatformSafeZone {
  id: string;
  label: string;
  /** Every one of these platforms takes the same canvas. The canvas is not the
   *  problem; what the app paints on top of it is. */
  frame: { w: number; h: number };
  /** Pixels of the 1080x1920 frame reserved by the interface, per edge. */
  cover: { top: number; bottom: number; left: number; right: number };
  /** Key prefix into the `safeZoneTool` message namespace. The prose that
   *  describes each strip is content, and content on this site is translated
   *  into all thirteen locales — so it lives in the message files, not here. */
  msg: string;
  provenance: SafeZoneSource;
}

interface Frame { w: number; h: number }
const FRAME: Frame = { w: 1080, h: 1920 };

export const PLATFORMS: PlatformSafeZone[] = [
  {
    id: "reels",
    label: "Instagram Reels",
    msg: "reels",
    frame: FRAME,
    cover: { top: 250, bottom: 250, left: 60, right: 180 },
    provenance: { checked: "2026-03-08", verified: false },
  },
  {
    id: "tiktok",
    label: "TikTok",
    msg: "tiktok",
    frame: FRAME,
    cover: { top: 130, bottom: 480, left: 60, right: 200 },
    provenance: { checked: "2026-09-25", verified: false },
  },
  {
    id: "shorts",
    label: "YouTube Shorts",
    msg: "shorts",
    frame: FRAME,
    cover: { top: 140, bottom: 300, left: 60, right: 180 },
    provenance: { checked: "2026-09-25", verified: false },
  },
];

/* ── the part that is ours ──────────────────────────────────────────────── */

export interface Phone {
  id: string;
  label: string;
  /** Empty when the name is translated rather than a product name. */
  msgKey?: string;
  /** Physical pixel resolution as published by the manufacturer. */
  w: number;
  h: number;
}

/** Published resolutions. The arithmetic below is derived from these and from
 *  nothing else, so anyone can check it in a minute. */
export const PHONES: Phone[] = [
  { id: "iphone-15", label: "iPhone 15 / 15 Pro", w: 1179, h: 2556 },
  { id: "iphone-16-pro", label: "iPhone 16 Pro", w: 1206, h: 2622 },
  { id: "pixel-8", label: "Pixel 8", w: 1080, h: 2400 },
  { id: "galaxy-s24", label: "Galaxy S24", w: 1080, h: 2340 },
  { id: "nine-sixteen", label: "", msgKey: "trueNineSixteen", w: 1080, h: 1920 },
];

export interface ScreenCrop {
  /** Screen shape, e.g. 2.168 for an iPhone 15. */
  screenRatio: number;
  /** Fraction of the video's width pushed off the screen, 0-1. */
  widthLost: number;
  /** Same, per side. */
  perSide: number;
  /** Those fractions in pixels of a 1080-wide upload. */
  pxLost: number;
  pxPerSide: number;
}

/** A 9:16 video on a taller-than-9:16 screen, scaled to fill top to bottom.
 *
 *  The video must grow until its height matches the screen, so the scale factor
 *  is screenH/videoH; its width then becomes videoW * that, and everything past
 *  the screen's own width is off the edge. A screen at exactly 9:16 loses
 *  nothing, which is the check that the formula is right. */
export function screenCrop(phone: Phone, video: Frame = FRAME): ScreenCrop {
  const scale = phone.h / video.h;
  const scaledW = video.w * scale;
  const overflow = Math.max(0, scaledW - phone.w);
  const widthLost = scaledW === 0 ? 0 : overflow / scaledW;
  return {
    screenRatio: phone.h / phone.w,
    widthLost,
    perSide: widthLost / 2,
    pxLost: Math.round(widthLost * video.w),
    pxPerSide: Math.round((widthLost / 2) * video.w),
  };
}

/** The union: what survives BOTH the interface and the glass, which is the
 *  question people are actually asking and no published safe-zone graphic
 *  answers, because they all stop at the interface. */
export function combinedSafeArea(platform: PlatformSafeZone, phone: Phone) {
  const crop = screenCrop(phone, platform.frame);
  const left = Math.max(platform.cover.left, crop.pxPerSide);
  const right = Math.max(platform.cover.right, crop.pxPerSide);
  return {
    left,
    right,
    top: platform.cover.top,
    bottom: platform.cover.bottom,
    width: platform.frame.w - left - right,
    height: platform.frame.h - platform.cover.top - platform.cover.bottom,
    /** True when the screen shape, not the app, is what sets the side margin. */
    screenDominatesSides: crop.pxPerSide > Math.max(platform.cover.left, platform.cover.right),
  };
}

export const pct = (x: number) => `${(x * 100).toFixed(1)}%`;
