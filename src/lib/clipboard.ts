/**
 * Clipboard write, with the fallback that makes it work where the async API
 * does not.
 *
 * This lived privately inside Calculator.tsx. It is here because six other
 * calculators needed it and the alternative was six copies — and one of those
 * copies already existed, in EmbedCalculator, written as a bare
 * `navigator.clipboard.writeText` with no fallback at all. An embedded widget
 * is the context most likely to be running without clipboard permission, so
 * the one place that needed the fallback most was the one place missing it.
 *
 * `navigator.clipboard` requires a secure context and can still reject on a
 * permission prompt, so the textarea + execCommand path is not legacy
 * paranoia; it is the only thing that works on an http:// host or inside a
 * sandboxed iframe.
 */
export function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard
      .writeText(text)
      .then(() => true)
      .catch(() => fallbackCopy(text));
  }
  return Promise.resolve(fallbackCopy(text));
}

function fallbackCopy(text: string): boolean {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand("copy");
    return true;
  } catch {
    return false;
  } finally {
    document.body.removeChild(ta);
  }
}
