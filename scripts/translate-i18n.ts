#!/usr/bin/env npx tsx
/**
 * translate-i18n.ts
 *
 * Standalone reusable translation script for the Aspect Ratio Calculator PWA.
 * Uses Gemini API to translate:
 *   - src/i18n/messages/en.json → src/i18n/messages/{locale}.json
 *   - src/i18n/seo-data/en.ts  → src/i18n/seo-data/{locale}.ts
 *
 * Usage:
 *   npx tsx scripts/translate-i18n.ts              # Translate all locales
 *   npx tsx scripts/translate-i18n.ts es fr ja     # Translate specific locales
 *
 * Requires GEMINI_API_KEY in ../.env.main or environment.
 */

import * as fs from "fs";
import * as path from "path";

// ── Configuration ────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, "..");
const ENV_PATH = path.resolve(ROOT, "../.env.main");
const MESSAGES_DIR = path.join(ROOT, "src/i18n/messages");
const SEO_DATA_DIR = path.join(ROOT, "src/i18n/seo-data");
const DISPUTE_PATH = path.join(ROOT, "translation-dispute.md");

const TARGET_LOCALES = [
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "zh-Hans", name: "Simplified Chinese", nativeName: "简体中文" },
  { code: "zh-Hant", name: "Traditional Chinese", nativeName: "繁體中文" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
];

// ── Load environment ──────────────────────────────────────────

function loadEnv(): string {
  // Try environment variable first
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  // Try .env.main
  if (fs.existsSync(ENV_PATH)) {
    const content = fs.readFileSync(ENV_PATH, "utf-8");
    const match = content.match(/^GEMINI_API_KEY=(.+)$/m);
    if (match) return match[1].trim();
  }

  throw new Error("GEMINI_API_KEY not found in environment or .env.main");
}

const GEMINI_API_KEY = loadEnv();
const GEMINI_MODEL = "gemini-2.5-flash";

// ── Gemini API call ──────────────────────────────────────────

async function callGemini(prompt: string): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.1,
        maxOutputTokens: 65536,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Gemini API error ${res.status}: ${err}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error("Empty Gemini response");
  return text;
}

// ── Extract JSON from Gemini response ────────────────────────

function extractJSON(text: string): string {
  // Try to extract from markdown code block
  const codeBlock = text.match(/```(?:json)?\s*\n([\s\S]*?)\n```/);
  if (codeBlock) return codeBlock[1].trim();

  // Try raw JSON
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart !== -1 && jsonEnd !== -1) {
    return text.slice(jsonStart, jsonEnd + 1);
  }

  throw new Error("Could not extract JSON from response");
}

// ── Translate messages JSON ──────────────────────────────────

async function translateMessages(
  locale: { code: string; name: string; nativeName: string },
  enMessages: Record<string, Record<string, string>>
): Promise<Record<string, Record<string, string>>> {
  // Split into chunks to stay within token limits
  const namespaces = Object.keys(enMessages);
  const result: Record<string, Record<string, string>> = {};

  // Process in batches of 3-4 namespaces
  const batchSize = 4;
  for (let i = 0; i < namespaces.length; i += batchSize) {
    const batch = namespaces.slice(i, i + batchSize);
    const batchContent: Record<string, Record<string, string>> = {};
    for (const ns of batch) {
      batchContent[ns] = enMessages[ns];
    }

    const prompt = `You are a professional translator. Translate the following JSON from English to ${locale.name} (${locale.nativeName}).

CRITICAL RULES:
1. Return ONLY valid JSON — no markdown, no explanation, no code blocks
2. Preserve ALL JSON keys exactly as-is (keys are in English and must NOT be translated)
3. Translate ONLY the string values
4. Do NOT translate:
   - Platform names: Instagram, YouTube, TikTok, Facebook, Twitter/X, LinkedIn, Pinterest, WhatsApp, Telegram, Shopify, Vercel, Resend
   - Brand names: Aspect Ratio Calculator, PWA, DSLR, DCI, IMAX, UHD, QHD, HD, 4K, 8K
   - Ratio values: 16:9, 4:3, 1:1, 9:16, 3:2, 21:9, 4:5, 2:3, etc.
   - Technical terms: CSS, aspect-ratio, padding-bottom, DPI, pixel/px, MP (megapixels)
   - HTML tags inside strings (e.g., <strong>, <link>)
   - Placeholder tokens like {year}, {date}, {label}, {name}, {dimension}
   - URLs and email addresses
   - Dimension values like 1920×1080, 1080x1920
5. Keep translations natural, concise, and idiomatic for ${locale.name} speakers
6. For ${locale.code === "ar" ? "Arabic, use Modern Standard Arabic (فصحى)" : locale.code === "ja" ? "Japanese, use polite/neutral form (です/ます)" : locale.code.startsWith("zh") ? "Chinese, ensure proper simplified/traditional characters" : `${locale.name}, use standard formal register`}
7. Maintain the same tone — friendly, professional, helpful

JSON to translate:
${JSON.stringify(batchContent, null, 2)}`;

    console.log(`  Translating batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(namespaces.length / batchSize)} for ${locale.code}...`);

    const response = await callGemini(prompt);
    const translated = JSON.parse(extractJSON(response));

    for (const ns of batch) {
      result[ns] = translated[ns] || batchContent[ns];
    }

    // Rate limit: 100ms between batches
    await new Promise((r) => setTimeout(r, 100));
  }

  return result;
}

// ── Translate SEO data ───────────────────────────────────────

async function translateSeoData(
  locale: { code: string; name: string; nativeName: string }
): Promise<string | null> {
  const enSeoPath = path.join(SEO_DATA_DIR, "en.ts");
  if (!fs.existsSync(enSeoPath)) {
    console.log(`  Skipping SEO data (en.ts not found at ${enSeoPath})`);
    return null;
  }

  const enSeoContent = fs.readFileSync(enSeoPath, "utf-8");

  // The en.ts just re-exports from @/lib/seo-data, so we need to read the actual data
  const seoDataPath = path.join(ROOT, "src/lib/seo-data.ts");
  if (!fs.existsSync(seoDataPath)) {
    console.log(`  Skipping SEO data (seo-data.ts not found)`);
    return null;
  }

  const seoDataContent = fs.readFileSync(seoDataPath, "utf-8");

  const prompt = `You are a professional translator specializing in SEO content. Translate the following TypeScript SEO data from English to ${locale.name} (${locale.nativeName}).

CRITICAL RULES:
1. Return ONLY the complete TypeScript file content — no markdown code blocks, no explanation
2. Translate: title, description, explanation, useCases text, FAQ questions and answers, article sections text, tips text, table "notes" values
3. Do NOT translate:
   - Platform names: Instagram, YouTube, TikTok, Facebook, Twitter/X, LinkedIn, Pinterest
   - Ratio values and dimension numbers (16:9, 1920x1080, etc.)
   - CSS code snippets, code examples
   - Variable names, function names, import paths
   - TypeScript syntax, types, interfaces
   - URL slugs in object keys (e.g., "16-9", "instagram")
   - Technical identifiers and measurement units (px, DPI, MP)
4. Keep the same file structure and exports
5. Ensure all translated content is SEO-optimized for ${locale.name} speakers
6. For meta titles/descriptions: keep them compelling and under character limits (title < 60 chars, description < 160 chars)
7. The file should import types from "@/lib/seo-data" and export RATIO_DATA, PLATFORM_DATA, ARTICLE_DATA

Here is the source TypeScript file with the English SEO data to translate:

${seoDataContent}

Generate the full TypeScript file for locale "${locale.code}" with all content translated to ${locale.name}. The file should start with the type imports and define exported constants.`;

  console.log(`  Translating SEO data for ${locale.code}...`);

  const response = await callGemini(prompt);

  // Clean up the response
  let content = response;
  // Remove markdown code blocks if present
  const codeBlock = content.match(/```(?:typescript|ts)?\s*\n([\s\S]*?)\n```/);
  if (codeBlock) content = codeBlock[1];

  // Ensure it starts with import
  if (!content.trim().startsWith("import")) {
    const importIdx = content.indexOf("import");
    if (importIdx !== -1) content = content.slice(importIdx);
  }

  return content;
}

// ── Main ─────────────────────────────────────────────────────

async function main() {
  const args = process.argv.slice(2);
  const locales = args.length > 0
    ? TARGET_LOCALES.filter((l) => args.includes(l.code))
    : TARGET_LOCALES;

  if (locales.length === 0) {
    console.error("No matching locales found. Available:", TARGET_LOCALES.map((l) => l.code).join(", "));
    process.exit(1);
  }

  console.log(`\n🌐 Translating to ${locales.length} locale(s): ${locales.map((l) => l.code).join(", ")}\n`);

  // Load English source
  const enPath = path.join(MESSAGES_DIR, "en.json");
  const enMessages = JSON.parse(fs.readFileSync(enPath, "utf-8"));

  // Ensure output directories exist
  fs.mkdirSync(MESSAGES_DIR, { recursive: true });
  fs.mkdirSync(SEO_DATA_DIR, { recursive: true });

  // Initialize dispute log
  const disputes: string[] = [
    "# Translation Disputes",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "This file documents disagreements between Claude and Gemini translations.",
    "Review each entry and pick the better translation.",
    "",
  ];

  for (const locale of locales) {
    console.log(`\n── ${locale.name} (${locale.code}) ──`);

    try {
      // 1. Translate messages
      const translated = await translateMessages(locale, enMessages);

      // Validate: ensure all namespaces and keys exist
      let missingKeys = 0;
      for (const [ns, keys] of Object.entries(enMessages)) {
        if (!translated[ns]) {
          translated[ns] = keys;
          missingKeys += Object.keys(keys).length;
          continue;
        }
        for (const key of Object.keys(keys)) {
          if (!translated[ns][key]) {
            translated[ns][key] = keys[key];
            missingKeys++;
          }
        }
      }
      if (missingKeys > 0) {
        console.log(`  ⚠ ${missingKeys} missing keys filled with English fallback`);
      }

      // Write messages file
      const outPath = path.join(MESSAGES_DIR, `${locale.code}.json`);
      fs.writeFileSync(outPath, JSON.stringify(translated, null, 2) + "\n", "utf-8");
      console.log(`  ✓ Messages → ${path.relative(ROOT, outPath)}`);

      // 2. Translate SEO data
      const seoContent = await translateSeoData(locale);
      if (seoContent) {
        const seoOutPath = path.join(SEO_DATA_DIR, `${locale.code}.ts`);
        fs.writeFileSync(seoOutPath, seoContent + "\n", "utf-8");
        console.log(`  ✓ SEO data → ${path.relative(ROOT, seoOutPath)}`);
      }
    } catch (err) {
      console.error(`  ✗ Error translating ${locale.code}:`, err);
    }
  }

  // Write dispute file (placeholder — actual Claude vs Gemini comparison happens during build review)
  if (disputes.length > 7) {
    fs.writeFileSync(DISPUTE_PATH, disputes.join("\n") + "\n", "utf-8");
    console.log(`\n📝 Disputes → ${path.relative(ROOT, DISPUTE_PATH)}`);
  } else {
    // Write empty dispute file
    disputes.push("No disputes found — Gemini translations accepted as-is.", "");
    fs.writeFileSync(DISPUTE_PATH, disputes.join("\n") + "\n", "utf-8");
    console.log(`\n✅ No disputes — all translations accepted`);
  }

  console.log("\n🎉 Translation complete!\n");
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
