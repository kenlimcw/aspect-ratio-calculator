/* The /tools namespace.
 *
 * Measured, 25 Sep 2026: Google's AI Overview appears on every query this site
 * targets, cites between two and seven sources, and takes 81% of them from the
 * organic top 20. The pages holding those slots are not big — the most-cited
 * competitor URL we measured earns an estimated 287 visits a month, and the
 * site ranking #1 for "safe zone checker" has domain rank 0, 53 referring
 * domains and one page. Every winner is a page in a tools directory, one
 * intent per page, the intent named in the URL. This site had no such
 * directory, which is the gap this registry closes.
 *
 * A tool earns its place here only if it OUTPUTS A PUBLISHABLE NUMBER. That
 * by-product is what the article, the video and the citation all quote, and it
 * is the only part a competitor cannot copy.
 *
 * No copy lives in this file. Every user-visible string is a key in the tool's
 * message namespace, because English is a source and not the site — and because
 * Search Console says the translated pages are the only ones currently winning.
 */

export interface ToolData {
  slug: string;
  /** Namespace in src/i18n/messages/*.json holding this tool's copy. Required
   *  keys: title, description, h1, answer, provesHeading, fact1..factN. */
  ns: string;
  /** How many fact strings the namespace carries. */
  facts: number;
  /** Which component renders the interactive part. Widened as cells land;
   *  the map in widgets.tsx must stay exhaustive over this union. */
  widget:
    | "safe-zone-checker"
    | "print-crop-calculator"
    | "screen-size-calculator"
    | "sensor-crop-factor"
    | "pixels-to-inches"
    | "phone-crop-explainer";
  /** When THIS tool's content last changed. Per-tool, not shared: five new
   *  pages riding one date would re-stamp the unchanged ones, and an inflated
   *  lastmod is exactly the lie that stopped Google crawling this site. */
  lastmod: string;
  /** schema.org SoftwareApplication subtype — the specific one, because a
   *  machine reader uses it to decide this is a tool worth naming. */
  category: string;
  /** Internal links out. Every tool page points at least two ways. */
  related: { href: string; labelKey: string }[];
}

import { tool as safeZone } from "@/lib/tools/instagram-safe-zone-checker";
import { tool as printCrop } from "@/lib/tools/print-crop-calculator";
import { tool as screenSize } from "@/lib/tools/screen-size-calculator";
import { tool as sensorCrop } from "@/lib/tools/sensor-crop-factor";
import { tool as pixelsInches } from "@/lib/tools/pixels-to-inches";
import { tool as phoneCrop } from "@/lib/tools/why-instagram-crops-reels";

const CELLS: ToolData[] = [safeZone, printCrop, screenSize, sensorCrop, pixelsInches, phoneCrop];

export const TOOL_DATA: Record<string, ToolData> = Object.fromEntries(
  CELLS.map((t) => [t.slug, t])
);

export const TOOL_SLUGS = Object.keys(TOOL_DATA);
