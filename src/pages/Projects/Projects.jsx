import React from "react";
import { useTranslation } from "react-i18next";
import dailyPlannerImage from "../../assets/image/planificador.png";
import ScrollArrow from "../../components/ScrollArrow";
import "./projects.css";

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      name: t("projects.dailyPlanner.name"),
      description: t("projects.dailyPlanner.description"),
      image: dailyPlannerImage,
      link: "apptodolistada.netlify.app",
      buttonText: t("projects.dailyPlanner.button"),
    },
  ];

  return (
    <section className="projects">
      <h1>{t("projects.title")}</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card-horizontal">
            <img src={project.image} alt={project.name} />
            <div className="project-info">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <a
                href={`https://${project.link}`}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* Flecha que lleva al inicio */}

      <ScrollArrow targetPath="/" />
    </section>
  );
}
