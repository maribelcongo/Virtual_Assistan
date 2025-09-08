import React from "react";
import "./contact.css";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-card">
        <h1 className="contact-name">Maribel Congo</h1>
        <p className="contact-role">
          Asistente Virtual & Desarrolladora Front-End
        </p>

        <p className="contact-text">
          Mi objetivo es ayudarte a optimizar tu tiempo, mejorar tu
          productividad y aportar soluciones digitales que hagan crecer tu
          negocio.
        </p>

        <h2 className="contact-title">Contáctame</h2>

        <div className="contact-info">
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <a
              href="mailto:maribel@example.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              maribel@example.com
            </a>
          </div>

          <div className="contact-item">
            <FaWhatsapp className="contact-icon" />
            <a
              href="https://wa.me/549123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              +54 9 123 456 789
            </a>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/maribelcongo"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/maribelcongo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
