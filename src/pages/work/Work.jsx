import React from "react";
import "./work.css";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ScrollArrow from "../../components/ScrollArrow";

export default function Work() {
  const { t } = useTranslation();

  return (
    <section id="Work" className="work-section">
      <h1 className="work-title">{t("work.title")}</h1>
      <p className="work-subtitle">{t("work.subtitle")}</p>

      <div className="work-grid">
        {[1, 2, 3, 4].map((i) => (
          <div className="work-card" key={i}>
            <h2>
              <FaCheckCircle className="work-icon" /> {t(`work.card${i}.title`)}
            </h2>
            <p>{t(`work.card${i}.text`)}</p>
          </div>
        ))}
      </div>
      <ScrollArrow targetPath="/contact" />
    </section>
  );
}
