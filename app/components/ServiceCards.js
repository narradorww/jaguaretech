"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import LeadModal from "./LeadModal";
import styles from "./ServiceCards.module.css";
import pageStyles from "../page.module.css";

const SERVICE_KEYS = ["mobile", "ai", "web", "seo", "marketing", "product"];

export default function ServiceCards() {
  const t = useTranslations("Home");
  const [activeService, setActiveService] = useState(null);

  return (
    <>
      <div className={`${pageStyles.cards} ${pageStyles.stagger}`}>
        {SERVICE_KEYS.map((key) => (
          <article
            key={key}
            className={`${pageStyles.card} ${styles.clickable}`}
            onClick={() => setActiveService(key)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && setActiveService(key)}
            aria-label={t(`services.${key}.title`)}
          >
            <h3 className={pageStyles.cardTitle}>{t(`services.${key}.title`)}</h3>
            <p className={pageStyles.cardText}>{t(`services.${key}.text`)}</p>
            <ul className={pageStyles.cardList}>
              <li>{t(`services.${key}.list.0`)}</li>
              <li>{t(`services.${key}.list.1`)}</li>
              <li>{t(`services.${key}.list.2`)}</li>
            </ul>
            <span className={styles.cta}>
              {t("services.cardCta")} →
            </span>
          </article>
        ))}
      </div>

      {activeService && (
        <LeadModal
          serviceKey={activeService}
          onClose={() => setActiveService(null)}
        />
      )}
    </>
  );
}
