"use client";

import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import {
  ArrowLeftRight,
  ChevronDown,
  Upload,
  Copy,
  Check,
  Code2,
  Smartphone,
  Clapperboard,
  Camera,
  RectangleHorizontal,
  RectangleVertical,
  Square,
  Lock,
  Globe,
  Printer,
  Monitor,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "@/components/I18nProvider";

// ── Preset Data ──────────────────────────────────────────────

interface Preset {
  label: string;
  w: number;
  h: number;
  desc: string;
  defaultW?: number;
  defaultH?: number;
}

interface PresetGroup {
  name: string;
  color: string;
  icon: "social" | "cinema" | "photo";
  presets: Preset[];
}

const QUICK_RATIOS: Preset[] = [
  { label: "16:9", w: 16, h: 9, desc: "Widescreen" },
  { label: "4:3", w: 4, h: 3, desc: "Classic" },
  { label: "1:1", w: 1, h: 1, desc: "Square" },
  { label: "9:16", w: 9, h: 16, desc: "Vertical" },
  { label: "3:2", w: 3, h: 2, desc: "Photo" },
  { label: "21:9", w: 21, h: 9, desc: "Ultrawide" },
  { label: "4:5", w: 4, h: 5, desc: "Portrait" },
];

const PRESET_GROUPS: PresetGroup[] = [
  {
    name: "Social Media",
    color: "var(--accent-amber)",
    icon: "social",
    presets: [
      { label: "Instagram Post", w: 1, h: 1, desc: "Square feed post", defaultW: 1080, defaultH: 1080 },
      { label: "Instagram Story", w: 9, h: 16, desc: "Stories & Reels", defaultW: 1080, defaultH: 1920 },
      { label: "Instagram Portrait", w: 4, h: 5, desc: "Portrait feed post", defaultW: 1080, defaultH: 1350 },
      { label: "YouTube Video", w: 16, h: 9, desc: "Standard widescreen video", defaultW: 1920, defaultH: 1080 },
      { label: "YouTube Thumbnail", w: 16, h: 9, desc: "Video thumbnail", defaultW: 1280, defaultH: 720 },
      { label: "Vertical Video", w: 9, h: 16, desc: "TikTok, Shorts, Reels", defaultW: 1080, defaultH: 1920 },
      { label: "X/Twitter Post", w: 16, h: 9, desc: "Timeline image", defaultW: 1600, defaultH: 900 },
      { label: "X/Twitter Header", w: 3, h: 1, desc: "Profile banner", defaultW: 1500, defaultH: 500 },
      { label: "LinkedIn Post", w: 1.91, h: 1, desc: "Feed image", defaultW: 1200, defaultH: 627 },
      { label: "LinkedIn Banner", w: 4, h: 1, desc: "Profile background", defaultW: 1584, defaultH: 396 },
      { label: "Facebook Post", w: 1.91, h: 1, desc: "Feed image", defaultW: 1200, defaultH: 630 },
      { label: "Facebook Cover", w: 2.63, h: 1, desc: "Page cover photo", defaultW: 820, defaultH: 312 },
      { label: "Pinterest Pin", w: 2, h: 3, desc: "Standard pin", defaultW: 1000, defaultH: 1500 },
    ],
  },
  {
    name: "Cinema & Video",
    color: "var(--accent-rose)",
    icon: "cinema",
    presets: [
      { label: "16:9 HD", w: 16, h: 9, desc: "1.78:1 — Standard widescreen TV & streaming", defaultW: 1920, defaultH: 1080 },
      { label: "UHD 4K", w: 16, h: 9, desc: "1.78:1 — Ultra HD broadcast", defaultW: 3840, defaultH: 2160 },
      { label: "DCI 4K", w: 256, h: 135, desc: "1.90:1 — Digital cinema projection", defaultW: 4096, defaultH: 2160 },
      { label: "2.39:1 Scope", w: 2.39, h: 1, desc: "Modern cinemascope / anamorphic", defaultW: 4096, defaultH: 1716 },
      { label: "2.35:1 Legacy Scope", w: 2.35, h: 1, desc: "Classic anamorphic prints", defaultW: 1920, defaultH: 817 },
      { label: "1.85:1 Flat", w: 1.85, h: 1, desc: "Theatrical flat / Academy wide", defaultW: 1920, defaultH: 1038 },
      { label: "4:3 Classic", w: 4, h: 3, desc: "1.33:1 — Standard definition TV", defaultW: 1440, defaultH: 1080 },
      { label: "IMAX 1.43:1", w: 1.43, h: 1, desc: "Native IMAX film ratio", defaultW: 4096, defaultH: 2864 },
      { label: "21:9 Ultrawide", w: 21, h: 9, desc: "2.33:1 — Ultrawide monitors", defaultW: 2560, defaultH: 1080 },
    ],
  },
  {
    name: "Photography & Print",
    color: "var(--accent-emerald)",
    icon: "photo",
    presets: [
      { label: "3:2 (4×6 print)", w: 3, h: 2, desc: "35mm / DSLR native sensor ratio", defaultW: 6000, defaultH: 4000 },
      { label: "4:3 (6×8 print)", w: 4, h: 3, desc: "Micro Four Thirds sensor", defaultW: 4032, defaultH: 3024 },
      { label: "5:4 (8×10 print)", w: 5, h: 4, desc: "Standard portrait print", defaultW: 4000, defaultH: 3200 },
      { label: "7:5 (5×7 print)", w: 7, h: 5, desc: "Common photo print size", defaultW: 3500, defaultH: 2500 },
      { label: "1:1 Square", w: 1, h: 1, desc: "Square crop / album cover", defaultW: 3000, defaultH: 3000 },
    ],
  },
];

// ── Known Format Recognition ──────────────────────────────────

interface KnownFormat {
  w: number;
  h: number;
  name: string;
}

const KNOWN_FORMATS: KnownFormat[] = [
  { w: 1080, h: 1080, name: "Instagram Post (1:1)" },
  { w: 1080, h: 1920, name: "Instagram Story / TikTok / YouTube Shorts (9:16)" },
  { w: 1080, h: 1350, name: "Instagram Portrait (4:5)" },
  { w: 1920, h: 1080, name: "Full HD / YouTube (16:9)" },
  { w: 1280, h: 720, name: "YouTube Thumbnail / 720p (16:9)" },
  { w: 3840, h: 2160, name: "UHD 4K (16:9)" },
  { w: 4096, h: 2160, name: "DCI 4K (1.90:1)" },
  { w: 4096, h: 1716, name: "DCI 4K Scope (2.39:1)" },
  { w: 1920, h: 817, name: "HD Scope (2.35:1)" },
  { w: 1920, h: 1038, name: "HD Flat (1.85:1)" },
  { w: 1600, h: 900, name: "X/Twitter Post (16:9)" },
  { w: 1500, h: 500, name: "X/Twitter Header (3:1)" },
  { w: 1200, h: 627, name: "LinkedIn Post" },
  { w: 1200, h: 630, name: "Facebook Post" },
  { w: 820, h: 312, name: "Facebook Cover" },
  { w: 1000, h: 1500, name: "Pinterest Pin (2:3)" },
  { w: 6000, h: 4000, name: "24MP DSLR (3:2)" },
  { w: 4032, h: 3024, name: "12MP Smartphone (4:3)" },
  { w: 7680, h: 4320, name: "8K UHD (16:9)" },
  { w: 2560, h: 1440, name: "QHD (16:9)" },
  { w: 2560, h: 1080, name: "Ultrawide QHD (21:9)" },
  { w: 3440, h: 1440, name: "Ultrawide QHD+ (21:9)" },
  { w: 1584, h: 396, name: "LinkedIn Banner (4:1)" },
];

// ── Utility Functions ────────────────────────────────────────

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    [a, b] = [b, a % b];
  }
  return a || 1;
}

function matchKnownFormat(w: number, h: number): string | null {
  for (const fmt of KNOWN_FORMATS) {
    if (fmt.w === w && fmt.h === h) return fmt.name;
  }
  return null;
}

function matchClosestRatio(w: number, h: number): string | null {
  if (w <= 0 || h <= 0) return null;
  const decimal = w / h;
  const known: [string, number][] = [
    ["1:1", 1], ["4:3", 4/3], ["3:2", 3/2], ["16:9", 16/9],
    ["5:4", 5/4], ["7:5", 7/5], ["9:16", 9/16], ["4:5", 4/5],
    ["2:3", 2/3], ["3:1", 3], ["21:9", 21/9],
    ["2.39:1 Scope", 2.39], ["2.35:1 Scope", 2.35], ["1.85:1 Flat", 1.85],
    ["1.43:1 IMAX", 1.43],
  ];
  for (const [name, ratio] of known) {
    if (Math.abs(decimal - ratio) < 0.01) return name;
  }
  return null;
}

function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text: string): boolean {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    return true;
  } catch {
    return false;
  } finally {
    document.body.removeChild(ta);
  }
}

function getOrientation(w: number, h: number): "landscape" | "portrait" | "square" {
  if (w > h) return "landscape";
  if (h > w) return "portrait";
  return "square";
}

function formatRatioLabel(rw: number, rh: number): string {
  return `${rw}:${rh}`;
}

const GROUP_ICONS = {
  social: Smartphone,
  cinema: Clapperboard,
  photo: Camera,
};

// ── Quality Analysis Helpers ─────────────────────────────────

function getQualityVerdict(scalePct: number): { labelKey: string; color: string } {
  if (scalePct > 200) return { labelKey: "heavyUpscaling", color: "var(--accent-rose)" };
  if (scalePct > 105) return { labelKey: "mildUpscaling", color: "var(--accent-amber)" };
  if (scalePct >= 95) return { labelKey: "lossless", color: "var(--accent-emerald)" };
  if (scalePct >= 50) return { labelKey: "goodDownsized", color: "var(--accent-emerald)" };
  return { labelKey: "goodMuchSmaller", color: "var(--accent-emerald)" };
}

function getDpiSizes(w: number, h: number): { dpi: number; labelKey: string; inW: string; inH: string }[] {
  return [
    { dpi: 72, labelKey: "screen72dpi", inW: (w / 72).toFixed(1), inH: (h / 72).toFixed(1) },
    { dpi: 150, labelKey: "webPrint150dpi", inW: (w / 150).toFixed(1), inH: (h / 150).toFixed(1) },
    { dpi: 300, labelKey: "highQualityPrint300dpi", inW: (w / 300).toFixed(1), inH: (h / 300).toFixed(1) },
  ];
}

// ── Image Wizard Data ─────────────────────────────────────────

interface WizardAction {
  label: string;
  targetW: number;
  targetH: number;
  ratioLabel: string;
}

interface WizardPlatform {
  label: string;
  actions: WizardAction[];
}

interface WizardCategory {
  key: string;
  label: string;
  color: string;
  icon: "social" | "web" | "print" | "personal";
  platforms: WizardPlatform[];
}

const WIZARD_CATEGORIES: WizardCategory[] = [
  {
    key: "social",
    label: "Social Media",
    color: "var(--accent-amber)",
    icon: "social",
    platforms: [
      {
        label: "Instagram",
        actions: [
          { label: "Post (1:1)", targetW: 1080, targetH: 1080, ratioLabel: "1:1" },
          { label: "Story / Reel (9:16)", targetW: 1080, targetH: 1920, ratioLabel: "9:16" },
          { label: "Portrait (4:5)", targetW: 1080, targetH: 1350, ratioLabel: "4:5" },
        ],
      },
      {
        label: "Facebook",
        actions: [
          { label: "Post", targetW: 1200, targetH: 630, ratioLabel: "1.91:1" },
          { label: "Cover", targetW: 820, targetH: 312, ratioLabel: "2.63:1" },
          { label: "Story", targetW: 1080, targetH: 1920, ratioLabel: "9:16" },
        ],
      },
      {
        label: "X / Twitter",
        actions: [
          { label: "Post (16:9)", targetW: 1600, targetH: 900, ratioLabel: "16:9" },
          { label: "Header", targetW: 1500, targetH: 500, ratioLabel: "3:1" },
        ],
      },
      {
        label: "YouTube",
        actions: [
          { label: "Thumbnail", targetW: 1280, targetH: 720, ratioLabel: "16:9" },
          { label: "Video (HD)", targetW: 1920, targetH: 1080, ratioLabel: "16:9" },
          { label: "Shorts", targetW: 1080, targetH: 1920, ratioLabel: "9:16" },
        ],
      },
      {
        label: "TikTok",
        actions: [
          { label: "Video", targetW: 1080, targetH: 1920, ratioLabel: "9:16" },
        ],
      },
      {
        label: "LinkedIn",
        actions: [
          { label: "Post", targetW: 1200, targetH: 627, ratioLabel: "1.91:1" },
          { label: "Banner", targetW: 1584, targetH: 396, ratioLabel: "4:1" },
        ],
      },
      {
        label: "Pinterest",
        actions: [
          { label: "Pin", targetW: 1000, targetH: 1500, ratioLabel: "2:3" },
        ],
      },
    ],
  },
  {
    key: "web",
    label: "Website & E-commerce",
    color: "var(--accent-rose)",
    icon: "web",
    platforms: [
      {
        label: "Website Hero",
        actions: [
          { label: "1920×1080 (16:9)", targetW: 1920, targetH: 1080, ratioLabel: "16:9" },
          { label: "1920×800 (widescreen)", targetW: 1920, targetH: 800, ratioLabel: "12:5" },
        ],
      },
      {
        label: "Shopify Banner",
        actions: [
          { label: "2100×900", targetW: 2100, targetH: 900, ratioLabel: "21:9" },
          { label: "1200×600", targetW: 1200, targetH: 600, ratioLabel: "2:1" },
        ],
      },
      {
        label: "Blog Post",
        actions: [
          { label: "1200×630 (OG Image)", targetW: 1200, targetH: 630, ratioLabel: "1.91:1" },
          { label: "800×450 (Featured)", targetW: 800, targetH: 450, ratioLabel: "16:9" },
        ],
      },
      {
        label: "Email Header",
        actions: [
          { label: "600×200", targetW: 600, targetH: 200, ratioLabel: "3:1" },
          { label: "600×300", targetW: 600, targetH: 300, ratioLabel: "2:1" },
        ],
      },
    ],
  },
  {
    key: "print",
    label: "Print & Photo",
    color: "var(--accent-emerald)",
    icon: "print",
    platforms: [
      {
        label: "Check print quality at all sizes",
        actions: [
          { label: "4×6 inches", targetW: 4, targetH: 6, ratioLabel: "2:3" },
          { label: "8×10 inches", targetW: 8, targetH: 10, ratioLabel: "4:5" },
          { label: "11×14 inches", targetW: 11, targetH: 14, ratioLabel: "11:14" },
          { label: "16×20 inches", targetW: 16, targetH: 20, ratioLabel: "4:5" },
          { label: "24×36 inches", targetW: 24, targetH: 36, ratioLabel: "2:3" },
          { label: "Poster (18×24)", targetW: 18, targetH: 24, ratioLabel: "3:4" },
        ],
      },
    ],
  },
  {
    key: "personal",
    label: "Personal Use",
    color: "var(--accent-teal)",
    icon: "personal",
    platforms: [
      {
        label: "Desktop Wallpaper",
        actions: [
          { label: "Full HD (1920×1080)", targetW: 1920, targetH: 1080, ratioLabel: "16:9" },
          { label: "QHD (2560×1440)", targetW: 2560, targetH: 1440, ratioLabel: "16:9" },
          { label: "4K (3840×2160)", targetW: 3840, targetH: 2160, ratioLabel: "16:9" },
          { label: "5K (5120×2880)", targetW: 5120, targetH: 2880, ratioLabel: "16:9" },
        ],
      },
      {
        label: "Phone Wallpaper",
        actions: [
          { label: "iPhone (1170×2532)", targetW: 1170, targetH: 2532, ratioLabel: "9:19.5" },
          { label: "Android (1080×2400)", targetW: 1080, targetH: 2400, ratioLabel: "9:20" },
        ],
      },
      {
        label: "Profile Picture",
        actions: [
          { label: "400×400 (square)", targetW: 400, targetH: 400, ratioLabel: "1:1" },
          { label: "800×800 (high-res)", targetW: 800, targetH: 800, ratioLabel: "1:1" },
        ],
      },
      {
        label: "Make Smaller",
        actions: [
          { label: "1200px wide (~200 KB)", targetW: 1200, targetH: 0, ratioLabel: "original" },
          { label: "800px wide (~100 KB)", targetW: 800, targetH: 0, ratioLabel: "original" },
          { label: "400px wide (~40 KB)", targetW: 400, targetH: 0, ratioLabel: "original" },
        ],
      },
    ],
  },
];

const WIZARD_CATEGORY_ICONS = {
  social: Smartphone,
  web: Globe,
  print: Printer,
  personal: Monitor,
};

function getCropKeptPct(srcW: number, srcH: number, tgtRW: number, tgtRH: number): number {
  const srcAR = srcW / srcH;
  const tgtAR = tgtRW / tgtRH;
  if (Math.abs(srcAR - tgtAR) < 0.01) return 100;
  if (srcAR > tgtAR) {
    return Math.round((tgtAR / srcAR) * 100);
  } else {
    return Math.round((srcAR / tgtAR) * 100);
  }
}

function getCropFitLabel(pct: number): { icon: string; color: string; textKey: string } {
  if (pct >= 95) return { icon: "✅", color: "var(--accent-emerald)", textKey: "greatFit" };
  if (pct >= 75) return { icon: "✅", color: "var(--accent-emerald)", textKey: "minorCrop" };
  if (pct >= 50) return { icon: "⚠️", color: "var(--accent-amber)", textKey: "moderateCrop" };
  return { icon: "❌", color: "var(--accent-rose)", textKey: "heavyCrop" };
}

function getPrintQuality(imgW: number, imgH: number, printW: number, printH: number): { dpi: number; icon: string; labelKey: string; color: string } {
  const dpiW = imgW / printW;
  const dpiH = imgH / printH;
  const dpi = Math.round(Math.min(dpiW, dpiH));
  if (dpi >= 300) return { dpi, icon: "✅", labelKey: "excellent", color: "var(--accent-emerald)" };
  if (dpi >= 200) return { dpi, icon: "✅", labelKey: "veryGood", color: "var(--accent-emerald)" };
  if (dpi >= 150) return { dpi, icon: "⚠️", labelKey: "acceptable", color: "var(--accent-amber)" };
  return { dpi, icon: "❌", labelKey: "notRecommended", color: "var(--accent-rose)" };
}

// ── Scale Comparison Preview ─────────────────────────────────

function ScaleComparisonPreview({
  origW,
  origH,
  newW,
  newH,
  scaleRatioW,
  scaleRatioH,
  qualityData,
  fitMode,
}: {
  origW: number;
  origH: number;
  newW: number;
  newH: number;
  scaleRatioW: number;
  scaleRatioH: number;
  qualityData: { scalePct: number; fitScalePct: number; fillScalePct: number; origMP: string; newMP: string; verdict: { labelKey: string; color: string }; fitVerdict: { labelKey: string; color: string }; fillVerdict: { labelKey: string; color: string }; dpiSizes: { dpi: number; labelKey: string; inW: string; inH: string }[] } | null;
  fitMode: "fit" | "fill";
}) {
  const { t } = useTranslation();
  // Guard against zero / invalid dimensions that produce NaN or Infinity
  if (!origW || !origH || !newW || !newH || !isFinite(origW) || !isFinite(newW)) return null;

  const BOX = 260;
  const MIN_BOX = 30; // minimum pixel size so boxes never shrink to a dot
  const origAR = origW / origH;
  const newAR = newW / newH;

  const maxW = Math.max(origW, newW);
  const maxH = Math.max(origH, newH);
  const scale = Math.min(BOX / maxW, BOX / maxH);

  let origPxW = Math.max(1, Math.round(origW * scale));
  let origPxH = Math.max(1, Math.round(origH * scale));
  let newPxW = Math.max(1, Math.round(newW * scale));
  let newPxH = Math.max(1, Math.round(newH * scale));

  // Enforce minimum display size for both boxes
  if (origPxW < MIN_BOX || origPxH < MIN_BOX) {
    const boost = Math.max(MIN_BOX / origPxW, MIN_BOX / origPxH);
    origPxW = Math.round(origPxW * boost);
    origPxH = Math.round(origPxH * boost);
  }
  if (newPxW < MIN_BOX || newPxH < MIN_BOX) {
    const boost = Math.max(MIN_BOX / newPxW, MIN_BOX / newPxH);
    newPxW = Math.round(newPxW * boost);
    newPxH = Math.round(newPxH * boost);
  }

  const fitScale = Math.min(newPxW / origPxW, newPxH / origPxH);
  const fittedW = Math.round(origPxW * fitScale);
  const fittedH = Math.round(origPxH * fitScale);

  const gapX = newPxW - fittedW;
  const gapY = newPxH - fittedH;

  // Fill mode: image scales to cover the entire frame (overflow gets cropped)
  const fillScaleFactor = Math.max(newPxW / origPxW, newPxH / origPxH);
  const filledW = Math.round(origPxW * fillScaleFactor);
  const filledH = Math.round(origPxH * fillScaleFactor);
  const overflowX = filledW - newPxW;
  const overflowY = filledH - newPxH;

  // Container must fit the largest element — in fill mode, teal box exceeds the frame
  const containerW = Math.max(origPxW, newPxW, fitMode === "fill" ? filledW : 0);
  const containerH = Math.max(origPxH, newPxH, fitMode === "fill" ? filledH : 0);

  const boxTransition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';

  const isSameRatio = Math.abs(origAR - newAR) < 0.01;
  const isFillMode = fitMode === "fill";
  const coveragePct = ((fittedW * fittedH) / (newPxW * newPxH) * 100).toFixed(1);
  const cropKeptPct = getCropKeptPct(origW, origH, newW, newH);
  const cropLabel = getCropFitLabel(cropKeptPct);

  const origG = gcd(origW, origH);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm border-2 border-dashed inline-block" style={{ borderColor: 'var(--muted)' }} />
          <span className="text-[var(--muted)]">{t("calculator", "original")} {origW / origG}:{origH / origG}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm border-2 border-[var(--accent)] inline-block" />
          <span className="text-[var(--accent)]">{t("calculator", "newFrame")} {scaleRatioW}:{scaleRatioH}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm border-2 inline-block" style={{ borderColor: 'var(--accent-teal)', backgroundColor: 'color-mix(in srgb, var(--accent-teal) 15%, transparent)' }} />
          <span style={{ color: 'var(--accent-teal)' }}>{isFillMode && !isSameRatio ? t("calculator", "visibleContent") : t("calculator", "imageContent")}</span>
        </span>
        {!isSameRatio && (
          <span className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-sm inline-block" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, var(--accent-rose) 2px, var(--accent-rose) 3px)' }} />
            <span style={{ color: 'var(--accent-rose)' }}>{isFillMode ? t("calculator", "croppedArea") : t("calculator", "uncoveredArea")}</span>
          </span>
        )}
        {(() => {
          const scaleDiff = Math.abs(Math.max(newW / origW, newH / origH) - 1);
          if (scaleDiff <= 0.2) return null;
          const isUp = newW > origW || newH > origH;
          return (
            <span className="flex items-center gap-1.5">
              <span className="text-sm text-[var(--muted)]">{isUp ? "↗" : "↙"}</span>
              <span className="text-[var(--muted)]">
                {isUp ? t("calculator", "scaleUp") : t("calculator", "scaleDown")}
              </span>
            </span>
          );
        })()}
      </div>

      <div
        className="relative"
        style={{ width: containerW, height: containerH, transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
        role="img"
        aria-label={`Comparison: original ${origW}×${origH} ${isFillMode ? "cropped to fill" : "fitted into"} new ${newW}×${newH}. ${isSameRatio ? "Same ratio — perfect fit." : isFillMode ? `${cropKeptPct}% of image kept.` : `${coveragePct}% coverage, ${gapX > 0 ? "pillarboxed" : "letterboxed"}.`}`}
      >
        {isFillMode ? (
          /* ── Fill mode: teal image extends beyond blue frame ── */
          <>
            {/* Full image area (teal) — larger than frame, centered */}
            <div
              className="absolute rounded-sm"
              style={{
                width: filledW,
                height: filledH,
                left: (containerW - filledW) / 2,
                top: (containerH - filledH) / 2,
                backgroundColor: 'color-mix(in srgb, var(--accent-teal) 15%, transparent)',
                border: '2px solid var(--accent-teal)',
                transition: boxTransition,
              }}
            />

            {/* Cropped edge overlays (rose hatched + solid fill) — on teal areas outside the frame */}
            {overflowX > 1 && (
              <>
                <div
                  className="absolute rounded-sm"
                  style={{
                    left: (containerW - filledW) / 2,
                    top: (containerH - filledH) / 2,
                    width: Math.floor(overflowX / 2),
                    height: filledH,
                    backgroundColor: 'color-mix(in srgb, var(--accent-rose) 22%, transparent)',
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 5px)',
                  }}
                />
                <div
                  className="absolute rounded-sm"
                  style={{
                    left: (containerW + newPxW) / 2,
                    top: (containerH - filledH) / 2,
                    width: Math.floor(overflowX / 2),
                    height: filledH,
                    backgroundColor: 'color-mix(in srgb, var(--accent-rose) 22%, transparent)',
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 5px)',
                  }}
                />
              </>
            )}
            {overflowY > 1 && (
              <>
                <div
                  className="absolute rounded-sm"
                  style={{
                    left: (containerW - filledW) / 2,
                    top: (containerH - filledH) / 2,
                    width: filledW,
                    height: Math.floor(overflowY / 2),
                    backgroundColor: 'color-mix(in srgb, var(--accent-rose) 22%, transparent)',
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 5px)',
                  }}
                />
                <div
                  className="absolute rounded-sm"
                  style={{
                    left: (containerW - filledW) / 2,
                    top: (containerH + newPxH) / 2,
                    width: filledW,
                    height: Math.floor(overflowY / 2),
                    backgroundColor: 'color-mix(in srgb, var(--accent-rose) 22%, transparent)',
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 45%, transparent) 5px)',
                  }}
                />
              </>
            )}

            {/* Blue frame border (on top of teal, no clipping) */}
            <div
              className="absolute border-2 border-[var(--accent)] rounded-md pointer-events-none"
              style={{
                width: newPxW,
                height: newPxH,
                left: (containerW - newPxW) / 2,
                top: (containerH - newPxH) / 2,
                transition: boxTransition,
              }}
            />
          </>
        ) : (
          /* ── Fit mode: content fits inside frame with empty bars ── */
          <div
            className="absolute border-2 border-[var(--accent)] rounded-md overflow-hidden"
            style={{
              width: newPxW,
              height: newPxH,
              left: (containerW - newPxW) / 2,
              top: (containerH - newPxH) / 2,
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, color-mix(in srgb, var(--accent) 6%, transparent) 8px, color-mix(in srgb, var(--accent) 6%, transparent) 9px)',
              transition: boxTransition,
            }}
          >
            <div
              className="absolute rounded-sm"
              style={{
                width: fittedW,
                height: fittedH,
                left: (newPxW - fittedW) / 2,
                top: (newPxH - fittedH) / 2,
                backgroundColor: 'color-mix(in srgb, var(--accent-teal) 15%, transparent)',
                border: '2px solid var(--accent-teal)',
                transition: boxTransition,
              }}
            />

            {gapX > 1 && (
              <>
                <div
                  className="absolute top-0 left-0"
                  style={{
                    width: Math.floor(gapX / 2),
                    height: newPxH,
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 5px)',
                  }}
                />
                <div
                  className="absolute top-0 right-0"
                  style={{
                    width: Math.floor(gapX / 2),
                    height: newPxH,
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 5px)',
                  }}
                />
              </>
            )}
            {gapY > 1 && (
              <>
                <div
                  className="absolute top-0 left-0"
                  style={{
                    width: newPxW,
                    height: Math.floor(gapY / 2),
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 5px)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0"
                  style={{
                    width: newPxW,
                    height: Math.floor(gapY / 2),
                    backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 4px, color-mix(in srgb, var(--accent-rose) 18%, transparent) 5px)',
                  }}
                />
              </>
            )}
          </div>
        )}

        {/* Original box — always shown (dashed grey) */}
        <div
          className="absolute border-2 border-dashed rounded-md pointer-events-none"
          style={{
            width: origPxW,
            height: origPxH,
            left: (containerW - origPxW) / 2,
            top: (containerH - origPxH) / 2,
            borderColor: 'var(--muted)',
            opacity: isSameRatio ? 0.35 : 0.5,
            transition: boxTransition,
          }}
        />

        {/* Scale direction arrows (grey, with buffer margin from corners) */}
        {(() => {
          const scaleDiff = Math.abs(Math.max(newW / origW, newH / origH) - 1);
          if (scaleDiff <= 0.2) return null;

          const arrowColor = 'var(--muted)';
          const MARGIN = 6; // buffer so arrows don't overlap box edges

          // Original box corners (centered in container)
          const oLeft = (containerW - origPxW) / 2;
          const oTop = (containerH - origPxH) / 2;
          const oRight = oLeft + origPxW;
          const oBottom = oTop + origPxH;

          // Content box corners (teal box — fitted in fit mode, filled in fill mode)
          const contentW = isFillMode ? filledW : fittedW;
          const contentH = isFillMode ? filledH : fittedH;
          const cLeft = (containerW - contentW) / 2;
          const cTop = (containerH - contentH) / 2;
          const cRight = cLeft + contentW;
          const cBottom = cTop + contentH;

          // Compute arrow endpoints with buffer margin pulled inward from box edges
          const rawCorners = [
            { x1: oLeft, y1: oTop, x2: cLeft, y2: cTop },
            { x1: oRight, y1: oTop, x2: cRight, y2: cTop },
            { x1: oLeft, y1: oBottom, x2: cLeft, y2: cBottom },
            { x1: oRight, y1: oBottom, x2: cRight, y2: cBottom },
          ];

          // Apply margin: shorten each end along the arrow direction
          const corners = rawCorners.map(c => {
            const dx = c.x2 - c.x1;
            const dy = c.y2 - c.y1;
            const len = Math.hypot(dx, dy);
            if (len < MARGIN * 3) return { ...c, len };
            const ux = dx / len;
            const uy = dy / len;
            return {
              x1: c.x1 + ux * MARGIN,
              y1: c.y1 + uy * MARGIN,
              x2: c.x2 - ux * MARGIN,
              y2: c.y2 - uy * MARGIN,
              len,
            };
          });

          const minLen = 12;
          const hasVisible = corners.some(c => c.len > minLen);
          if (!hasVisible) return null;

          return (
            <svg
              className="absolute inset-0 pointer-events-none"
              width={containerW}
              height={containerH}
              style={{ overflow: 'visible' }}
            >
              <defs>
                <marker
                  id="arrow-scale"
                  markerWidth="6"
                  markerHeight="6"
                  refX="5"
                  refY="3"
                  orient="auto"
                  markerUnits="strokeWidth"
                >
                  <path d="M0,0 L6,3 L0,6 Z" fill={arrowColor} />
                </marker>
              </defs>
              {corners.map((c, i) => {
                if (c.len < minLen) return null;
                return (
                  <line
                    key={i}
                    x1={c.x1}
                    y1={c.y1}
                    x2={c.x2}
                    y2={c.y2}
                    stroke={arrowColor}
                    strokeWidth={1.5}
                    strokeDasharray="4 2"
                    markerEnd="url(#arrow-scale)"
                    opacity={0.5}
                  />
                );
              })}
            </svg>
          );
        })()}
      </div>

      <div className="text-center space-y-1">
        {isSameRatio ? (
          <p className="text-xs text-[var(--accent-emerald)] font-medium">
            {t("calculator", "sameRatioPerfectFit")}
          </p>
        ) : isFillMode ? (
          <div className="space-y-0.5">
            <p className="text-xs font-medium" style={{ color: cropLabel.color }}>
              {cropLabel.icon} {t("calculator", cropLabel.textKey)} — {cropKeptPct}% {t("calculator", "ofImageKept")}
            </p>
            {cropKeptPct < 95 && (
              <p className="text-[10px] text-[var(--muted)]">
                {overflowX > overflowY
                  ? t("calculator", "leftRightEdgesCropped")
                  : t("calculator", "topBottomEdgesCropped")
                }
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-0.5">
            <p className="text-xs font-medium" style={{
              color: parseFloat(coveragePct) >= 95 ? 'var(--accent-emerald)'
                   : parseFloat(coveragePct) >= 75 ? 'var(--accent-amber)'
                   : 'var(--accent-rose)'
            }}>
              {gapX > 0 ? t("calculator", "pillarboxed") : t("calculator", "letterboxed")} — {coveragePct}% {t("calculator", "contentCoverage")}
            </p>
            {parseFloat(coveragePct) < 95 && (
              <p className="text-[10px] text-[var(--muted)]">
                {gapX > 0
                  ? `${t("calculator", "emptyBarsLeftRight")} (${Math.round(gapX / newPxW * 100)}% ${t("calculator", "widthUnused")})`
                  : `${t("calculator", "emptyBarsTopBottom")} (${Math.round(gapY / newPxH * 100)}% ${t("calculator", "heightUnused")})`
                }
              </p>
            )}
          </div>
        )}
        {qualityData && (
          <p className="text-xs font-medium" style={{ color: isFillMode ? qualityData.fillVerdict.color : qualityData.fitVerdict.color }}>
            {t("calculator", "quality")}: {t("calculator", isFillMode ? qualityData.fillVerdict.labelKey : qualityData.fitVerdict.labelKey)} ({isFillMode ? qualityData.fillScalePct : qualityData.fitScalePct}%)
          </p>
        )}
      </div>
    </div>
  );
}

// ── Crop Overlay Preview (Image Wizard) ───────────────────────

function CropOverlayPreview({
  dataUrl,
  srcW,
  srcH,
  targetRW,
  targetRH,
}: {
  dataUrl: string;
  srcW: number;
  srcH: number;
  targetRW: number;
  targetRH: number;
}) {
  const BOX = 240;
  const srcAR = srcW / srcH;
  const tgtAR = targetRW / targetRH;

  const displayScale = Math.min(BOX / srcW, BOX / srcH);
  const dispW = Math.round(srcW * displayScale);
  const dispH = Math.round(srcH * displayScale);

  let cropW: number, cropH: number;
  if (srcAR > tgtAR) {
    cropH = dispH;
    cropW = Math.round(dispH * tgtAR);
  } else {
    cropW = dispW;
    cropH = Math.round(dispW / tgtAR);
  }
  const cropX = Math.round((dispW - cropW) / 2);
  const cropY = Math.round((dispH - cropH) / 2);

  return (
    <div className="relative inline-block" style={{ width: dispW, height: dispH }}>
      <img
        src={dataUrl}
        alt=""
        className="absolute inset-0 w-full h-full object-cover rounded-md"
        style={{ opacity: 0.3, filter: 'blur(2px)' }}
        draggable={false}
      />
      <div
        className="absolute overflow-hidden rounded-sm"
        style={{
          left: cropX,
          top: cropY,
          width: cropW,
          height: cropH,
          border: '1px solid var(--accent)',
        }}
      >
        <img
          src={dataUrl}
          alt=""
          className="absolute"
          style={{
            width: dispW,
            height: dispH,
            left: -cropX,
            top: -cropY,
            objectFit: 'cover',
          }}
          draggable={false}
        />
      </div>
    </div>
  );
}

// ── Step Badge Component ──────────────────────────────────────

function StepBadge({ num, title, active }: { num: number; title: string; active: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className={`w-5 h-5 rounded-full text-xs flex items-center justify-center font-semibold ${
        active ? "bg-[var(--accent)] text-white" : "bg-[var(--border)] text-[var(--muted)]"
      }`}>{num}</span>
      <h3 className={`text-sm font-semibold ${active ? "text-[var(--foreground)]" : "text-[var(--muted)]"}`}>{title}</h3>
    </div>
  );
}

// ── Section Divider Component ────────────────────────────────

function SectionDivider() {
  return <div className="border-b border-[var(--border)] opacity-40 my-5" />;
}

// ── Export Row Component ─────────────────────────────────────

function ExportRow({ checked, onToggle, label, value, mono }: {
  checked: boolean; onToggle: () => void; label: string; value: string; mono?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg text-left transition-colors ${
        checked ? "bg-[var(--surface)] text-[var(--foreground)]" : "text-[var(--muted)] hover:bg-[var(--surface)]"
      }`}
    >
      <div className={`w-3.5 h-3.5 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
        checked ? "bg-[var(--accent)] border-[var(--accent)]" : "border-[var(--border)]"
      }`}>
        {checked && <Check size={10} className="text-white" />}
      </div>
      <span className="text-xs font-medium w-24 flex-shrink-0">{label}</span>
      <span className={`text-xs truncate ${mono ? "font-mono" : ""} ${
        checked ? "text-[var(--foreground-dim)]" : "text-[var(--muted)]"
      }`}>{value}</span>
    </button>
  );
}

// ── Share Buttons Component ──────────────────────────────────

function ShareButtons({ text, shareUrl }: { text: string; shareUrl: string }) {
  const encodedMsg = encodeURIComponent(text);
  const pillClass = "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors";

  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => window.open(`https://wa.me/?text=${encodedMsg}`, '_blank')}
        className={pillClass}
        title="Share via WhatsApp"
      >
        <MessageCircle size={12} />
        WhatsApp
      </button>
      <button
        onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl || "")}&text=${encodedMsg}`, '_blank')}
        className={pillClass}
        title="Share via Telegram"
      >
        <Send size={12} />
        Telegram
      </button>
      <button
        onClick={() => window.open(`mailto:?subject=${encodeURIComponent("Aspect Ratio")}&body=${encodedMsg}`, '_blank')}
        className={pillClass}
        title="Share via Email"
      >
        <Mail size={12} />
        Email
      </button>
    </div>
  );
}

// ── Component ────────────────────────────────────────────────

type Mode = "scale" | "find" | "guide";

export default function Calculator() {
  const { t } = useTranslation();

  // ── Mode ──
  const [mode, setMode] = useState<Mode>("scale");

  // ── Scale mode state ──
  const [origW, setOrigW] = useState<string>("");
  const [origH, setOrigH] = useState<string>("");
  const [newW, setNewW] = useState<string>("");
  const [newH, setNewH] = useState<string>("");
  const [scaleLockedRW, setScaleLockedRW] = useState<number>(0);
  const [scaleLockedRH, setScaleLockedRH] = useState<number>(0);
  const [scaleLastEdited, setScaleLastEdited] = useState<"w" | "h">("w");
  const [scaleQuickRatio, setScaleQuickRatio] = useState<string>("");
  const [detectedRW, setDetectedRW] = useState<number>(0);
  const [detectedRH, setDetectedRH] = useState<number>(0);
  const [selectedScalePreset, setSelectedScalePreset] = useState<string>("");

  // ── Find mode state ──
  const [findW, setFindW] = useState<string>("");
  const [findH, setFindH] = useState<string>("");

  // ── Image Wizard state ──
  const [guideImage, setGuideImage] = useState<{ w: number; h: number; name: string; dataUrl?: string } | null>(null);
  const [wizardCategory, setWizardCategory] = useState<string | null>(null);
  const [wizardPlatform, setWizardPlatform] = useState<string | null>(null);
  const [wizardAction, setWizardAction] = useState<string | null>(null);

  // ── Unit toggle ──
  const UNITS = ["px", "in", "cm", "mm", "ft"] as const;
  type Unit = typeof UNITS[number];
  const [unit, setUnit] = useState<Unit>("px");
  const cycleUnit = useCallback(() => {
    setUnit(prev => UNITS[(UNITS.indexOf(prev) + 1) % UNITS.length]);
  }, []);

  // ── Export toggles ──
  const [exportToggles, setExportToggles] = useState({
    dimensions: true,
    ratio: true,
    quality: true,
    css: false,
    printSizes: false,
    decimal: true,
    standardMatch: true,
  });
  const toggleExport = useCallback((key: string) => {
    setExportToggles(prev => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  }, []);

  // ── Shared state ──
  const [copied, setCopied] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "Social Media": false,
    "Cinema & Video": false,
    "Photography & Print": false,
  });
  const [expandedPanels, setExpandedPanels] = useState<Record<string, boolean>>({});
  const [computedField, setComputedField] = useState<string | null>(null);
  const [lockAnimating, setLockAnimating] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [fitMode, setFitMode] = useState<"fit" | "fill">("fill");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const guideFileInputRef = useRef<HTMLInputElement>(null);
  const origHRef = useRef<HTMLInputElement>(null);
  const newWRef = useRef<HTMLInputElement>(null);
  const computedTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── URL param reading on mount ──
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const pw = params.get("w");
    const ph = params.get("h");
    const prw = params.get("rw");
    const prh = params.get("rh");
    const pm = params.get("mode");
    if (pw && ph) {
      if (pm === "find" || (!prw && !pm)) {
        setFindW(pw);
        setFindH(ph);
        setMode("find");
      } else {
        setOrigW(pw);
        setOrigH(ph);
        if (prw && prh) {
          setScaleLockedRW(parseFloat(prw));
          setScaleLockedRH(parseFloat(prh));
        }
        setMode("scale");
      }
    }
  }, []);

  // ── Global drag-and-drop ──
  useEffect(() => {
    const handleDragOver = (e: DragEvent) => {
      if (e.dataTransfer?.types.includes("Files")) {
        e.preventDefault();
        setDragOver(true);
      }
    };
    const handleDragLeave = (e: DragEvent) => {
      if (e.relatedTarget === null || !(e.currentTarget as Node)?.contains(e.relatedTarget as Node)) {
        setDragOver(false);
      }
    };
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer?.files?.[0];
      if (!file || !file.type.startsWith("image/")) return;
      loadGuideImage(file);
    };

    document.addEventListener("dragover", handleDragOver);
    document.addEventListener("dragleave", handleDragLeave);
    document.addEventListener("drop", handleDrop);
    return () => {
      document.removeEventListener("dragover", handleDragOver);
      document.removeEventListener("dragleave", handleDragLeave);
      document.removeEventListener("drop", handleDrop);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Trigger computed field glow ──
  const flashComputed = useCallback((field: string) => {
    if (computedTimer.current) clearTimeout(computedTimer.current);
    setComputedField(field);
    computedTimer.current = setTimeout(() => setComputedField(null), 800);
  }, []);

  // ── Trigger lock animation ──
  const flashLock = useCallback(() => {
    setLockAnimating(true);
    setTimeout(() => setLockAnimating(false), 400);
  }, []);

  // ── Load image into wizard ──
  const loadGuideImage = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new window.Image();
      img.onload = () => {
        setGuideImage({
          w: img.naturalWidth,
          h: img.naturalHeight,
          name: file.name,
          dataUrl: reader.result as string,
        });
        setWizardCategory(null);
        setWizardPlatform(null);
        setWizardAction(null);
        setMode("guide");
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  }, []);

  // ── Scale mode: compute locked ratio from originals ──
  const updateScaleRatio = useCallback((w: number, h: number) => {
    if (w > 0 && h > 0) {
      const g = gcd(w, h);
      const rw = w / g;
      const rh = h / g;
      setDetectedRW(rw);
      setDetectedRH(rh);
      if (!scaleQuickRatio) {
        setScaleLockedRW(rw);
        setScaleLockedRH(rh);
      }
      flashLock();
    } else {
      setDetectedRW(0);
      setDetectedRH(0);
      setScaleLockedRW(0);
      setScaleLockedRH(0);
    }
  }, [flashLock, scaleQuickRatio]);

  const handleOrigWChange = useCallback((val: string) => {
    setOrigW(val);
    const w = parseFloat(val) || 0;
    const h = parseFloat(origH) || 0;
    updateScaleRatio(w, h);
    setScaleQuickRatio("");
    setSelectedScalePreset("");
    if (w > 0 && h > 0) {
      const nw = parseFloat(newW);
      const nh = parseFloat(newH);
      if (scaleLastEdited === "w" && nw > 0) {
        const computed = Math.round((nw * h) / w);
        setNewH(String(computed));
        flashComputed("newH");
      } else if (scaleLastEdited === "h" && nh > 0) {
        const computed = Math.round((nh * w) / h);
        setNewW(String(computed));
        flashComputed("newW");
      }
    }
  }, [origH, newW, newH, scaleLastEdited, updateScaleRatio, flashComputed]);

  const handleOrigHChange = useCallback((val: string) => {
    setOrigH(val);
    const w = parseFloat(origW) || 0;
    const h = parseFloat(val) || 0;
    updateScaleRatio(w, h);
    setScaleQuickRatio("");
    setSelectedScalePreset("");
    if (w > 0 && h > 0) {
      const nw = parseFloat(newW);
      const nh = parseFloat(newH);
      if (scaleLastEdited === "w" && nw > 0) {
        const computed = Math.round((nw * h) / w);
        setNewH(String(computed));
        flashComputed("newH");
      } else if (scaleLastEdited === "h" && nh > 0) {
        const computed = Math.round((nh * w) / h);
        setNewW(String(computed));
        flashComputed("newW");
      }
    }
  }, [origW, newW, newH, scaleLastEdited, updateScaleRatio, flashComputed]);

  const scaleRatioW = scaleLockedRW;
  const scaleRatioH = scaleLockedRH;

  const handleNewWChange = useCallback((val: string) => {
    setNewW(val);
    setScaleLastEdited("w");
    const n = parseFloat(val);
    if (!isNaN(n) && n > 0 && scaleRatioW > 0 && scaleRatioH > 0) {
      const computed = Math.round((n * scaleRatioH) / scaleRatioW);
      setNewH(String(computed));
      flashComputed("newH");
    }
  }, [scaleRatioW, scaleRatioH, flashComputed]);

  const handleNewHChange = useCallback((val: string) => {
    setNewH(val);
    setScaleLastEdited("h");
    const n = parseFloat(val);
    if (!isNaN(n) && n > 0 && scaleRatioW > 0 && scaleRatioH > 0) {
      const computed = Math.round((n * scaleRatioW) / scaleRatioH);
      setNewW(String(computed));
      flashComputed("newW");
    }
  }, [scaleRatioW, scaleRatioH, flashComputed]);

  // Quick ratio override in Scale mode
  const selectScaleQuickRatio = useCallback((preset: Preset) => {
    setScaleLockedRW(preset.w);
    setScaleLockedRH(preset.h);
    setScaleQuickRatio(preset.label);
    setSelectedScalePreset("");
    flashLock();
    const nw = parseFloat(newW);
    const nh = parseFloat(newH);
    const ow = parseFloat(origW) || 0;
    const oh = parseFloat(origH) || 0;
    if (scaleLastEdited === "w" && nw > 0) {
      const computed = Math.round((nw * preset.h) / preset.w);
      setNewH(String(computed));
      flashComputed("newH");
    } else if (scaleLastEdited === "h" && nh > 0) {
      const computed = Math.round((nh * preset.w) / preset.h);
      setNewW(String(computed));
      flashComputed("newW");
    } else if (nw > 0) {
      const computed = Math.round((nw * preset.h) / preset.w);
      setNewH(String(computed));
      flashComputed("newH");
    } else if (ow > 0 && oh > 0) {
      // Auto-fill from original dimensions when target is empty
      setNewW(String(ow));
      const computed = Math.round((ow * preset.h) / preset.w);
      setNewH(String(computed));
      setScaleLastEdited("w");
      flashComputed("newW");
      flashComputed("newH");
    }
  }, [newW, newH, origW, origH, scaleLastEdited, flashLock, flashComputed]);

  // Preset card selection in Scale mode
  const selectScalePresetCard = useCallback((preset: Preset) => {
    setScaleLockedRW(preset.w);
    setScaleLockedRH(preset.h);
    setScaleQuickRatio(preset.label);
    setSelectedScalePreset(preset.label);
    if (preset.defaultW && preset.defaultH) {
      setNewW(String(preset.defaultW));
      setNewH(String(preset.defaultH));
      setScaleLastEdited("w");
      flashComputed("newW");
      flashComputed("newH");
    }
    flashLock();
    // Collapse all other groups, keep only the one containing this preset open
    setExpandedGroups(prev => {
      const next: Record<string, boolean> = {};
      for (const key of Object.keys(prev)) next[key] = false;
      // Find which group contains this preset and keep it open
      for (const group of PRESET_GROUPS) {
        if (group.presets.some(p => p.label === preset.label)) {
          next[group.name] = true;
          break;
        }
      }
      return next;
    });
  }, [flashLock, flashComputed]);

  // Scale mode swap
  const scaleSwap = useCallback(() => {
    setNewW(newH);
    setNewH(newW);
    setScaleLockedRW(scaleLockedRH);
    setScaleLockedRH(scaleLockedRW);
    setScaleQuickRatio("");
    setSelectedScalePreset("");
    flashLock();
  }, [newW, newH, scaleLockedRW, scaleLockedRH, flashLock]);

  // ── File upload handler (Find mode) ──
  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    const img = new window.Image();
    img.onload = () => {
      setFindW(String(img.naturalWidth));
      setFindH(String(img.naturalHeight));
      setMode("find");
      URL.revokeObjectURL(img.src);
    };
    img.src = URL.createObjectURL(file);
    e.target.value = "";
  }, []);

  // ── File upload handler (Image Wizard) ──
  const handleGuideFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;
    loadGuideImage(file);
    e.target.value = "";
  }, [loadGuideImage]);

  // ── Copy helpers ──
  const doCopy = useCallback(async (text: string, label: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopied(label);
      setTimeout(() => setCopied(null), 1500);
    }
  }, []);

  // ── Smart mode switch with state carry-over ──
  const switchMode = useCallback((newMode: Mode) => {
    const prevMode = mode;
    if (prevMode === newMode) return;

    let carryW = "";
    let carryH = "";
    if (prevMode === "scale") {
      const nw = newW || origW;
      const nh = newH || origH;
      carryW = nw;
      carryH = nh;
    } else if (prevMode === "find") {
      carryW = findW;
      carryH = findH;
    }

    if (newMode === "scale" && carryW && carryH) {
      setOrigW(carryW);
      setOrigH(carryH);
      const w = parseFloat(carryW) || 0;
      const h = parseFloat(carryH) || 0;
      if (w > 0 && h > 0) {
        const g = gcd(w, h);
        const rw = w / g;
        const rh = h / g;
        setDetectedRW(rw);
        setDetectedRH(rh);
        // Only set locked ratio if no quick ratio override is active
        if (!scaleQuickRatio) {
          setScaleLockedRW(rw);
          setScaleLockedRH(rh);
        }
      }
    } else if (newMode === "find" && carryW && carryH) {
      if (!findW && !findH) {
        setFindW(carryW);
        setFindH(carryH);
      }
    }

    setMode(newMode);
  }, [mode, origW, origH, newW, newH, findW, findH, scaleQuickRatio]);

  // ── Toggle group / panel ──
  const toggleGroup = useCallback((name: string) => {
    setExpandedGroups(prev => ({ ...prev, [name]: !prev[name] }));
  }, []);

  const togglePanel = useCallback((name: string) => {
    setExpandedPanels(prev => ({ ...prev, [name]: !prev[name] }));
  }, []);

  // ── Active dimensions for current mode ──
  const activeW = mode === "scale" ? (parseFloat(newW) || 0) : mode === "find" ? (parseFloat(findW) || 0) : 0;
  const activeH = mode === "scale" ? (parseFloat(newH) || 0) : mode === "find" ? (parseFloat(findH) || 0) : 0;
  const activeWStr = mode === "scale" ? newW : mode === "find" ? findW : "";
  const activeHStr = mode === "scale" ? newH : mode === "find" ? findH : "";

  // For find mode
  const findWNum = parseFloat(findW) || 0;
  const findHNum = parseFloat(findH) || 0;
  const findG = findWNum > 0 && findHNum > 0 ? gcd(findWNum, findHNum) : 1;
  const findSimplifiedW = findWNum > 0 ? findWNum / findG : 0;
  const findSimplifiedH = findHNum > 0 ? findHNum / findG : 0;
  const findDecimal = findHNum > 0 ? (findWNum / findHNum).toFixed(4) : "0";
  const findPaddingPct = findWNum > 0 ? ((findHNum / findWNum) * 100).toFixed(4) : "0";
  const findKnownFormat = useMemo(() => matchKnownFormat(findWNum, findHNum), [findWNum, findHNum]);
  const findClosestRatio = useMemo(() => matchClosestRatio(findWNum, findHNum), [findWNum, findHNum]);

  // Active ratio for CSS output
  const activeRatioW = mode === "scale" ? scaleRatioW : findSimplifiedW;
  const activeRatioH = mode === "scale" ? scaleRatioH : findSimplifiedH;

  const orientation = activeW > 0 && activeH > 0 ? getOrientation(activeW, activeH) : null;
  const OrientationIcon = orientation === "landscape" ? RectangleHorizontal : orientation === "portrait" ? RectangleVertical : Square;

  // For preview
  const previewRatioW = mode === "scale" ? scaleRatioW : findSimplifiedW;
  const previewRatioH = mode === "scale" ? scaleRatioH : findSimplifiedH;

  const paddingPct = activeW > 0 ? ((activeH / activeW) * 100).toFixed(4) : "0";

  const shareUrl = useMemo(() => {
    if (activeW <= 0 || activeH <= 0) return "";
    if (typeof window === "undefined") return "";
    const params = new URLSearchParams();
    params.set("w", String(activeW));
    params.set("h", String(activeH));
    params.set("mode", mode);
    if (mode === "scale" && scaleRatioW > 0) {
      params.set("rw", String(scaleRatioW));
      params.set("rh", String(scaleRatioH));
    }
    return `${window.location.origin}${window.location.pathname}?${params}`;
  }, [activeW, activeH, scaleRatioW, scaleRatioH, mode]);

  // ── Glow logic ──
  const scaleActiveGlow = useMemo(() => {
    const ow = parseFloat(origW) || 0;
    const oh = parseFloat(origH) || 0;
    if (ow <= 0) return "origW";
    if (oh <= 0) return "origH";
    const nw = parseFloat(newW) || 0;
    const nh = parseFloat(newH) || 0;
    if (nw <= 0 && nh <= 0) return "newW";
    return null;
  }, [origW, origH, newW, newH]);

  const scaleOrigFilled = (parseFloat(origW) || 0) > 0 && (parseFloat(origH) || 0) > 0;
  const scaleNewFilled = (parseFloat(newW) || 0) > 0 || (parseFloat(newH) || 0) > 0;
  const findFilled = findWNum > 0 && findHNum > 0;

  // ── Quality analysis data (Scale mode) ──
  const qualityData = useMemo(() => {
    const ow = parseFloat(origW) || 0;
    const oh = parseFloat(origH) || 0;
    const nw = parseFloat(newW) || 0;
    const nh = parseFloat(newH) || 0;
    if (ow <= 0 || oh <= 0 || nw <= 0 || nh <= 0) return null;
    const fitScalePct = Math.round(Math.min(nw / ow, nh / oh) * 100);
    const fillScalePct = Math.round(Math.max(nw / ow, nh / oh) * 100);
    const origMP = ((ow * oh) / 1e6).toFixed(1);
    const newMP = ((nw * nh) / 1e6).toFixed(1);
    const fitVerdict = getQualityVerdict(fitScalePct);
    const fillVerdict = getQualityVerdict(fillScalePct);
    const dpiSizes = getDpiSizes(nw, nh);
    return { scalePct: fitScalePct, fitScalePct, fillScalePct, origMP, newMP, verdict: fitVerdict, fitVerdict, fillVerdict, dpiSizes };
  }, [origW, origH, newW, newH]);

  // ── Export text (built from toggles) ──
  const exportText = useMemo(() => {
    if (activeW <= 0 || activeH <= 0) return "";
    const lines: string[] = [];

    if (mode === "scale") {
      lines.push(t("calculator", "aspectRatioResults"));
      lines.push("");
      const origWNum = parseFloat(origW) || 0;
      const origHNum = parseFloat(origH) || 0;
      if (origWNum > 0 && origHNum > 0) {
        lines.push(`${t("calculator", "originalSize")}:  ${origWNum} × ${origHNum}`);
      }
      if (exportToggles.ratio && previewRatioW > 0) lines.push(`${t("calculator", "targetRatio")}:   ${previewRatioW}:${previewRatioH}`);
      if (exportToggles.dimensions) lines.push(`${t("calculator", "targetSize")}:    ${activeWStr} × ${activeHStr}`);
      if (exportToggles.quality && qualityData) lines.push(`${t("calculator", "quality")}:        ${t("calculator", qualityData.verdict.labelKey)} (${qualityData.scalePct}%)`);
      if (exportToggles.css) {
        lines.push("", `${t("calculator", "cssProperties")}:`);
        lines.push(`  aspect-ratio: ${activeRatioW} / ${activeRatioH};`);
        lines.push(`  padding-bottom: ${paddingPct}%;`);
        lines.push(`  width: ${activeWStr}px; height: ${activeHStr}px;`);
      }
      if (exportToggles.printSizes && qualityData?.dpiSizes) {
        lines.push("", `${t("calculator", "printSizesAt300DPI")}:`);
        qualityData.dpiSizes.forEach(d => lines.push(`  ${t("calculator", d.labelKey)}: ${d.inW} × ${d.inH} in`));
      }
    } else if (mode === "find") {
      lines.push(t("calculator", "aspectRatioReport"));
      lines.push("");
      if (exportToggles.dimensions) lines.push(`${t("calculator", "dimensions")}:     ${activeWStr} × ${activeHStr}`);
      if (exportToggles.ratio) lines.push(`${t("calculator", "ratio")}:          ${findSimplifiedW}:${findSimplifiedH}`);
      if (exportToggles.decimal) lines.push(`${t("calculator", "decimal")}:        ${findDecimal}:1`);
      if (exportToggles.standardMatch && (findKnownFormat || findClosestRatio)) {
        lines.push(`${t("calculator", "standard")}:       ${findKnownFormat || findClosestRatio}`);
      }
      if (exportToggles.css) {
        lines.push("", `${t("calculator", "cssProperties")}:`);
        lines.push(`  aspect-ratio: ${findSimplifiedW} / ${findSimplifiedH};`);
        lines.push(`  padding-bottom: ${findPaddingPct}%;`);
      }
    }

    lines.push("");
    lines.push(mode === "find"
      ? t("calculator", "analyseYourDimensions")
      : t("calculator", "recalculateAt"));
    if (shareUrl) lines.push(shareUrl);
    return lines.join("\n");
  }, [mode, exportToggles, activeW, activeH, activeWStr, activeHStr, origW, origH, previewRatioW, previewRatioH, qualityData, activeRatioW, activeRatioH, paddingPct, findSimplifiedW, findSimplifiedH, findDecimal, findKnownFormat, findClosestRatio, findPaddingPct, shareUrl, t]);

  // ── Fitting analysis: auto-open when ratios differ ──
  const ratiosDiffer = useMemo(() => {
    if (!scaleOrigFilled || !scaleNewFilled) return false;
    const ow = parseFloat(origW) || 1;
    const oh = parseFloat(origH) || 1;
    const nw = parseFloat(newW) || 1;
    const nh = parseFloat(newH) || 1;
    return Math.abs((ow / oh) - (nw / nh)) > 0.01;
  }, [origW, origH, newW, newH, scaleOrigFilled, scaleNewFilled]);

  // ── Guide image data ──
  const guideImageInfo = useMemo(() => {
    if (!guideImage) return null;
    const { w, h } = guideImage;
    const g = gcd(w, h);
    const rw = w / g;
    const rh = h / g;
    const mp = ((w * h) / 1e6).toFixed(1);
    const orient = getOrientation(w, h);
    const closestRatio = matchClosestRatio(w, h);
    const ratioLabel = closestRatio || `${rw}:${rh}`;
    return { rw, rh, mp, orient, ratioLabel };
  }, [guideImage]);

  // ── Wizard resolved data ──
  const wizardCategoryData = useMemo(() => {
    if (!wizardCategory) return null;
    return WIZARD_CATEGORIES.find(c => c.key === wizardCategory) || null;
  }, [wizardCategory]);

  const wizardPlatformData = useMemo(() => {
    if (!wizardCategoryData || !wizardPlatform) return null;
    return wizardCategoryData.platforms.find(p => p.label === wizardPlatform) || null;
  }, [wizardCategoryData, wizardPlatform]);

  const wizardActionData = useMemo(() => {
    if (!wizardPlatformData || !wizardAction) return null;
    return wizardPlatformData.actions.find(a => a.label === wizardAction) || null;
  }, [wizardPlatformData, wizardAction]);

  // Sanitize — allows decimal points for physical measurements
  const sanitizeNumeric = (val: string): string => {
    const cleaned = val.replace(/[^0-9.]/g, "");
    const parts = cleaned.split(".");
    return parts.length > 2 ? parts[0] + "." + parts.slice(1).join("") : cleaned;
  };

  const bigInputBase = "w-full px-2 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--foreground)] text-center text-xl sm:text-2xl font-semibold font-mono focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 focus:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-200";

  const glowClass = (field: string, activeGlow: string | null, isComputed: boolean) => {
    const classes: string[] = [];
    if (activeGlow === field) classes.push("glow-active");
    if (isComputed && computedField === field) classes.push("glow-computed");
    if (isComputed && computedField !== field) classes.push("computed-settled");
    return classes.join(" ");
  };

  // ── Wizard share URL ──
  const wizardShareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.origin}${window.location.pathname}`;
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto relative">

      {/* ── Global Drag & Drop Overlay ── */}
      {dragOver && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]/80 border-4 border-dashed border-[var(--accent)] pointer-events-none">
          <div className="text-center">
            <Upload size={48} className="mx-auto mb-3 text-[var(--accent)]" />
            <p className="text-lg font-semibold text-[var(--foreground)]">{t("calculator", "dropImageToAnalyze")}</p>
            <p className="text-sm text-[var(--muted)]">{t("calculator", "opensInImageWizard")}</p>
          </div>
        </div>
      )}

      {/* ── Mode Tab Bar ── */}
      <div className="relative flex items-center rounded-xl bg-[var(--surface)] border border-[var(--border)] p-1 mb-6" role="tablist">
        {/* Sliding indicator */}
        <div
          className="tab-indicator absolute top-1 bottom-1 rounded-lg bg-[var(--accent)] shadow-[0_0_16px_var(--accent-glow)]"
          style={{
            width: "calc((100% - 2.75rem) / 3)",
            transform: `translateX(calc(${mode === "scale" ? 0 : mode === "find" ? 1 : 2} * (100% + 0.125rem)))`,
          }}
        />
        {([
          { key: "scale" as Mode, label: t("calculator", "calculatorTab") },
          { key: "find" as Mode, label: t("calculator", "findRatioTab") },
          { key: "guide" as Mode, label: t("calculator", "imageWizardTab") },
        ]).map(({ key, label }) => (
          <button
            key={key}
            role="tab"
            aria-selected={mode === key}
            onClick={() => switchMode(key)}
            className={`relative z-10 flex-1 py-3 text-sm font-medium transition-colors duration-200 text-center rounded-lg ${
              mode === key
                ? "text-[var(--background)]"
                : "text-[var(--muted)] hover:text-[var(--foreground)]"
            }`}
          >
            {label}
          </button>
        ))}
        {/* Theme toggle */}
        <div className="relative z-10 flex items-center pl-1">
          <ThemeToggle />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════ */}
      {/* MODE 1: CALCULATOR                                         */}
      {/* ════════════════════════════════════════════════════════════ */}
      {mode === "scale" && (
        <>
          {/* ── Section 1: Original Size ── */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{t("calculator", "originalSize")}</h3>
              {scaleOrigFilled && (
                <span className="text-[var(--accent-emerald)] text-xs">&#10003;</span>
              )}
            </div>
            <p className={`instruction-text text-xs text-[var(--muted)] mb-2 ${scaleOrigFilled ? "faded" : ""}`}>
              {t("calculator", "enterDimensionsInAnyUnit")}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-xs text-[var(--muted)] mb-1">{t("calculator", "width")}</label>
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.]*"
                  value={origW}
                  onChange={(e) => handleOrigWChange(sanitizeNumeric(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  placeholder={t("calculator", "width")}
                  className={`${bigInputBase} ${glowClass("origW", scaleActiveGlow, false)}`}
                  aria-label={t("calculator", "originalWidth")}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-5">
                <span className="text-[var(--muted)] text-xl">×</span>
                <button
                  onClick={cycleUnit}
                  className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all"
                  title={t("calculator", "clickToChangeUnit")}
                  aria-label={`${t("calculator", "unit")}: ${unit}`}
                >
                  {unit}
                </button>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-[var(--muted)] mb-1">{t("calculator", "height")}</label>
                <input
                  ref={origHRef}
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.]*"
                  value={origH}
                  onChange={(e) => handleOrigHChange(sanitizeNumeric(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  onKeyDown={(e) => {
                    if (e.key === "Tab" && !e.shiftKey && newWRef.current) {
                      e.preventDefault();
                      newWRef.current.focus();
                    }
                  }}
                  placeholder={t("calculator", "height")}
                  className={`${bigInputBase} ${glowClass("origH", scaleActiveGlow, false)}`}
                  aria-label={t("calculator", "originalHeight")}
                />
              </div>
            </div>
            {/* Original Ratio badge — directly under inputs */}
            {detectedRW > 0 && detectedRH > 0 && (
              <div className={`mt-3 px-4 py-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between ${!scaleQuickRatio ? "locked-ratio-glow" : ""}`}>
                <span className="text-sm text-[var(--muted)]">{t("calculator", "originalRatio")}</span>
                <span className={`flex items-center gap-2 font-semibold ${scaleQuickRatio ? "text-sm text-[var(--muted)]" : "text-lg text-[var(--foreground)]"}`}>
                  {!scaleQuickRatio && <Lock size={14} className={`text-[var(--accent)] ${lockAnimating ? "lock-animate" : ""}`} />}
                  {formatRatioLabel(detectedRW, detectedRH)}
                </span>
              </div>
            )}
          </div>

          <SectionDivider />

          {/* ── Section 2: Target Ratio + Platform Presets ── */}
          {/* Target Ratio Display (only when a quick ratio is selected) */}
          {detectedRW > 0 && detectedRH > 0 && scaleQuickRatio && (
            <div className="mb-5">
              <div className="px-4 py-2.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-between locked-ratio-glow">
                <span className="text-sm text-[var(--muted)]">{t("calculator", "targetRatio")}</span>
                <span className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
                  <Lock size={14} className={`text-[var(--accent)] ${lockAnimating ? "lock-animate" : ""}`} />
                  {formatRatioLabel(scaleRatioW, scaleRatioH)}
                </span>
              </div>
            </div>
          )}

          {/* Quick Ratio Override */}
          <div className="mb-5">
            <label className="block text-xs text-[var(--muted)] mb-2 uppercase tracking-wider">
              {t("calculator", "targetRatio")}
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  if (detectedRW > 0 && detectedRH > 0) {
                    setScaleLockedRW(detectedRW);
                    setScaleLockedRH(detectedRH);
                  }
                  setScaleQuickRatio("");
                  setSelectedScalePreset("");
                  flashLock();
                }}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                  !scaleQuickRatio && scaleRatioW > 0
                    ? "bg-[var(--accent)] text-white shadow-sm shadow-[var(--accent)]/25"
                    : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] border border-[var(--border)]"
                }`}
                title={t("calculator", "useDetectedRatioTitle")}
                aria-label={t("calculator", "customRatioFromOriginal")}
              >
                {t("calculator", "custom")}{scaleRatioW > 0 && !scaleQuickRatio ? ` (${formatRatioLabel(scaleRatioW, scaleRatioH)})` : ""}
              </button>
              {QUICK_RATIOS.map((p) => {
                const maxDim = 14;
                const aspect = p.w / p.h;
                const shapeW = aspect >= 1 ? maxDim : Math.round(maxDim * aspect);
                const shapeH = aspect >= 1 ? Math.round(maxDim / aspect) : maxDim;
                return (
                  <button
                    key={p.label}
                    onClick={() => selectScaleQuickRatio(p)}
                    className={`px-3 py-3 rounded-lg text-sm font-medium font-mono transition-all flex items-center gap-1.5 ${
                      scaleQuickRatio === p.label
                        ? "bg-[var(--accent)] text-[var(--background)] shadow-sm shadow-[var(--accent)]/25"
                        : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] border border-[var(--border)]"
                    }`}
                    title={t("calculator", `quickRatio_${p.desc.toLowerCase()}`)}
                    aria-label={`${p.label}: ${t("calculator", `quickRatio_${p.desc.toLowerCase()}`)}`}
                  >
                    <span className="ratio-shape" style={{ width: shapeW, height: shapeH }} />
                    {p.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Platform Sizes */}
          <div className="mb-5 space-y-2">
            {PRESET_GROUPS.map((group) => {
              const IconComp = GROUP_ICONS[group.icon];
              return (
                <div
                  key={group.name}
                  className="border border-[var(--border)] rounded-lg overflow-hidden"
                  style={{ borderLeftWidth: 3, borderLeftColor: group.color }}
                >
                  <button
                    onClick={() => toggleGroup(group.name)}
                    className="w-full flex items-center justify-between px-3 py-2 bg-[var(--surface)] hover:bg-[var(--surface-hover)] transition-colors text-sm font-medium text-[var(--foreground)]"
                    aria-expanded={expandedGroups[group.name]}
                  >
                    <span className="flex items-center gap-2">
                      <IconComp size={14} style={{ color: group.color }} />
                      {t("calculator", `presetGroup_${group.icon}`)}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${expandedGroups[group.name] ? "rotate-180" : ""}`}
                    />
                  </button>
                  {expandedGroups[group.name] && (
                    <div className="flex flex-wrap gap-1.5 p-2 bg-[var(--background)]">
                      {group.presets.map((p) => (
                        <button
                          key={p.label}
                          onClick={() => selectScalePresetCard(p)}
                          className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                            selectedScalePreset === p.label
                              ? "bg-[var(--accent)] text-white shadow-sm shadow-[var(--accent)]/25"
                              : "bg-[var(--surface)] text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)] border border-[var(--border)]"
                          }`}
                          title={`${p.desc}${p.defaultW ? ` — ${p.defaultW}×${p.defaultH}` : ""}`}
                          aria-label={`${p.label}: ${p.desc}`}
                        >
                          <span className="block">{p.label}</span>
                          {selectedScalePreset === p.label && p.defaultW && (
                            <span className="block text-[10px] opacity-80 font-normal">{p.defaultW}×{p.defaultH}</span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <SectionDivider />

          {/* ── Section 3: New Size + Swap ── */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-sm font-semibold text-[var(--foreground)]">{t("calculator", "targetSize")}</h3>
              {(parseFloat(newW) || 0) > 0 && (parseFloat(newH) || 0) > 0 && (
                <span className="text-[var(--accent-emerald)] text-xs">&#10003;</span>
              )}
            </div>
            <p className={`instruction-text text-xs text-[var(--muted)] mb-2 ${scaleNewFilled ? "faded" : ""}`}>
              {t("calculator", "enterTargetWidthOrHeight")}
            </p>
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-xs text-[var(--muted)] mb-1">
                  {t("calculator", "width")} {scaleLastEdited === "h" && (parseFloat(newW) || 0) > 0 && <span className="text-[var(--accent-teal)]">({t("calculator", "auto")})</span>}
                </label>
                <input
                  ref={newWRef}
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.]*"
                  value={newW}
                  onChange={(e) => handleNewWChange(sanitizeNumeric(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  placeholder={scaleLastEdited === "h" ? t("calculator", "auto") : t("calculator", "width")}
                  className={`${bigInputBase} ${glowClass("newW", scaleActiveGlow, scaleLastEdited === "h" && (parseFloat(newW) || 0) > 0)}`}
                  aria-label={t("calculator", "newWidth")}
                />
              </div>
              {/* Swap */}
              <div className="flex flex-col items-center gap-1 mt-3">
                <button
                  onClick={scaleSwap}
                  className="p-3 rounded-lg border transition-all hover:scale-105"
                  style={{
                    backgroundColor: 'color-mix(in srgb, var(--accent-teal) 12%, var(--surface))',
                    borderColor: 'var(--accent-teal)',
                    color: 'var(--accent-teal)',
                  }}
                  title={t("calculator", "swapToPortraitLandscape")}
                  aria-label={t("calculator", "swapWidthAndHeight")}
                >
                  <ArrowLeftRight size={20} />
                </button>
                {orientation && (
                  <span className="flex items-center gap-1 text-[10px] text-[var(--accent-teal)]">
                    <OrientationIcon size={10} />
                    {t("calculator", orientation)}
                  </span>
                )}
              </div>
              <div className="flex-1">
                <label className="block text-xs text-[var(--muted)] mb-1">
                  {t("calculator", "height")} {scaleLastEdited === "w" && (parseFloat(newH) || 0) > 0 && <span className="text-[var(--accent-teal)]">({t("calculator", "auto")})</span>}
                </label>
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.]*"
                  value={newH}
                  onChange={(e) => handleNewHChange(sanitizeNumeric(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  placeholder={scaleLastEdited === "w" ? t("calculator", "auto") : t("calculator", "height")}
                  className={`${bigInputBase} ${glowClass("newH", scaleActiveGlow, scaleLastEdited === "w" && (parseFloat(newH) || 0) > 0)}`}
                  aria-label={t("calculator", "newHeight")}
                />
              </div>
            </div>
          </div>

          {/* ── Section 4: Analysis Panels ── */}
          {activeW > 0 && activeH > 0 && (
            <>
              <SectionDivider />
              <div className="space-y-1 mb-4">
                {/* Fitting Preview Panel — first (most visual), auto-open when target is filled */}
                {scaleOrigFilled && (
                  <>
                    <button
                      onClick={() => togglePanel("fitting")}
                      className="w-full py-2 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                      aria-expanded={expandedPanels["fitting"] !== false}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${expandedPanels["fitting"] !== false ? "rotate-180" : ""}`}
                      />
                      {t("calculator", "fittingPreview")}
                      {ratiosDiffer && expandedPanels["fitting"] === false && (
                        <span className="text-[var(--accent-amber)] ml-1">{t("calculator", "ratiosDiffer")}</span>
                      )}
                    </button>
                    {expandedPanels["fitting"] !== false && (
                      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 panel-slide-in">
                        {scaleNewFilled ? (
                          <>
                            {ratiosDiffer && (
                              <div className="flex justify-center gap-1 mb-3">
                                <button
                                  onClick={() => setFitMode("fill")}
                                  className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                                  style={{
                                    backgroundColor: fitMode === "fill" ? 'var(--accent)' : 'var(--surface)',
                                    color: fitMode === "fill" ? 'white' : 'var(--muted)',
                                    border: `1px solid ${fitMode === "fill" ? 'var(--accent)' : 'var(--border)'}`,
                                  }}
                                >
                                  {t("calculator", "fillCrop")}
                                </button>
                                <button
                                  onClick={() => setFitMode("fit")}
                                  className="px-3 py-1 rounded-full text-xs font-medium transition-colors"
                                  style={{
                                    backgroundColor: fitMode === "fit" ? 'var(--accent)' : 'var(--surface)',
                                    color: fitMode === "fit" ? 'white' : 'var(--muted)',
                                    border: `1px solid ${fitMode === "fit" ? 'var(--accent)' : 'var(--border)'}`,
                                  }}
                                >
                                  {t("calculator", "fitLetterbox")}
                                </button>
                              </div>
                            )}
                            <ScaleComparisonPreview
                              origW={parseFloat(origW) || 0}
                              origH={parseFloat(origH) || 0}
                              newW={parseFloat(newW) || 0}
                              newH={parseFloat(newH) || 0}
                              scaleRatioW={scaleRatioW}
                              scaleRatioH={scaleRatioH}
                              qualityData={qualityData}
                              fitMode={fitMode}
                            />
                          </>
                        ) : (
                          <p className="text-xs text-[var(--muted)] text-center py-4">
                            {t("calculator", "selectTargetRatioHint")}
                          </p>
                        )}
                      </div>
                    )}
                  </>
                )}

                {/* Quality Analysis Panel — auto-expanded when data exists */}
                {qualityData && (
                  <>
                    <button
                      onClick={() => togglePanel("quality")}
                      className="w-full py-2 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                      aria-expanded={expandedPanels["quality"] !== false}
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${expandedPanels["quality"] !== false ? "rotate-180" : ""}`}
                      />
                      {t("calculator", "qualityAnalysis")}
                    </button>
                    {expandedPanels["quality"] !== false && (
                      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 space-y-2 text-xs panel-slide-in">
                        <div className="flex justify-between items-center">
                          <span className="text-[var(--muted)]">{t("calculator", "scaleFactor")}</span>
                          <span className="font-medium text-[var(--foreground)]">{qualityData.scalePct}% {t("calculator", "ofOriginal")}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[var(--muted)]">{t("calculator", "megapixels")}</span>
                          <span className="font-mono text-[var(--foreground)]">{qualityData.origMP} MP → {qualityData.newMP} MP</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[var(--muted)]">{t("calculator", "quality")}</span>
                          <span className="font-medium" style={{ color: qualityData.verdict.color }}>{t("calculator", qualityData.verdict.labelKey)}</span>
                        </div>
                        <div className="border-t border-[var(--border)] pt-2 mt-2">
                          <p className="text-[var(--muted)] mb-1.5 font-medium">{t("calculator", "printSizeAtNewDimensions")}</p>
                          {qualityData.dpiSizes.map((d) => (
                            <div key={d.dpi} className="flex justify-between items-center py-0.5">
                              <span className="text-[var(--muted)]">{t("calculator", d.labelKey)}</span>
                              <span className="font-mono text-[var(--foreground)]">{d.inW}×{d.inH} in</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )}

                {/* CSS Output Panel — last (niche/developer) */}
                <button
                  onClick={() => togglePanel("css")}
                  className="w-full py-2 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors flex items-center gap-1.5"
                  aria-expanded={expandedPanels["css"]}
                >
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${expandedPanels["css"] ? "rotate-180" : ""}`}
                  />
                  <Code2 size={12} />
                  {t("calculator", "cssOutput")}
                </button>
                {expandedPanels["css"] && (
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 space-y-1.5 font-mono text-xs panel-slide-in">
                    <div className="flex justify-between items-center group">
                      <code className="text-[var(--foreground)]">
                        aspect-ratio: {activeRatioW} / {activeRatioH};
                      </code>
                      <button
                        onClick={() => doCopy(`aspect-ratio: ${activeRatioW} / ${activeRatioH};`, "css-ar")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                        style={{ color: copied === "css-ar" ? "var(--accent-emerald)" : "var(--accent)" }}
                      >
                        {copied === "css-ar" ? <Check size={10} /> : <Copy size={10} />}
                        {copied === "css-ar" ? t("calculator", "done") : t("calculator", "copy")}
                      </button>
                    </div>
                    <div className="flex justify-between items-center group">
                      <code className="text-[var(--foreground)]">
                        padding-bottom: {paddingPct}%;
                      </code>
                      <button
                        onClick={() => doCopy(`padding-bottom: ${paddingPct}%;`, "css-pb")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                        style={{ color: copied === "css-pb" ? "var(--accent-emerald)" : "var(--accent)" }}
                      >
                        {copied === "css-pb" ? <Check size={10} /> : <Copy size={10} />}
                        {copied === "css-pb" ? t("calculator", "done") : t("calculator", "copy")}
                      </button>
                    </div>
                    <div className="flex justify-between items-center group">
                      <code className="text-[var(--foreground)]">
                        width: {activeWStr}px; height: {activeHStr}px;
                      </code>
                      <button
                        onClick={() => doCopy(`width: ${activeWStr}px; height: ${activeHStr}px;`, "css-wh")}
                        className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
                        style={{ color: copied === "css-wh" ? "var(--accent-emerald)" : "var(--accent)" }}
                      >
                        {copied === "css-wh" ? <Check size={10} /> : <Copy size={10} />}
                        {copied === "css-wh" ? t("calculator", "done") : t("calculator", "copy")}
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* ── Section 5: Export ── */}
              <SectionDivider />
              <div className="space-y-2 mb-4">
                <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">{t("calculator", "export")}</h3>

                <div className="space-y-0.5">
                  <ExportRow checked={exportToggles.dimensions} onToggle={() => toggleExport("dimensions")}
                    label={t("calculator", "dimensions")} value={`${activeWStr} × ${activeHStr}`} />
                  <ExportRow checked={exportToggles.ratio} onToggle={() => toggleExport("ratio")}
                    label={t("calculator", "aspectRatio")} value={`${previewRatioW}:${previewRatioH}`} />
                  {qualityData && (
                    <ExportRow checked={exportToggles.quality} onToggle={() => toggleExport("quality")}
                      label={t("calculator", "quality")} value={`${t("calculator", qualityData.verdict.labelKey)} (${qualityData.scalePct}%)`} />
                  )}
                  <ExportRow checked={exportToggles.css} onToggle={() => toggleExport("css")}
                    label={t("calculator", "cssOutput")} value={`aspect-ratio: ${activeRatioW}/${activeRatioH}`} mono />
                  {qualityData?.dpiSizes && (
                    <ExportRow checked={exportToggles.printSizes} onToggle={() => toggleExport("printSizes")}
                      label={t("calculator", "printSizes")} value={`${qualityData.dpiSizes[0].inW}×${qualityData.dpiSizes[0].inH} in @ 72 DPI`} />
                  )}
                </div>

                <div className="flex gap-2 pt-2 flex-wrap">
                  <button
                    onClick={() => doCopy(exportText, "export")}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                      copied === "export"
                        ? "bg-[var(--accent-emerald)]/15 border border-[var(--accent-emerald)] text-[var(--accent-emerald)]"
                        : "bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
                    }`}
                    aria-label={t("calculator", "copyExportToClipboard")}
                  >
                    {copied === "export" ? <Check size={12} /> : <Copy size={12} />}
                    {copied === "export" ? t("calculator", "copied") : t("calculator", "copy")}
                  </button>
                  <ShareButtons text={exportText} shareUrl={shareUrl} />
                </div>
              </div>
            </>
          )}
        </>
      )}

      {/* ════════════════════════════════════════════════════════════ */}
      {/* MODE 2: FIND RATIO                                         */}
      {/* ════════════════════════════════════════════════════════════ */}
      {mode === "find" && (
        <>
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-[var(--foreground)] mb-1">{t("calculator", "enterDimensions")}</h3>
            <p className={`instruction-text text-xs text-[var(--muted)] mb-3 ${findFilled ? "faded" : ""}`}>
              {t("calculator", "enterDimensionsToFindRatio")}
            </p>

            <div className="mb-4 text-center">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                aria-label={t("calculator", "uploadImageToDetectDimensions")}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors text-sm font-medium"
              >
                <Upload size={16} />
                {t("calculator", "uploadImage")}
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="block text-xs text-[var(--muted)] mb-1">{t("calculator", "width")}</label>
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.]*"
                  value={findW}
                  onChange={(e) => setFindW(sanitizeNumeric(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  placeholder={t("calculator", "width")}
                  className={`${bigInputBase} ${!findWNum ? "glow-active" : ""}`}
                  aria-label={t("calculator", "width")}
                />
              </div>
              <div className="flex flex-col items-center gap-1 mt-5">
                <span className="text-[var(--muted)] text-xl">×</span>
                <button
                  onClick={cycleUnit}
                  className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-all"
                  title={t("calculator", "clickToChangeUnit")}
                  aria-label={`${t("calculator", "unit")}: ${unit}`}
                >
                  {unit}
                </button>
              </div>
              <div className="flex-1">
                <label className="block text-xs text-[var(--muted)] mb-1">{t("calculator", "height")}</label>
                <input
                  type="text"
                  inputMode="decimal"
                  pattern="[0-9.]*"
                  value={findH}
                  onChange={(e) => setFindH(sanitizeNumeric(e.target.value))}
                  onFocus={(e) => e.target.select()}
                  placeholder={t("calculator", "height")}
                  className={`${bigInputBase} ${findWNum > 0 && !findHNum ? "glow-active" : ""}`}
                  aria-label={t("calculator", "height")}
                />
              </div>
            </div>
          </div>

          {findWNum > 0 && findHNum > 0 && (
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 mb-4 space-y-3 animate-[fadeSlideIn_0.25s_ease-out]">
              <h4 className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold border-b border-[var(--border)] pb-2">{t("calculator", "result")}</h4>

              {(findKnownFormat || findClosestRatio) && (
                <div className="pb-3 border-b border-[var(--border)]">
                  {findKnownFormat && (
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {t("calculator", "matches")}: {findKnownFormat}
                    </p>
                  )}
                  {!findKnownFormat && findClosestRatio && (
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {t("calculator", "closestStandardRatio")}: {findClosestRatio}
                    </p>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center">
                <span className="text-[var(--muted)] text-sm">{t("calculator", "ratio")}</span>
                <span className="text-xl font-semibold">{findSimplifiedW}:{findSimplifiedH}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--muted)] text-sm">{t("calculator", "decimal")}</span>
                <span className="text-lg font-mono">{findDecimal}:1</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[var(--muted)] text-sm" title="CSS padding-bottom for intrinsic ratio containers">
                  {t("calculator", "cssPaddingBottom")}
                </span>
                <span className="text-lg font-mono">{findPaddingPct}%</span>
              </div>
            </div>
          )}

          {/* Find mode export */}
          {activeW > 0 && activeH > 0 && (
            <div className="space-y-2 mb-4">
              <h3 className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider">{t("calculator", "export")}</h3>

              <div className="space-y-0.5">
                <ExportRow checked={exportToggles.dimensions} onToggle={() => toggleExport("dimensions")}
                  label={t("calculator", "dimensions")} value={`${activeWStr} × ${activeHStr}`} />
                <ExportRow checked={exportToggles.ratio} onToggle={() => toggleExport("ratio")}
                  label={t("calculator", "ratio")} value={`${findSimplifiedW}:${findSimplifiedH}`} />
                <ExportRow checked={exportToggles.decimal} onToggle={() => toggleExport("decimal")}
                  label={t("calculator", "decimal")} value={`${findDecimal}:1`} mono />
                {(findKnownFormat || findClosestRatio) && (
                  <ExportRow checked={exportToggles.standardMatch} onToggle={() => toggleExport("standardMatch")}
                    label={t("calculator", "standard")} value={findKnownFormat || findClosestRatio || ""} />
                )}
                <ExportRow checked={exportToggles.css} onToggle={() => toggleExport("css")}
                  label={t("calculator", "cssOutput")} value={`padding-bottom: ${findPaddingPct}%`} mono />
              </div>

              <div className="flex gap-2 pt-2 flex-wrap">
                <button
                  onClick={() => doCopy(exportText, "export")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    copied === "export"
                      ? "bg-[var(--accent-emerald)]/15 border border-[var(--accent-emerald)] text-[var(--accent-emerald)]"
                      : "bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
                  }`}
                  aria-label={t("calculator", "copyExportToClipboard")}
                >
                  {copied === "export" ? <Check size={12} /> : <Copy size={12} />}
                  {copied === "export" ? t("calculator", "copied") : t("calculator", "copy")}
                </button>
                <ShareButtons text={exportText} shareUrl={shareUrl} />
              </div>
            </div>
          )}
        </>
      )}

      {/* ════════════════════════════════════════════════════════════ */}
      {/* MODE 3: IMAGE WIZARD                                       */}
      {/* ════════════════════════════════════════════════════════════ */}
      {mode === "guide" && (
        <div className="space-y-6">
          {/* ── Step 1: Upload Your Image ── */}
          <div>
            <StepBadge num={1} title={t("calculator", "uploadYourImage")} active={true} />
            {!guideImage && (
              <div>
                <input
                  ref={guideFileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleGuideFileSelect}
                  className="hidden"
                />
                <button
                  onClick={() => guideFileInputRef.current?.click()}
                  className="w-full py-12 rounded-xl border-2 border-dashed border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:border-[var(--accent)] transition-all flex flex-col items-center gap-3 cursor-pointer"
                >
                  <Upload size={40} className="text-[var(--muted)]" />
                  <span className="text-base font-medium text-[var(--foreground)]">{t("calculator", "uploadAnImage")}</span>
                  <span className="text-xs text-[var(--muted)]">{t("calculator", "orDragAndDrop")}</span>
                </button>
              </div>
            )}
            {guideImage && guideImageInfo && (
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 flex items-center gap-4">
                {guideImage.dataUrl && (
                  <img
                    src={guideImage.dataUrl}
                    alt={t("calculator", "uploaded")}
                    className="w-16 h-16 object-cover rounded-md border border-[var(--border)]"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--foreground)] truncate">{guideImage.name}</p>
                  <p className="text-sm text-[var(--muted)]">
                    {guideImage.w} × {guideImage.h} px
                  </p>
                  <p className="text-xs text-[var(--muted)]">
                    {guideImageInfo.ratioLabel} · {guideImageInfo.mp} MP · {t("calculator", guideImageInfo.orient)}
                  </p>
                </div>
                <button
                  onClick={() => { setGuideImage(null); setWizardCategory(null); setWizardPlatform(null); setWizardAction(null); }}
                  className="text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors underline"
                >
                  {t("calculator", "change")}
                </button>
              </div>
            )}
          </div>

          {/* ── Step 2: Where will you use it? ── */}
          <div className={!guideImage ? "opacity-40 pointer-events-none" : ""}>
            <StepBadge num={2} title={t("calculator", "whereWillYouUseIt")} active={!!guideImage} />
            <div className="grid grid-cols-2 gap-2">
              {WIZARD_CATEGORIES.map((cat) => {
                const IconComp = WIZARD_CATEGORY_ICONS[cat.icon];
                const isSelected = wizardCategory === cat.key;
                return (
                  <div key={cat.key}>
                    <button
                      onClick={() => {
                        if (isSelected) {
                          setWizardCategory(null);
                          setWizardPlatform(null);
                          setWizardAction(null);
                        } else {
                          setWizardCategory(cat.key);
                          setWizardPlatform(null);
                          setWizardAction(null);
                          // Auto-select if only one platform
                          if (cat.platforms.length === 1) {
                            setWizardPlatform(cat.platforms[0].label);
                          }
                        }
                      }}
                      className={`w-full p-3 rounded-lg border text-left transition-all ${
                        isSelected
                          ? "border-[var(--accent)] bg-[var(--surface)]"
                          : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:bg-[var(--surface-hover)]"
                      }`}
                      style={{ borderLeftWidth: 3, borderLeftColor: cat.color }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <IconComp size={14} style={{ color: cat.color }} />
                        <span className="text-sm font-medium text-[var(--foreground)]">{t("calculator", `wizardCategory_${cat.key}`)}</span>
                      </div>
                      <span className="text-[10px] text-[var(--muted)]">
                        {cat.platforms.length === 1 ? cat.platforms[0].label : `${cat.platforms.length} ${t("calculator", "options")}`}
                      </span>
                    </button>
                    {/* Expanded platforms under selected category */}
                    {isSelected && cat.platforms.length > 1 && (
                      <div className="mt-1 space-y-1 pl-2">
                        {cat.platforms.map((plat) => (
                          <button
                            key={plat.label}
                            onClick={() => {
                              setWizardPlatform(plat.label);
                              setWizardAction(null);
                            }}
                            className={`w-full py-2 px-3 rounded-md text-xs font-medium text-left transition-all ${
                              wizardPlatform === plat.label
                                ? "bg-[var(--accent)] text-white"
                                : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
                            }`}
                          >
                            {plat.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── Step 3: What do you want to do? ── */}
          <div className={!wizardPlatform ? "opacity-40 pointer-events-none" : ""}>
            <StepBadge num={3} title={t("calculator", "whatDoYouWantToDo")} active={!!wizardPlatform} />
            {wizardPlatformData && wizardCategory !== "print" && (
              <div className="flex flex-wrap gap-2">
                {wizardPlatformData.actions.map((action) => (
                  <button
                    key={action.label}
                    onClick={() => setWizardAction(action.label)}
                    className={`px-3 py-2 rounded-full text-xs font-medium transition-all ${
                      wizardAction === action.label
                        ? "bg-[var(--accent)] text-white shadow-sm"
                        : "bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] border border-[var(--border)]"
                    }`}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            )}
            {wizardCategory === "print" && wizardPlatformData && guideImage && (
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg overflow-hidden">
                <p className="text-xs text-[var(--muted)] px-3 pt-3 pb-1">
                  {t("calculator", "yourImage")}: {guideImage.w} × {guideImage.h} ({guideImageInfo?.mp} MP)
                </p>
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="py-2 px-3 text-left text-[var(--muted)] font-medium">{t("calculator", "printSize")}</th>
                      <th className="py-2 px-3 text-left text-[var(--muted)] font-medium">{t("calculator", "quality")}</th>
                      <th className="py-2 px-3 text-left text-[var(--muted)] font-medium">DPI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wizardPlatformData.actions.map((action) => {
                      const q = getPrintQuality(guideImage.w, guideImage.h, action.targetW, action.targetH);
                      return (
                        <tr key={action.label} className="border-b border-[var(--border)] last:border-0">
                          <td className="py-2 px-3 text-[var(--foreground)]">{action.label}</td>
                          <td className="py-2 px-3" style={{ color: q.color }}>
                            {q.icon} {t("calculator", q.labelKey)}
                          </td>
                          <td className="py-2 px-3 font-mono text-[var(--muted)]">{q.dpi} DPI</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                <p className="text-[10px] text-[var(--muted)] px-3 pb-2 pt-1">{t("calculator", "minimumForSharpPrint")}</p>
              </div>
            )}
          </div>

          {/* ── Step 4: Your Results ── */}
          <div className={(!wizardAction && wizardCategory !== "print") ? "opacity-40 pointer-events-none" : ""}>
            <StepBadge num={4} title={t("calculator", "yourResults")} active={!!(wizardAction || wizardCategory === "print")} />
            {wizardActionData && guideImage && wizardCategory !== "print" && (() => {
              // Handle "Make Smaller" actions where targetH is 0 (preserve ratio)
              const finalTargetW = wizardActionData.targetW;
              const finalTargetH = wizardActionData.targetH === 0
                ? Math.round(wizardActionData.targetW * (guideImage.h / guideImage.w))
                : wizardActionData.targetH;
              const ratioW = wizardActionData.targetH === 0 ? guideImage.w : wizardActionData.targetW;
              const ratioH = wizardActionData.targetH === 0 ? guideImage.h : wizardActionData.targetH;

              const pct = getCropKeptPct(guideImage.w, guideImage.h, ratioW, ratioH);
              const fit = getCropFitLabel(pct);
              const needsCrop = pct < 95;
              const dimsStr = `${finalTargetW} × ${finalTargetH}`;

              return (
                <div className="space-y-3">
                  <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4">
                    <p className="text-sm font-medium text-[var(--foreground)] mb-1">
                      {t("calculator", "recommended")}: {finalTargetW}×{finalTargetH}
                      {wizardActionData.ratioLabel !== "original" && ` (${wizardActionData.ratioLabel})`}
                    </p>
                    <p className="text-xs" style={{ color: fit.color }}>
                      {fit.icon} {t("calculator", fit.textKey)} — {pct}% {t("calculator", "ofImageKept")}
                    </p>

                    {/* Upscale warning */}
                    {(() => {
                      const scalePct = Math.round((finalTargetW / guideImage.w) * 100);
                      const scaleVerdict = getQualityVerdict(scalePct);
                      return scalePct > 105 ? (
                        <div className="mt-2 px-3 py-2 rounded-md text-xs" style={{
                          backgroundColor: `rgba(${scalePct > 200 ? '239,68,68' : '245,158,11'}, 0.1)`,
                          border: `1px solid ${scaleVerdict.color}`,
                          color: scaleVerdict.color,
                        }}>
                          {scalePct > 200 ? "❌" : "⚠️"} {t("calculator", scaleVerdict.labelKey)}
                          <span className="block text-[var(--muted)] mt-0.5">
                            {guideImage.w}×{guideImage.h} → {finalTargetW}×{finalTargetH} ({scalePct}% {t("calculator", "upscale")})
                          </span>
                        </div>
                      ) : null;
                    })()}

                    {/* Crop overlay preview for shape changes */}
                    {needsCrop && guideImage.dataUrl && (
                      <div className="flex justify-center mt-3">
                        <CropOverlayPreview
                          dataUrl={guideImage.dataUrl}
                          srcW={guideImage.w}
                          srcH={guideImage.h}
                          targetRW={ratioW}
                          targetRH={ratioH}
                        />
                      </div>
                    )}
                  </div>

                  {/* Action buttons */}
                  <button
                    onClick={() => doCopy(dimsStr, "wizard-dims")}
                    className={`w-full py-3 rounded-lg font-medium transition-all text-sm flex items-center justify-center gap-2 ${
                      copied === "wizard-dims"
                        ? "bg-[var(--accent-emerald)] text-white"
                        : "bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white"
                    }`}
                  >
                    {copied === "wizard-dims" ? <Check size={16} /> : <Copy size={16} />}
                    {copied === "wizard-dims" ? t("calculator", "copied") : `${t("calculator", "copy")} ${dimsStr}`}
                  </button>

                  <ShareButtons
                    text={[
                      t("calculator", "imageResizeRecommendation"),
                      "",
                      `${t("calculator", "originalImage")}: ${guideImage.w} × ${guideImage.h}`,
                      `${t("calculator", "recommended")}:    ${finalTargetW} × ${finalTargetH}${wizardActionData.ratioLabel !== "original" ? ` (${wizardActionData.ratioLabel})` : ""}`,
                      `${t("calculator", "crop")}:           ${pct}% ${t("calculator", "ofImagePreserved")}`,
                      "",
                      t("calculator", "getRecommendationsAt"),
                      wizardShareUrl,
                    ].join("\n")}
                    shareUrl={wizardShareUrl}
                  />

                  <p className="text-[10px] text-[var(--muted)] italic">
                    {t("calculator", "pasteIntoCanva")}
                  </p>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* ── Preview Box (Find mode only — Scale mode preview moved to Fitting panel) ── */}
      {mode === "scale" && scaleOrigFilled && !scaleNewFilled && (
        <div className="mt-4 flex justify-center">
          <div
            className="border-2 border-[var(--accent)] rounded-md transition-all duration-300 flex flex-col items-center justify-center text-xs gap-0.5 relative overflow-hidden"
            style={{
              width: (() => { const ow = parseFloat(origW) || 1; const oh = parseFloat(origH) || 1; return Math.min(240, Math.max(40, 240 * (ow / Math.max(ow, oh)))); })(),
              height: (() => { const ow = parseFloat(origW) || 1; const oh = parseFloat(origH) || 1; return Math.min(240, Math.max(40, 240 * (oh / Math.max(ow, oh)))); })(),
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, color-mix(in srgb, var(--accent) 6%, transparent) 8px, color-mix(in srgb, var(--accent) 6%, transparent) 9px)',
            }}
            role="img"
            aria-label={`Visual preview showing ${scaleRatioW}:${scaleRatioH} aspect ratio`}
          >
            <span className="text-[var(--foreground)] font-medium text-sm">
              {scaleRatioW}:{scaleRatioH}
            </span>
            <span className="text-[var(--muted)] text-[10px]">{t("calculator", "original")}</span>
          </div>
        </div>
      )}
      {mode === "find" && activeW > 0 && activeH > 0 && (
        <div className="mt-4 flex justify-center">
          <div
            className="border-2 border-[var(--accent)] rounded-md transition-all duration-300 flex flex-col items-center justify-center text-xs gap-0.5 relative overflow-hidden"
            style={{
              width: Math.min(240, Math.max(40, 240 * (activeW / Math.max(activeW, activeH)))),
              height: Math.min(240, Math.max(40, 240 * (activeH / Math.max(activeW, activeH)))),
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, color-mix(in srgb, var(--accent) 6%, transparent) 8px, color-mix(in srgb, var(--accent) 6%, transparent) 9px)',
            }}
            role="img"
            aria-label={`Visual preview showing ${previewRatioW}:${previewRatioH} aspect ratio`}
          >
            <span className="text-[var(--foreground)] font-medium text-sm">
              {previewRatioW}:{previewRatioH}
            </span>
            {orientation && (
              <span className="text-[var(--muted)] text-[10px] flex items-center gap-1">
                <OrientationIcon size={9} />
                {t("calculator", orientation)}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
