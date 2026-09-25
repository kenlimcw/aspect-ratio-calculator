/* A photo's shape and a print's shape are almost never the same number, and a
 * lab that prints "borderless" does not ask which part you'd like to keep —
 * it scales your photo up until it covers the whole sheet, then throws away
 * whatever hangs over one pair of edges. Two facts do all the work below:
 *
 *   1. A print size is a RATIO, not a pair of inches. "10x15cm" is sold as
 *      the metric twin of "6x4in" because 15/10 reduces to the same 1.5 as
 *      6/4, not because the centimetres line up with the inches.
 *   2. Filling the sheet with no white border means scaling to the LARGER of
 *      the two possible fits, which always leaves the other axis oversized —
 *      whichever ratio is bigger tells you which axis that is. Same shape,
 *      same ratio, nothing left over: that is the identity case rule 2 asks
 *      for, and it is the only case where "cropped" can mean zero.
 *
 * Every number on this page is arithmetic over those two facts and the
 * published trade dimensions of named print sizes below — nothing here is
 * measured, and nothing is guessed.
 */

import type { ToolData } from "@/lib/tools-data";

/** Exact by international agreement since 1959 — not a measurement, so it
 *  carries no rounding error into anything derived from it. */
const IN_TO_MM = 25.4;

export interface SourceRatio {
  id: string;
  /** Long edge over short edge, e.g. 3 over 2. Only the proportion is used —
   *  a 6000×4000 sensor and a 6×4 print share this ratio for that reason. */
  long: number;
  short: number;
  /** "3:2" / "4:3" / "1:1" — plain digits, so (CONTRACT rule 3) this is data,
   *  not prose, the same way the reference cell's `{FW} × {FH}` needs no
   *  translation key. */
  label: string;
  /** Key into printCropTool for the short "most cameras" / "most phone
   *  cameras" hint next to the label — that part IS prose, so it is not
   *  stored here as text. */
  hintKey: string;
}

export const SOURCE_RATIOS: SourceRatio[] = [
  { id: "3-2", long: 3, short: 2, label: "3:2", hintKey: "hint3x2" }, // most dedicated cameras
  { id: "4-3", long: 4, short: 3, label: "4:3", hintKey: "hint4x3" }, // most phone camera apps
  { id: "1-1", long: 1, short: 1, label: "1:1", hintKey: "hint1x1" }, // square — old Instagram, medium format
];

export interface PrintSize {
  id: string;
  /** Digits in the SAME order the trade name lists them. "5x7" and "8x10"
   *  name the short edge first; "6x4" and "12x8" name the long edge first
   *  (the convention Ken's market buys under). Display always echoes this
   *  order — reordering it would make the numbers next to "5 × 7" look
   *  transposed. Ratio math below uses max/min, never position, so the
   *  naming order can never change what gets cropped. Absent when the name
   *  is a word (msgKey) rather than two digits. */
  label?: string;
  msgKey?: string;
  firstMm: number;
  secondMm: number;
}

/** Trade names for photo paper. 8×10 and 10×8 are the same sheet sold under
 *  both digit orders — included separately because people search both — and
 *  12×8 is a bigger 6×4, not a different shape: both facts are provable from
 *  the ratios below and are asserted as such in the test file. */
export const PRINT_SIZES: PrintSize[] = [
  { id: "6x4", label: "6 × 4", firstMm: 6 * IN_TO_MM, secondMm: 4 * IN_TO_MM },
  { id: "5x7", label: "5 × 7", firstMm: 5 * IN_TO_MM, secondMm: 7 * IN_TO_MM },
  { id: "8x10", label: "8 × 10", firstMm: 8 * IN_TO_MM, secondMm: 10 * IN_TO_MM },
  { id: "10x8", label: "10 × 8", firstMm: 10 * IN_TO_MM, secondMm: 8 * IN_TO_MM },
  { id: "a4", label: "A4", firstMm: 210, secondMm: 297 }, // ISO 216, published in whole mm
  { id: "12x8", label: "12 × 8", firstMm: 12 * IN_TO_MM, secondMm: 8 * IN_TO_MM },
  { id: "square", msgKey: "sizeSquare", firstMm: 8 * IN_TO_MM, secondMm: 8 * IN_TO_MM },
];

/** Long ÷ short, independent of which edge the trade name lists first. */
export function printRatio(print: PrintSize): number {
  return Math.max(print.firstMm, print.secondMm) / Math.min(print.firstMm, print.secondMm);
}

export interface CropResult {
  sourceRatio: number;
  printRatio: number;
  /** Which pair of edges is trimmed to fill the print with no border.
   *  "width" = left and right (the photo was proportionally WIDER than the
   *  print, so once heights are matched the photo's long edge overhangs).
   *  "height" = top and bottom. "none" is the identity case: same shape,
   *  nothing to trim — the control rule 2 asks for. */
  croppedAxis: "width" | "height" | "none";
  /** Fraction of that axis's on-paper length that never reaches the print,
   *  0 up to (not including) 1. */
  fractionLost: number;
  /** Same fraction, split evenly either side of a centred crop. */
  fractionPerSide: number;
}

/** Cover-fit: scale the photo until it exactly fills the print (matching
 *  whichever axis needs the LARGER scale factor — the smaller one would leave a
 *  gap), then measure how far the other axis overhangs.
 *
 *  The identity case runs through the SAME formula as every other case, and
 *  that is deliberate. An earlier version returned zero from an early exit when
 *  the two ratios matched, which made the control decorative: inject a fault
 *  into the formula and the control still passed, because the control never
 *  reached the formula. A control that cannot fail proves nothing.
 *
 *  So the fraction is always computed, and "nothing is cut" is a conclusion
 *  drawn FROM it rather than a branch taken instead of it. The epsilon is still
 *  needed, because the inch-derived sizes do not divide cleanly in binary —
 *  6 * 25.4 / (4 * 25.4) is 1.4999999999999998, so a true 3:2-into-6x4 lands at
 *  1.1e-16 rather than 0 — but it now snaps a computed value to zero instead of
 *  skipping the computation. */
export function cropForPrint(source: SourceRatio, print: PrintSize): CropResult {
  const sourceRatio = source.long / source.short;
  const pRatio = printRatio(print);
  const raw = 1 - Math.min(sourceRatio, pRatio) / Math.max(sourceRatio, pRatio);
  const nothingCut = Math.abs(raw) < 1e-9;
  const fractionLost = nothingCut ? 0 : raw;
  return {
    sourceRatio,
    printRatio: pRatio,
    croppedAxis: nothingCut ? "none" : sourceRatio > pRatio ? "width" : "height",
    fractionLost,
    fractionPerSide: fractionLost / 2,
  };
}

/** How much paper-length that fraction is, in millimetres, TOTAL across both
 *  edges. The trimmed axis always ends up exactly the print's own nominal
 *  length — that is what "printed as 5x7" means — so working backwards from
 *  the print's published size and the fraction lost gives the pre-crop
 *  length without ever needing the photo's pixel dimensions. A 3:2 photo on
 *  a 5x7 loses 12.7mm this way, which is the 0.5 inch the brief's own
 *  "6.7% of the long edge" implies once you multiply it out by hand. */
export function lostLengthMm(print: PrintSize, crop: CropResult): number {
  if (crop.croppedAxis === "none") return 0;
  const longMm = Math.max(print.firstMm, print.secondMm);
  const shortMm = Math.min(print.firstMm, print.secondMm);
  const finalLengthMm = crop.croppedAxis === "width" ? longMm : shortMm;
  return (finalLengthMm * crop.fractionLost) / (1 - crop.fractionLost);
}

export const mmToIn = (mm: number) => mm / IN_TO_MM;
export const mmToCm = (mm: number) => mm / 10;
export const pct = (x: number) => `${(x * 100).toFixed(1)}%`;

/* `widget` is narrowed to this cell's own id below because the shared
 * ToolData["widget"] union in tools-data.ts currently lists only the first
 * tool cell — the orchestrator widens it when wiring this one in. Every
 * other field is checked against ToolData exactly, so a shape mistake here
 * still fails `tsc --noEmit` in THIS file rather than surfacing later. */
export const tool: ToolData = {
  slug: "print-crop-calculator",
  lastmod: "2026-09-25",
  ns: "printCropTool",
  facts: 4,
  widget: "print-crop-calculator",
  category: "DesignApplication",
  related: [
    { href: "/ratio/3-2", labelKey: "related3x2" },
    { href: "/ratio/4-3", labelKey: "related4x3" },
    { href: "/blog/how-to-resize-image-without-losing-quality", labelKey: "relatedResize" },
  ],
};
