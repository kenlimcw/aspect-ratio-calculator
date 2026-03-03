"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquarePlus, X, Send, Check, ChevronRight, EyeOff } from "lucide-react";

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

export function FeedbackWidget() {
  const [open, setOpen]           = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [tab, setTab]             = useState<Tab>("feedback");
  const [status, setStatus]       = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  // Feedback form
  const [message, setMessage] = useState("");

  // Request form
  const [role, setRole]         = useState("");
  const [industry, setIndustry] = useState("");
  const [problem, setProblem]   = useState("");

  const panelRef      = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLTextAreaElement>(null);

  // ── Restore hidden state from localStorage on mount ──────────────────────
  useEffect(() => {
    if (localStorage.getItem("feedback-fab-hidden") === "true") {
      setHidden(true);
    }
  }, []);

  // ── Listen for "show-feedback" event dispatched by the footer link ────────
  useEffect(() => {
    function handleShow() {
      localStorage.removeItem("feedback-fab-hidden");
      setHidden(false);
      setOpen(true);
    }
    window.addEventListener("show-feedback", handleShow);
    return () => window.removeEventListener("show-feedback", handleShow);
  }, []);

  // ── Close on outside click ───────────────────────────────────────────────
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    const t = setTimeout(() => document.addEventListener("mousedown", handleClick), 50);
    return () => { clearTimeout(t); document.removeEventListener("mousedown", handleClick); };
  }, [open]);

  // ── Focus first input on open ────────────────────────────────────────────
  useEffect(() => {
    if (open) setTimeout(() => firstInputRef.current?.focus(), 120);
  }, [open, tab]);

  // ── Reset status when tab or open changes ────────────────────────────────
  useEffect(() => { setStatus("idle"); }, [tab, open]);

  // ── Dismiss — hides the FAB and persists to localStorage ─────────────────
  function handleDismiss() {
    localStorage.setItem("feedback-fab-hidden", "true");
    setOpen(false);
    setHidden(true);
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

  // Don't render anything if the user has dismissed the button
  if (hidden) return null;

  return (
    <>
      {/* ── Floating button ─────────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label="Open feedback panel"
        className="feedback-fab"
        data-open={open}
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

            {/* Dismiss */}
            <button
              type="button"
              className="feedback-dismiss"
              onClick={handleDismiss}
            >
              <EyeOff size={12} strokeWidth={2} />
              <span>Hide this button</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
