import React, { useContext } from "react";
import "./intro.css";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import { UilGraduationCap, UilUserCheck } from "@iconscout/react-unicons";
import studies from "../assets/img/studies.png";
import pfp from "../assets/img/pfp.jpeg";
import mmm from "../assets/img/sera.jpg";

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
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
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
                  Who im i
                  <span className="intro-icon">
                    <UilUserCheck size={30} />
                  </span>
                </h2>
                <p className="long-text">
                  I'm a informatic engineering student, currently seeking an
                  entry-level job as a web developer. I am open to both backend
                  and frontend positions, but I have a preference for backend
                  development. I am ambitious and have spent the last year
                  studying complex algorithms.
                </p>
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
                  "Soy estudiante de ingeniería informática, actualmente me
                  ecnuentro buscando un trabajo de nivel de entrada como
                  desarrollador web. Estoy abierto tanto a posiciones de backend
                  como de frontend, pero tengo una preferencia por el desarrollo
                  backend. Soy ambicioso y he pasado el último año estudiando
                  algoritmos complejos."
                </p>
              </div>
            )}
          </div>
          <div className="about-img">
            <img
              src={
                "https://pandorafms.com/blog/wp-content/uploads/2018/05/what-is-an-algorithm-featured.png"
              }
              alt="/"
            />
          </div>
        </div>
      </div>

      {/*---------------------------about studies-------------------------------------------*/}
      <div className="studies-container" id="#about">
        <div className="about-info">
          <div className="studies-img">
            <img src={mmm} alt="/" />
          </div>
          {language === "eng" ? (
            <div className="some-columns">
              <div className="studies-text">
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
                  knowledge and skills I have acquired throughout my studies to
                  a professional setting. Through my academical journey I have
                  recognize the following as important, complex and interesting
                  subjects, discrete mathematics, data structures, software
                  engineering, and database classes.
                </p>
                <p className="long-text">
                  In addition to my formal education, I have taken it upon
                  myself to study web development independently. I have taught
                  myself the basics of HTML, CSS, and JavaScript and have
                  progressed to more advanced technologies such as ReactJS,
                  NextJS, and the MERN stack. This self-study has allowed me to
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
                  I consider myself ambitious and I am determined to make the
                  most of this opportunity and grow as a professional. I am
                  confident that with my skills and attitude I can be a valuable
                  asset to any company and I hope to hear from you soon.
                </p>
              </div>
            </div>
          ) : (
            <div className="some-columns">
              <div className="studies-text">
                <h2 className="subs">
                  Estudios
                  <span className="intro-icon">
                    <UilGraduationCap size={30} />
                  </span>
                </h2>
                <p className="long-text">
                  Como estudiante de sexto semestre de Ingeniería Informática en
                  la Universidad Autónoma del Occidente, estoy emocionado de dar
                  el siguiente paso en mi carrera y aplicar los conocimientos y
                  habilidades que he adquirido a lo largo de mis estudios a un
                  entorno profesional. Mi pasión por la tecnología me ha
                  impulsado a destacar en mi trabajo escolar, especialmente en
                  materias como programación orientada a objetos, matemáticas
                  discretas, estructuras de datos, ingeniería de software y
                  clases de base de datos.
                </p>
                <p className="long-text">
                  Además de mi educación formal, he tomado la iniciativa de
                  estudiar desarrollo web de manera independiente. Me he
                  enseñado los conceptos básicos de HTML, CSS y JavaScript y he
                  progresado hacia tecnologías más avanzadas como ReactJS,
                  NextJS y el Stack MERN. Este autoestudio me ha permitido
                  comenzar a crear proyectos que espero presentar a potenciales
                  empleadores.
                </p>
                <p className="long-text">
                  Me siento especialmente atraído por el campo del desarrollo
                  web debido a la naturaleza en constante evolución de la
                  industria y la oportunidad de trabajar en proyectos
                  desafiantes y dinámicos. Me interesa especialmente el
                  desarrollo backend y estoy ansioso por aprender más sobre
                  tecnologías del lado del servidor y bases de datos.
                </p>
                <p className="long-text">
                  Me considero ambicioso y estoy determinado a aprovechar al
                  máximo esta oportunidad y crecer como profesional. Confío en
                  que con mis habilidades y actitud puedo ser un activo valioso
                  para cualquier empresa y espero oír de usted pronto.
                </p>
              </div>
            </div>
          )}

          <div className="studies-img2">
            <img src={studies} alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
