import React, { useEffect } from "react";
import CV from "./img/Muhammadali CV.pdf";
import { FiDownload } from "react-icons/fi";
import Animate from "./Animate";
import TagCanvas from "tag-canvas";

function About() {
  const renderTagCloud = () => {
    try {
      TagCanvas.Start("myCanvas", "tags", {
        textColour: "#682330",
        outlineColour: "#682330",
        reverse: false,
        wheelZoom: false,
        depth: 0.8,
        maxSpeed: 0.08,
      });
    } catch (e) {
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  };

  useEffect(() => {
    renderTagCloud();
  }, []);

  const renderTagCloud2 = () => {
    try {
      TagCanvas.Start("myCanvas2", "tags", {
        textColour: "#682330",
        outlineColour: "#682330",
        reverse: false,
        wheelZoom: false,
        depth: 0.8,
        maxSpeed: 0.08,
      });
    } catch (e) {
      document.getElementById("myCanvasContainer").style.display = "none";
    }
  };

  useEffect(() => {
    renderTagCloud2();
  }, []);
  return (
    <div className="wrapper">
      <div></div>
      <div className="about" id="about">
        <div className="text">
          <h1>
            <div className="rubber__flex">
              <div className="rubberBand">A</div>
              <div className="rubberBand">b</div>
              <div className="rubberBand">o</div>
              <div className="rubberBand">u</div>
              <div className="rubberBand">t</div>
            </div>
            <div className="rubber__flex">
              <div className="rubberBand">m</div>
              <div className="rubberBand">e</div>
            </div>
          </h1>
        </div>
        <div className="about-in">
          <Animate
            element={
              <div className="about-text">
                <h2>I'm Muhammadali</h2>
                <p>
                  My name is Muhammadali, I am a Front-End Web Developer. I
                  studied for 1 year in the state library of Namangan region and
                  now I am not working in the IT center. God willing, I want to
                  reach the senior level in 2 years and I will work hard for it.
                </p>
                <div className="about-item">
                  <ul>
                    <li>
                      Age: <span>22</span>
                    </li>
                    <li>
                      Gender: <span>Male</span>
                    </li>
                    <li>
                      Language: <span>Uzbek, English</span>
                    </li>
                    <li>
                      Work: <span>Front-End Developer</span>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      Freelance: <span>Available</span>
                    </li>
                    <li>
                      Phone: <span>+998 93 258 30 55</span>
                    </li>

                    <li>
                      Country: <span>Uzbekistan</span>
                    </li>
                  </ul>
                </div>
                <ul>
                  <li>
                    Email: <span>muhammadaliabduhamidov01@gmail.com</span>
                  </li>
                </ul>
                <a href={CV} download>
                  <button className="btn">
                    Download CV <FiDownload />
                  </button>
                </a>
              </div>
            }
          />
          <Animate
            element={
              <div>
                <div id="myCanvasContainer">
                  <canvas
                    width="500"
                    height="500"
                    id="myCanvas"
                    className="myCanvasDesktop"
                  ></canvas>
                  <canvas
                    height="300"
                    id="myCanvas2"
                    className="myCanvasMobile"
                  ></canvas>
                </div>
                <div id="tags">
                  <ul>
                    <li>
                      <a href="/">HTML</a>
                    </li>
                    <li>
                      <a href="/">CSS</a>
                    </li>
                    <li>
                      <a href="/">Bootsrap</a>
                    </li>
                    <li>
                      <a href="/">Javascript</a>
                    </li>

                    <li>
                      <a href="/">React</a>
                    </li>

                    <li>
                      <a href="/">Sass</a>
                    </li>

                    <li>
                      <a href="/">Material UI</a>
                    </li>
                    <li>
                      <a href="/">Git</a>
                    </li>

                    <li>
                      <a href="/">React-icons</a>
                    </li>

                    <li>
                      <a href="/">Github</a>
                    </li>
                    <li>
                      <a href="/">HTML</a>
                    </li>
                    <li>
                      <a href="/">CSS</a>
                    </li>
                    <li>
                      <a href="/">Bootsrap</a>
                    </li>
                    <li>
                      <a href="/">Javascript</a>
                    </li>

                    <li>
                      <a href="/">React</a>
                    </li>

                    <li>
                      <a href="/">Material UI</a>
                    </li>
                    <li>
                      <a href="/">Git</a>
                    </li>

                    <li>
                      <a href="/">React-icons</a>
                    </li>

                    <li>
                      <a href="/">Github</a>
                    </li>
                    <li>
                      <a href="/">JSON</a>
                    </li>

                    <li>
                      <a href="/">SCSS</a>
                    </li>
                  </ul>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
