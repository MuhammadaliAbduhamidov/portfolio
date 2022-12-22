import React from "react";
import { NavLink } from "react-router-dom";
import work1 from "./img/work1.jpg";
import work2 from "./img/work2.jpg";

function Work() {
  const works = [
    {
      id: 1,
      img: work1,
      to: "https://mix-info-three.vercel.app/",
    },
    {
      id: 2,
      img: work2,
      to: "https://weather-rosy-iota.vercel.app/",
    },
  ];
  return (
    <div className="wrapper">
      <div></div>
      <div className="works" id="work">
        <div className="text">
          <h1>My Works</h1>
        </div>
        <div className="work">
          {works.map((item) => (
            <div className="work-img">
              <a href={item.to}>
                <img src={item.img} alt="" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
