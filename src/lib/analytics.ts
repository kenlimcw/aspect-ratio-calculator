/**
 * Lightweight analytics helper. Safe to call from any client component —
 * no-ops cleanly if gtag is not loaded (consent declined, SSR, etc.).
 *
 * Events fire to both Google Analytics 4 (via gtag) and Microsoft Clarity
 * (via window.clarity) when they're loaded. See AnalyticsScripts.tsx for
 * the consent-gated loader.
 *
 * Event taxonomy (kept in sync with the marketing plan §11 + arc_growth agent):
 *
 *   calc_run            — user produced a new calculation result
 *   find_ratio          — user used the Find Ratio mode
 *   image_wizard_upload — user uploaded an image to Image Wizard
 *   copy_dimensions     — user copied calculated dimensions
 *   preset_select       — user clicked a platform / ratio preset
 *   affiliate_click     — user clicked an affiliate placement (partner in props)
 *   embed_view          — embed widget loaded on a third-party site
 *   external_link       — user clicked an outbound link
 */

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export type AnalyticsEvent =
  | "calc_run"
  | "find_ratio"
  | "image_wizard_upload"
  | "copy_dimensions"
  | "preset_select"
  | "affiliate_click"
  | "embed_view"
  | "external_link";

export type EventProps = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props: EventProps = {}): void {
  if (typeof window === "undefined") return;

  const cleaned: EventProps = {};
  for (const [k, v] of Object.entries(props)) {
    if (v !== undefined) cleaned[k] = v;
  }

  try {
    window.gtag?.("event", event, cleaned);
  } catch {
    // analytics failures must never break the calculator
  }

  try {
    window.clarity?.("event", event);
  } catch {
    // ignore
  }
}
