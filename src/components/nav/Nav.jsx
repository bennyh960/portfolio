import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser, AiOutlineBook } from "react-icons/ai";
// import { FaUserGraduate } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" className={activeNav === "#" ? "active" : ""} onClick={() => setActiveNav("#")}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("about")} className={activeNav === "about" ? "active" : ""}>
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === "experience" ? "active" : ""}
        onClick={() => setActiveNav("experience")}
      >
        <AiOutlineBook />
      </a>
      <a href="#services" onClick={() => setActiveNav("services")} className={activeNav === "services" ? "active" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("contact")} className={activeNav === "contact" ? "active" : ""}>
        <MdOutlineMessage />
      </a>
    </nav>
  );
};

export default Nav;
