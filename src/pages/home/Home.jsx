import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/image/logo1.png";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <section className="section home">
        <div className="home-image">
          <img src={logo} alt="logo" />
        </div>

        <div className="home-text">
          <h1 className="title_Name">Maribel Congo</h1>
          <p className="text">{t("home.role")}</p>
          <p className="subtitle">{t("home.summary")}</p>
          <div className="home-buttons">
            <Link to="/about" className="btn-primary">
              {t("home.button")}
            </Link>
          </div>
        </div>
      </section>

      {/* Botón de descarga CV */}
      <a href="/maribel congo V_A.pdf" download className="cv-btn-fixed">
        📄 Download CV
      </a>
    </>
  );
}
