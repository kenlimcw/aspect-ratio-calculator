"use client";

/**
 * Thin client button that lives in the server-rendered Footer.
 * Clicking it:
 *  1. Clears the "feedback-fab-hidden" localStorage flag
 *  2. Dispatches a custom "show-feedback" event that FeedbackWidget listens for
 *  3. FeedbackWidget re-shows itself and opens the panel
 */
export function FooterFeedbackLink() {
  function handleClick() {
    localStorage.removeItem("feedback-fab-hidden");
    window.dispatchEvent(new CustomEvent("show-feedback"));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="hover:text-[var(--foreground)] transition-colors cursor-pointer bg-transparent border-none p-0 font-inherit text-inherit"
    >
      Give feedback
    </button>
  );
}
