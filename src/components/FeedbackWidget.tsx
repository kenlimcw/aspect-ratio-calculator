"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquarePlus, X, Send, Check, ChevronRight, EyeOff } from "lucide-react";
import { useTranslation } from "@/components/I18nProvider";

type Tab = "feedback" | "request";
type Status = "idle" | "sending" | "success" | "error";

const ROLE_KEYS = [
  "roleDesigner",
  "roleDeveloper",
  "roleVideoEditor",
  "rolePhotographer",
  "roleContentCreator",
  "roleSocialMediaManager",
  "roleMarketingProfessional",
  "roleFilmmaker",
  "roleEducator",
  "roleProductManager",
  "roleFreelancer",
  "roleStudent",
  "roleOther",
] as const;

const INDUSTRY_KEYS = [
  "industryMedia",
  "industryMarketing",
  "industryEducation",
  "industrySoftware",
  "industryFilm",
  "industryPhotography",
  "industrySocialMedia",
  "industryEcommerce",
  "industryHealthcare",
  "industryFinance",
  "industryGaming",
  "industryNonProfit",
  "industryOther",
] as const;

export function FeedbackWidget() {
  const { t } = useTranslation();
  const [open, setOpen]           = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [tab, setTab]             = useState<Tab>("feedback");
  const [status, setStatus]       = useState<Status>("idle");
  const [errorDetail, setErrorDetail] = useState("");

  const [message, setMessage] = useState("");
  const [role, setRole]         = useState("");
  const [industry, setIndustry] = useState("");
  const [problem, setProblem]   = useState("");

  const panelRef      = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (localStorage.getItem("feedback-fab-hidden") === "true") {
      setHidden(true);
    }
  }, []);

  useEffect(() => {
    function handleShow() {
      localStorage.removeItem("feedback-fab-hidden");
      setHidden(false);
      setOpen(true);
    }
    window.addEventListener("show-feedback", handleShow);
    return () => window.removeEventListener("show-feedback", handleShow);
  }, []);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    const timer = setTimeout(() => document.addEventListener("mousedown", handleClick), 50);
    return () => { clearTimeout(timer); document.removeEventListener("mousedown", handleClick); };
  }, [open]);

  useEffect(() => {
    if (open) setTimeout(() => firstInputRef.current?.focus(), 120);
  }, [open, tab]);

  useEffect(() => { setStatus("idle"); }, [tab, open]);

  function handleDismiss() {
    localStorage.setItem("feedback-fab-hidden", "true");
    setOpen(false);
    setHidden(true);
  }

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

  if (hidden) return null;

  return (
    <>
      {/* Floating button */}
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
          {open ? t("feedbackWidget", "close") : t("feedbackWidget", "feedbackTab")}
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          className="feedback-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Feedback panel"
        >
          <div className="feedback-panel-header">
            <div className="feedback-panel-header-dot" />
            <span className="feedback-panel-header-title">
              {tab === "feedback" ? t("feedbackWidget", "shareYourThoughts") : t("feedbackWidget", "requestFeature")}
            </span>
          </div>

          <div className="feedback-tabs">
            <button
              className={`feedback-tab ${tab === "feedback" ? "active" : ""}`}
              onClick={() => setTab("feedback")}
              type="button"
            >
              <span>{t("feedbackWidget", "feedbackTab")}</span>
              {tab === "feedback" && <span className="feedback-tab-pip" />}
            </button>
            <button
              className={`feedback-tab ${tab === "request" ? "active" : ""}`}
              onClick={() => setTab("request")}
              type="button"
            >
              <span>{t("feedbackWidget", "requestTab")}</span>
              {tab === "request" && <span className="feedback-tab-pip" />}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="feedback-form">
            {tab === "feedback" ? (
              <>
                <label className="feedback-label">
                  {t("feedbackWidget", "feedbackLabel")}
                </label>
                <textarea
                  ref={firstInputRef}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder={t("feedbackWidget", "feedbackPlaceholder")}
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
                  <label className="feedback-label">{t("feedbackWidget", "yourRole")}</label>
                  <div className="feedback-select-wrap">
                    <select
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      className="feedback-select"
                      disabled={status !== "idle"}
                    >
                      <option value="">{t("feedbackWidget", "selectRole")}</option>
                      {ROLE_KEYS.map(key => (
                        <option key={key} value={key}>{t("feedbackWidget", key)}</option>
                      ))}
                    </select>
                    <ChevronRight size={14} className="feedback-select-arrow" />
                  </div>
                </div>
                <div>
                  <label className="feedback-label">{t("feedbackWidget", "industry")}</label>
                  <div className="feedback-select-wrap">
                    <select
                      value={industry}
                      onChange={e => setIndustry(e.target.value)}
                      className="feedback-select"
                      disabled={status !== "idle"}
                    >
                      <option value="">{t("feedbackWidget", "selectIndustry")}</option>
                      {INDUSTRY_KEYS.map(key => (
                        <option key={key} value={key}>{t("feedbackWidget", key)}</option>
                      ))}
                    </select>
                    <ChevronRight size={14} className="feedback-select-arrow" />
                  </div>
                </div>
                <div>
                  <label className="feedback-label">{t("feedbackWidget", "problemToSolve")}</label>
                  <textarea
                    ref={firstInputRef}
                    value={problem}
                    onChange={e => setProblem(e.target.value)}
                    placeholder={t("feedbackWidget", "problemPlaceholder")}
                    className="feedback-textarea"
                    rows={4}
                    maxLength={2000}
                    disabled={status !== "idle"}
                  />
                  <div className="feedback-char-count">{problem.length}/2000</div>
                </div>
              </div>
            )}

            {status === "error" && (
              <p className="feedback-status-error">
                {errorDetail || t("feedbackWidget", "somethingWentWrong")}
              </p>
            )}

            <button
              type="submit"
              className="feedback-submit"
              disabled={!canSubmit}
              data-status={status}
            >
              {status === "success" ? (
                <>
                  <Check size={16} strokeWidth={2.5} />
                  <span>{t("feedbackWidget", "sentThankYou")}</span>
                </>
              ) : status === "sending" ? (
                <>
                  <span className="feedback-spinner" />
                  <span>{t("feedbackWidget", "sending")}</span>
                </>
              ) : (
                <>
                  <Send size={14} strokeWidth={2.5} />
                  <span>{tab === "feedback" ? t("feedbackWidget", "sendFeedback") : t("feedbackWidget", "submitRequest")}</span>
                </>
              )}
            </button>

            <button
              type="button"
              className="feedback-dismiss"
              onClick={handleDismiss}
            >
              <EyeOff size={12} strokeWidth={2} />
              <span>{t("feedbackWidget", "hideButton")}</span>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
