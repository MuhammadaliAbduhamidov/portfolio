import React from "react";
import Animate from "./Animate";
import Sidebar from "./Sidebar";

function Skills() {
  return (
    <div>
      <Sidebar />
      <div className="wrapper">
        <div></div>
        <div className="skills" id="skill">
          <div className="text">
            <h1>My Skills</h1>
          </div>
          <div className="skill">
            <Animate
              element={
                <div className="skill-text">
                  <h2>My Skills and Experiences</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Laboriosam laborum eaque blanditiis aliquam voluptatem a
                    saepe veritatis maiores quidem possimus obcaecati voluptas,
                    nobis debitis rerum nihil nulla error asperiores, excepturi
                    mollitia ipsam ea unde voluptatibus aspernatur. Placeat quam
                    nobis quibusdam recusandae quidem explicabo
                  </p>
                  <button className="btn"> Read more</button>
                </div>
              }
            />
            <Animate
              element={
                <div class="skill-bars">
                  <div class="bar">
                    <div class="info">
                      {" "}
                      <span>HTML</span>{" "}
                    </div>
                    <div class="progress-line html">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      {" "}
                      <span>CSS/SCSS</span>{" "}
                    </div>
                    <div class="progress-line css">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      {" "}
                      <span>JavaScript</span>{" "}
                    </div>
                    <div class="progress-line JavaScript">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      {" "}
                      <span>React</span>{" "}
                    </div>
                    <div class="progress-line react">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div class="bar">
                    <div class="info">
                      {" "}
                      <span>Git/Github</span>{" "}
                    </div>
                    <div class="progress-line git">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;