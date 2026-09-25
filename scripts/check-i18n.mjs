#!/usr/bin/env node
/* Do the translations still say the same thing the code expects?
 *
 * `I18nProvider.t()` substitutes `{name}` placeholders by `replaceAll`. If a
 * translator drops one, renames it, or translates the word inside the braces,
 * nothing throws: the brace text renders literally, in one locale, often inside
 * an aria-label where no one will ever see it. `translate-missing.mjs` only
 * *asks* the model to preserve them.
 *
 * Twelve locales times several hundred keys is not something to eyeball, and
 * "we checked it once" does not survive the next translation run.
 *
 *   P1  every locale has every key English has
 *   P2  the placeholder SET in each translation matches its English key exactly
 *   P3  no locale silently keeps the English string for a long key
 *       (warning, not an error — some strings legitimately do not translate)
 *
 * Usage:
 *   node scripts/check-i18n.mjs              # check
 *   node scripts/check-i18n.mjs --self-test  # prove each check can fail
 */
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = "src/i18n/messages";
const placeholders = (s) =>
  new Set([...String(s).matchAll(/\{([a-zA-Z0-9_]+)\}/g)].map((m) => m[1]));

const eq = (a, b) => a.size === b.size && [...a].every((x) => b.has(x));

function compare(en, locales) {
  const problems = [];
  for (const [loc, msgs] of Object.entries(locales)) {
    for (const [ns, keys] of Object.entries(en)) {
      const got = msgs[ns];
      if (!got) {
        problems.push({ check: "P1", loc, where: ns, msg: "namespace missing entirely" });
        continue;
      }
      for (const [k, enVal] of Object.entries(keys)) {
        if (typeof enVal !== "string") continue;
        const val = got[k];
        if (val === undefined) {
          problems.push({ check: "P1", loc, where: `${ns}.${k}`, msg: "key missing" });
          continue;
        }
        const want = placeholders(enVal);
        const have = placeholders(val);
        if (!eq(want, have)) {
          problems.push({
            check: "P2", loc, where: `${ns}.${k}`,
            msg: `placeholders differ — English has {${[...want].join("} {")}}, ` +
                 `this locale has ${have.size ? "{" + [...have].join("} {") + "}" : "none"}`,
          });
        }
      }
    }
  }
  return problems;
}

function untranslated(en, locales) {
  const out = [];
  for (const [loc, msgs] of Object.entries(locales)) {
    let n = 0;
    for (const [ns, keys] of Object.entries(en)) {
      for (const [k, enVal] of Object.entries(keys)) {
        if (typeof enVal === "string" && enVal.length > 40 && msgs[ns]?.[k] === enVal) n++;
      }
    }
    if (n) out.push(`${loc}: ${n} long string(s) identical to English`);
  }
  return out;
}

function selfTest() {
  const en = { ns: { a: "Lost {px} px each side", b: "plain" } };
  const cases = [
    { name: "P1 missing key", locs: { xx: { ns: { a: "…{px}…" } } }, expect: "P1" },
    { name: "P1 missing namespace", locs: { xx: {} }, expect: "P1" },
    { name: "P2 placeholder dropped", locs: { xx: { ns: { a: "Perdu par côté", b: "clair" } } }, expect: "P2" },
    { name: "P2 placeholder translated", locs: { xx: { ns: { a: "Perdu {pixels} px", b: "clair" } } }, expect: "P2" },
    { name: "correct work", locs: { xx: { ns: { a: "Perdu {px} px de chaque côté", b: "clair" } } }, expect: null },
  ];
  let bad = 0;
  for (const c of cases) {
    const got = compare(en, c.locs).map((p) => p.check);
    const ok = c.expect ? got.includes(c.expect) : got.length === 0;
    if (!ok) bad++;
    console.log(`  ${ok ? "ok  " : "FAIL"}  ${c.name}  [${got}]`);
  }
  console.log(bad ? `\n${bad} case(s) wrong — the check itself is broken`
                  : `\nall ${cases.length} cases behave: each check can fail, and correct work passes`);
  return bad ? 1 : 0;
}

function main() {
  if (process.argv.includes("--self-test")) process.exit(selfTest());

  const en = JSON.parse(readFileSync(path.join(DIR, "en.json"), "utf8"));
  const locales = {};
  for (const f of readdirSync(DIR)) {
    if (!f.endsWith(".json") || f === "en.json") continue;
    locales[f.replace(/\.json$/, "")] = JSON.parse(readFileSync(path.join(DIR, f), "utf8"));
  }

  const problems = compare(en, locales);
  const warnings = untranslated(en, locales);

  for (const w of warnings) console.warn(`  warn  ${w}`);

  if (!problems.length) {
    const keys = Object.values(en).reduce((n, o) => n + Object.keys(o).length, 0);
    console.log(`i18n: ok — ${Object.keys(locales).length} locales x ${keys} keys, placeholders intact`);
    process.exit(0);
  }
  console.error(`\ni18n: ${problems.length} problem(s)\n`);
  for (const p of problems.slice(0, 40)) {
    console.error(`  [${p.check}] ${p.loc}  ${p.where}\n        ${p.msg}`);
  }
  if (problems.length > 40) console.error(`  ... and ${problems.length - 40} more`);
  process.exit(1);
}

main();
