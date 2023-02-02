import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { LanguageContext } from "../hooks/LanguageContextProvider";
import "./projectitem.css";
const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const [redirect, setRedirect] = useState(false);
  const { language } = useContext(LanguageContext);

  const handleClick = () => {
    setRedirect(true);
  };
  return (
    <div className="item-container-wrap">
      <div className="item-container" onClick={handleClick}>
        <img className="item-img" src={backgroundImg} alt="/"></img>
        <div className="project-content hidden-info">
          <div className="another-one">
            <h3 className="project-title">{title}</h3>
            <p className="project-desc">{tech}</p>

            <div onClick={handleClick}>
              {language === "eng" ? (
                <p className="project-link">More</p>
              ) : (
                <p className="project-link">Más </p>
              )}
              {redirect && (
                <Navigate to={{ pathname: `/projectDetails/${title}` }} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
