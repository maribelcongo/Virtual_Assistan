import React from "react";
import "./about.css";
import foto from "../../assets/image/foto.jpg";

export default function About() {
  return (
    <section className="Section_About">
      <div className="About-image">
        <img src={foto} alt="FOTO PERFIL" className="img_About" />
      </div>
      <div className="About-text">
        <h1 className="Title_About">Hola</h1>
        <p className="Text1">
          Soy Asistente Virtual con experiencia en soporte administrativo y
          atención al cliente de manera remota. Mi objetivo es ayudar a personas
          y empresas a optimizar su tiempo y aumentar su productividad mediante
          la delegación de tareas administrativas y la automatización de
          proyectos.
        </p>{" "}
        <p>
          {" "}
          Me especializo en organizar procesos, gestionar comunicaciones y
          mantener todo en orden para que mis clientes puedan enfocarse en hacer
          crecer su negocio. Cada proyecto es una oportunidad para aportar
          eficiencia, claridad y confianza, convirtiéndome en un apoyo
          estratégico que se adapta a las necesidades de cada emprendedor o
          empresa.
        </p>
      </div>
    </section>
  );
}
