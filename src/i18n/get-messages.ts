import type { Messages } from "@/components/I18nProvider";

export async function getMessages(locale: string): Promise<Messages> {
  try {
    const messages = (await import(`./messages/${locale}.json`)).default as Messages;
    return messages;
  } catch {
    // Fallback to English if locale file not found
    const messages = (await import("./messages/en.json")).default as Messages;
    return messages;
  }
}
