import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>Java Script</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>Type Script</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>Postgrs SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detailes">
              <BsPatchCheckFill className="experience_detailes-icons" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
