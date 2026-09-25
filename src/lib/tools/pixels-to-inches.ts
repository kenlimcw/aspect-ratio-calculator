import type { ToolData } from "@/lib/tools-data";

/* Everybody reaches for "pixels to inches" already conflating two questions:
 *
 *   1. "What physical size does this image print at?" — a DIVISION. You pick a
 *      DPI (dots per inch), and inches = pixels / DPI. There is nothing to
 *      measure or cite here; it is arithmetic, and it is exact whenever the
 *      pixel count happens to divide evenly.
 *
 *   2. "What's the biggest print I can make and still call it sharp?" — the
 *      SAME division, read the other way: instead of fixing the DPI and
 *      solving for size, you fix an acceptable DPI *floor* (300 for something
 *      viewed close up, 150 for something viewed from across a room) and the
 *      division gives you the largest size that stays at or above it.
 *
 * Both questions are `px / dpi`. The page exists because people ask the second
 * one without realising it is the first one wearing a different question mark.
 *
 * A third confusion this page has to name directly: a SCREEN has no DPI in
 * this sense. DPI only means something once ink meets paper at a fixed dot
 * pitch. A monitor's actual pixel density varies by panel and is irrelevant to
 * how many pixels an image has — "72 DPI" is not a screen fact, it is a
 * leftover print-industry number (the original 1984 Macintosh matched its
 * screen to 72 points per inch, and the figure never left graphic-design
 * folklore even though nothing on screen is measured in dots per inch today).
 */

/** International inch, fixed by treaty since 1959 (25.4mm exactly). Not a
 *  measurement — a definition — so it needs no provenance field. */
export const CM_PER_INCH = 2.54;

export interface DpiStandard {
  id: string;
  dpi: number;
  /** Key prefix into the pixelsInchesTool namespace for this row's label and
   *  one-line explanation. Prose is content, and content here is translated
   *  into thirteen locales, so it lives in messages, not in this file. */
  msg: string;
}

/** Three DPI figures, and each is a named convention rather than a
 *  measurement of anything that moves — which is why, unlike the safe-zone
 *  cell's platform margins, none of these carries a `checked` date. 300 and
 *  150 are print-industry thresholds that have not changed in decades; 72 is
 *  a fixed historical fact about one 1984 product, not a live figure that
 *  could go stale. */
export const DPI_STANDARDS: DpiStandard[] = [
  { id: "print", dpi: 300, msg: "print" },
  { id: "large-format", dpi: 150, msg: "largeFormat" },
  { id: "screen", dpi: 72, msg: "screen" },
];

export interface PhysicalSize {
  inches: number;
  cm: number;
}

/** The whole formula. Dots-per-inch times inches equals dots (pixels); divide
 *  the pixels by the dots-per-inch and the inches fall out. */
export function pixelsToInches(px: number, dpi: number): number {
  if (!(dpi > 0) || !(px >= 0)) return 0;
  return px / dpi;
}

export function pixelsToPhysicalSize(px: number, dpi: number): PhysicalSize {
  const inches = pixelsToInches(px, dpi);
  return { inches, cm: inches * CM_PER_INCH };
}

export interface PrintSizeAtDpi {
  dpi: DpiStandard;
  width: PhysicalSize;
  height: PhysicalSize;
}

/** One row per DPI standard, for one pixel size. Reading down the `dpi: 300`
 *  row is question (1) above; reading the `dpi: 150` row instead of the 300
 *  one is question (2) — the same division, aimed at "how big can this go and
 *  still be acceptable" instead of "how big is this at the standard I already
 *  chose". */
export function printSizeTable(widthPx: number, heightPx: number): PrintSizeAtDpi[] {
  return DPI_STANDARDS.map((dpi) => ({
    dpi,
    width: pixelsToPhysicalSize(widthPx, dpi.dpi),
    height: pixelsToPhysicalSize(heightPx, dpi.dpi),
  }));
}

/** Displays a computed value with no more precision than the tool can back up,
 *  while never hiding an exact result behind manufactured decimals — 10 stays
 *  "10", it does not become "10.00". This is what makes the control assertable
 *  as text: 3000px at 300 DPI must render as "10", not "9.999999999999998" or
 *  "10.00". */
export function formatMeasurement(n: number): string {
  return Number(n.toFixed(2)).toString();
}

/* ── the ToolData contract entry ──────────────────────────────────────────
 * `widget` is typed today as the single literal the reference cell shipped
 * with, because this cell is the first to add a second one. The orchestrator
 * widens that union and folds this object into TOOL_DATA at integration time
 * — tools-data.ts is a shared file this cell must not edit. The cast below is
 * therefore load-bearing, not decoration: it is the seam the orchestrator
 * closes, not a suppressed mistake. */
export const tool: ToolData = {
  slug: "pixels-to-inches",
  lastmod: "2026-09-25",
  ns: "pixelsInchesTool",
  facts: 4,
  widget: "pixels-to-inches",
  category: "UtilitiesApplication",
  related: [
    { href: "/blog/how-to-resize-image-without-losing-quality", labelKey: "relatedResize" },
    { href: "/ratio/3-2", labelKey: "relatedRatio" },
    { href: "/tools/instagram-safe-zone-checker", labelKey: "relatedSafeZone" },
  ],
} as unknown as ToolData;
