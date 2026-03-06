"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "@/components/I18nProvider";
import { LOCALES, type LocaleConfig } from "@/i18n/config";

function getBasePath(pathname: string, currentLocale: string): string {
  // Strip the current locale prefix to get the base path
  for (const locale of LOCALES) {
    if (locale.code === "en") continue;
    const prefix = `/${locale.urlSegment}`;
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return pathname.slice(prefix.length) || "/";
    }
  }
  return pathname;
}

function buildLocalePath(basePath: string, locale: LocaleConfig): string {
  if (locale.code === "en") return basePath;
  return `${locale.urlPrefix}${basePath}`;
}

export function LanguageSwitcher() {
  const { locale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  function handleSelect(target: LocaleConfig) {
    setOpen(false);
    const pathname = window.location.pathname;
    const basePath = getBasePath(pathname, locale);
    const newPath = buildLocalePath(basePath, target);
    window.location.href = newPath;
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-[var(--surface-hover)] transition-colors"
        aria-label="Change language"
        aria-expanded={open}
      >
        <Globe size={14} strokeWidth={2} />
        <span className="uppercase font-medium">{currentLocale.code === "zh-Hans" ? "ZH" : currentLocale.code === "zh-Hant" ? "ZH-T" : currentLocale.code.toUpperCase()}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute end-0 top-full mt-1 w-48 rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-lg z-50 py-1 max-h-80 overflow-y-auto">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => handleSelect(l)}
              className={`w-full text-start px-3 py-2 text-sm transition-colors ${
                l.code === locale
                  ? "text-[var(--accent)] bg-[var(--accent)]/8 font-medium"
                  : "text-[var(--foreground)] hover:bg-[var(--surface-hover)]"
              }`}
            >
              <span>{l.nativeName}</span>
              {l.code === locale && (
                <span className="ms-2 text-xs text-[var(--accent)]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
