import React, { useState } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { Loader } from "./loader";

const Contact = () => {
  const form = useRef();
  const [submited, setSubmited] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSubmited(true);

    emailjs.sendForm("service_7mcl5ls", "template_8uk6bmq", form.current, "GdyElbO697A9sX5Al").then(
      (result) => {
        console.log(result.text);
        setTimeout(() => {
          setSubmited(false);
        }, 200);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5 style={{ paddingTop: "5rem" }}>Get In Tocuch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <artice className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>

            <h5>Bennyh960@gmail.com</h5>
            <a href="mailto:Bennyh960@gmail.com" target="_blank">
              Send a message
            </a>
          </artice>
          <artice className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messanger </h4>

            <h5>Facebook</h5>
            <a href="https://m.me/benny.hassan.7" target="_blank">
              Send a message
            </a>
          </artice>
          <artice className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>

            <h5>+972-524874600</h5>
            <a href="https://api.whatsapp.com/send?phone=972524874600" target="_blank">
              Send a message
            </a>
          </artice>
        </div>
        {/* end */}
        <form ref={form} onSubmit={sendEmail} className="form-class">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {submited && <Loader />}
        </form>
      </div>
    </section>
  );
};

export default Contact;
