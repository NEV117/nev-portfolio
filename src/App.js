import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./pages/ProjectDetails";
import projects from "./projects";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projectDetails/:id"
            element={<ProjectDetails projects={projects} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
