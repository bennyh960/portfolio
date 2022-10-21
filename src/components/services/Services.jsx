import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>My Skills</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Personal</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Interpersonal skills.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Open-mindedness..</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>self-taught.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Teamwork and Collaboration.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Analytic.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Curious.</p>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Customize new website layout.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom features.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API developer.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Maintenance.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data analysis.</p>
            </li>
          </ul>
        </article>
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article> */}
      </div>
    </section>
  );
};

export default Services;
