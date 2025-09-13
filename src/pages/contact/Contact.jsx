// import React from "react";
// import "./contact.css";
// import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
// import { useTranslation } from "react-i18next";

// export default function Contact() {
//   const { t } = useTranslation();

//   return (
//     <section className="contact-section">
//       <div className="contact-card">
//         <h1 className="contact-name">{t("contact.name")}</h1>
//         <p className="contact-role">{t("contact.role")}</p>

//         <p className="contact-text">{t("contact.text")}</p>

//         <h2 className="contact-title">{t("contact.title")}</h2>

//         <div className="contact-info">
//           <div className="contact-item">
//             <FaEnvelope className="contact-icon" />
//             <a
//               href="mailto:maribel@example.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               maribel@example.com
//             </a>
//           </div>

//           <div className="contact-item">
//             <FaWhatsapp className="contact-icon" />
//             <a
//               href="https://wa.me/549123456789"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               +54 9 123 456 789
//             </a>
//           </div>

//           <div className="contact-item">
//             <FaLinkedin className="contact-icon" />
//             <a
//               href="https://www.linkedin.com/in/maribelcongo"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               linkedin.com/in/maribelcongo
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";
import "./contact.css";
import { FaEnvelope, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import oficina from "../../assets/image/img_oficina.jpg";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section">
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
              href="mailto:congoangulomaribel@gmail.com"
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
          </form>
        </div>
      </div>
    </section>
  );
}
