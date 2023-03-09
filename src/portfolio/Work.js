import React from "react";
import nike from "./img/nike.jpg";
import work1 from "./img/work1.jpg";
import work2 from "./img/work2.jpg";
import mahsulot from "./img/mahsulot.jpg";
import youtube from "./img/youtube.jpg";
import nuran from "./img/nuran.jpg";
import musicPlayer from "./img/music-player.jpg";
import { FaGithub } from "react-icons/fa";

function Work() {
  const works = [
    {
      id: 1,
      img: nike,
      text: "This project was built using HTML/CSS/JavaScript",
      to: "https://nike-ten-lyart.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/Nike",
    },
    {
      id: 2,
      img: nuran,
      text: "This project was built using React",
      to: "https://nura.new.techdatasoft.uz/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/nuran-group",
    },
    {
      id: 3,
      img: work1,
      text: "This project was built using React",
      to: "https://mix-info-three.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/mix-info",
    },
    {
      id: 4,
      img: work2,
      text: "This project was built using JavaScript",
      to: "https://weather-rosy-iota.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/weather",
    },
    {
      id: 5,
      img: musicPlayer,
      text: "This project was built using JavaScript",
      to: "https://music-player-beige-one.vercel.app/",
      toGithub: "https://github.com/MuhammadaliAbduhamidov/music-player",
    },
    {
      id: 6,
      img: mahsulot,
      text: "This project was built using React",
      to: "https://mahsulot-comni-admin-paneli.netlify.app/mahsulotlar",
      toGithub:
        "https://github.com/MuhammadaliAbduhamidov/masulot-admin-panel-front",
    },
    {
      id: 7,
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
          <h1>
            <div className="rubber__flex">
              <div className="rubberBand">M</div>
              <div className="rubberBand">y</div>
            </div>
            <div className="rubber__flex">
              <div className="rubberBand">W</div>
              <div className="rubberBand">o</div>
              <div className="rubberBand">r</div>
              <div className="rubberBand">k</div>
              <div className="rubberBand">s</div>
            </div>
          </h1>
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
