import React from "react";
import "./services.css";
import { FaCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import ScrollArrow from "../../components/ScrollArrow";
export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="Services" className="services-section">
      <h1 className="services-title">{t("services.title")}</h1>
      <p className="services-subtitle">{t("services.subtitle")}</p>

      <div className="services-grid">
        {/* Servicio 1 */}
        <div className="service-card">
          <h2>{t("services.virtual.title")}</h2>
          <ul className="service-list">
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.virtual.item1.title")}
              </strong>
              <p className="service-desc">{t("services.virtual.item1.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.virtual.item2.title")}
              </strong>
              <p className="service-desc">{t("services.virtual.item2.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.virtual.item3.title")}
              </strong>
              <p className="service-desc">{t("services.virtual.item3.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.virtual.item4.title")}
              </strong>
              <p className="service-desc">{t("services.virtual.item4.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.virtual.item5.title")}
              </strong>
              <p className="service-desc">{t("services.virtual.item5.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.virtual.item6.title")}
              </strong>
              <p className="service-desc">{t("services.virtual.item6.text")}</p>
            </li>
          </ul>
        </div>

        {/* Servicio 2 */}
        <div className="service-card">
          <h2>{t("services.social.title")}</h2>
          <ul className="service-list">
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.social.item1.title")}
              </strong>
              <p className="service-desc">{t("services.social.item1.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.social.item2.title")}
              </strong>
              <p className="service-desc">{t("services.social.item2.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.social.item3.title")}
              </strong>
              <p className="service-desc">{t("services.social.item3.text")}</p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.social.item4.title")}
              </strong>
              <p className="service-desc">{t("services.social.item4.text")}</p>
            </li>
          </ul>
        </div>

        {/* Servicio 3 */}
        <div className="service-card">
          <h2>{t("services.frontend.title")}</h2>
          <ul className="service-list">
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.frontend.item1.title")}
              </strong>
              <p className="service-desc">
                {t("services.frontend.item1.text")}
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.frontend.item2.title")}
              </strong>
              <p className="service-desc">
                {t("services.frontend.item2.text")}
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.frontend.item3.title")}
              </strong>
              <p className="service-desc">
                {t("services.frontend.item3.text")}
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" />{" "}
                {t("services.frontend.item4.title")}
              </strong>
              <p className="service-desc">
                {t("services.frontend.item4.text")}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <ScrollArrow targetPath="/work" />
    </section>
  );
}
