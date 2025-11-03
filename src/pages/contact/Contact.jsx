import React from "react";
import "./contact.css";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import oficina from "../../assets/image/img_oficina.jpg";
import ScrollArrow from "../../components/ScrollArrow";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-card">
        {/* Columna izquierda (Imagen) */}
        <div className="contact-image">
          <img src={oficina} alt="Foto perfil" className="img_contact" />
        </div>

        {/* Columna derecha (Formulario / Links) */}
        <div className="contact-form">
          <h2 className="contact-title">{t("contact.title")}</h2>
          <p className="contact-text">{t("contact.text")}</p>

          <form className="form-links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=congoangulomaribel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaEnvelope /> Email
            </a>

            <a
              href="https://wa.me/542234267083"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaWhatsapp /> WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/maribelcongo"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a href="/maribel congo V_A.pdf" download className="contact-btn">
              📄 Download CV
            </a>
          </form>
        </div>
      </div>

      {/* Flecha que lleva al inicio */}
      <ScrollArrow targetPath="/" />
    </section>
  );
}
