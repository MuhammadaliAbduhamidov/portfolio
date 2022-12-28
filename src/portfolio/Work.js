import React from "react";
import work1 from "./img/work1.jpg";
import work2 from "./img/work1.jpg";
import mahsulot from "./img/mahsulot.jpg";

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
    {
      id: 3,
      img: mahsulot,
      to: "https://mahsulot-comni-admin-paneli.netlify.app/mahsulotlar",
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
