import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/benny-hassan-bb562b73/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/bennyh960" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
