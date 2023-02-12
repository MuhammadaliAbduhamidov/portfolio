import React from "react";
import work1 from "./img/work1.jpg";
import work2 from "./img/work2.jpg";
import mahsulot from "./img/mahsulot.jpg";
import youtube from "./img/youtube.jpg";
import { FaGithub } from "react-icons/fa";

function Work() {
  const works = [
    {
      id: 1,
      img: work1,
      text: "This project was built using React",
      to: "https://mix-info-three.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/mix-info",
    },
    {
      id: 2,
      img: work2,
      text: "This project was built using JavaScript",
      to: "https://weather-rosy-iota.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/weather",
    },
    {
      id: 3,
      img: mahsulot,
      text: "This project was built using React",
      to: "https://mahsulot-comni-admin-paneli.netlify.app/mahsulotlar",
      toGithub:
        "https://github.com/MuhammadaliAbduhamidov/masulot-admin-panel-front",
    },
    {
      id: 3,
      img: youtube,
      text: "This project was built using React",
      to: "https://youtube-lime-five.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/youtube",
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
            <div key={item.id} className="work-img">
              <img src={item.img} alt="" />
              <div className="box">
                <h1>{item.text}</h1>
                <a target={"_blank"} href={item.to}>
                  <button>LEARN MORE</button>
                </a>
                <a target={"_blank"} href={item.toGithub}>
                  <div className="box-end">
                    <span>Github code</span>
                    <FaGithub />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
