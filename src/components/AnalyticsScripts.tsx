"use client";

import { useEffect } from "react";

const GA4_ID = "G-K2FFY9EBDL";
const CLARITY_ID = "vqoklhyc4l";
const CONSENT_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-updated";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    __ga4Loaded?: boolean;
    __clarityLoaded?: boolean;
  }
}

function loadGA4() {
  if (typeof window === "undefined") return;
  if (window.__ga4Loaded) return;
  window.__ga4Loaded = true;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA4_ID);
}

function loadClarity() {
  if (typeof window === "undefined") return;
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
