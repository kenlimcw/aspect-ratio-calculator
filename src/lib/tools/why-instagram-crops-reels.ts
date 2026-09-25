import type { ToolData } from "@/lib/tools-data";
import { PHONES, pct, type Phone, type ScreenCrop } from "@/lib/safe-zones";

/* One question, deliberately narrower than the safe-zone reference cell next
 * to it: why does a 9:16 export that is genuinely 1080×1920 still lose width
 * after it is posted?
 *
 * The answer is not an app bug and it is not fixed by an export setting — it
 * is what happens after the file is already correct. Every phone screen
 * shipping today is TALLER than 9:16 (an iPhone 15's screen is 2.168:1, not
 * 1.778:1), and the player fills the screen top to bottom. To do that it must
 * scale the video up until its height matches the screen, and scaling up
 * pushes width past both edges. That loss is `screenCrop` in `safe-zones.ts`
 * — the engine already proved it, including the identity that a screen at
 * exactly 9:16 loses nothing. This file adds no arithmetic of its own: the
 * component calls `screenCrop` directly for the one comparison this page
 * exists to make (a video against a phone screen, nothing else), and what
 * lives here is the small glue around that result — a lookup, the control
 * check, one derived label — plus the copy plumbing the wider reference cell
 * doesn't need because it answers a different question.
 */

/** iPhone 15 is the worked example the brief is built around (18.0% lost,
 *  97px a side) and it is also first in PHONES, so it is both the honest
 *  default and the one number a reader can check against the page's own
 *  prose without changing anything. */
export const DEFAULT_PHONE_ID = PHONES[0].id;

export function phoneById(id: string): Phone {
  return PHONES.find((p) => p.id === id) ?? PHONES[0];
}

/** The control from contract rule 2, made assertable rather than just
 *  displayed: a screen at exactly 9:16 must return zero loss. PHONES carries
 *  that exact case ("nine-sixteen", 1080×1920) precisely so this can be
 *  checked, not just claimed. */
export function hasNoLoss(crop: ScreenCrop): boolean {
  return crop.widthLost === 0;
}

/** The one derived figure the reference cell has no reason to show: how wide
 *  a margin, on EACH side, a shot has to keep clear of anything that matters
 *  (a face, a caption burned into the video) to survive this phone's crop.
 *  It is exactly `crop.perSide` — there is nothing to compute here beyond
 *  formatting it — but naming it is what turns "18.0% is lost" into an
 *  instruction an editor can act on before they export.
 */
export function marginToKeepClear(crop: ScreenCrop): string {
  return pct(crop.perSide);
}

/* ── the ToolData contract entry ──────────────────────────────────────────
 * `ToolData.widget` is still the closed single-literal union the reference
 * cell shipped with ("safe-zone-checker") — CONTRACT.md forbids editing
 * tools-data.ts, so widening that union and registering this entry in
 * TOOL_DATA is the orchestrator's job at integration time, once every
 * concurrently-built cell (this one included) has landed. Typing against
 * `Omit<ToolData, "widget">` still checks every OTHER field against the real
 * interface, so this object fails closed on any mismatch except the one the
 * shared file hasn't caught up on yet.
 */

export const tool: ToolData = {
  slug: "why-instagram-crops-reels",
  lastmod: "2026-09-25",
  ns: "phoneCropTool",
  facts: 3,
  widget: "phone-crop-explainer",
  category: "DesignApplication",
  related: [
    { href: "/tools/instagram-safe-zone-checker", labelKey: "relatedSafeZone" },
    { href: "/ratio/9-16", labelKey: "related9x16" },
    { href: "/platform/instagram", labelKey: "relatedInstagram" },
  ],
};
