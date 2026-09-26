/* Screenshot a page with the cookie banner suppressed.
 *
 * The banner is geo-gated in src/proxy.ts on Vercel's `x-vercel-ip-country`.
 * Locally that header is absent, so the middleware assumes the strict regime
 * and the banner shows — and being fixed to the bottom it covers the footer in
 * every capture. Four footer reviews in a row were blocked by this before I
 * stopped fighting it with crops.
 *
 * Sending the header is the fix, and only a driver can do that.
 *
 *   PLAYWRIGHT_CHROMIUM=<chrome path> \
 *   node scripts/screenshot.mjs http://127.0.0.1:3100/contact out.png 1100 [selector]
 *
 * With no selector it captures the full page.
 */
import { chromium } from "@playwright/test";

const [, , url, out, width = "1100", selector] = process.argv;
if (!url || !out) {
  console.error("usage: node scripts/screenshot.mjs <url> <out.png> [width] [selector]");
  process.exit(1);
}

const browser = await chromium.launch({ executablePath: process.env.PLAYWRIGHT_CHROMIUM });
const context = await browser.newContext({
  viewport: { width: Number(width), height: 900 },
  extraHTTPHeaders: { "x-vercel-ip-country": "AU" },
});
const page = await context.newPage();
await page.goto(url, { waitUntil: "networkidle" });

if (selector) {
  const el = page.locator(selector);
  await el.scrollIntoViewIfNeeded();
  await el.screenshot({ path: out });
} else {
  await page.screenshot({ path: out, fullPage: true });
}
console.log(`${out} — ${width}px${selector ? ` — ${selector}` : " — full page"}`);
await browser.close();
