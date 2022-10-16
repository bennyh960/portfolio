import React from "react";
import "./about.css";
import aboutMe from "../../assets/images/me4.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me__img">
            <a href="#contact" className="btn2 btn-primary btn-special">
              Let's Talk
            </a>
            <img src={aboutMe} alt="About image" className="img about-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>1 Year</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem itaque a quas provident fugit! Ut
            repellendus rerum inventore asperiores reiciendis ad aut neque nemo! Sit consequatur voluptatum fugiat
            corrupti.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
