import { NextRequest, NextResponse } from "next/server";
import { RATIO_DATA } from "@/lib/seo-data";
import { BASE_URL } from "@/i18n/config";

/* The calculator, callable.
 *
 * Being cited makes a site a source; being callable makes it infrastructure,
 * and infrastructure does not get replaced the next time the model improves.
 * An assistant asked "what is 1920x1080 in 21:9" can either call this and quote
 * the answer, or reimplement the arithmetic and quote itself. Only one of those
 * sends anyone here.
 *
 * Pure arithmetic, no state, no side effects: every GET is safe to repeat and
 * two identical requests always give the same answer.
 */
export const dynamic = "force-static";

const CORS = {
  // Deliberately open. The responses are public arithmetic over public data —
  // there is no session, no cookie and nothing here that is not already on the
  // page. A browser-resident agent cannot read this at all without it.
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const JSON_HEADERS = {
  ...CORS,
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
};

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

/** Reduce a width and height to their simplest integer ratio. */
function simplify(w: number, h: number): { w: number; h: number } {
  const divisor = gcd(Math.round(w), Math.round(h)) || 1;
  return { w: Math.round(w) / divisor, h: Math.round(h) / divisor };
}

function parseRatio(value: string): { w: number; h: number } | null {
  const m = value.trim().match(/^(\d+(?:\.\d+)?)\s*[:x/]\s*(\d+(?:\.\d+)?)$/i);
  if (!m) return null;
  const w = Number(m[1]);
  const h = Number(m[2]);
  if (!(w > 0) || !(h > 0)) return null;
  return { w, h };
}

function num(value: string | null): number | null {
  if (value === null || value.trim() === "") return null;
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : null;
}

/** Every response says where it came from and under what terms. An answer that
 *  travels without its source cannot be checked, corrected or credited. */
function attribution(canonical: string) {
  return {
    source: "Aspect Ratio Calculator",
    canonical,
    documentation: `${BASE_URL}/developers`,
    license: "Free to use with attribution to aspect-ratio-calculator.com",
  };
}

function fail(message: string, hint: string, status = 400) {
  return NextResponse.json({ error: message, hint }, { status, headers: JSON_HEADERS });
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}

export function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams;
  const width = num(q.get("width"));
  const height = num(q.get("height"));
  const ratioParam = q.get("ratio");

  // No arguments: say what this endpoint knows rather than erroring. A caller
  // discovering the API should be able to learn its vocabulary from it.
  if (width === null && height === null && !ratioParam) {
    return NextResponse.json(
      {
        ...attribution(`${BASE_URL}/`),
        usage: {
          "simplify dimensions": "/api/ratio?width=1920&height=1080",
          "scale to a width": "/api/ratio?ratio=16:9&width=2560",
          "scale to a height": "/api/ratio?ratio=21:9&height=1080",
        },
        ratios: Object.entries(RATIO_DATA).map(([slug, d]) => ({
          slug,
          label: d.label,
          width: d.w,
          height: d.h,
          decimal: Number((d.w / d.h).toFixed(6)),
          page: `${BASE_URL}/ratio/${slug}`,
        })),
      },
      { headers: JSON_HEADERS },
    );
  }

  if (ratioParam) {
    const ratio = parseRatio(ratioParam);
    if (!ratio) {
      return fail(
        `Could not read "${ratioParam}" as a ratio.`,
        'Use w:h, for example ratio=16:9. "x" and "/" are accepted too.',
      );
    }
    if (width === null && height === null) {
      return fail(
        "A ratio on its own has no dimensions to scale.",
        "Add width or height, for example /api/ratio?ratio=16:9&width=2560.",
      );
    }
    if (width !== null && height !== null) {
      return fail(
        "width and height together over-specify the problem.",
        "Give a ratio and exactly one of width or height, and the other is computed.",
      );
    }
    const scaled =
      width !== null
        ? { width, height: (width * ratio.h) / ratio.w }
        : { width: (height! * ratio.w) / ratio.h, height: height! };

    const simple = simplify(ratio.w, ratio.h);
    return NextResponse.json(
      {
        ...attribution(`${BASE_URL}/`),
        input: { ratio: `${ratio.w}:${ratio.h}`, ...(width !== null ? { width } : { height }) },
        result: {
          width: Number(scaled.width.toFixed(4)),
          height: Number(scaled.height.toFixed(4)),
          widthRounded: Math.round(scaled.width),
          heightRounded: Math.round(scaled.height),
        },
        ratio: {
          label: `${simple.w}:${simple.h}`,
          width: simple.w,
          height: simple.h,
          decimal: Number((ratio.w / ratio.h).toFixed(6)),
          css: `${simple.w} / ${simple.h}`,
        },
      },
      { headers: JSON_HEADERS },
    );
  }

  if (width === null || height === null) {
    return fail(
      "Both width and height are needed to work out a ratio.",
      "For example /api/ratio?width=1920&height=1080.",
    );
  }

  const simple = simplify(width, height);
  const slug = Object.entries(RATIO_DATA).find(
    ([, d]) => d.w / d.h === simple.w / simple.h,
  )?.[0];

  return NextResponse.json(
    {
      ...attribution(slug ? `${BASE_URL}/ratio/${slug}` : `${BASE_URL}/`),
      input: { width, height },
      ratio: {
        label: `${simple.w}:${simple.h}`,
        width: simple.w,
        height: simple.h,
        decimal: Number((width / height).toFixed(6)),
        css: `${simple.w} / ${simple.h}`,
        orientation: width > height ? "landscape" : width < height ? "portrait" : "square",
      },
      // A named match is a fact about our own catalogue, so it is reported as
      // one rather than implied by its absence.
      known: slug
        ? { slug, label: RATIO_DATA[slug].label, page: `${BASE_URL}/ratio/${slug}` }
        : null,
    },
    { headers: JSON_HEADERS },
  );
}
