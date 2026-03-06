import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { NON_DEFAULT_SEGMENTS } from "@/i18n/config";

const localeSegments = new Set(NON_DEFAULT_SEGMENTS);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

function applyCSP(request: NextRequest, rewriteUrl?: URL) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://www.googletagmanager.com https://www.clarity.ms https://scripts.clarity.ms`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https://www.google-analytics.com https://c.clarity.ms",
    "font-src 'self'",
    "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://z.clarity.ms https://c.clarity.ms https://www.clarity.ms",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  let response: NextResponse;
  if (rewriteUrl) {
    response = NextResponse.rewrite(rewriteUrl, { request: { headers: requestHeaders } });
  } else {
    response = NextResponse.next({ request: { headers: requestHeaders } });
  }
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?)$).*)",
  ],
};
