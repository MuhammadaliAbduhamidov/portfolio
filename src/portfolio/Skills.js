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
            <h1>
              <div className="rubber__flex">
                <div className="rubberBand">M</div>
                <div className="rubberBand">y</div>
              </div>
              <div className="rubber__flex">
                <div className="rubberBand">S</div>
                <div className="rubberBand">k</div>
                <div className="rubberBand">i</div>
                <div className="rubberBand">l</div>
                <div className="rubberBand">l</div>
                <div className="rubberBand">s</div>
              </div>
            </h1>
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
                <div className="skill-bars">
                  <div className="bar">
                    <div className="info">
                      {" "}
                      <span>HTML</span>{" "}
                    </div>
                    <div className="progress-line html">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      {" "}
                      <span>CSS/SCSS</span>{" "}
                    </div>
                    <div className="progress-line css">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      {" "}
                      <span>JavaScript</span>{" "}
                    </div>
                    <div className="progress-line JavaScript">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      {" "}
                      <span>React</span>{" "}
                    </div>
                    <div className="progress-line react">
                      {" "}
                      <span></span>{" "}
                    </div>
                  </div>
                  <div className="bar">
                    <div className="info">
                      {" "}
                      <span>Git/Github</span>{" "}
                    </div>
                    <div className="progress-line git">
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
