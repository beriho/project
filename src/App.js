import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import SingleProject from "./components/Projects/SingleProject";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/project" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/singleproject" element={<SingleProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
