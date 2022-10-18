import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__logo">BENNY HASSAN</div>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__copyright">
        <small>&copy; Benny Hassan Portfolio. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
