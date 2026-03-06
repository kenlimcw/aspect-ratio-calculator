"use client";

import { createContext, useContext, useCallback, useMemo } from "react";

export type Messages = Record<string, Record<string, string>>;

interface I18nContextValue {
  locale: string;
  dir: "ltr" | "rtl";
  messages: Messages;
  t: (namespace: string, key: string, vars?: Record<string, string>) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  dir,
  messages,
  children,
}: {
  locale: string;
  dir: "ltr" | "rtl";
  messages: Messages;
  children: React.ReactNode;
}) {
  const t = useCallback(
    (namespace: string, key: string, vars?: Record<string, string>) => {
      let str = messages[namespace]?.[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replaceAll(`{${k}}`, v);
        }
      }
      return str;
    },
    [messages],
  );

  const value = useMemo(
    () => ({ locale, dir, messages, t }),
    [locale, dir, messages, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useTranslation() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useTranslation must be used within I18nProvider");
  return ctx;
}
