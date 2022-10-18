import React from "react";
import CTA from "./CTA";
import "./header.css";
import me from "../../assets/images/me1.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <HeaderSocial />

        <div className="header-center">
          <CTA />
          <h5>Hello I'm</h5>
          <h1>Benny Hassan</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <img src={me} alt="me" className="img me" />
          {/* <img src={me} alt="me" /> */}
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
