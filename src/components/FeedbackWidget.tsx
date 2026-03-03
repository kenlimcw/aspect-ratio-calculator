"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquarePlus, X, Send, Check, ChevronRight } from "lucide-react";

type Tab = "feedback" | "request";
type Status = "idle" | "sending" | "success" | "error";

const ROLES = [
  "Designer",
  "Developer / Engineer",
  "Video Editor",
  "Photographer",
  "Content Creator",
  "Social Media Manager",
  "Marketing Professional",
  "Filmmaker / Cinematographer",
  "Educator / Teacher",
  "Product Manager",
  "Freelancer",
  "Student",
  "Other",
];

const INDUSTRIES = [
  "Media & Entertainment",
  "Marketing & Advertising",
  "Education",
  "Software & Technology",
  "Film & Television",
  "Photography",
  "Social Media & Content",
  "E-commerce & Retail",
  "Healthcare",
  "Finance & Banking",
  "Gaming",
  "Non-Profit",
  "Other",
];

// Drag constants
const BUTTON_H = 44;     // approx FAB height in px
const PANEL_GAP = 8;     // gap between FAB top edge and panel bottom
const PANEL_MAX_H = 420; // approx max panel height for clamping
const LONG_PRESS_MS = 450;

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("feedback");
  const [status, setStatus] = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  // Drag / position state
  // null = use CSS default (bottom-left corner); object = user-dragged position
  const [pos, setPos] = useState<{ left: number; bottom: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLongPressing, setIsLongPressing] = useState(false);

  // Refs for drag logic (avoid stale closure issues in pointer handlers)
  const isDraggingRef    = useRef(false);
  const longPressTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dragStartPtr     = useRef<{ x: number; y: number } | null>(null);
  const dragStartPos     = useRef<{ left: number; bottom: number } | null>(null);
  const didDrag          = useRef(false);

  // Feedback form
  const [message, setMessage] = useState("");

  // Request form
  const [role, setRole]         = useState("");
  const [industry, setIndustry] = useState("");
  const [problem, setProblem]   = useState("");

  const panelRef     = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLTextAreaElement>(null);

  // ── Load saved position on mount (clamped to current viewport) ───────────
  useEffect(() => {
    const raw = localStorage.getItem("feedback-fab-pos");
    if (!raw) return;
    try {
      const p = JSON.parse(raw) as { left: number; bottom: number };
      const clampedLeft   = Math.max(0, Math.min(window.innerWidth  - 120, p.left));
      const clampedBottom = Math.max(0, Math.min(window.innerHeight - BUTTON_H, p.bottom));
      setPos({ left: clampedLeft, bottom: clampedBottom });
    } catch {
      // ignore malformed stored value
    }
  }, []);

  // ── Close on outside click ───────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    // Slight delay so the open-click doesn't immediately close
    const t = setTimeout(() => document.addEventListener("mousedown", handleClick), 50);
    return () => { clearTimeout(t); document.removeEventListener("mousedown", handleClick); };
  }, [open]);

  // ── Focus first input on open ────────────────────────────────────────────
  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 120);
    }
  }, [open, tab]);

  // ── Reset status when tab or open changes ────────────────────────────────
  useEffect(() => { setStatus("idle"); }, [tab, open]);

  // ── Drag helpers ─────────────────────────────────────────────────────────

  function cancelLongPress() {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
    setIsLongPressing(false);
    dragStartPtr.current  = null;
    dragStartPos.current  = null;
  }

  function onPointerDown(e: React.PointerEvent<HTMLButtonElement>) {
    // Only respond to primary mouse button or any touch/pen
    if (e.pointerType === "mouse" && e.button !== 0) return;
    // Capture pointer so events keep firing even if pointer leaves the element
    e.currentTarget.setPointerCapture(e.pointerId);

    didDrag.current       = false;
    dragStartPtr.current  = { x: e.clientX, y: e.clientY };
    dragStartPos.current  = pos ?? { left: 24, bottom: 24 };
    setIsLongPressing(true);

    longPressTimer.current = setTimeout(() => {
      isDraggingRef.current = true;
      setIsDragging(true);
      setIsLongPressing(false);
      longPressTimer.current = null;
    }, LONG_PRESS_MS);
  }

  function onPointerMove(e: React.PointerEvent<HTMLButtonElement>) {
    if (!dragStartPtr.current) return;
    const dx = e.clientX - dragStartPtr.current.x;
    const dy = e.clientY - dragStartPtr.current.y;

    // If user moves more than 8 px before long-press fires, cancel it
    // (treat as a normal scroll or accidental move, not a drag intent)
    if (!isDraggingRef.current && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
      cancelLongPress();
      return;
    }

    if (!isDraggingRef.current) return;

    didDrag.current = true;
    const start     = dragStartPos.current!;

    // dy is inverted: dragging down reduces the `bottom` offset
    const newLeft   = Math.max(0, Math.min(window.innerWidth  - 120, start.left + dx));
    const newBottom = Math.max(0, Math.min(window.innerHeight - BUTTON_H, start.bottom - dy));

    const newPos = { left: newLeft, bottom: newBottom };
    setPos(newPos);
    localStorage.setItem("feedback-fab-pos", JSON.stringify(newPos));
  }

  function onPointerUp() {
    cancelLongPress();
    isDraggingRef.current = false;
    setIsDragging(false);
  }

  // Guard click so it doesn't fire after a drag
  function handleClick() {
    if (didDrag.current) { didDrag.current = false; return; }
    setOpen(o => !o);
  }

  // ── Form logic ───────────────────────────────────────────────────────────

  function resetForms() {
    setMessage("");
    setRole("");
    setIndustry("");
    setProblem("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const body =
      tab === "feedback"
        ? { type: "feedback", message }
        : { type: "request", role, industry, problem };

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.detail || data.error || "Failed");
      }
      setStatus("success");
      resetForms();
      setTimeout(() => {
        setStatus("idle");
        setOpen(false);
      }, 2200);
    } catch (err) {
      setErrorDetail(err instanceof Error ? err.message : "Unknown error");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  }

  const canSubmit =
    status === "idle" &&
    (tab === "feedback"
      ? message.trim().length > 0
      : role.trim() && industry.trim() && problem.trim().length > 0);

  // ── Panel position follows dragged button ────────────────────────────────
  const panelStyle: React.CSSProperties | undefined = (() => {
    if (!pos || typeof window === "undefined") return undefined;
    return {
      left:   Math.min(pos.left, window.innerWidth - 356),
      bottom: Math.min(
        pos.bottom + BUTTON_H + PANEL_GAP,
        window.innerHeight - PANEL_MAX_H,
      ),
    };
  })();

  return (
    <>
      {/* ── Floating button ─────────────────────────────────── */}
      <button
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClick={handleClick}
        aria-label="Open feedback panel"
        className="feedback-fab"
        data-open={open}
        data-dragging={isDragging}
        data-longpressing={isLongPressing}
        style={pos ? { left: pos.left, bottom: pos.bottom } : undefined}
      >
        <span className="feedback-fab-icon">
          {open ? <X size={18} strokeWidth={2.5} /> : <MessageSquarePlus size={18} strokeWidth={2.5} />}
        </span>
        <span className="feedback-fab-label">
          {open ? "Close" : "Feedback"}
        </span>
      </button>

      {/* ── Panel ───────────────────────────────────────────── */}
      {open && (
        <div
          ref={panelRef}
          className="feedback-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Feedback panel"
          style={panelStyle}
        >
          {/* Header */}
          <div className="feedback-panel-header">
            <div className="feedback-panel-header-dot" />
            <span className="feedback-panel-header-title">
              {tab === "feedback" ? "Share your thoughts" : "Request a feature"}
            </span>
          </div>

          {/* Tab switcher */}
          <div className="feedback-tabs">
            <button
              className={`feedback-tab ${tab === "feedback" ? "active" : ""}`}
              onClick={() => setTab("feedback")}
              type="button"
            >
              <span>Feedback</span>
              {tab === "feedback" && <span className="feedback-tab-pip" />}
            </button>
            <button
              className={`feedback-tab ${tab === "request" ? "active" : ""}`}
              onClick={() => setTab("request")}
              type="button"
            >
              <span>Request</span>
              {tab === "request" && <span className="feedback-tab-pip" />}
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="feedback-form">

            {tab === "feedback" ? (
              <>
                <label className="feedback-label">
                  Compliment, complaint, or anything on your mind
                </label>
                <textarea
                  ref={firstInputRef}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="This tool is amazing because… / I wish it could…"
                  className="feedback-textarea"
                  rows={5}
                  maxLength={2000}
                  disabled={status !== "idle"}
                />
                <div className="feedback-char-count">{message.length}/2000</div>
              </>
            ) : (
              <div className="feedback-fields">
                <div>
                  <label className="feedback-label">Your Role</label>
                  <div className="feedback-select-wrap">
                    <select
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      className="feedback-select"
                      disabled={status !== "idle"}
                    >
                      <option value="">Select your role…</option>
                      {ROLES.map(r => <option key={r} value={r}>{r}</option>)}
                    </select>
                    <ChevronRight size={14} className="feedback-select-arrow" />
                  </div>
                </div>
                <div>
                  <label className="feedback-label">Industry</label>
                  <div className="feedback-select-wrap">
                    <select
                      value={industry}
                      onChange={e => setIndustry(e.target.value)}
                      className="feedback-select"
                      disabled={status !== "idle"}
                    >
                      <option value="">Select your industry…</option>
                      {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                    </select>
                    <ChevronRight size={14} className="feedback-select-arrow" />
                  </div>
                </div>
                <div>
                  <label className="feedback-label">Problem you&apos;d like solved</label>
                  <textarea
                    ref={firstInputRef}
                    value={problem}
                    onChange={e => setProblem(e.target.value)}
                    placeholder="Describe the workflow or task you're trying to accomplish…"
                    className="feedback-textarea"
                    rows={4}
                    maxLength={2000}
                    disabled={status !== "idle"}
                  />
                  <div className="feedback-char-count">{problem.length}/2000</div>
                </div>
              </div>
            )}

            {/* Status messages */}
            {status === "error" && (
              <p className="feedback-status-error">
                {errorDetail || "Something went wrong — please try again."}
              </p>
            )}

            {/* Submit button */}
            <button
              type="submit"
              className="feedback-submit"
              disabled={!canSubmit}
              data-status={status}
            >
              {status === "success" ? (
                <>
                  <Check size={16} strokeWidth={2.5} />
                  <span>Sent — thank you!</span>
                </>
              ) : status === "sending" ? (
                <>
                  <span className="feedback-spinner" />
                  <span>Sending…</span>
                </>
              ) : (
                <>
                  <Send size={14} strokeWidth={2.5} />
                  <span>{tab === "feedback" ? "Send Feedback" : "Submit Request"}</span>
                </>
              )}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
