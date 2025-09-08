import React from "react";
import "./services.css";
import { FaCheckCircle } from "react-icons/fa"; // ícono de check

export default function Services() {
  return (
    <section className="services-section">
      <h1 className="services-title">Servicios</h1>
      <p className="services-subtitle">
        Estos son los servicios que ofrezco como Asistente Virtual y
        Desarrolladora Front-End, diseñados para ayudarte a ahorrar tiempo y
        crecer tu negocio.
      </p>

      <div className="services-grid">
        {/* Servicio 1: Asistencia Virtual */}
        <div className="service-card">
          <h2>Asistencia Virtual</h2>
          <ul className="service-list">
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Gestión de correos
                electrónicos
              </strong>
              <p className="service-desc">
                Organización de bandejas de entrada, respuesta de correos
                electrónicos, programación de citas y recordatorios.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Administración de
                agenda
              </strong>
              <p className="service-desc">
                Gestión de horarios, programación de reuniones, coordinación de
                viajes y reservas, y envío de recordatorios de citas.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Coordinación de
                tareas en Trello / Notion
              </strong>
              <p className="service-desc">
                Supervisión y organización de tus proyectos para que todo fluya
                sin contratiempos.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Investigación y
                recopilación de datos
              </strong>
              <p className="service-desc">
                Búsqueda de información en línea, recopilación de datos y
                elaboración de informes claros y útiles.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Atención al cliente
              </strong>
              <p className="service-desc">
                Respuesta a consultas por correo electrónico, chat en vivo o
                teléfono, seguimiento de reclamos y resolución de problemas.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Soporte
                administrativo
              </strong>
              <p className="service-desc">
                Creación y edición de documentos, preparación de presentaciones
                y transcripción de archivos.
              </p>
            </li>
          </ul>
        </div>

        {/* Servicio 2: Gestión de Redes Sociales */}
        <div className="service-card">
          <h2>Gestión de Redes Sociales</h2>
          <p>
            Mantengo tu presencia online activa y profesional, aumentando la
            conexión con tus clientes.
          </p>
          <ul className="service-list">
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Diseño y edición de
                contenido visual
              </strong>
              <p className="service-desc">
                Creación de publicaciones atractivas en Canva, adaptadas a tu
                marca.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Programación de
                publicaciones
              </strong>
              <p className="service-desc">
                Organización de un calendario editorial y publicación automática
                en redes.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Seguimiento de
                mensajes y comunidad
              </strong>
              <p className="service-desc">
                Respuesta a comentarios y mensajes, fomentando la interacción
                con tu audiencia.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Análisis de métricas
                y rendimiento
              </strong>
              <p className="service-desc">
                Monitoreo de resultados para optimizar estrategias y mejorar
                alcance.
              </p>
            </li>
          </ul>
        </div>

        {/* Servicio 3: Desarrollo Front-End */}
        <div className="service-card">
          <h2>Desarrollo Front-End</h2>
          <p>
            Creo sitios web y landing pages modernas, funcionales y adaptadas a
            todos los dispositivos.
          </p>
          <ul className="service-list">
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Desarrollo con HTML,
                CSS, JavaScript y React
              </strong>
              <p className="service-desc">
                Construcción de páginas web dinámicas y atractivas visualmente.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Integración con
                Firebase y optimización de rendimiento
              </strong>
              <p className="service-desc">
                Conexión con bases de datos y mejora de velocidad y eficiencia
                del sitio.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Diseño responsive y
                moderno
              </strong>
              <p className="service-desc">
                Adaptación perfecta a móviles, tablets y escritorio con estética
                profesional.
              </p>
            </li>
            <li>
              <strong>
                <FaCheckCircle className="service-icon" /> Experiencia de
                usuario enfocada en conversión
              </strong>
              <p className="service-desc">
                Estructura y navegación intuitiva para aumentar la interacción y
                resultados.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
