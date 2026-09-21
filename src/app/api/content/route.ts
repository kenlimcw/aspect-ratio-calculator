import { NextRequest, NextResponse } from "next/server";
import { RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA } from "@/lib/seo-data";
import { BASE_URL, LOCALES, urlSegmentToLocale } from "@/i18n/config";
import { articleDates } from "@/lib/article-meta";

/* A JSON representation of the content pages.
 *
 * This is what the same URL returns when a caller asks for application/json
 * instead of text/html — see the Accept handling in src/proxy.ts. An agent that
 * wants the dimensions on /ratio/16-9 should not have to parse a page built for
 * a human to read, and the fragile part of scraping is exactly the part that
 * changes whenever the design does.
 */
/* NOT force-static: this endpoint reads the query string, and under
 * force-static Next hands the handler EMPTY searchParams and caches one
 * response for every caller. It answered the catalogue to every question,
 * with a 200, which is the worst kind of wrong — confidently. */
export const dynamic = "force-dynamic";

const JSON_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "public, max-age=3600, s-maxage=86400",
  // The HTML and the JSON are the same resource in two representations, so
  // caches must key on what was asked for.
  Vary: "Accept",
};

function attribution(canonical: string) {
  return {
    source: "Aspect Ratio Calculator",
    canonical,
    documentation: `${BASE_URL}/developers`,
    license: "Free to use with attribution to aspect-ratio-calculator.com",
  };
}

export function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, OPTIONS" },
  });
}

export function GET(request: NextRequest) {
  const raw = request.nextUrl.searchParams.get("path") ?? "/";
  const segments = raw.split("/").filter(Boolean);

  // Strip a leading locale segment so /es/ratio/16-9 and /ratio/16-9 agree.
  let locale = "en";
  if (segments.length > 0 && urlSegmentToLocale(segments[0])) {
    locale = urlSegmentToLocale(segments[0])!;
    segments.shift();
  }
  const canonical = `${BASE_URL}${raw.startsWith("/") ? raw : `/${raw}`}`;
  const base = { ...attribution(canonical), locale };

  if (segments.length === 0) {
    return NextResponse.json(
      {
        ...base,
        type: "WebApplication",
        name: "Aspect Ratio Calculator",
        description:
          "Calculate, convert and compare aspect ratios for social media, video, " +
          "photography, web design and screens.",
        languages: LOCALES.map((l) => l.hreflang),
        api: `${BASE_URL}/api/ratio`,
        ratios: Object.keys(RATIO_DATA),
        platforms: Object.keys(PLATFORM_DATA),
        articles: Object.keys(ARTICLE_DATA),
      },
      { headers: JSON_HEADERS },
    );
  }

  const [section, slug] = segments;

  if (section === "ratio" && slug && RATIO_DATA[slug]) {
    const d = RATIO_DATA[slug];
    return NextResponse.json(
      {
        ...base,
        type: "AspectRatio",
        slug,
        label: d.label,
        width: d.w,
        height: d.h,
        decimal: Number((d.w / d.h).toFixed(6)),
        css: d.cssValue,
        explanation: d.explanation,
        useCases: d.useCases,
        dimensions: d.dimensions,
      },
      { headers: JSON_HEADERS },
    );
  }

  if (section === "platform" && slug && PLATFORM_DATA[slug]) {
    const d = PLATFORM_DATA[slug];
    return NextResponse.json(
      { ...base, type: "PlatformGuide", slug, name: d.name, description: d.description, formats: d.formats },
      { headers: JSON_HEADERS },
    );
  }

  if (section === "blog" && slug && ARTICLE_DATA[slug]) {
    const d = ARTICLE_DATA[slug];
    const dates = articleDates(slug);
    return NextResponse.json(
      {
        ...base,
        type: "Article",
        slug,
        headline: d.title,
        description: d.description,
        datePublished: dates.published,
        dateModified: dates.modified,
        sections: d.sections.map((s) => ({ heading: s.heading, body: s.body })),
      },
      { headers: JSON_HEADERS },
    );
  }

  return NextResponse.json(
    {
      ...base,
      error: "No JSON representation exists for this path.",
      hint: `Try ${BASE_URL}/api/ratio, or one of the paths listed at ${BASE_URL}/api/content?path=/`,
    },
    { status: 404, headers: JSON_HEADERS },
  );
}
