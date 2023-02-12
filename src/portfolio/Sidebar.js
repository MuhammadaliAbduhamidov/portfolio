import React, { useState } from "react";
import person from "./img/person.jpg";
import { NavLink } from "react-router-dom";

import {
  FaInstagram,
  FaTelegram,
  FaFacebookF,
  FaLinkedin,
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Sidebar() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="menu" onClick={() => setActive(!active)}>
        {active ? <FaTimes /> : <FaBars />}
      </div>
      <div className="fix"></div>
      <div className={`sidebar ${active ? "active" : ""}`}>
        <div className="logo">
          <img src={person} alt="" />
          <h2>Muhammadali</h2>
        </div>
        <ul>
          <li onClick={() => setActive(!active)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#skill">Skills</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#work">Portfolio</a>
          </li>
          <li onClick={() => setActive(!active)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="msg">
          <a href="https://www.facebook.com/profile.php?id=100089953702227">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/abdukhamidov___01?igshid=ZmZhODViOGI=">
            <FaInstagram />
          </a>
          <a href="https://t.me/Abdukhamidov_01">
            <FaTelegram />
          </a>
          <FaLinkedin />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
