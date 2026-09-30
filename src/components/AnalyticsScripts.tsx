"use client";

import { useEffect } from "react";

const GA4_ID = "G-K2FFY9EBDL";
const CLARITY_ID = "vqoklhyc4l";
const CONSENT_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-updated";

/* Analytics is for the live site and nowhere else.
 *
 * The production measurement ID is compiled into every build, including the
 * one `next start` serves on localhost during testing — so a headless browser
 * run against 127.0.0.1 sends real hits to the real property. Measured
 * 2026-09-30, the first day GA4 could be read at all: of 427 sessions,
 * **329 carried hostName 127.0.0.1**. Our own test runs outnumbered the
 * site's actual visitors three to one, all filed as Direct traffic from
 * Australia, and the headline session count was meaningless.
 *
 * Vercel preview deployments have the same problem with a different name:
 * *.vercel.app builds are production builds and would pollute the property
 * with traffic nobody visited.
 *
 * An allowlist, not a denylist. A denylist has to predict every host the
 * site will ever be served from and is wrong the first time it is surprised;
 * this is wrong only in the safe direction, by under-counting somewhere we
 * forgot to name. */
const MEASURED_HOSTS = new Set([
  "aspect-ratio-calculator.com",
  "www.aspect-ratio-calculator.com",
]);

function isMeasuredHost(): boolean {
  if (typeof window === "undefined") return false;
  if (window.__arcForceAnalytics) return true;
  return MEASURED_HOSTS.has(window.location.hostname);
}

/* dataLayer and gtag are declared once, in src/lib/analytics.ts, and optional
 * there because before consent they genuinely do not exist. Re-declaring them
 * as required here made the two declarations disagree on their modifiers, which
 * TypeScript refuses to merge — the build failed and the whole /compare and
 * /embed branch could not ship. */
declare global {
  interface Window {
    __ga4Loaded?: boolean;
    __clarityLoaded?: boolean;
    /* Set by the Playwright suite before navigation so the wiring tests can
     * still prove the loaders work. A visitor who sets it by hand sends one
     * extra hit from their own browser and nothing else. */
    __arcForceAnalytics?: boolean;
  }
}

function loadGA4() {
  if (typeof window === "undefined") return;
  if (!isMeasuredHost()) return;
  if (window.__ga4Loaded) return;
  window.__ga4Loaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  script.async = true;
  document.head.appendChild(script);

  const layer: unknown[] = (window.dataLayer = window.dataLayer ?? []);

  /* `arguments`, not a rest array. This looks like a stylistic relic of
   * Google's snippet and is not one.
   *
   * gtag.js reads dataLayer and dispatches on what it finds. An `arguments`
   * object is how it recognises a command; a real array is data, and it is
   * ignored. Written with rest parameters, `gtag("config", ID)` pushed
   * ["config", ID] — an array — so gtag.js loaded, saw nothing it recognised,
   * and sent no pageview. GA4 recorded not one hit for the life of the site.
   *
   * Measured on production 2026-09-28 before the fix: the site's own pushes
   * produced zero requests to /g/collect; the same two commands re-pushed as
   * `arguments` objects in the same page produced one immediately.
   *
   * eslint's prefer-rest-params is right about ordinary code and wrong here,
   * because the shape is the payload. */
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    layer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID);
}

function loadClarity() {
  if (typeof window === "undefined") return;
  if (!isMeasuredHost()) return;
  if (window.__clarityLoaded) return;
  window.__clarityLoaded = true;

  const w = window as Window & { clarity?: (...args: unknown[]) => void };
  w.clarity =
    w.clarity ||
    function (...args: unknown[]) {
      const q = ((w.clarity as unknown as { q?: unknown[] }).q =
        (w.clarity as unknown as { q?: unknown[] }).q || []);
      q.push(args);
    };

  const t = document.createElement("script");
  t.async = true;
  t.src = "https://www.clarity.ms/tag/" + CLARITY_ID;
  const y = document.getElementsByTagName("script")[0];
  y.parentNode?.insertBefore(t, y);
}

function checkAndLoad() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return;
    const consent = JSON.parse(raw) as { analytics?: boolean };
    if (consent.analytics === true) {
      loadGA4();
      loadClarity();
    }
  } catch {
    // ignore parse errors
  }
}

export function AnalyticsScripts() {
  useEffect(() => {
    checkAndLoad();

    function onConsentUpdate() {
      checkAndLoad();
    }

    window.addEventListener(CONSENT_EVENT, onConsentUpdate);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentUpdate);
  }, []);

  return null;
}
