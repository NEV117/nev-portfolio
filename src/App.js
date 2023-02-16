import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import projects from "./projects";
import { useEffect } from "react";
import { inject } from "@vercel/analytics";

function App() {
  useEffect(() => {
    inject();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projectDetails/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
