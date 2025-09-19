import React from "react";
import "./about.css";
import foto from "../../assets/image/fotoPorfolio.jpg";
import { useTranslation } from "react-i18next";
import ScrollArrow from "../../components/ScrollArrow";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="About" className="Section_About">
      <div className="About-image">
        <img src={foto} alt="Foto perfil" className="img_About" />
      </div>
      <div className="About-text">
        <h1 className="Title_About">{t("about.title")}</h1>
        <p>{t("about.text1")}</p>
        <p>{t("about.text2")}</p>
      </div>
      <ScrollArrow targetPath="/services" />
    </section>
  );
}
