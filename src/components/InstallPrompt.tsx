"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/components/I18nProvider";

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
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
  const [dismissed, setDismissed] = useState(false);
  const [iosDetected, setIosDetected] = useState(() => {
    if (typeof navigator === "undefined") return false;
    return isIOS();
  });

  useEffect(() => {
    if (isStandalone()) return;
    if (isIOS()) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (dismissed) return null;
  if (isStandalone()) return null;
  if (!deferredPrompt && !iosDetected) return null;

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
          <div className="flex gap-2">
            <button
              onClick={async () => {
                await deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === "accepted") setDeferredPrompt(null);
                else setDismissed(true);
              }}
              className="flex-1 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t("installPrompt", "install")}
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-3 py-2 rounded-md text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors"
            >
              {t("installPrompt", "notNow")}
            </button>
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
          <div className="flex gap-2">
            <button
              onClick={() => setShowIOSGuide(true)}
              className="flex-1 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              {t("installPrompt", "showMeHow")}
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-3 py-2 rounded-md text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors"
            >
              {t("installPrompt", "notNow")}
            </button>
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
                setDismissed(true);
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
