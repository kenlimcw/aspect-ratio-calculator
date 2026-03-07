/**
 * Translate only missing keys from en.json into all locale files.
 * Usage: node scripts/translate-missing.mjs
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
  { code: "id", name: "Indonesian" },
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

async function callGemini(prompt, retries = 3) {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.1, maxOutputTokens: 65000 },
        }),
      });
      if (res.status === 429) {
        const wait = 10000 * (attempt + 1);
        console.log(`    Rate limited, waiting ${wait / 1000}s...`);
        await new Promise((r) => setTimeout(r, wait));
        continue;
      }
      const data = await res.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
    } catch (e) {
      if (attempt < retries) {
        await new Promise((r) => setTimeout(r, 5000 * (attempt + 1)));
      } else throw e;
    }
  }
  return "";
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

async function translateNamespace(nsKeys, langName) {
  const prompt = `Translate this JSON from English to ${langName}. Return ONLY valid JSON, no markdown fences.

Rules:
- Do NOT translate platform names (Instagram, YouTube, TikTok, etc.)
- Do NOT translate ratio values (16:9, 4:3, etc.) or units (px, DPI, CSS)
- Do NOT translate technical terms (padding-bottom, aspect-ratio)
- Keep {placeholder} variables untouched
- Translate naturally, not word-for-word

JSON to translate:
${JSON.stringify(nsKeys, null, 2)}`;

  const raw = await callGemini(prompt);
  const cleaned = raw.replace(/^```(?:json)?\s*/m, "").replace(/\s*```\s*$/m, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch (e) {
    console.error(`    Parse error: ${e.message}`);
    console.error(`    Raw (first 200 chars): ${cleaned.slice(0, 200)}`);
    return null;
  }
}

async function translateMissing(missing, langName) {
  const result = {};
  const namespaces = Object.keys(missing);

  for (let i = 0; i < namespaces.length; i++) {
    const ns = namespaces[i];
    process.stdout.write(`    [${i + 1}/${namespaces.length}] ${ns}...`);
    const translated = await translateNamespace(missing[ns], langName);
    if (translated) {
      result[ns] = translated;
      console.log(` OK (${Object.keys(translated).length} keys)`);
    } else {
      // Fall back to English for this namespace
      result[ns] = missing[ns];
      console.log(` FALLBACK (using English)`);
    }
    // Small delay between namespace calls
    if (i < namespaces.length - 1) {
      await new Promise((r) => setTimeout(r, 300));
    }
  }

  return result;
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
