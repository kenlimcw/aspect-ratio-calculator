import type { ToolData } from "@/lib/tools-data";

/* Crop factor is one number wearing two different hats, and most pages that
 * publish it only show one of them.
 *
 *   FRAMING — multiply the focal length by the crop factor and you get how a
 *   lens frames relative to full frame: a 50mm lens on an APS-C Canon body
 *   frames like an 80.7mm lens would on full frame. This half is universally
 *   covered.
 *
 *   DEPTH OF FIELD — multiply the f-number by the same crop factor and you get
 *   the "equivalent aperture": how much is in focus, matched to what a
 *   full-frame setup at the same framing would need to blur the background the
 *   same amount. This is the half most pages get wrong or leave out, and the
 *   easiest one to misread as an exposure change. It is not an exposure change:
 *   exposure is set by the lens's actual f-number and the actual ISO/shutter,
 *   on any sensor. A smaller sensor does not need more light to reach f/2.8 —
 *   it needs a longer lens to defocus the background as much as a full-frame
 *   body would at the same field of view.
 *
 * Both numbers come from one input: the sensor's physical diagonal in
 * millimetres, by Pythagoras on its published width and height. Nothing here
 * is looked up from a table of crop factors — the crop factor IS the table,
 * computed fresh from the two numbers that define a sensor format.
 */

export interface Sensor {
  id: string;
  /** Key into the sensorCropTool message namespace holding this sensor's
   *  display name. These are format names, not brand names — "Micro Four
   *  Thirds" is itself translated in most of the site's thirteen locales the
   *  way a product name like "iPhone 15" is not — so every one of them is a
   *  message key, never a literal string here (contract rule 3). */
  msgKey: string;
  /** Sensor width and height in millimetres: the imaging area a format
   *  standardises to, not any one camera's marketing name. These six cover
   *  the sizes actually in circulation, from 1-inch compacts to medium
   *  format, and are the values every manufacturer publishes for the format. */
  w: number;
  h: number;
}

export const FULL_FRAME: Sensor = { id: "full-frame", msgKey: "fullFrame", w: 36, h: 24 };

export const SENSORS: Sensor[] = [
  FULL_FRAME,
  { id: "aps-c-canon", msgKey: "apsCCanon", w: 22.3, h: 14.9 },
  { id: "aps-c-nikon-sony", msgKey: "apsCNikonSony", w: 23.5, h: 15.6 },
  { id: "micro-four-thirds", msgKey: "microFourThirds", w: 17.3, h: 13 },
  { id: "one-inch", msgKey: "oneInch", w: 13.2, h: 8.8 },
  { id: "medium-format", msgKey: "mediumFormat", w: 44, h: 33 },
];

/** Sensor diagonal in mm, Pythagoras on its published width and height. Full
 *  frame's own diagonal works out to 43.27mm — the number every crop-factor
 *  page quotes — but it is derived here, not hardcoded, so it stays correct
 *  if this list ever grows to include another format. */
export function diagonal(sensor: Sensor): number {
  return Math.sqrt(sensor.w * sensor.w + sensor.h * sensor.h);
}

const FULL_FRAME_DIAGONAL = diagonal(FULL_FRAME);

/** Crop factor: full frame's diagonal divided by this sensor's own. Computing
 *  the reference diagonal from the SAME function, rather than hardcoding a
 *  rounded 43.27, is what makes full frame's own crop factor come out to
 *  exactly 1 — it is x divided by x, not two independently-rounded numbers
 *  that happen to agree. A sensor bigger than full frame (medium format)
 *  correctly returns a factor below 1: it is not "cropped", it sees more. */
export function cropFactor(sensor: Sensor): number {
  return FULL_FRAME_DIAGONAL / diagonal(sensor);
}

export interface Equivalence {
  cropFactor: number;
  /** f × crop factor: how the lens frames relative to full frame. */
  equivFocalLength: number;
  /** N × crop factor: how much is in focus relative to full frame at the same
   *  framing. A depth-of-field figure — never an exposure figure. */
  equivAperture: number;
}

/** The two headline numbers this tool exists to publish, from a sensor and
 *  the two things a photographer actually enters: the lens's focal length and
 *  its f-number. */
export function equivalence(sensor: Sensor, focalLengthMm: number, aperture: number): Equivalence {
  const crop = cropFactor(sensor);
  return {
    cropFactor: crop,
    equivFocalLength: focalLengthMm * crop,
    equivAperture: aperture * crop,
  };
}

export const formatCrop = (x: number) => `${x.toFixed(3)}×`;

/* ── registry entry ─────────────────────────────────────────────────────── *
 *
 * `ToolData.widget` is a closed union with one member today, "safe-zone-
 * checker" — it was written for the single reference tool and hasn't been
 * generalised yet, because this is the first cell built alongside it.
 * tools-data.ts is a shared file this agent may not edit (CONTRACT.md), so
 * widening that union and registering this entry in TOOL_DATA is left to the
 * orchestrator. Typing against `Omit<ToolData, "widget">` still checks every
 * OTHER field against the real interface, so `tool` fails closed on any
 * mismatch except the one the shared file hasn't caught up on yet.
 */

export const tool: ToolData = {
  slug: "sensor-crop-factor",
  lastmod: "2026-09-25",
  ns: "sensorCropTool",
  facts: 4,
  widget: "sensor-crop-factor",
  category: "PhotoApplication",
  related: [
    { href: "/ratio/3-2", labelKey: "related3x2" },
    { href: "/ratio/4-3", labelKey: "related4x3" },
    { href: "/blog/what-is-aspect-ratio", labelKey: "relatedWhatIs" },
  ],
};
