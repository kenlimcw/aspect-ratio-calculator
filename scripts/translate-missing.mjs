/**
 * Translate only missing keys from en.json into all locale files.
 * Usage: node scripts/translate-missing.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MESSAGES_DIR = path.join(__dirname, "../src/i18n/messages");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY environment variable is required. Set it or add to ../.env.main");
  process.exit(1);
}
const GEMINI_MODEL = "gemini-2.5-flash";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

const LOCALES = [
  { code: "es", name: "Spanish" },
  { code: "pt", name: "Portuguese" },
  { code: "id", name: "Indonesian" },
  { code: "fr", name: "French" },
  { code: "ja", name: "Japanese" },
  { code: "zh-Hans", name: "Simplified Chinese" },
  { code: "zh-Hant", name: "Traditional Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "ru", name: "Russian" },
];

async function callGemini(prompt) {
  const res = await fetch(GEMINI_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.1, maxOutputTokens: 16000 },
    }),
  });
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
}

function findMissing(en, locale) {
  const missing = {};
  for (const ns of Object.keys(en)) {
    if (!locale[ns]) {
      missing[ns] = en[ns];
      continue;
    }
    const missingKeys = {};
    for (const key of Object.keys(en[ns])) {
      if (!(key in locale[ns])) {
        missingKeys[key] = en[ns][key];
      }
    }
    if (Object.keys(missingKeys).length > 0) {
      missing[ns] = missingKeys;
    }
  }
  return missing;
}

async function translateMissing(missing, langName) {
  const prompt = `Translate this JSON from English to ${langName}. Return ONLY valid JSON, no markdown fences.

Rules:
- Do NOT translate platform names (Instagram, YouTube, TikTok, etc.)
- Do NOT translate ratio values (16:9, 4:3, etc.) or units (px, DPI, CSS)
- Do NOT translate technical terms (padding-bottom, aspect-ratio)
- Keep {placeholder} variables untouched
- Translate naturally, not word-for-word

JSON to translate:
${JSON.stringify(missing, null, 2)}`;

  const raw = await callGemini(prompt);
  // Strip markdown fences if present
  const cleaned = raw.replace(/^```(?:json)?\s*/m, "").replace(/\s*```\s*$/m, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error(`  Failed to parse Gemini response for ${langName}:`, e.message);
    console.error(`  Raw (first 200 chars):`, cleaned.slice(0, 200));
    return null;
  }
}

async function main() {
  const en = JSON.parse(fs.readFileSync(path.join(MESSAGES_DIR, "en.json"), "utf-8"));

  for (const { code, name } of LOCALES) {
    const filePath = path.join(MESSAGES_DIR, `${code}.json`);
    const locale = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    const missing = findMissing(en, locale);
    const totalMissing = Object.values(missing).reduce((sum, ns) => sum + Object.keys(ns).length, 0);

    if (totalMissing === 0) {
      console.log(`${code}: No missing keys`);
      continue;
    }

    console.log(`${code}: Translating ${totalMissing} missing keys...`);
    const translated = await translateMissing(missing, name);

    if (!translated) {
      console.error(`  Skipping ${code} due to parse error`);
      continue;
    }

    // Merge translated keys into locale
    for (const ns of Object.keys(translated)) {
      if (!locale[ns]) locale[ns] = {};
      Object.assign(locale[ns], translated[ns]);
    }

    fs.writeFileSync(filePath, JSON.stringify(locale, null, 2) + "\n", "utf-8");
    console.log(`  ${code}: Updated successfully`);

    // Rate limit
    await new Promise((r) => setTimeout(r, 200));
  }

  console.log("Done!");
}

main().catch(console.error);
