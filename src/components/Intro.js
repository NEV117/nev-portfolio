import React, { useContext } from "react";
import "./intro.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import {
  UilGraduationCap,
  UilUserCheck,
  UilFileDownloadAlt,
  UilFileAlt,
} from "@iconscout/react-unicons";

import pfp from "../assets/img/pfp.jpeg";
import aboutImg from "../assets/img/pfpGit.jpeg";
import enCV from "../assets/cvs/NicolasEscandonEnCV.pdf";
import espCV from "../assets/cvs/NicolasEscandonEspCV.pdf";

import { LanguageContext } from "../hooks/LanguageContextProvider";

const Intro = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div id="home" className="intro">
      <div className="container-info">
        <div className="description">
          {language === "eng" ? (
            <h1 className="title">Hi i'm Nicolas</h1>
          ) : (
            <h1 className="title">Hola soy Nicolas</h1>
          )}
          <img className="img2" src={pfp} alt="/" />
          <div className="text">
            {language === "eng" ? (
              <Typewriter
                options={{
                  strings: [
                    "i'm an engineering student looking for a entry level job at web development.",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: [3000000000000],
                }}
              />
            ) : (
              <Typewriter
                options={{
                  strings: [
                    "Soy un estudiante de ingeniería que busca un trabajo de nivel de entrada en desarrollo web",
                  ],
                  autoStart: true,
                  loop: true,
                  pauseFor: [3000000000000],
                }}
              />
            )}
          </div>

          <div className="icon-list">
            <a
              href="https://www.linkedin.com/in/nicolas-escandon-076031265/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon icon-shadow">
                <FaLinkedinIn color="black" />
              </div>
            </a>
            <a href="/#contact">
              <div className="icon">
                <AiOutlineMail color="black" />
              </div>
            </a>
            <a href="/#about">
              <div className="icon">
                <BsFillPersonLinesFill color="black" />
              </div>
            </a>
            <a
              href="https://github.com/NEV117"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon">
                <FaGithub color="black" />
              </div>
            </a>
          </div>
          {language === "eng" ? (
            <a href="/#about" className="button">
              Know Me
            </a>
          ) : (
            <a href="/#about" className="button">
              Conóceme
            </a>
          )}
        </div>

        <img className="img" src={pfp} alt="/" />
      </div>

      {/*---------------------------about me-------------------------------------------*/}
      <div id="about" className="about-container">
        <div className="about-info">
          <div className="some-columns">
            {language === "eng" ? (
              <div>
                <p className="section-title">About</p>
                <h2 className="subs">
                  Who am I?
                  <span className="intro-icon">
                    <UilUserCheck size={30} />
                  </span>
                </h2>
                <p className="long-text">
                  I am an informatics engineering student currently seeking an
                  entry-level job as a web developer. I am open to both backend
                  and frontend positions, although I have a preference for
                  backend development. I am ambitious and have spent the last
                  year studying complex algorithms.
                </p>
                <div className="downloadButton">
                  <a
                    href={enCV}
                    download
                    className="button-4"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <UilFileDownloadAlt /> Download Cv
                  </a>
                  <div className="hide_on_mobile">
                    <a
                      href={enCV}
                      className="button-4"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <UilFileAlt /> View in browser
                    </a>
                  </div>
                </div>
                <div className="studies-alt">
                  <h2 className="subs">
                    Studies
                    <span className="intro-icon">
                      <UilGraduationCap size={30} />
                    </span>
                  </h2>
                  <p className="long-text">
                    At the moment I am in the sixth semester informatic
                    engineering at the Autonomous University of Occident, I am
                    excited to take the next step in my career and apply the
                    knowledge and skills I have acquired throughout my studies
                    to a professional setting. Through my academical journey I
                    have recognize the following as important, complex and
                    interesting subjects, discrete mathematics, data structures,
                    software engineering, and database classes.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <p className="section-title">Sobre mí</p>
                <h2 className="subs">
                  ​¿Quién soy?
                  <span className="intro-icon">
                    <UilUserCheck size={30} />
                  </span>
                </h2>
                <p className="long-text">
                  Soy estudiante de ingeniería informática, actualmente me
                  ecnuentro buscando un trabajo de nivel de entrada como
                  desarrollador web. Estoy abierto tanto a posiciones de backend
                  como de frontend, pero tengo una preferencia por el desarrollo
                  backend. Soy ambicioso y he pasado el último año estudiando
                  algoritmos complejos.
                </p>
                <div className="downloadButton">
                  <a
                    href={espCV}
                    download
                    className="button-4"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <UilFileDownloadAlt /> Descargar Cv
                  </a>
                  <div className="hide_on_mobile">
                    <a
                      href={espCV}
                      className="button-4 "
                      rel="noreferrer"
                      target="_blank"
                    >
                      <UilFileAlt /> Ver en el navegador
                    </a>
                  </div>
                </div>

                <div className="studies-alt">
                  <h2 className="subs">
                    Estudios
                    <span className="intro-icon">
                      <UilGraduationCap size={30} />
                    </span>
                  </h2>
                  <p className="long-text">
                    Actualmente estoy en el sexto semestre de ingeniería
                    informática en la Universidad Autónoma de Occidente, estoy
                    emocionado de dar el siguiente paso en mi carrera y aplicar
                    los conocimientos junto con las habilidades que he adquirido
                    a lo largo de mis estudios a un entorno profesional. A lo
                    largo de mi trayectoria académica, he reconocido las
                    siguientes materias importantes, complejas e interesantes:
                    matemáticas discretas, estructuras de datos, ingeniería de
                    software y clases de bases de datos.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="about-img">
            <img src={aboutImg} alt="/" />
          </div>
        </div>
      </div>

      {/*---------------------------about studies-------------------------------------------*/}
      <div className="studies-container" id="#about">
        <div className="about-info-text">
          {language === "eng" ? (
            <div className="some-columns">
              <div className="studies-text">
                <div className="studies-ft">
                  <h2 className="subs">
                    Studies
                    <span className="intro-icon">
                      <UilGraduationCap size={30} />
                    </span>
                  </h2>
                  <p className="long-text">
                    Currently, I am in the sixth semester of my Informatics
                    Engineering program at the Autonomous University of
                    Occident. I am excited to take the next step in my career
                    and apply the knowledge and skills I have acquired
                    throughout my studies to a professional setting. Through my
                    academic journey, I have recognized discrete mathematics,
                    data structures, software engineering, and database classes
                    as important, complex, and interesting subjects.
                  </p>
                </div>

                <p className="long-text">
                  In addition to my formal education, I have taken it upon
                  myself to study web development independently. I have taught
                  myself the basics of HTML, CSS, and JavaScript and have
                  progressed to more advanced technologies such as ReactJS,
                  NextJS, and the MERN stack. This self-study has enabled me to
                  start creating projects that I hope to showcase to potential
                  employers.
                </p>
                <p className="long-text">
                  I am especially drawn to the field of web development because
                  of the constantly evolving nature of the industry and the
                  opportunity to work on challenging and dynamic projects. I am
                  particularly interested in backend development and am eager to
                  learn more about server-side technologies and databases.
                </p>
                <p className="long-text">
                  I consider myself ambitious, and I am determined to make the
                  most of this opportunity and grow as a professional. I am
                  confident that with my skills and attitude, I can be a
                  valuable asset to any company, and I hope to hear from you
                  soon.
                </p>
              </div>
            </div>
          ) : (
            <div className="some-columns">
              <div className="studies-text">
                <div className="studies-ft">
                  <h2 className="subs">
                    Estudios
                    <span className="intro-icon">
                      <UilGraduationCap size={30} />
                    </span>
                  </h2>
                  <p className="long-text">
                    Actualmente estoy en el sexto semestre de ingeniería
                    informática en la Universidad Autónoma de Occidente, estoy
                    emocionado de dar el siguiente paso en mi carrera y aplicar
                    los conocimientos junto con las habilidades que he adquirido
                    a lo largo de mis estudios a un entorno profesional. A lo
                    largo de mi trayectoria académica, he reconocido las
                    siguientes materias importantes, complejas e interesantes:
                    matemáticas discretas, estructuras de datos, ingeniería de
                    software y clases de bases de datos.
                  </p>
                </div>
                <p className="long-text">
                  Además de mi educación formal, he tomado la iniciativa de
                  estudiar desarrollo web de manera independiente. Me he
                  enseñado los conceptos básicos de HTML, CSS y JavaScript
                  posteriomente he progresado hacia tecnologías más avanzadas
                  como ReactJS, NextJS y el Stack MERN. Este autoestudio me ha
                  permitido comenzar a crear proyectos que espero presentar a
                  potenciales empleadores.
                </p>
                <p className="long-text">
                  Me siento especialmente atraído por el campo del desarrollo
                  web debido a la naturaleza en constante evolución de la
                  industria ademas de la oportunidad de trabajar en proyectos
                  desafiantes y dinámicos. Me interesa especialmente el
                  desarrollo backend y estoy ansioso por aprender más sobre
                  tecnologías del lado del servidor.
                </p>
                <p className="long-text">
                  Me considero ambicioso y estoy determinado a aprovechar al
                  máximo de cualquier oportunidad que se me presente para crecer
                  como profesional. Confío en que con mis habilidades junto con
                  mi actitud puedo ser un activo valioso para cualquier empresa.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
