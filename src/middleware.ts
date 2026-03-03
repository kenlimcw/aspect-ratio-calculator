import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob:",
    "font-src 'self'",
    // Vercel Analytics sends beacons to vitals.vercel-insights.com
    "connect-src 'self' https://vitals.vercel-insights.com",
    "object-src 'none'",
    "base-uri 'self'",
  ].join("; ");

  // Pass nonce to Next.js — it reads x-nonce and applies it to its own
  // inline RSC/hydration scripts automatically (Next.js 13.4.20+)
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Skip Next.js internals, static assets, and files with extensions
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|xml|woff2?)$).*)",
  ],
};
