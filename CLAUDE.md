# CLAUDE.md — aspect-ratio-calculator.com

Next 16 (App Router), TypeScript, Tailwind v4, deployed to Vercel from `master`.
Thirteen locales. The site is the product; the content is most of the value.

## The rule that matters most: English is a source, not the site

**Every content change must be translated into the other twelve locales in the
same piece of work.** Not "later", not "as a follow-up". A change that ships in
English only silently gives twelve of thirteen audiences a worse page than the
one you just improved, and nothing in the build or the lint will tell you.

This has bitten twice. Both times the English was rewritten and the locale files
kept serving the old, shorter version — `/es/blog/16-9-vs-4-3` was still
answering with 215 words while English answered with 592.

### How the merge decides who wins

`src/i18n/get-seo-data.ts` merges **per key**:

```ts
RATIO_DATA:    { ...base.RATIO_DATA,    ...mod.RATIO_DATA },
PLATFORM_DATA: { ...base.PLATFORM_DATA, ...mod.PLATFORM_DATA },
ARTICLE_DATA:  { ...base.ARTICLE_DATA,  ...mod.ARTICLE_DATA },
```

So a key present in a locale file **always wins over English**, however stale it
is, and a key absent from a locale file falls back to English. That fallback is
why adding a new ratio no longer 404s — but it is also why editing an existing
article in English alone changes nothing for anyone else.

### The two translators, and what they will not do

| Script | Covers |
|---|---|
| `scripts/translate-missing.mjs` | UI strings in `src/i18n/messages/*.json` |
| `scripts/translate-missing-seo.mjs` | articles in `src/i18n/seo-data/*.ts` |

Both need `GEMINI_API_KEY` (it lives in `~/aiea/secrets/.env`, not in this repo).

**Both only fill keys a locale is MISSING.** Neither updates a key that already
exists. So to propagate an *edit* you must first delete the stale entry:

- a UI string → delete that key from each `src/i18n/messages/<locale>.json`
- an article → truncate the locale's `ARTICLE_DATA` block (it is the last export
  in every locale file, so cutting at the declaration is a clean removal)

then run the script, which sees the gap and refills it.

Neither script knows how to translate `RATIO_DATA` or `PLATFORM_DATA`. New
ratios and platforms currently fall back to English until that gap is closed.

### Three traps, all hit in practice

1. **`= {,`** — the SEO script appends each entry with a leading comma before the
   closing brace, so the *first* entry into an emptied object produces
   `export const ARTICLE_DATA: Record<string, ArticleData> = {,` and the file
   stops compiling. Strip that comma after every refill.
2. **The quality check reviews translation, not structure.** It scored a
   Japanese article **10/10 while emitting invalid TypeScript** — it had split a
   table row into a bare string plus a three-cell array. Always run
   `tsc --noEmit` after a translation run; the score tells you nothing about
   whether the file parses.
3. **Translation is not free and not instant.** Six articles across twelve
   locales is ~72 model calls and around an hour. Budget for it rather than
   discovering it at the end.

### Verify before you call it done

```bash
npx tsc --noEmit                    # catches structural breaks
# then confirm every locale has every key, and that nothing is still English
```

## Fonts

DM Sans (body), Playfair Display (display), JetBrains Mono — self-hosted woff2
in `src/fonts/`, OFL. **The live palette is dark**: ground `#0b0d11`, ink
`#e2e4e8`, accent `#5b8fb9`, teal `#5bb8b2`, surface `#161a22`, muted `#636d80`.
Tokens are in `src/app/globals.css` and that file is the truth — an older
written spec describes a light Geist/`#2845FF` identity that the site no longer
uses.

## Routing gotchas

- `src/proxy.ts` rewrites unprefixed paths to `/en/...`, and **skips any path
  containing a dot**. `[locale]` will happily accept a non-locale segment, so
  `/openapi.json` once rendered the homepage with a 200. The guard is
  `urlSegmentToLocale()` in `src/app/[locale]/layout.tsx` — `dynamicParams =
  false` alone does **not** hold, because the homepage reads `headers()` for a
  CSP nonce and a dynamically rendered route never consults
  `generateStaticParams`.
- Route handlers that read the query string must not be `dynamic =
  "force-static"`. Next hands them **empty `searchParams`** and caches one
  response for every caller — `/api/ratio` answered the catalogue to every
  question, with a 200, and neither `tsc` nor the build noticed.

## Dates

`src/lib/content-revised.ts` and `src/lib/article-meta.ts` are maintained **by
hand**, and the sitemap reads them. A `lastmod` is a claim that content changed:
move it when the words change, and not when a build runs.

## Scoring

This site is the reference property for the ZapSprout visibility scorer
(`~/repos/zapsprout`). After deploying a change worth measuring:

```bash
cd ~/repos/zapsprout
~/aiea/.venv/bin/python scoring/audit.py aspect-ratio-calculator.com --json measurements/arc-audit-<ts>.json
~/aiea/.venv/bin/python scoring/scorecard.py measurements/arc-audit-<ts>.json
```

Use `~/aiea/.venv/bin/python`; the system interpreter has no `bs4`.
