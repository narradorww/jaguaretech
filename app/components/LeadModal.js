"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import styles from "./LeadModal.module.css";

export default function LeadModal({ serviceKey, onClose }) {
  const t = useTranslations("Home.leadModal");
  const locale = useLocale();

  const service = t.raw(`services.${serviceKey}`);
  const questions = service.questions;
  const budgetOptions = t.raw("budgetOptions");

  // steps: 0..questions.length-1 = perguntas, then budget, then email
  const totalSteps = questions.length + 2;
  const budgetStep = questions.length;
  const emailStep = questions.length + 1;

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [budget, setBudget] = useState(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  // Fecha com ESC
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Bloqueia scroll do body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function selectAnswer(value) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);
  }

  function canAdvance() {
    if (step < questions.length) return answers[step] !== null;
    if (step === budgetStep) return budget !== null;
    if (step === emailStep) return email.includes("@");
    return false;
  }

  function handleNext() {
    if (step < totalSteps - 1) setStep(step + 1);
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  async function handleSubmit() {
    setStatus("loading");
    const summary = questions.map((q, i) => `${q.label}: ${answers[i]}`).join("\n");
    const message = `Serviço: ${service.title}\n\n${summary}\n\nInvestimento: ${budget}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: email, email, message, locale }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  const progress = ((step) / (totalSteps - 1)) * 100;

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.title}>{service.title}</p>
          <button className={styles.closeBtn} onClick={onClose} aria-label={t("close")}>✕</button>
        </div>

        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
        </div>

        {status === "success" ? (
          <div className={styles.success}>
            <p className={styles.successIcon}>✓</p>
            <p className={styles.successTitle}>{t("successTitle")}</p>
            <p className={styles.successText}>{t("successText")}</p>
            <button className={styles.btn} onClick={onClose}>OK</button>
          </div>
        ) : (
          <div className={styles.body}>
            {/* Perguntas */}
            {step < questions.length && (
              <div className={styles.question}>
                <p className={styles.questionLabel}>{questions[step].label}</p>
                <div className={styles.options}>
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.option} ${answers[step] === opt ? styles.selected : ""}`}
                      onClick={() => selectAnswer(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Budget */}
            {step === budgetStep && (
              <div className={styles.question}>
                <p className={styles.questionLabel}>{t("budgetLabel")}</p>
                <div className={styles.options}>
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      className={`${styles.option} ${budget === opt ? styles.selected : ""}`}
                      onClick={() => setBudget(opt)}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Email */}
            {step === emailStep && (
              <div className={styles.question}>
                <p className={styles.questionLabel}>{t("emailLabel")}</p>
                <input
                  className={styles.emailInput}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("emailPlaceholder")}
                  autoFocus
                  onKeyDown={(e) => e.key === "Enter" && canAdvance() && handleSubmit()}
                />
                {status === "error" && (
                  <p className={styles.errorText}>{t("errorText")}</p>
                )}
              </div>
            )}

            {/* Nav */}
            <div className={styles.nav}>
              {step > 0 && (
                <button className={styles.btnSecondary} onClick={handleBack}>
                  {t("back")}
                </button>
              )}
              {step < emailStep ? (
                <button
                  className={styles.btn}
                  onClick={handleNext}
                  disabled={!canAdvance()}
                >
                  {t("next")}
                </button>
              ) : (
                <button
                  className={styles.btn}
                  onClick={handleSubmit}
                  disabled={!canAdvance() || status === "loading"}
                >
                  {status === "loading" ? t("sending") : t("submit")}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
