// ResponsiveAppBar.jsx
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
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      {/* Botones */}
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <button>home</button>
        <button>Sobre mí</button>
        <button>Servicios</button>
        <button>trabaja conmigo</button>
        <button>Contacto</button>
      </nav>

      {/* Botón de menú hamburguesa para móvil */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default ResponsiveAppBar;
