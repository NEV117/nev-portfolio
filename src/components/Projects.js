import React, { useContext } from "react";
import ProjectItem from "./ProjectItem";
import "./projects.css";
import projects from "../projects";
import { LanguageContext } from "../hooks/LanguageContextProvider";
const Projects = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="projects" className="skills-container">
      <div className="skills-info">
        {language === "eng" ? (
          <div>
            <p className="section-title">Projects</p>
            <p className="long-text">
              Here are some projects that have help me leaern diferents
              tecologies
            </p>
          </div>
        ) : (
          <div>
            <p className="section-title">Proyectos</p>
            <p className="long-text">
              Aquí hay algunos proyectos que me han ayudado a aprender
              diferentes tecnologías
            </p>
          </div>
        )}

        <div className="projects__container">
          {projects.map((project, index) => (
            <div key={index}>
              <ProjectItem
                key={index}
                title={project.title}
                backgroundImg={project.img}
                projectUrl={project.code}
                tech={project.tecnologies[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
