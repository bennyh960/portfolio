import React from "react";
import "./portfolio.css";
import IMG0 from "../../assets/images/projects/dealigence.png";
import IMG1 from "../../assets/images/projects/meetBach.png";
import IMG2 from "../../assets/images/projects/mainCraft.png";
import IMG3 from "../../assets/images/projects/talkTome.png";
import IMG4 from "../../assets/images/projects/bankDemo.png";
import IMG5 from "../../assets/images/projects/diceGame.png";
import IMG6 from "../../assets/images/projects/memory-game.png";
import IMG7 from "../../assets/images/projects/chat-app.png";
import IMG8 from "../../assets/images/projects/store.png";
import IMG9 from "../../assets/images/projects/superStore.png";
import IMG10 from "../../assets/images/projects/trivia.png";
import IMG11 from "../../assets/images/projects/pokemon.png";
import IMG12 from "../../assets/images/projects/imdb.png";

const myProjectsData = [
  {
    image: IMG0,
    title: "BE People Connection Assesment",
    github: "pivate",
    demo: "https://dealigence.vc/hitlists",
    buttons: "disabled-btn",
    private: true,
  },
  {
    image: IMG1,
    title: "MeetBach -Social Recipes App",
    github: "https://github.com/bennyh960/KitchenMe",
    demo: "https://meetbachv2.herokuapp.com/",
    buttons: "btn btn-primary",
    login: "user0@c.com 123",
  },
  // {
  //   image: ,
  //   title: "Tripper (hackthon) - Finding holydays",
  //   github: "https://github.com/MichaelVez/hackthon_tripper",
  //   demo: "",
  //   buttons: "btn btn-primary",
  // },

  {
    image: IMG3,
    title: "TalkToMe - Social Dating app",
    github: "https://github.com/bennyh960/TalkToMe-social",
    demo: "https://precious-heliotrope-1b4fcd.netlify.app/",
    buttons: "btn btn-primary",
    login: "user3@c.com 123",
  },
  {
    image: IMG11,
    title: "Pokemon game - My first coding with python",
    github: "https://github.com/bennyh960/pokemonPygame",
    demo: "https://www.youtube.com/watch?v=q7dfMQq5RXg&ab_channel=bennyhassan",
    buttons: "btn btn-primary",
  },

  {
    image: IMG12,
    title: "IMDB demo app - Typescript",
    github: "https://github.com/bennyh960/IMDB-demo-app",
    demo: "https://spectacular-puffpuff-c59f7d.netlify.app/",
    buttons: "btn btn-primary",
  },

  {
    image: IMG6,
    title: "Memory Game",
    github: "https://github.com/bennyh960/Memory-Game-",
    demo: "https://thunderous-cascaron-1b45af.netlify.app/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG9,
    title: "Super store",
    github: "https://github.com/bennyh960/Store-ts-v2",
    demo: "https://magnificent-banoffee-88a885.netlify.app/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG7,
    title: "Live Chat App",
    github: "https://github.com/bennyh960/live-chat-beta",
    demo: "https://chat-app-beta-bh960.herokuapp.com/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG10,
    title: "Trivia app - TypeScript version",
    github: "https://github.com/bennyh960/Trivia-ts-react",
    demo: "https://subtle-monstera-24e17b.netlify.app/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG4,
    title: "Bank Accounts Managments",
    github: "https://github.com/bennyh960/BANK-fullStack",
    demo: "https://bank-demo-mongoose.herokuapp.comusers",
    buttons: "btn btn-primary",
  },
  {
    image: IMG2,
    title: "MineCraft: vanila JS",
    github: "https://github.com/bennyh960/Minecraft-",
    demo: "https://magnificent-stroopwafel-a62e02.netlify.app/game.html",
    buttons: "btn btn-primary",
  },
  {
    image: IMG5,
    title: "Dice Game",
    github: "https://github.com/bennyh960/DiceGameHooks",
    demo: "https://elegant-biscochitos-8f3805.netlify.app/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG8,
    title: "Simple Store Demo",
    github: "https://github.com/bennyh960/Shoe-store-demo-",
    demo: "https://chat-app-beta-bh960.herokuapp.com/", //TODO deploy site and change link
    buttons: "btn disabled-btn",
    todo: true,
  },
];

const Portfolio = () => {
  const getData = () => {
    return myProjectsData.map((project, i) => {
      return (
        <article className="portfolio__item" key={project.title + i}>
          <div className="portfolio__item-image">
            <img src={project.image} alt="img 1" className="img img-project" />
          </div>
          <h4 style={{ textAlign: "center", margin: "1rem 0" }}>{project.title}</h4>
          <div className="project-links">
            {project.private ? (
              <div className={project.buttons.split(" ")[1]}>Private</div>
            ) : (
              <a href={project.github} className={project.buttons.split(" ")[0]} target="_blank" rel="noreferrer">
                Github
              </a>
            )}
            {project.todo ? (
              <div className={project.buttons.split(" ")[1]}>Soon</div>
            ) : (
              <a href={project.demo} className={project.buttons} target="_blank" rel="noreferrer">
                {/* {project.login ? project.login : "Live Demo"} */}
                Live Demo
              </a>
            )}
          </div>
        </article>
      );
    });
  };
  return (
    <section id="portfolio">
      <h5>My first Works</h5>
      <h2>Portfolio</h2>
      <div className="disclaimer">* TODO : I will publish here my online store soon as i solved copyright issues</div>
      <div className="disclaimer">
        * Unfortunately I dont have time and extra money to deploy the real projects , I find it cute to publish here my
        first projects{" "}
      </div>
      <div className="disclaimer">
        * Live Demo of projects that includes BE and DB removed from list due to payments of hosting , I can open a
        tunnel with ngrok per demand{" "}
      </div>
      <div className="container portfolio__container">{getData()}</div>
    </section>
  );
};

export default Portfolio;
