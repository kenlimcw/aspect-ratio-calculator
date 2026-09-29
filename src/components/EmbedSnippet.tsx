"use client";

import { useState } from "react";
import { Code2, Check, Copy } from "lucide-react";

/* "Put this calculator on your site."
 *
 * The widget at /embed is the mechanism; this is the offer. Without it the
 * route exists and nobody knows, which is the state the site was already in —
 * an embeddable widget was described as a feature for months while /embed
 * returned 404.
 *
 * It sits on the ratio pages because that is where someone writing about
 * 16:9 actually is when the thought "I could use this" occurs. The snippet
 * is pre-filled with THIS page's ratio, so what they paste is a calculator
 * already set to the thing their article is about.
 *
 * Plain iframe, no script required. The widget posts its height to the
 * parent for hosts who want to listen, but a copy-paste that needs a script
 * tag to work is a copy-paste most people abandon.
 */
export function EmbedSnippet({ w, h, label }: { w: number; h: number; label: string }) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const src = `https://aspect-ratio-calculator.com/embed?w=${w}&h=${h}`;
  const code =
    `<iframe src="${src}" width="100%" height="300" ` +
    `style="border:1px solid #e5e7eb;border-radius:8px" ` +
    `title="Aspect Ratio Calculator" loading="lazy"></iframe>`;

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* Clipboard access is permission-gated. The <code> block is selectable,
       * so a refusal leaves the reader able to copy it by hand. */
    }
  }

  return (
    <section className="mt-10">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
      >
        <Code2 size={15} strokeWidth={2} />
        Embed this {label} calculator on your site
      </button>

      {open && (
        <div className="mt-3 rounded-lg border border-[var(--border)] p-4">
          <p className="text-xs text-[var(--muted)] leading-relaxed">
            Free to use on any site. Paste this where you want the calculator to appear —
            it arrives set to {label}.
          </p>

          <div className="mt-3 flex items-start gap-2">
            <code className="flex-1 overflow-x-auto rounded-md bg-[var(--surface)] p-3 font-mono text-[11px] leading-relaxed text-[var(--foreground)] whitespace-pre-wrap break-all">
              {code}
            </code>
            <button
              onClick={copy}
              aria-label="Copy embed code"
              className="flex-shrink-0 rounded-md border border-[var(--border)] p-2 text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          <p className="mt-2 text-[11px] text-[var(--muted)]">
            Add <code className="font-mono">&amp;theme=light</code> for a light background,
            or <code className="font-mono">&amp;lang=es</code> for another language.
          </p>
        </div>
      )}
    </section>
  );
}
