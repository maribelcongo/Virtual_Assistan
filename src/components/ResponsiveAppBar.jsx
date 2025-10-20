import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./navbar/AppBar.css";

const ResponsiveAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLangMenu = () => setLangOpen(!langOpen);

  // 👇 Función que cierra menú y opcionalmente cambia idioma
  const handleClick = (lang = null) => {
    setMenuOpen(false); // cierra menú
    setLangOpen(false); // cierra mini menú de idiomas
    if (lang) i18n.changeLanguage(lang);
  };

  // Array de links para mapear y evitar repetir código
  const navLinks = [
    { path: "/Home", label: t("navbar.home") },
    { path: "/About", label: t("navbar.about") },
    { path: "/Services", label: t("navbar.services") },
    { path: "/Work", label: t("navbar.work") },
    { path: "/projects", label: t("navbar.projects") },
    { path: "/Contact", label: t("navbar.contact") },
  ];

  return (
    <header className="app-bar">
      {/* Navegación */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link key={link.path} to={link.path}>
            <button onClick={() => handleClick()}>{link.label}</button>
          </Link>
        ))}

        {/* Mini menú de idiomas */}
        <div className="language-dropdown">
          <button className="lang-icon" onClick={toggleLangMenu}>
            🌐
          </button>
          {langOpen && (
            <div className="lang-menu">
              <button onClick={() => handleClick("es")}>🇪🇸</button>
              <button onClick={() => handleClick("en")}>🇺🇸</button>
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
