import type { ToolData } from "@/lib/tools-data";

/* A diagonal is a single number sellers love because it always sounds bigger
 * than width or height alone, and it is genuinely ambiguous: the same 34"
 * spec describes a tall-ish 4:3 rectangle and a letterbox-shaped 32:9 one.
 * You cannot answer "will it fit" without the aspect ratio too.
 *
 * The geometry is the Pythagorean theorem read the other way. A screen's
 * width and height are two legs of a right triangle whose hypotenuse is the
 * diagonal: w² + h² = d². Let r = w/h (the aspect ratio) and divide through
 * by h²: r² + 1 = (d/h)², so
 *
 *   h = d / sqrt(r² + 1)
 *   w = h × r = d × r / sqrt(r² + 1)
 *
 * No trigonometry, no lookup table — both outputs fall out of that one
 * substitution, for any ratio and any unit, because the relationship scales:
 * feed it a diagonal in inches and get inches back, in cm and get cm back.
 */

export type RatioId = "16-9" | "21-9" | "3440-1440" | "32-9" | "4-3" | "16-10";

export interface AspectRatioDef {
  id: RatioId;
  label: string;
  /** width ÷ height. The only number the geometry consumes. */
  r: number;
}

export const RATIOS: AspectRatioDef[] = [
  { id: "16-9", label: "16:9", r: 16 / 9 },
  /* "21:9" is a marketing label and no shipping monitor is actually 21/9.
   * A 34" ultrawide is 3440x1440 (43:18 = 2.389) or 2560x1080 (2.370); the
   * nominal figure is 2.333. The gap matters where it is quoted: against 16:9
   * the nominal loses 19.7% of height, the panel someone owns loses 21.2%.
   * Both are offered, the nominal is labelled as such, and 32:9 needs no such
   * treatment because 5120x1440 really is exactly 32/9. */
  { id: "21-9", label: "21:9 (nominal)", r: 21 / 9 },
  { id: "3440-1440", label: "3440 x 1440 (43:18)", r: 3440 / 1440 },
  { id: "32-9", label: "32:9", r: 32 / 9 },
  { id: "4-3", label: "4:3", r: 4 / 3 },
  { id: "16-10", label: "16:10", r: 16 / 10 },
];

export const DEFAULT_RATIO: RatioId = "16-9";

export type Unit = "in" | "cm";
export const CM_PER_INCH = 2.54;

export interface ScreenSize {
  width: number;
  height: number;
  /** width × height, same unit². Kept alongside rather than recomputed by
   *  callers so a display and a comparison always read the identical figure. */
  area: number;
}

const ZERO: ScreenSize = { width: 0, height: 0, area: 0 };

/** The one function everything else calls. Guards non-positive input rather
 *  than returning NaN, because a cleared or half-typed number field is the
 *  normal state of this control, not an error. */
export function screenSize(diagonal: number, r: number): ScreenSize {
  if (!(diagonal > 0) || !(r > 0)) return ZERO;
  const denom = Math.sqrt(r * r + 1);
  const height = diagonal / denom;
  const width = (diagonal * r) / denom;
  return { width, height, area: width * height };
}

export function ratioById(id: RatioId): AspectRatioDef {
  return RATIOS.find((x) => x.id === id) ?? RATIOS[0];
}

/** Diagonal, width and height are all lengths, so converting the unit is a
 *  flat multiply — there is no separate "cm formula". */
export function convert(value: number, from: Unit, to: Unit): number {
  if (from === to) return value;
  return from === "in" ? value * CM_PER_INCH : value / CM_PER_INCH;
}

/** Every ratio at the SAME diagonal, for the table that makes the point of
 *  the page: a diagonal fixes one number, not two, so "34 inches" alone
 *  describes five differently-shaped, differently-sized rectangles. */
export function compareAtSameDiagonal(
  diagonal: number,
  ratios: AspectRatioDef[] = RATIOS,
): { ratio: AspectRatioDef; size: ScreenSize }[] {
  return ratios.map((ratio) => ({ ratio, size: screenSize(diagonal, ratio.r) }));
}

export interface WidenSurprise {
  a: ScreenSize;
  b: ScreenSize;
  /** Fraction of A's height that B gives up, 0-1. */
  heightLostFraction: number;
  /** Fraction of A's area that B gives up, 0-1. Always smaller than the
   *  height fraction here, because B is also wider — the area loss is
   *  partly offset by width gained, the height loss is not offset at all. */
  areaLostFraction: number;
}

/** The specific comparison the brief exists to surface: at a fixed diagonal,
 *  going from 16:9 to 21:9 trades height for width, and does not trade it
 *  evenly. Hard-codes the pair rather than taking two IDs because this exact
 *  comparison — not an arbitrary one — is the searched-for surprise ("does a
 *  34" ultrawide sit shorter than my 34" monitor" is a real query shape). */
export function sameDiagonalSurprise(diagonal: number): WidenSurprise {
  const a = screenSize(diagonal, ratioById("16-9").r);
  const b = screenSize(diagonal, ratioById("21-9").r);
  const heightLostFraction = a.height === 0 ? 0 : (a.height - b.height) / a.height;
  const areaLostFraction = a.area === 0 ? 0 : (a.area - b.area) / a.area;
  return { a, b, heightLostFraction, areaLostFraction };
}

export const fmt1 = (x: number) => x.toFixed(1);
export const pct1 = (x: number) => `${(x * 100).toFixed(1)}%`;

export const tool: ToolData = {
  slug: "screen-size-calculator",
  lastmod: "2026-09-25",
  ns: "screenSizeTool",
  facts: 3,
  category: "UtilitiesApplication",
  related: [
    { href: "/ratio/16-9", labelKey: "related16x9" },
    { href: "/ratio/4-3", labelKey: "related4x3" },
    { href: "/blog/16-9-vs-4-3-aspect-ratio", labelKey: "relatedCompare" },
  ],
  widget: "screen-size-calculator",
};
