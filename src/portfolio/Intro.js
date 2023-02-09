import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Typewriter from "typewriter-effect";

function Intro() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <div className="wrapper">
      {scroll ? (
        <div className="scroltop" onClick={scrollUp}>
          <FaArrowUp />
        </div>
      ) : null}
      <div></div>
      <div className="intro" id="home">
        <h3>Hi There...</h3>
        <div className="rubber__flex">
          <div className="rubberBand">I</div>
          <div className="rubberBand">'</div>
          <div className="rubberBand">a</div>
          <div className="rubberBand">m</div>
        </div>
        <div className="rubber__flex">
          <div className="rubberBand">M</div>
          <div className="rubberBand">u</div>
          <div className="rubberBand">h</div>
          <div className="rubberBand">a</div>
          <div className="rubberBand">m</div>
          <div className="rubberBand">m</div>
          <div className="rubberBand">a</div>
          <div className="rubberBand">d</div>
          <div className="rubberBand">a</div>
          <div className="rubberBand">l</div>
          <div className="rubberBand">i</div>
        </div>
        <h2>
          <Typewriter
            options={{
              strings: [" Front-End Developer", "Math Teacher"],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus
          officiis libero quas architecto asperiores tenetur eum dolores
          pariatur similique beatae laborum quod maxime eius nostrum id, dicta
          facilis et.
        </p>
        <a href="#about">
          <button className="btn">About me</button>
        </a>
      </div>
    </div>
  );
}

export default Intro;
