import React, { useContext } from "react";
import "./skills.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import js from "../assets/skills/javascript.png";
import reactJS from "../assets/skills/react.png";
import NextJS from "../assets/skills/nextjs.png";
import tailwind from "../assets/skills/tailwind.png";
import nodejs from "../assets/skills/node.png";
import mongo from "../assets/skills/mongo.png";
import express from "../assets/skills/express.png";
import sql from "../assets/skills/sql.png";
import oracle from "../assets/skills/oracle.png";
import plsql from "../assets/skills/PLSQL.jpg";
import sqlserver from "../assets/skills/sqlServer.png";
import mySQL from "../assets/skills/mySQL.png"; /* 
import datascience from "../assets/skills/datascience.png"; */
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.png";
import Csharp from "../assets/skills/cSharp.png";

import { LanguageContext } from "../hooks/LanguageContextProvider";

import {
  UilBracketsCurly,
  UilServers,
  UilBrain,
} from "@iconscout/react-unicons";

const Skills = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="skills" className="skills-container">
      {language === "eng" ? (
        <div className="skills-info">
          <p className="section-title">Skills</p>
          <p className="long-text">A short display of my skills.</p>
        </div>
      ) : (
        <div className="skills-info">
          <p className="section-title">Habilidades</p>
          <p className="long-text">Una breve muestra de mis habilidades.</p>
        </div>
      )}

      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            className="accordion-container"
          >
            <Typography className="category">
              {language === "eng" ? (
                <strong>Frontend Skills</strong>
              ) : (
                <strong>Frontend</strong>
              )}
              <span className="intro-icon">
                <UilBracketsCurly size={25} />
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="skills-columns  ">
              <div className="skills-info-container">
                <div className="skills-info-columns ">
                  <div className="skill-img">
                    <img src={html} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Html</h3>
                  </div>
                </div>
              </div>
              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={css} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Css</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={js} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>javascript</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={reactJS} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>ReactJs</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={NextJS} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>NextJs</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img
                      src={tailwind}
                      width="64px"
                      height="64px"
                      alt="/"
                    ></img>
                  </div>
                  <div className="skill-text">
                    <h3>Tailwind</h3>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="category">
              {language === "eng" ? (
                <strong>Backend skills</strong>
              ) : (
                <strong>Backend</strong>
              )}
              <span className="intro-icon">
                <UilServers size={25} />
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="skills-columns  ">
              <div className="skills-info-container">
                <div className="skills-info-columns ">
                  <div className="skill-img">
                    <img src={nodejs} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Node js</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={express} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Express</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={sql} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>SQL</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={mongo} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Mongo DB</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={oracle} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Oracle</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={plsql} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>pl/sql</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={mySQL} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>MySQL</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img
                      src={sqlserver}
                      width="64px"
                      height="64px"
                      alt="/"
                    ></img>
                  </div>
                  <div className="skill-text">
                    <h3>SQLServer</h3>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="category">
              {language === "eng" ? (
                <strong>Other Skills</strong>
              ) : (
                <strong>Otras Habilidades</strong>
              )}
              <span className="intro-icon">
                <UilBrain size={25} />
              </span>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="skills-columns  ">
              <div className="skills-info-container">
                <div className="skills-info-columns ">
                  <div className="skill-img">
                    <img src={java} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Java</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={python} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>Python</h3>
                  </div>
                </div>
              </div>

              <div className="skills-info-container">
                <div className="skills-info-columns">
                  <div className="skill-img">
                    <img src={Csharp} width="64px" height="64px" alt="/"></img>
                  </div>
                  <div className="skill-text">
                    <h3>C#</h3>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Skills;
