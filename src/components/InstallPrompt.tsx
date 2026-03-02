"use client";

import { useState, useEffect } from "react";

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
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [iosDetected, setIosDetected] = useState(() => {
    if (typeof navigator === "undefined") return false;
    return isIOS();
  });

  useEffect(() => {
    // Already installed as PWA — don't show anything
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

  // Nothing to show — no prompt captured and not iOS
  if (!deferredPrompt && !iosDetected) return null;

  return (
    <>
      {/* ── Standard Chrome/Android install banner ── */}
      {deferredPrompt && !iosDetected && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50">
          <p className="text-sm text-[var(--foreground)] font-medium mb-2">
            Install this calculator
          </p>
          <p className="text-xs text-[var(--muted)] mb-3">
            Add to your home screen for instant offline access.
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
              Install
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-3 py-2 rounded-md text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {/* ── iOS: subtle install hint ── */}
      {iosDetected && !showIOSGuide && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-[var(--surface)] border border-[var(--border)] rounded-lg p-4 shadow-lg z-50">
          <p className="text-sm text-[var(--foreground)] font-medium mb-2">
            Add to Home Screen
          </p>
          <p className="text-xs text-[var(--muted)] mb-3">
            Install this calculator for instant offline access.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setShowIOSGuide(true)}
              className="flex-1 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              Show me how
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-3 py-2 rounded-md text-[var(--muted)] text-sm hover:text-[var(--foreground)] transition-colors"
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {/* ── iOS: step-by-step guide modal ── */}
      {iosDetected && showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-end justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-[var(--surface)] border border-[var(--border)] rounded-xl p-5 shadow-xl">
            <p className="text-base text-[var(--foreground)] font-semibold mb-4">
              Add to Home Screen
            </p>
            <ol className="space-y-3 text-sm text-[var(--foreground)] mb-5">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <span>
                  Tap the <strong>Share</strong> button{" "}
                  <svg className="inline w-4 h-4 -mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>{" "}
                  in the Safari toolbar
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <span>
                  Scroll down and tap{" "}
                  <strong>&ldquo;Add to Home Screen&rdquo;</strong>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--accent)]/15 text-[var(--accent)] text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <span>
                  Tap <strong>&ldquo;Add&rdquo;</strong> to confirm
                </span>
              </li>
            </ol>
            <button
              onClick={() => {
                setShowIOSGuide(false);
                setDismissed(true);
              }}
              className="w-full py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </>
  );
}
