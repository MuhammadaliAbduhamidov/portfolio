import React from "react";
import aboutimg from "./img/about img.jpg";
import { FiDownload } from "react-icons/fi";
import Animate from "./Animate";

function About() {
  return (
    <div className="wrapper">
      <div></div>
      <div className="about" id="about">
        <div className="text">
          <h1>About Me</h1>
        </div>
        <div className="about-in">
          <Animate
            element={
              <div className="about-img">
                <img src={aboutimg} alt="" />
              </div>
            }
          />
          <Animate
            element={
              <div className="about-text">
                <h2>I'm Muhammadali Abduhamidov</h2>
                <p>
                  My name is Muhammadali, I am a Front-End Web Developer. I
                  studied for 1 year in the state library of Namangan region and
                  now I am not working in the IT center. God willing, I want to
                  reach the senior level in 2 years and I will work hard for it.
                </p>
                <div className="about-item">
                  <ul>
                    <li>
                      Age: <span>21</span>
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
                      Email: <span>abduhamidovmuhammadali81@gmail.com</span>
                    </li>
                    <li>
                      Country: <span>Uzbekistan</span>
                    </li>
                  </ul>
                </div>
                <button className="btn">
                  Download CV <FiDownload />
                </button>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default About;
