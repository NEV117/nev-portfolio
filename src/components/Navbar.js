import React, { useContext, useEffect, useState } from "react";
import "./navbar.css";
import {
  UilEstate,
  UilUser,
  UilFileInfoAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";
import Typewriter from "typewriter-effect";
import { LanguageContext } from "../hooks/LanguageContextProvider";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [shadow, setShadow] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <header className={shadow ? `scroll-shadow header` : "header"} id="header">
      <nav className="nav container">
        <a href="/#home" className="nav__logo">
          <Typewriter
            options={{
              strings: ["NEV"],
              autoStart: true,
              loop: true,
              pauseFor: [30000],
            }}
          />
        </a>

        <div
          className={`nav__menu ${menuOpen ? "show-menu" : ""}`}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <div>
                <a href="/#home" className="nav__link" onClick={toggleMenu}>
                  <UilEstate className="nav__icon" />
                  {language === "eng" ? <p>Home</p> : <p>Inicio</p>}
                </a>
              </div>
            </li>
            <li className="nav__item">
              <a href="/#about" className="nav__link" onClick={toggleMenu}>
                <UilUser className="nav__icon" />{" "}
                {language === "eng" ? <p>About</p> : <p>Sobre mí</p>}
              </a>
            </li>
            <li className="nav__item">
              <a href="/#skills" className="nav__link" onClick={toggleMenu}>
                <UilFileInfoAlt className="nav__icon" />
                {language === "eng" ? <p>Skills</p> : <p>Habilidades</p>}
              </a>
            </li>
            <li className="nav__item">
              <a href="/#projects" className="nav__link" onClick={toggleMenu}>
                <UilScenery className="nav__icon" />
                {language === "eng" ? <p>Projects</p> : <p>Proyectos</p>}
              </a>
            </li>
            <li className="nav__item">
              <a href="/#contact" className="nav__link" onClick={toggleMenu}>
                <UilMessage className="nav__icon" />
                {language === "eng" ? <p>Contact</p> : <p>Contacto</p>}
              </a>
            </li>
          </ul>
          <UilTimes
            className=" nav__close"
            id="nav-close"
            onClick={toggleMenu}
          />
        </div>
        <div className="nav__btns">
          {/* Languaje change button */}
          <div>
            {language === "eng" ? (
              <button className="button-4" onClick={() => setLanguage("esp")}>
                ENG
              </button>
            ) : (
              <button className="button-4 " onClick={() => setLanguage("eng")}>
                ESP
              </button>
            )}
          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <UilApps size={20} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
