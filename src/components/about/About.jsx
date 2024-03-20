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
            <img src={aboutMe} alt="About" className="img about-image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>Engineer & Developer</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Owner Of Online Store</h5>
              <small>1 Year</small>
            </article>
          </div>
          <p>
            Chemical Engineer (B.sc) in the past and Full Stack developer at the present. Motivated with high learning
            abilities, self-taught, and very friendly. Skilled in Front-End , Back-End technologies , sql and nosql DB
            and Cloude services at AWS and Azure.
          </p>
          <p>
            Owner Of Online Store which perform scrapping , blobs ETL using various of tech , managing own UI library
            (The site is deployed to the net for me only, due to its still under development and due to copyright issues
            im not publishing it here).{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
