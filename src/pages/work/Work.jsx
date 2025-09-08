import React from "react";
import "./work.css";
import { FaCheckCircle } from "react-icons/fa"; // ícono de confianza

export default function Work() {
  return (
    <section className="work-section">
      <h1 className="work-title">Por qué trabajar conmigo</h1>
      <p className="work-subtitle">
        Soy Maribel, Asistente Virtual y Desarrolladora Front-End, comprometida
        en aportar soluciones que hagan crecer tu negocio. Siempre me mantengo
        en constante aprendizaje, adquiriendo nuevas herramientas para brindarte
        un servicio de la mejor calidad.
      </p>

      <div className="work-grid">
        <div className="work-card">
          <h2>
            <FaCheckCircle className="work-icon" /> Responsabilidad
          </h2>
          <p>
            Cumplo los plazos y entrego trabajo de calidad, garantizando
            resultados confiables.
          </p>
        </div>

        <div className="work-card">
          <h2>
            <FaCheckCircle className="work-icon" /> Atención al detalle
          </h2>
          <p>
            Cuido cada detalle para que tu proyecto quede perfecto, sin errores
            ni descuidos.
          </p>
        </div>

        <div className="work-card">
          <h2>
            <FaCheckCircle className="work-icon" /> Comunicación clara
          </h2>
          <p>
            Mantengo un contacto constante y explico todo de manera simple y
            efectiva.
          </p>
        </div>

        <div className="work-card">
          <h2>
            <FaCheckCircle className="work-icon" /> Compromiso
          </h2>
          <p>
            Me involucro en tu proyecto como si fuera mío, buscando siempre los
            mejores resultados.
          </p>
        </div>
      </div>
    </section>
  );
}
