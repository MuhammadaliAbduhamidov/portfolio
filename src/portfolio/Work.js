import React from "react";
import workOne from "./img/workOne.jpg";

function Work() {
  return (
    <div className="wrapper">
      <div></div>
      <div className="works" id="work">
        <div className="text">
          <h1>My Works</h1>
        </div>
        <div className="work">
          <div className="work-img">
            <a href="#">
              <img src={workOne} alt="" />
            </a>
          </div>
          <div className="work-img">
            <img src={workOne} alt="" />
          </div>
          <div className="work-img">
            <img src={workOne} alt="" />
          </div>
          <div className="work-img">
            <img src={workOne} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
