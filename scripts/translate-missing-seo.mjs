/**
 * Translate articles that exist in the English base but are missing from locale files.
 * Appends only the missing entries to each locale file — preserves existing translations.
 *
 * Usage: node scripts/translate-missing-seo.mjs [locale-code]
 *   Optional: pass a single locale code to process only that locale
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEO_DATA_DIR = path.join(__dirname, "../src/i18n/seo-data");

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
          generationConfig: { temperature: 0.1, maxOutputTokens: 65000 },
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

function loadEnglishData() {
  const tsContent = fs.readFileSync(
    path.join(__dirname, "../src/lib/seo-data.ts"),
    "utf-8"
  );
  const dataStart = tsContent.indexOf("export const RATIO_DATA");
  const dataContent = tsContent.slice(dataStart);
  let jsContent = dataContent
    .replace(/export const (\w+): Record<string, \w+> = /g, "const $1 = ")
    .replace(/export const (\w+): string\[\] = /g, "const $1 = ")
    .replace(/export const (\w+) = /g, "const $1 = ");
  jsContent += `\nmodule.exports = { RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA, RATIO_SLUGS, PLATFORM_SLUGS, ARTICLE_SLUGS };`;
  const tmpPath = path.join(__dirname, "_tmp_seo_data.cjs");
  fs.writeFileSync(tmpPath, jsContent);
  const data = require(tmpPath);
  fs.unlinkSync(tmpPath);
  return data;
}

/** Detect which article keys are in English but missing from the locale file. */
function detectMissingArticles(localeFilePath, englishKeys) {
  if (!fs.existsSync(localeFilePath)) return englishKeys;
  const content = fs.readFileSync(localeFilePath, "utf-8");
  const missing = [];
  for (const key of englishKeys) {
    // Check if the key appears inside the ARTICLE_DATA block
    if (!content.includes(`"${key}"`)) {
      missing.push(key);
    }
  }
  return missing;
}

const RULES = `CRITICAL RULES:
- Return ONLY valid JSON (no markdown fences, no explanations before or after)
- Do NOT translate: platform names (Instagram, YouTube, TikTok, LinkedIn, Facebook, Pinterest, X/Twitter), technical terms (CSS, DPI, DSLR, nHD, HD, UHD, QHD, 4K, 8K, PWA, Progressive Web App), ratio values (16:9, 4:3), resolution names (720p, 1080p)
- Do NOT translate: browser/OS names (Chrome, Edge, Safari, Firefox, Android, iOS, iPhone, iPad, Windows, Mac, Start menu, App Store)
- Do NOT translate field names/keys — only translate string VALUES
- Keep brand names in English: Google, Microsoft, Apple
- Keep the EXACT same JSON structure, all keys, all arrays, all nested objects`;

async function translateArticle(articleData, langName) {
  const prompt = `Translate this JSON object containing a blog article from English to ${langName}.

${RULES}

Translate: title, description, intro, sections[].heading, sections[].body, sections[].list items.
Do NOT translate: any field names/keys.

JSON:
${JSON.stringify(articleData, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

async function qualityCheck(translatedArticle, langName) {
  const prompt = `Review this ${langName} translation of a web article and respond with JSON only:
{ "score": <integer 1-10>, "issues": ["..."] }

Score 9-10: excellent, natural, complete.
Score 7-8: good with minor issues.
Score below 7: significant problems.

Flag if: English phrases appear untranslated, technical terms wrongly translated (browser/OS names should stay in English), structure differs from source, or the language is not ${langName}.

Translated article JSON:
${JSON.stringify(translatedArticle, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

/** Append a new article entry to the locale file's ARTICLE_DATA export. */
function appendArticleToLocaleFile(filePath, articleKey, articleData) {
  let content = fs.readFileSync(filePath, "utf-8");

  // The JSON.stringify of the article value (pretty, 2-space indent)
  const jsonValue = JSON.stringify(articleData, null, 2)
    // Indent each line by 2 spaces to nest inside the ARTICLE_DATA object
    .split("\n")
    .map((line, i) => (i === 0 ? line : "  " + line))
    .join("\n");

  const entry = `,\n  "${articleKey}": ${jsonValue}`;

  // Insert just before the final `\n};` that closes ARTICLE_DATA
  // Match the very last `\n};` in the file (ARTICLE_DATA is always the last export)
  const lastClosingBrace = content.lastIndexOf("\n};");
  if (lastClosingBrace === -1) {
    console.error(`    Could not find closing '};' in ${filePath}`);
    return false;
  }

  content = content.slice(0, lastClosingBrace) + entry + content.slice(lastClosingBrace);
  fs.writeFileSync(filePath, content, "utf-8");
  return true;
}

async function main() {
  const singleLocale = process.argv[2];

  console.log("Loading English SEO data...");
  const { ARTICLE_DATA } = loadEnglishData();
  const englishKeys = Object.keys(ARTICLE_DATA);
  console.log(`English articles: ${englishKeys.join(", ")}`);

  const localesToProcess = singleLocale
    ? LOCALES.filter((l) => l.code === singleLocale)
    : LOCALES;

  if (localesToProcess.length === 0) {
    console.error(`Unknown locale: ${singleLocale}`);
    process.exit(1);
  }

  const results = [];

  for (const { code, name } of localesToProcess) {
    const filePath = path.join(SEO_DATA_DIR, `${code}.ts`);
    console.log(`\n=== ${code} (${name}) ===`);

    const missingKeys = detectMissingArticles(filePath, englishKeys);
    if (missingKeys.length === 0) {
      console.log("  All articles present — nothing to do.");
      results.push({ code, status: "up-to-date", missing: [] });
      continue;
    }

    console.log(`  Missing: ${missingKeys.join(", ")}`);

    for (const key of missingKeys) {
      process.stdout.write(`  Translating "${key}"...`);
      const translated = await translateArticle(ARTICLE_DATA[key], name);

      if (!translated) {
        console.log(" FAILED — skipping");
        results.push({ code, key, status: "translation-failed" });
        continue;
      }
      console.log(" OK");
      await sleep(DELAY_MS);

      // Quality check
      process.stdout.write(`  Quality checking "${key}"...`);
      const qa = await qualityCheck(translated, name);
      await sleep(DELAY_MS);

      if (qa) {
        const scoreStr = qa.score >= 7 ? `${qa.score}/10 ✓` : `${qa.score}/10 ⚠`;
        const issueStr = qa.issues?.length ? ` — issues: ${qa.issues.join("; ")}` : "";
        console.log(` ${scoreStr}${issueStr}`);
        if (qa.score < 7) {
          console.log(`  WARNING: Low quality score for ${code}/${key} — manual review recommended`);
        }
      } else {
        console.log(" QA check failed (non-blocking)");
      }

      // Append to locale file
      process.stdout.write(`  Appending to ${code}.ts...`);
      const ok = appendArticleToLocaleFile(filePath, key, translated);
      console.log(ok ? " done" : " FAILED");

      results.push({ code, key, status: ok ? "done" : "write-failed", score: qa?.score });
    }
  }

  console.log("\n\n=== Summary ===");
  for (const r of results) {
    if (r.status === "up-to-date") {
      console.log(`  ${r.code}: already up to date`);
    } else if (r.status === "done") {
      console.log(`  ${r.code}/${r.key}: translated (quality: ${r.score ?? "??"}/10)`);
    } else {
      console.log(`  ${r.code}/${r.key}: ${r.status}`);
    }
  }
  console.log("\nDone!");
}

main().catch(console.error);
