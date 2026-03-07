import type { Messages } from "@/components/I18nProvider";

function deepMerge<T extends Record<string, unknown>>(base: T, override: Partial<T>): T {
  const result = { ...base };
  for (const key in override) {
    const overrideVal = override[key];
    const baseVal = base[key];
    if (
      overrideVal !== null &&
      typeof overrideVal === "object" &&
      !Array.isArray(overrideVal) &&
      baseVal !== null &&
      typeof baseVal === "object" &&
      !Array.isArray(baseVal)
    ) {
      (result as Record<string, unknown>)[key] = deepMerge(
        baseVal as Record<string, unknown>,
        overrideVal as Record<string, unknown>
      );
    } else if (overrideVal !== undefined) {
      (result as Record<string, unknown>)[key] = overrideVal;
    }
  }
  return result;
}

export async function getMessages(locale: string): Promise<Messages> {
  const base = (await import("./messages/en.json")).default as Messages;
  if (locale === "en") return base;
  try {
    const override = (await import(`./messages/${locale}.json`)).default as Partial<Messages>;
    return deepMerge(base as Record<string, unknown>, override as Record<string, unknown>) as Messages;
  } catch {
    return base;
  }
}
