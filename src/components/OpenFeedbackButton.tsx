"use client";

/* Opens the feedback panel that already exists in the layout.
 *
 * The widget listens for a `show-feedback` window event, which also un-hides it
 * for anyone who dismissed the floating button. Reusing that is why /contact
 * needs no second copy of the form — one form, one place it posts to. */
export function OpenFeedbackButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("show-feedback"))}
      className="seo-card w-full text-start text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors cursor-pointer"
    >
      {label}
    </button>
  );
}
