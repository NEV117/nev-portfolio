import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "./projectDetails.css";
import { UilStopCircle, UilArrowLeft } from "@iconscout/react-unicons";
import { LanguageContext } from "../hooks/LanguageContextProvider";

const ProjectDetails = ({ projects }) => {
  const location = useLocation();
  const title = location.pathname.split("/")[2];
  const projectInfo = getProjectInfo(title);

  const { language } = useContext(LanguageContext);
  function getProjectInfo(name) {
    return projects.find((project) => project.title === name);
  }
  /* useEffect(() => {
    window.scrollTo(0, 40);
  }, []);
 */
  return (
    <div>
      <Navbar />
      <div className="details-wraper">
        <div className="details-img-container">
          <div className="details-img-overlay" />
          <img className="details-img" src={projectInfo.img} alt="/" />
          <div className="overview-container">
            <h2 className="project-title-d">{projectInfo.title}</h2>
            <h3 className="project-subtitle">
              {projectInfo.tecnologies[0]} / {projectInfo.tecnologies[1]} /
              {projectInfo.tecnologies[3]}
            </h3>
          </div>
        </div>
        <div className="details-info-container">
          {language === "eng" ? (
            <div className="left-side">
              <p>
                <strong>Project</strong>
              </p>
              <h2>Overview</h2>
              <p>{projectInfo.descriptionEn}</p>
              <div className="btn-desc-container">
                {projectInfo.code?.map((cod, index) => (
                  <a href={cod} key={index} target="_blank" rel="noreferrer">
                    <button key={index} className="button-4">
                      Code
                    </button>
                  </a>
                ))}

                {projectInfo.demo.map((dem, index) => {
                  if (dem === "") {
                    return null;
                  }
                  return (
                    <a href={dem} key={index} target="_blank" rel="noreferrer">
                      <button key={index} className="button-4">
                        Demo
                      </button>
                    </a>
                  );
                })}
              </div>
              <div>
                <Link to="/#projects">
                  <div className="left-arrow-text">
                    <UilArrowLeft className="left-arrow" />
                    <p className="">Back</p>
                  </div>
                </Link>
              </div>
            </div>
          ) : (
            <div className="left-side">
              <p>
                <strong>Proyecto</strong>
              </p>
              <h2>Descripción</h2>
              <p>{projectInfo.descriptionEsp}</p>
              <div className="btn-desc-container">
                {projectInfo.code?.map((cod, index) => (
                  <a href={cod} target="_blank" rel="noreferrer">
                    <button className="button-4">Código</button>
                  </a>
                ))}

                {projectInfo.demo.map((dem, index) => {
                  if (dem === "") {
                    return null;
                  }
                  return (
                    <a href={dem} target="_blank" rel="noreferrer">
                      <button className="button-4">Demo</button>
                    </a>
                  );
                })}
              </div>
              <div>
                <Link to="/#projects">
                  <div className="left-arrow-text">
                    <UilArrowLeft className="left-arrow" />
                    <p className="">Atrás</p>
                  </div>
                </Link>
              </div>
            </div>
          )}

          <div className="rigth-side">
            <div className="right-info">
              {language === "eng" ? (
                <p className="fancy-title">Technologies</p>
              ) : (
                <p className="fancy-title">Tecnologías</p>
              )}
              <div className="tecnologies-container">
                {projectInfo.tecnologies.map((tech, index) => (
                  <p className="tecth-p" key={index}>
                    <UilStopCircle />
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
