# Tool cell build contract

You are building ONE tool cell for aspect-ratio-calculator.com. Another agent is
building a different one at the same time in this same worktree. **Write only the
files listed under "Your files". Never touch a shared file** — the orchestrator
wires them together afterwards. A conflicting edit loses somebody's work.

Worktree: `/home/kenl/repos/arc-lastmod` (branch `visibility/honest-lastmod`).
Read the shipped reference cell first; copy its shape, not its content:

- `src/lib/safe-zones.ts`            — engine + data, with provenance
- `src/lib/tools-data.ts`            — the ToolData interface you must satisfy
- `src/components/SafeZoneChecker.tsx` — a client widget wired to i18n
- `src/app/[locale]/tools/[slug]/page.tsx` — the shared route (do NOT edit)
- `playwright-tests/safe-zone-tool.spec.ts` — the test standard
- `src/i18n/messages/en.json` → the `safeZoneTool` namespace

## Your files, and only these

| File | What |
|---|---|
| `src/lib/tools/<slug>.ts` | Pure engine functions + `export const tool: ToolData` |
| `src/components/tools/<ComponentName>.tsx` | `"use client"` widget |
| `src/i18n/messages/_tools/<ns>.en.json` | A single JSON object: your namespace's keys |
| `playwright-tests/<slug>.spec.ts` | Your tests |

## Seven rules, all load-bearing

1. **Every number the tool shows must be derivable.** State in a comment where it
   comes from. If a figure is inherited rather than computed by us, it carries a
   `provenance` field with a source and an ISO date, and the UI says so. The
   reference cell does this; it is the whole credibility of the page.

2. **Ship a control that cannot be wrong by accident.** The safe-zone tool asserts
   that a true 9:16 screen loses exactly 0.0%. Find the equivalent identity for
   your maths — a case where the answer is known a priori — and assert it in a
   test. Without one, a drifting formula looks as plausible as a correct one.

3. **No user-visible string in a .ts or .tsx file.** Every one is a key in your
   `_tools/<ns>.en.json`. The component reads them via
   `const { t } = useTranslation(); const M = (k, v?) => t("<ns>", k, v);`
   Placeholders are `{name}` and are passed as the second argument. This is not
   style: a change that ships in English only silently gives twelve of thirteen
   audiences a worse page, and Search Console says the translated pages are the
   only ones currently ranking.

4. **The `answer` key is written to be quoted with no page around it.** Two or
   three self-contained sentences carrying a real number. No "as we saw above",
   no pronoun without its noun. It is the only part of the page most people will
   ever see, because it is what an AI Overview lifts.

5. **`title` ≤ 60 characters, head term first, no year.** Measured: the year buys
   nothing — "instagram reel size" is 5,400/mo, the same term with "2026" is 50.
   `description` ≤ 160 and is a reason to click, not a summary.

6. **Tests assert rendered numbers, not that the page loads.** Include the
   control from rule 2, one worked figure, one interaction, and a check that the
   page renders under `/ja`. Start every interactive test with
   `await page.waitForLoadState('networkidle')` — these pages are prerendered, so
   they paint complete and inert, and a click before React hydrates is silently
   swallowed.

7. **Match the house voice.** Comments explain *why*, especially why something
   non-obvious is the way it is. Look at the reference files. Do not write
   tutorial comments that restate the code.

## Verify before you report

```bash
cd /home/kenl/repos/arc-lastmod
npx tsc --noEmit            # must be clean for YOUR files
node -e "JSON.parse(require('fs').readFileSync('src/i18n/messages/_tools/<ns>.en.json'))"
```

You cannot run the build or Playwright — the route registry is not wired until
integration, and a second agent running a build concurrently corrupts `.next`.
The orchestrator builds and runs every suite afterwards and will come back to you
if yours fails.

## Report

Structured summary only. Never paste file contents into your return value.
