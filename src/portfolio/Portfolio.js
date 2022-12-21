import React from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import "./style.css";
import Work from "./Work";

function Portfolio() {
  return (
    <div>
      <Sidebar />
      <Intro />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Portfolio;
