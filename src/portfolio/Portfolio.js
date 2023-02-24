import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Intro from "./Intro";
import Loader from "./Loader";
import Sidebar from "./Sidebar";
import Skills from "./Skills";
import "./style.css";
import Work from "./Work";

function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <div>
      {isLoading ? <Loader /> : ""}
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
