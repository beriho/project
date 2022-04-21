import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/About/AboutUs";
import Articles from "./components/Articles/Articles";
import SingleArticle from "./components/Articles/SingleArticle";
import Contact from "./components/Contact/Contact";
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
          <Route exact path="/articles" element={<Articles />} />
          <Route exact path="/singlearticle" element={<SingleArticle />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
