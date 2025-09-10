import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./navbar/Appbar.css";

const ResponsiveAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false); // estado para el mini menú de idiomas
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLangMenu = () => setLangOpen(!langOpen);
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setLangOpen(false); // cierra el mini menú al seleccionar
  };

  return (
    <header className="app-bar">
      {/* Logo */}
      <div className="logo">
        <h2>MiPortafolio</h2>
      </div>

      {/* Navegación */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/Home">
          <button>{t("navbar.home")}</button>
        </Link>
        <Link to="/About">
          <button>{t("navbar.about")}</button>
        </Link>
        <Link to="/Services">
          <button>{t("navbar.services")}</button>
        </Link>
        <Link to="/Work">
          <button>{t("navbar.work")}</button>
        </Link>
        <Link to="/Contact">
          <button>{t("navbar.contact")}</button>
        </Link>

        {/* Mini menú de idiomas */}
        <div className="language-dropdown">
          <button className="lang-icon" onClick={toggleLangMenu}>
            🌐
          </button>
          {langOpen && (
            <div className="lang-menu">
              <button onClick={() => changeLanguage("es")}>🇪🇸</button>
              <button onClick={() => changeLanguage("en")}>🇺🇸</button>
            </div>
          )}
        </div>
      </nav>

      {/* Menú hamburguesa para móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default ResponsiveAppBar;
