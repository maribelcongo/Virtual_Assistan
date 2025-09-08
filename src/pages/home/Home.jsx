// // src/components/Home.jsx
// import React from "react";
// import "./home.css";
// import { Link } from "react-router-dom";
// import logo from "../../assets/image/logo.png";

// export default function Home() {
//   return (
//     <section className="section home">
//       <div className="home-image">
//         <img src={logo} alt="logo" />
//       </div>
//       <div className="home-text">
//         <h1 className="title_Name">Maribel Congo</h1>

//         <p className="text"> ASISTENTE VIRTUAL</p>
//       </div>
//     </section>
//   );
// }
// src/components/Home.jsx
import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import logo from "../../assets/image/logo1.png";

export default function Home() {
  return (
    <section className="section home">
      <div className="home-image">
        <img src={logo} alt="logo" />
      </div>
      <div className="home-text">
        <h1 className="title_Name">Maribel Congo</h1>
        <p className="text">ASISTENTE VIRTUAL</p>

        {/* Mini resumen */}
        <p className="subtitle">
          Ayudo a emprendedores y empresas a liberar su carga de trabajo
          gestionando tareas administrativas y atención al cliente de manera
          remota, para que puedan enfocarse en hacer crecer su negocio.
        </p>

        {/* Botón que lleva al About */}
        <div className="home-buttons">
          <Link to="/about" className="btn-primary">
            Conóceme más
          </Link>
        </div>
      </div>
    </section>
  );
}
