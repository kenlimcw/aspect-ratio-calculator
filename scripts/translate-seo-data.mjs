/**
 * Translate SEO data for all locales using Gemini API.
 * Batches: all ratios in 1 call, all platforms in 1 call, articles 1-by-1.
 * Skips locales that already have translated content (>60KB file).
 *
 * Usage: node scripts/translate-seo-data.mjs [locale-code]
 *   Optional: pass a single locale code to translate only that locale
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEO_DATA_DIR = path.join(__dirname, "../src/i18n/seo-data");

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
  { code: "id", name: "Indonesian (Bahasa Indonesia)" },
  { code: "fr", name: "French" },
  { code: "ja", name: "Japanese" },
  { code: "zh-Hans", name: "Simplified Chinese" },
  { code: "zh-Hant", name: "Traditional Chinese" },
  { code: "ar", name: "Arabic" },
  { code: "ru", name: "Russian" },
];

const DELAY_BETWEEN_CALLS_MS = 6000;

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
          console.log(`    Empty response, waiting ${wait / 1000}s before retry ${attempt + 1}/${maxRetries}...`);
          await sleep(wait);
          continue;
        }
        return null;
      }
      return text;
    } catch (e) {
      if (attempt < maxRetries) {
        const wait = 5000 * (attempt + 1);
        console.log(`    Error: ${e.message}, waiting ${wait / 1000}s...`);
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
    console.error(`    First 200 chars: ${cleaned.slice(0, 200)}`);
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

const RULES = `CRITICAL RULES:
- Return ONLY valid JSON (no markdown fences, no explanations before or after)
- Do NOT translate: platform names (Instagram, YouTube, TikTok, LinkedIn, Facebook, Pinterest, X/Twitter), technical terms (CSS, DPI, DSLR, nHD, HD, UHD, QHD, 4K, 8K, padding-bottom, aspect-ratio), ratio values (16:9, 4:3), resolution names (720p, 1080p)
- Do NOT translate field names/keys — only translate string VALUES
- Keep dimension "name" fields in English (HD, Full HD, 4K UHD, etc.)
- Translate dimension "use" fields
- Keep brand names in English: PowerPoint, Google Slides, Netflix, Disney+, etc.
- Keep the EXACT same JSON structure, all keys, all arrays, all nested objects`;

async function translateRatios(ratioData, langName) {
  const prompt = `Translate this JSON object containing aspect ratio data from English to ${langName}.

${RULES}

The JSON has 9 ratio entries. Translate: title, description, explanation, useCases array items, dimensions[].use, faq[].q and faq[].a.
Do NOT translate: label, w, h, cssValue, relatedRatios, relatedPlatforms, dimensions[].name, dimensions[].width, dimensions[].height.

JSON:
${JSON.stringify(ratioData, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

async function translatePlatforms(platformData, langName) {
  const prompt = `Translate this JSON object containing social media platform data from English to ${langName}.

${RULES}

The JSON has 7 platform entries. Translate: title, description, intro, formats[].type, formats[].notes, tips array items, faq[].q and faq[].a.
Do NOT translate: name (keep platform name in English), formats[].width, formats[].height, formats[].ratio, relatedRatios.

JSON:
${JSON.stringify(platformData, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

async function translateArticle(articleData, langName) {
  const prompt = `Translate this JSON object containing a blog article from English to ${langName}.

${RULES}

Translate: title, description, intro, conclusion, sections[].heading, sections[].body, sections[].list items, sections[].table.headers, sections[].table.rows values.

JSON:
${JSON.stringify(articleData, null, 2)}`;

  const raw = await callGemini(prompt);
  return parseJSON(raw);
}

function generateTypeScriptFile(ratioData, platformData, articleData) {
  let ts = `import type { RatioData, PlatformData, ArticleData } from "@/lib/seo-data";\n\n`;
  ts += `export const RATIO_DATA: Record<string, RatioData> = ${JSON.stringify(ratioData, null, 2)};\n\n`;
  ts += `export const PLATFORM_DATA: Record<string, PlatformData> = ${JSON.stringify(platformData, null, 2)};\n\n`;
  ts += `export const ARTICLE_DATA: Record<string, ArticleData> = ${JSON.stringify(articleData, null, 2)};\n`;
  return ts;
}

function safeMergeRatios(translated, english) {
  const result = {};
  for (const key of Object.keys(english)) {
    if (translated && translated[key]) {
      result[key] = {
        ...english[key],
        ...translated[key],
        w: english[key].w,
        h: english[key].h,
        label: english[key].label,
        cssValue: english[key].cssValue,
        relatedRatios: english[key].relatedRatios,
        relatedPlatforms: english[key].relatedPlatforms,
        dimensions: (translated[key].dimensions || english[key].dimensions).map((d, i) => ({
          ...english[key].dimensions[i],
          use: d.use ?? english[key].dimensions[i].use,
        })),
      };
    } else {
      result[key] = english[key];
    }
  }
  return result;
}

function safeMergePlatforms(translated, english) {
  const result = {};
  for (const key of Object.keys(english)) {
    if (translated && translated[key]) {
      result[key] = {
        ...english[key],
        ...translated[key],
        name: english[key].name,
        relatedRatios: english[key].relatedRatios,
        formats: (translated[key].formats || english[key].formats).map((f, i) => ({
          ...english[key].formats[i],
          type: f.type ?? english[key].formats[i].type,
          notes: f.notes ?? english[key].formats[i].notes,
        })),
      };
    } else {
      result[key] = english[key];
    }
  }
  return result;
}

async function main() {
  const singleLocale = process.argv[2];

  console.log("Loading English SEO data...");
  const { RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA } = loadEnglishData();

  const articleKeys = Object.keys(ARTICLE_DATA);
  console.log(`Ratios: ${Object.keys(RATIO_DATA).length}, Platforms: ${Object.keys(PLATFORM_DATA).length}, Articles: ${articleKeys.length}`);

  const localesToProcess = singleLocale
    ? LOCALES.filter((l) => l.code === singleLocale)
    : LOCALES;

  if (localesToProcess.length === 0) {
    console.error(`Unknown locale: ${singleLocale}`);
    process.exit(1);
  }

  for (const { code, name } of localesToProcess) {
    // Skip if already translated (file > 60KB means it has real content)
    const outPath = path.join(SEO_DATA_DIR, `${code}.ts`);
    if (fs.existsSync(outPath)) {
      const size = fs.statSync(outPath).size;
      if (size > 60000 && !singleLocale) {
        console.log(`\n=== ${code}: Already translated (${(size / 1024).toFixed(1)} KB), skipping ===`);
        continue;
      }
    }

    console.log(`\n=== ${code} (${name}) ===`);

    // 1. Translate all ratios in one batch
    process.stdout.write("  Translating ratios (batch)...");
    const translatedRatios = await translateRatios(RATIO_DATA, name);
    if (translatedRatios) {
      console.log(` OK (${Object.keys(translatedRatios).length} entries)`);
    } else {
      console.log(" FAILED — using English fallback");
    }
    await sleep(DELAY_BETWEEN_CALLS_MS);

    // 2. Translate all platforms in one batch
    process.stdout.write("  Translating platforms (batch)...");
    const translatedPlatforms = await translatePlatforms(PLATFORM_DATA, name);
    if (translatedPlatforms) {
      console.log(` OK (${Object.keys(translatedPlatforms).length} entries)`);
    } else {
      console.log(" FAILED — using English fallback");
    }
    await sleep(DELAY_BETWEEN_CALLS_MS);

    // 3. Translate articles one by one (they're large)
    const translatedArticles = {};
    for (const key of articleKeys) {
      process.stdout.write(`  Translating article/${key}...`);
      const result = await translateArticle(ARTICLE_DATA[key], name);
      if (result) {
        translatedArticles[key] = result;
        console.log(" OK");
      } else {
        translatedArticles[key] = ARTICLE_DATA[key];
        console.log(" FALLBACK");
      }
      await sleep(DELAY_BETWEEN_CALLS_MS);
    }

    // Safely merge with English fallbacks
    const mergedRatios = safeMergeRatios(translatedRatios, RATIO_DATA);
    const mergedPlatforms = safeMergePlatforms(translatedPlatforms, PLATFORM_DATA);

    // Generate TypeScript file
    const tsContent = generateTypeScriptFile(mergedRatios, mergedPlatforms, translatedArticles);
    fs.writeFileSync(outPath, tsContent, "utf-8");
    console.log(`  Written: ${code}.ts (${(tsContent.length / 1024).toFixed(1)} KB)`);

    // Extra delay between locales
    await sleep(DELAY_BETWEEN_CALLS_MS);
  }

  console.log("\nDone!");
}

main().catch(console.error);
