"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "@/components/I18nProvider";

/* A deliberately small calculator, not the real one in a smaller box.
 *
 * Calculator.tsx is sixteen hundred lines: three modes, presets, an image
 * wizard, a file reader. Embedding that would put the site's own weight
 * problem onto somebody else's page — and a host who finds the widget slow
 * removes it, which loses the link this whole route exists to earn.
 *
 * So this is the one job people actually embed a ratio calculator for: enter
 * a width and a height, get the ratio; change one side, get the other. Anyone
 * who wants the rest follows the attribution link, which is the point.
 */

function gcd(a: number, b: number): number {
  while (b) [a, b] = [b, a % b];
  return a;
}

/** The simplified ratio, or null when either side is not a usable number. */
function ratioOf(w: number, h: number): { rw: number; rh: number } | null {
  if (!Number.isFinite(w) || !Number.isFinite(h) || w <= 0 || h <= 0) return null;
  /* Integers only for the gcd. A non-integer input still gets a decimal
   * ratio below; it just does not get a clean "16 : 9". */
  if (!Number.isInteger(w) || !Number.isInteger(h)) return null;
  const g = gcd(w, h);
  return { rw: w / g, rh: h / g };
}

const num = (s: string) => {
  const n = parseFloat(s);
  return Number.isFinite(n) ? n : NaN;
};

export function EmbedCalculator({ initialW, initialH }: { initialW: number; initialH: number }) {
  const { t } = useTranslation();

  const [w, setW] = useState(String(initialW));
  const [h, setH] = useState(String(initialH));
  const [targetW, setTargetW] = useState("");
  const [targetH, setTargetH] = useState("");
  /* Which side the reader typed into last. Without it, filling both target
   * boxes and then editing the first leaves the second stale and wrong. */
  const [driver, setDriver] = useState<"w" | "h" | null>(null);
  const [copied, setCopied] = useState(false);

  const ow = num(w);
  const oh = num(h);
  const r = ratioOf(ow, oh);
  const decimal = Number.isFinite(ow) && Number.isFinite(oh) && oh > 0 ? ow / oh : NaN;

  /* Derive the follower from the driver rather than storing both, so the two
   * boxes cannot disagree. */
  let outW = targetW;
  let outH = targetH;
  if (Number.isFinite(decimal) && decimal > 0) {
    if (driver === "w" && Number.isFinite(num(targetW))) {
      outH = String(Math.round(num(targetW) / decimal));
    } else if (driver === "h" && Number.isFinite(num(targetH))) {
      outW = String(Math.round(num(targetH) * decimal));
    }
  }

  const ratioLabel = r ? `${r.rw} : ${r.rh}` : Number.isFinite(decimal) ? `${decimal.toFixed(3)} : 1` : "—";

  async function copy() {
    try {
      await navigator.clipboard.writeText(ratioLabel);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* Clipboard is permission-gated and blocked outright in some embedding
       * contexts. A silent no-op beats an exception in someone else's page. */
    }
  }

  /* Tell the host how tall we are, so it never has to guess or scroll.
   *
   * ResizeObserver rather than a one-shot measurement: the box grows when the
   * ratio line wraps in a long locale, and a host that sized once would clip
   * it. The message is namespaced because a page may embed several widgets,
   * or other people's. */
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const post = () => {
      try {
        window.parent?.postMessage(
          { type: "arc:embed:height", height: Math.ceil(el.getBoundingClientRect().height) },
          "*",
        );
      } catch {
        /* Cross-origin parents can refuse; the widget still works, the host
         * just keeps whatever height it set. */
      }
    };
    const ro = new ResizeObserver(post);
    ro.observe(el);
    post();
    return () => ro.disconnect();
  }, []);

  const field =
    "w-full rounded-md border border-[var(--border)] bg-[var(--background)] " +
    "px-2.5 py-1.5 text-sm text-[var(--foreground)] outline-none " +
    "focus:border-[var(--accent)]";
  const label = "block text-[11px] font-medium uppercase tracking-wider text-[var(--muted)] mb-1";

  return (
    <div ref={root} className="p-4">
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={label} htmlFor="arc-w">{t("calculator", "width")}</label>
          <input id="arc-w" className={field} inputMode="numeric" value={w}
                 onChange={(e) => setW(e.target.value)} />
        </div>
        <div>
          <label className={label} htmlFor="arc-h">{t("calculator", "height")}</label>
          <input id="arc-h" className={field} inputMode="numeric" value={h}
                 onChange={(e) => setH(e.target.value)} />
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between rounded-md bg-[var(--surface)] px-3 py-2.5">
        <div>
          <div className={label}>{t("calculator", "ratio")}</div>
          <div className="font-mono text-xl text-[var(--accent)]" data-arc-ratio>{ratioLabel}</div>
        </div>
        <button onClick={copy}
                className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">
          {copied ? t("calculator", "copied") : t("calculator", "copy")}
        </button>
      </div>

      <div className="mt-3">
        <div className={label}>{t("calculator", "newSize")}</div>
        <div className="grid grid-cols-2 gap-3">
          <input aria-label={t("calculator", "width")} className={field} inputMode="numeric"
                 placeholder={t("calculator", "width")} value={outW}
                 onChange={(e) => { setTargetW(e.target.value); setDriver("w"); }} />
          <input aria-label={t("calculator", "height")} className={field} inputMode="numeric"
                 placeholder={t("calculator", "height")} value={outH}
                 onChange={(e) => { setTargetH(e.target.value); setDriver("h"); }} />
        </div>
      </div>

      {/* The attribution. This link is the entire commercial logic of the
        * widget: the host gets a working calculator, the site gets a credit
        * from a page about the subject. It is not decoration and it does not
        * get an opacity of 0.4. */}
      <div className="mt-3 border-t border-[var(--border)] pt-2 text-[11px] text-[var(--muted)]">
        <a href="https://aspect-ratio-calculator.com/?utm_source=embed&utm_medium=widget"
           target="_blank" rel="noopener"
           className="hover:text-[var(--accent)] transition-colors">
          Aspect Ratio Calculator
        </a>
      </div>
    </div>
  );
}
