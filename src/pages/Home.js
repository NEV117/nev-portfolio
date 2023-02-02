import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    const id = location.hash.slice(1);
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView();
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
