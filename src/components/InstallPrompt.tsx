"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTranslation } from "@/components/I18nProvider";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const SNOOZE_KEY = "arc-install-snooze-until";
const COUNT_KEY = "arc-install-snooze-count";
const PERM_KEY = "arc-install-dismissed";
const ARTICLE_HREF = "/blog/install-aspect-ratio-calculator";

type BannerState = "show" | "mini" | "hidden";

function getSnoozeState(): BannerState {
  if (typeof localStorage === "undefined") return "show";
  if (localStorage.getItem(PERM_KEY)) return "hidden";
  const until = Number(localStorage.getItem(SNOOZE_KEY) ?? "0");
  if (Date.now() < until) return "mini";
  return "show";
}

function snooze(): BannerState {
  const count = Number(localStorage.getItem(COUNT_KEY) ?? "0") + 1;
  if (count >= 3) {
    localStorage.setItem(PERM_KEY, "true");
    return "hidden";
  }
  const days = count === 1 ? 7 : 30;
  localStorage.setItem(SNOOZE_KEY, String(Date.now() + days * 86_400_000));
  localStorage.setItem(COUNT_KEY, String(count));
  return "mini";
}

function dismissPermanently(): BannerState {
  localStorage.setItem(PERM_KEY, "true");
  return "hidden";
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
  );
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  return (
    ("standalone" in window.navigator &&
      (window.navigator as unknown as { standalone: boolean }).standalone) ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

export function InstallPrompt() {
  const { t } = useTranslation();
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [iosDetected, setIosDetected] = useState(false);
  const [bannerState, setBannerState] = useState<BannerState>("hidden");

  useEffect(() => {
    if (isStandalone()) return;

    // Initialise snooze state client-side (localStorage not available during SSR)
    setBannerState(getSnoozeState());
    setIosDetected(isIOS());

    if (isIOS()) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  // Nothing to show if already installed or permanently dismissed
  if (isStandalone()) return null;
  if (bannerState === "hidden") return null;
  if (!deferredPrompt && !iosDetected) return null;

  // ── Mini-chip (shown during snooze period) ─────────────────────────────────
  if (bannerState === "mini") {
    return (
      <div className="fixed bottom-4 end-4 z-50 flex items-center gap-2 rounded-full bg-[var(--surface)] border border-[var(--border)] shadow-md px-3 py-1.5 text-xs text-[var(--muted)]">
        <span aria-hidden="true">📲</span>
        <Link
          href={ARTICLE_HREF}
          className="hover:text-[var(--foreground)] transition-colors"
        >
          {t("installPrompt", "miniChipLabel")}
        </Link>
        <button
          onClick={() => setBannerState(dismissPermanently())}
          className="ms-1 hover:text-[var(--foreground)] transition-colors"
          aria-label="Dismiss install prompt"
        >
          ✕
        </button>
      </div>
    );
  }

  // ── Full banner ────────────────────────────────────────────────────────────
  return (
    <>
      {/* Standard Chrome/Android install banner */}
      {deferredPrompt && !iosDetected && (
        <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:end-4 md:w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50">
          <p className="text-sm text-[var(--foreground)] font-medium mb-2">
            {t("installPrompt", "installCalculator")}
          </p>
          <p className="text-xs text-[var(--muted)] mb-3">
            {t("installPrompt", "offlineAccess")}
          </p>
          <div className="flex gap-2 mb-2">
            <button
              onClick={async () => {
                await deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === "accepted") {
                  setDeferredPrompt(null);
                  setBannerState(dismissPermanently());
                } else {
                  setBannerState(snooze());
                }
              }}
              className="flex-1 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t("installPrompt", "install")}
            </button>
            <button
              onClick={() => setBannerState(snooze())}
              className="px-3 py-2 rounded-md text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors"
            >
              {t("installPrompt", "maybeLater")}
            </button>
          </div>
          <div className="text-center">
            <Link
              href={ARTICLE_HREF}
              className="text-xs text-[var(--accent)] hover:underline"
            >
              {t("installPrompt", "learnWhy")}
            </Link>
          </div>
        </div>
      )}

      {/* iOS: subtle install hint */}
      {iosDetected && !showIOSGuide && (
        <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:end-4 md:w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50">
          <p className="text-sm text-[var(--foreground)] font-medium mb-2">
            {t("installPrompt", "addToHomeScreen")}
          </p>
          <p className="text-xs text-[var(--muted)] mb-3">
            {t("installPrompt", "installOfflineAccess")}
          </p>
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => setShowIOSGuide(true)}
              className="flex-1 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t("installPrompt", "showMeHow")}
            </button>
            <button
              onClick={() => setBannerState(snooze())}
              className="px-3 py-2 rounded-md text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors"
            >
              {t("installPrompt", "maybeLater")}
            </button>
          </div>
          <div className="text-center">
            <Link
              href={ARTICLE_HREF}
              className="text-xs text-[var(--accent)] hover:underline"
            >
              {t("installPrompt", "learnWhy")}
            </Link>
          </div>
        </div>
      )}

      {/* iOS: step-by-step guide modal */}
      {iosDetected && showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-xl">
            <p className="text-base text-[var(--foreground)] font-semibold mb-4">
              {t("installPrompt", "addToHomeScreen")}
            </p>
            <ol className="space-y-3 text-sm text-[var(--foreground)] mb-5">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("installPrompt", "step1") }} />
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("installPrompt", "step2") }} />
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span dangerouslySetInnerHTML={{ __html: t("installPrompt", "step3") }} />
              </li>
            </ol>
            <button
              onClick={() => {
                setShowIOSGuide(false);
                setBannerState(snooze());
              }}
              className="w-full py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t("installPrompt", "gotIt")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
