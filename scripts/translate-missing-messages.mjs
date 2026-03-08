/**
 * Translate missing UI message keys to all 12 non-English locale message files.
 * Currently handles:
 *   - cookieConsent section (missing entirely from all non-English locales)
 *   - installPrompt.maybeLater, learnWhy, miniChipLabel (new keys, fall back to English)
 *
 * Uses JSON.parse/stringify merge — preserves all existing locale translations.
 *
 * Usage: node scripts/translate-missing-messages.mjs [locale-code]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = path.join(__dirname, "../src/i18n/messages");

let GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  const envPath = path.join(__dirname, "../../.env.main");
  if (fs.existsSync(envPath)) {
    const match = fs.readFileSync(envPath, "utf-8").match(/^GEMINI_API_KEY=(.+)$/m);
    if (match) GEMINI_API_KEY = match[1].trim();
  }
}
if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY environment variable is required. Set it or add to ../.env.main");
  process.exit(1);
}
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const LOCALES = [
  { code: "es", name: "Spanish" },
  { code: "pt", name: "Portuguese" },
  { code: "id", name: "Indonesian (Bahasa Indonesia)" },
  { code: "fr", name: "French" },
  { code: "ja", name: "Japanese" },
  { code: "zh-Hans", name: "Simplified Chinese" },
  { code: "zh-Hant", name: "Traditional Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "uk", name: "Ukrainian" },
  { code: "pl", name: "Polish" },
  { code: "ro", name: "Romanian" },
  { code: "vi", name: "Vietnamese" },
];

const DELAY_MS = 6000;

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function callGemini(prompt, maxRetries = 3) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1, maxOutputTokens: 8000 },
        }),
      });

      if (res.status === 429) {
        const wait = Math.min(30000, 5000 * (attempt + 1));
        console.log(`    Rate limited (429), waiting ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }

      const data = await res.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

      if (!text) {
        if (attempt < maxRetries) {
          const wait = 5000 * (attempt + 1);
          console.log(`    Empty response, retrying in ${wait / 1000}s...`);
          await sleep(wait);
          continue;
        }
        return null;
      }
      return text;
    } catch (e) {
      if (attempt < maxRetries) {
        const wait = 5000 * (attempt + 1);
        console.log(`    Error: ${e.message}, retrying in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw e;
    }
  }
  return null;
}

function parseJSON(raw) {
  if (!raw) return null;
  const cleaned = raw.replace(/^```(?:json)?\s*/m, "").replace(/\s*```\s*$/m, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error(`    JSON parse error: ${e.message}`);
    console.error(`    First 300 chars: ${cleaned.slice(0, 300)}`);
    return null;
  }
}

// English strings to translate
const EN_COOKIE_CONSENT = {
  title: "Cookie Preferences",
  body: "We use Google Analytics and Microsoft Clarity to understand how visitors use this site. These tools set cookies and collect anonymous usage data. You can accept or decline — your calculator always works regardless of your choice.",
  acceptAll: "Accept Analytics",
  rejectAll: "Decline",
  manageSettings: "Cookie Settings",
  settingsTitle: "Manage Cookie Preferences",
  analyticsCookies: "Analytics Cookies",
  analyticsCookiesDesc: "Google Analytics & Microsoft Clarity — helps us improve the calculator. You can change this at any time.",
  essentialLabel: "Essential",
  essentialDesc: "Theme preference & offline cache — always active, cannot be disabled.",
  alwaysOn: "Always on",
  save: "Save Preferences",
  privacyLink: "Privacy Policy",
};

const EN_INSTALL_PROMPT_MISSING = {
  maybeLater: "Maybe later",
  learnWhy: "Learn why →",
  miniChipLabel: "Install for offline use",
};

async function translateKeys(langName) {
  const toTranslate = {
    cookieConsent: EN_COOKIE_CONSENT,
    installPromptExtra: EN_INSTALL_PROMPT_MISSING,
  };

  const prompt = `Translate the following JSON UI strings from English to ${langName}.

CRITICAL RULES:
- Return ONLY valid JSON (no markdown fences, no explanations)
- Do NOT translate brand/tech names: Google Analytics, Microsoft Clarity, GA4, PWA
- Do NOT translate JSON field names/keys — only translate string VALUES
- Keep the EXACT same JSON structure

JSON to translate:
${JSON.stringify(toTranslate, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

async function qualityCheck(translated, langName) {
  const prompt = `Review this ${langName} translation of UI strings and respond with JSON only:
{ "score": <integer 1-10>, "issues": ["..."] }

Score 9-10: excellent.  Score 7-8: good with minor issues.  Score below 7: significant problems.
Flag if: English phrases appear untranslated (except brand names), wrong language used, structure differs.

JSON:
${JSON.stringify(translated, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

function detectMissing(localeJson) {
  const missing = [];
  if (!localeJson.cookieConsent) missing.push("cookieConsent");
  const ip = localeJson.installPrompt ?? {};
  const missingIpKeys = Object.keys(EN_INSTALL_PROMPT_MISSING).filter((k) => !(k in ip));
  if (missingIpKeys.length > 0) missing.push(`installPrompt.{${missingIpKeys.join(",")}}`);
  return { missingCookieConsent: !localeJson.cookieConsent, missingIpKeys };
}

function mergeInto(localeJson, translated) {
  if (translated.cookieConsent) {
    localeJson.cookieConsent = translated.cookieConsent;
  }
  if (translated.installPromptExtra) {
    localeJson.installPrompt = localeJson.installPrompt ?? {};
    Object.assign(localeJson.installPrompt, translated.installPromptExtra);
  }
  return localeJson;
}

async function main() {
  const singleLocale = process.argv[2];

  const localesToProcess = singleLocale
    ? LOCALES.filter((l) => l.code === singleLocale)
    : LOCALES;

  if (localesToProcess.length === 0) {
    console.error(`Unknown locale: ${singleLocale}`);
    process.exit(1);
  }

  const results = [];

  for (const { code, name } of localesToProcess) {
    const filePath = path.join(MESSAGES_DIR, `${code}.json`);
    console.log(`\n=== ${code} (${name}) ===`);

    if (!fs.existsSync(filePath)) {
      console.log("  File not found — skipping");
      results.push({ code, status: "file-not-found" });
      continue;
    }

    const localeJson = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const { missingCookieConsent, missingIpKeys } = detectMissing(localeJson);

    if (!missingCookieConsent && missingIpKeys.length === 0) {
      console.log("  All keys present — nothing to do.");
      results.push({ code, status: "up-to-date" });
      continue;
    }

    if (missingCookieConsent) console.log("  Missing: cookieConsent (entire section)");
    if (missingIpKeys.length > 0) console.log(`  Missing: installPrompt.{${missingIpKeys.join(",")}}`);

    // Translate
    process.stdout.write("  Translating...");
    const translated = await translateKeys(name);
    if (!translated) {
      console.log(" FAILED — skipping");
      results.push({ code, status: "translation-failed" });
      continue;
    }
    console.log(" OK");
    await sleep(DELAY_MS);

    // Quality check
    process.stdout.write("  Quality checking...");
    const qa = await qualityCheck(translated, name);
    await sleep(DELAY_MS);

    if (qa) {
      const scoreStr = qa.score >= 7 ? `${qa.score}/10 ✓` : `${qa.score}/10 ⚠`;
      const issueStr = qa.issues?.length ? ` — ${qa.issues.join("; ")}` : "";
      console.log(` ${scoreStr}${issueStr}`);
      if (qa.score < 7) {
        console.log(`  WARNING: Low score for ${code} — manual review recommended`);
      }
    } else {
      console.log(" QA check failed (non-blocking)");
    }

    // Merge and write
    const updated = mergeInto(localeJson, translated);
    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2) + "\n", "utf-8");
    console.log(`  Written: ${code}.json`);

    results.push({ code, status: "done", score: qa?.score });
  }

  console.log("\n\n=== Summary ===");
  for (const r of results) {
    if (r.status === "up-to-date") console.log(`  ${r.code}: already up to date`);
    else if (r.status === "done") console.log(`  ${r.code}: translated (quality: ${r.score ?? "??"}/10)`);
    else console.log(`  ${r.code}: ${r.status}`);
  }
  console.log("\nDone!");
}

main().catch(console.error);
