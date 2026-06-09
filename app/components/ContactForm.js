"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const t = useTranslations("Home");
  const locale = useLocale();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, locale }),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.success}>
        <p className={styles.successIcon}>✓</p>
        <p className={styles.successTitle}>{t("form.successTitle")}</p>
        <p className={styles.successText}>{t("form.successText")}</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">
            {t("form.name")}
          </label>
          <input
            className={styles.input}
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder={t("form.namePlaceholder")}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">
            {t("form.email")}
          </label>
          <input
            className={styles.input}
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder={t("form.emailPlaceholder")}
            required
            disabled={status === "loading"}
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="message">
          {t("form.message")}
        </label>
        <textarea
          className={styles.textarea}
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={t("form.messagePlaceholder")}
          rows={5}
          required
          disabled={status === "loading"}
        />
      </div>
      {status === "error" && (
        <p className={styles.errorText}>{t("form.errorText")}</p>
      )}
      <button
        className={styles.submit}
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? t("form.sending") : t("form.submit")}
      </button>
    </form>
  );
}
