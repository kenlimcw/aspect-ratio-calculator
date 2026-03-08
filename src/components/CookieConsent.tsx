"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/components/I18nProvider";

const CONSENT_KEY = "cookie-consent";
const CONSENT_EVENT = "cookie-consent-updated";
const CONSENT_VERSION = 1;
const OPEN_SETTINGS_EVENT = "open-cookie-settings";

interface ConsentRecord {
  analytics: boolean;
  timestamp: number;
  version: number;
}

function readConsent(): ConsentRecord | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentRecord;
  } catch {
    return null;
  }
}

function writeConsent(analytics: boolean) {
  const record: ConsentRecord = {
    analytics,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}

export function CookieConsent() {
  const { messages, locale } = useTranslation();
  const cc = messages.cookieConsent ?? {};

  const [status, setStatus] = useState<"loading" | "banner" | "settings" | "hidden">("loading");
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const consent = readConsent();
    if (consent === null) {
      setStatus("banner");
    } else {
      setAnalyticsEnabled(consent.analytics);
      setStatus("hidden");
    }

    // Listen for external requests to open the settings modal (e.g. from CookieSettingsLink in Footer)
    const handleOpenSettings = () => {
      const latest = readConsent();
      setAnalyticsEnabled(latest?.analytics ?? false);
      setStatus("settings");
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  function accept() {
    writeConsent(true);
    setAnalyticsEnabled(true);
    setStatus("hidden");
  }

  function decline() {
    writeConsent(false);
    setAnalyticsEnabled(false);
    setStatus("hidden");
  }

  function saveSettings() {
    writeConsent(analyticsEnabled);
    setStatus("hidden");
  }

  if (status === "loading" || status === "hidden") return null;

  // English locale uses no URL prefix — privacy is at /privacy, not /en/privacy
  const privacyHref = locale === "en" ? "/privacy" : `/${locale}/privacy`;

  if (status === "banner") {
    return (
      <div
        role="dialog"
        aria-label={cc.title ?? "Cookie Preferences"}
        className="fixed bottom-0 start-0 end-0 z-50 p-4 md:p-6 md:bottom-4 md:start-4 md:end-auto md:max-w-sm"
      >
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-lg p-5 space-y-4">
          <h2 className="text-sm font-semibold text-[var(--foreground)]">
            {cc.title ?? "Cookie Preferences"}
          </h2>
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            {cc.body ?? "We use Google Analytics and Microsoft Clarity to understand how visitors use this site. These tools set cookies and collect anonymous usage data. Your calculator always works regardless of your choice."}
          </p>
          <div className="flex flex-col gap-2">
            <button
              onClick={accept}
              className="w-full rounded-lg bg-[var(--accent)] text-white text-xs font-medium py-2 px-4 hover:opacity-90 transition-opacity"
            >
              {cc.acceptAll ?? "Accept Analytics"}
            </button>
            <button
              onClick={decline}
              className="w-full rounded-lg border border-[var(--border)] text-[var(--muted)] text-xs font-medium py-2 px-4 hover:bg-[var(--surface-hover,var(--border))] transition-colors"
            >
              {cc.rejectAll ?? "Decline"}
            </button>
          </div>
          <p className="text-[10px] text-[var(--muted)]">
            <Link href={privacyHref} className="underline underline-offset-2 hover:text-[var(--foreground)]">
              {cc.privacyLink ?? "Privacy Policy"}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // status === "settings"
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={cc.settingsTitle ?? "Manage Cookie Preferences"}
      className="fixed inset-0 z-50 flex items-end justify-start p-4 md:items-center md:justify-start md:p-6"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setStatus("hidden")}
        aria-hidden="true"
      />
      <div className="relative rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xl p-5 w-full max-w-sm space-y-4">
        <h2 className="text-sm font-semibold text-[var(--foreground)]">
          {cc.settingsTitle ?? "Manage Cookie Preferences"}
        </h2>

        {/* Essential — always on */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-[var(--foreground)]">
              {cc.essentialLabel ?? "Essential"}
            </p>
            <p className="text-[11px] text-[var(--muted)] leading-relaxed mt-0.5">
              {cc.essentialDesc ?? "Theme preference & offline cache — always active."}
            </p>
          </div>
          <span className="text-[10px] font-medium text-[var(--muted)] whitespace-nowrap mt-0.5">
            {cc.alwaysOn ?? "Always on"}
          </span>
        </div>

        <div className="border-t border-[var(--border)]" />

        {/* Analytics toggle */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-[var(--foreground)]">
              {cc.analyticsCookies ?? "Analytics Cookies"}
            </p>
            <p className="text-[11px] text-[var(--muted)] leading-relaxed mt-0.5">
              {cc.analyticsCookiesDesc ?? "Google Analytics & Microsoft Clarity — helps us improve the calculator."}
            </p>
          </div>
          <button
            role="switch"
            aria-checked={analyticsEnabled}
            onClick={() => setAnalyticsEnabled((v) => !v)}
            className={`relative flex-shrink-0 mt-0.5 w-9 h-5 rounded-full transition-colors ${
              analyticsEnabled ? "bg-[var(--accent)]" : "bg-[var(--border)]"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                analyticsEnabled ? "translate-x-4" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={saveSettings}
            className="flex-1 rounded-lg bg-[var(--accent)] text-white text-xs font-medium py-2 px-4 hover:opacity-90 transition-opacity"
          >
            {cc.save ?? "Save Preferences"}
          </button>
          <button
            onClick={() => setStatus("hidden")}
            className="rounded-lg border border-[var(--border)] text-[var(--muted)] text-xs font-medium py-2 px-3 hover:bg-[var(--surface-hover,var(--border))] transition-colors"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Renders a "Cookie Settings" link for use in the Footer.
 * Only visible after the user has already given (or declined) consent.
 * Clicking opens the CookieConsent settings modal via a window event.
 */
export function CookieSettingsLink() {
  const { messages } = useTranslation();
  const cc = messages.cookieConsent ?? {};
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show the link only after consent has been given/declined
    setVisible(!!localStorage.getItem(CONSENT_KEY));

    // Re-evaluate visibility when consent state changes
    const onConsentUpdate = () => setVisible(!!localStorage.getItem(CONSENT_KEY));
    window.addEventListener(CONSENT_EVENT, onConsentUpdate);
    return () => window.removeEventListener(CONSENT_EVENT, onConsentUpdate);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT))}
      className="hover:text-[var(--foreground)] transition-colors"
    >
      {cc.manageSettings ?? "Cookie Settings"}
    </button>
  );
}
