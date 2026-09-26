import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NON_DEFAULT_SEGMENTS } from "@/i18n/config";

const localeSegments = new Set(NON_DEFAULT_SEGMENTS);

/* Does this caller want JSON rather than the page?
 *
 * Deliberately strict: JSON must be asked for AND HTML must not be. Every
 * browser sends text/html in Accept, so this can never fire for a person, only
 * for something that asked for a machine-readable representation by name. */
function prefersJson(accept: string | null): boolean {
  if (!accept) return false;
  const a = accept.toLowerCase();
  return a.includes("application/json") && !a.includes("text/html") && !a.includes("*/*");
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* Content negotiation: the same URL, a different representation.
   *
   * An agent that wants the numbers on /ratio/16-9 should not have to parse a
   * page laid out for a human — and the part of a page that scraping depends
   * on is exactly the part that changes when the design does. Asking for
   * application/json on the canonical URL returns the same resource as data. */
  if (
    !pathname.startsWith("/api/") &&
    !pathname.startsWith("/_next/") &&
    !pathname.includes(".") &&
    prefersJson(request.headers.get("accept"))
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/api/content";
    url.searchParams.set("path", pathname);
    return NextResponse.rewrite(url);
  }

  // Skip API routes, static files, service worker, manifest
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/icons/") ||
    pathname.includes(".")
  ) {
    return applyCSP(request);
  }

  // Check if path starts with a non-default locale segment
  const firstSegment = pathname.split("/")[1]?.toLowerCase();

  if (firstSegment && localeSegments.has(firstSegment)) {
    // Valid locale prefix — pass through, Next.js [locale] segment handles it
    return applyCSP(request);
  }

  // No locale prefix = English default
  // Internally rewrite to /en/... so [locale] segment resolves
  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname}`;
  return applyCSP(request, url);
}

/* Why there is no nonce here any more.
 *
 * This used to mint a per-request nonce and send `script-src 'self'
 * 'nonce-...' 'strict-dynamic'`. Under `strict-dynamic` a browser IGNORES
 * `'self'` and runs only scripts carrying the nonce — and a statically
 * prerendered page cannot carry a per-request value, because it was written to
 * disk at build time.
 *
 * So every prerendered page on this site shipped JavaScript the browser then
 * refused to execute. Measured against production on 2026-09-25:
 *
 *     /ratio/16-9                 prerendered, 0 script tags with a nonce
 *     /platform/instagram         prerendered, 0
 *     /blog/what-is-aspect-ratio  prerendered, 0
 *     /ja                         dynamic, nonce present, works
 *
 * The calculator worked on the home page and nowhere else, and the reason the
 * home page worked is that reading headers() had forced it to render on demand
 * — which is also what made it uncacheable. The nonce and the caching problem
 * were the same bug wearing two hats.
 *
 * `'unsafe-inline'` is here for the same reason and it is the uncomfortable
 * half. Removing the nonce unblocked the external chunks, and the browser then
 * reported 15 more violations against `script-src-elem <- inline`: the App
 * Router always emits an inline bootstrap carrying the RSC payload, and that
 * needs a nonce, a per-page hash, or `unsafe-inline`. A nonce cannot exist in a
 * file written at build time, and the payload differs per page so a static hash
 * list is not maintainable. **A nonce-based CSP and static prerendering are
 * mutually exclusive in this framework** — that is the actual constraint, and
 * every other arrangement is a way of choosing which one to lose.
 *
 * So the trade, stated rather than slipped in. We lose: protection against an
 * injected inline script. We keep: no `unsafe-eval`, third-party script limited
 * to named origins, `object-src 'none'`, `base-uri 'self'`. The exposure needs
 * an XSS vector to exploit, and this site renders no user input into HTML — it
 * is a calculator whose inputs never leave client state, with no uploads, no
 * comments and no user-supplied URLs.
 *
 * The alternative is what production does today: render everything on demand to
 * keep the nonce, which costs the cacheability and the ETags that Googlebot
 * needs — on a site whose whole problem is that Google stopped crawling it.
 * Worth revisiting if the site ever renders anything a user typed.
 */
/* EEA + UK + Switzerland. Switzerland is outside the EEA, but the revised FADP
 * is close enough that treating it differently is not worth the argument. */
const GDPR_COUNTRIES = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU",
  "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES",
  "SE", "IS", "LI", "NO", "GB", "CH",
]);

function applyCSP(request: NextRequest, rewriteUrl?: URL) {
  const csp = [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms",
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google-analytics.com https://c.clarity.ms",
    "font-src 'self'",
    "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://z.clarity.ms https://c.clarity.ms https://www.clarity.ms",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  let response: NextResponse;
  if (rewriteUrl) {
    response = NextResponse.rewrite(rewriteUrl);
  } else {
    response = NextResponse.next();
  }
  response.headers.set("Content-Security-Policy", csp);

  /* Where is this request from?
   *
   * Consent before analytics cookies is an EEA/UK obligation, not a global one,
   * and a banner shown to everyone is an interruption most of the world never
   * asked for. Vercel resolves the country at the edge for nothing, so the
   * decision is made once here and handed to the client, rather than guessed
   * in the browser or shown to everybody just in case.
   *
   * Deliberately not httpOnly — CookieConsent has to read it. It carries one
   * bit, derived from an IP address that is never stored.
   *
   * No header means we are not on Vercel (local, or a self-host), and then we
   * assume the stricter regime. Wrong in that direction costs a banner; wrong
   * the other way is a compliance breach.
   */
  const country = request.headers.get("x-vercel-ip-country");
  response.cookies.set(
    "arc_gdpr",
    country === null || GDPR_COUNTRIES.has(country) ? "1" : "0",
    { path: "/", sameSite: "lax", maxAge: 60 * 60 * 24, httpOnly: false },
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?)$).*)",
  ],
};
