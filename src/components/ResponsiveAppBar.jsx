// ResponsiveAppBar.jsx
import { Link } from "react-router-dom";
import React, { useState } from "react";

import "./navbar/Appbar.css";

const ResponsiveAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="app-bar">
      {/* Logo */}
      <div className="logo"></div>

      {/* Botones */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <Link to="/Home">
          <button className="Home">home</button>
        </Link>
        <Link to="/about">
          <button className="About">Sobre mí</button>
        </Link>
        <Link to="/Services">
          <button className="Services">mis servicios</button>
        </Link>
        <Link to="/Work">
          <button className="Work">trabaja conmigo</button>
        </Link>
        <Link to="/Contact">
          <button className="Contact">contacto</button>
        </Link>
      </nav>

      {/* Botón de menú hamburguesa para móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default ResponsiveAppBar;
