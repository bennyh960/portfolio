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

const myProjectsData = [
  {
    image: IMG0,
    title: "Dealigence Hitlist - BE people connection",
    github: "pivate",
    demo: "https://dealigence.vc/hitlists",
    buttons: "disabled-btn btn-primary",
    private: true,
  },
  {
    image: IMG1,
    title: "MeetBach -Social Recipes App",
    github: "https://github.com/bennyh960/KitchenMe",
    demo: "https://meetbachv2.herokuapp.com/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG2,
    title: "MineCraft Game",
    github: "https://github.com/bennyh960/Minecraft-",
    demo: "https://magnificent-stroopwafel-a62e02.netlify.app/game.html",
    buttons: "btn btn-primary",
  },
  {
    image: IMG3,
    title: "TalkToMe - Social Dating app",
    github: "https://github.com/bennyh960/TalkToMe-social",
    demo: "https://precious-heliotrope-1b4fcd.netlify.app/",
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
    image: IMG5,
    title: "Dice Game",
    github: "https://github.com/bennyh960/DiceGameHooks",
    demo: "https://elegant-biscochitos-8f3805.netlify.app/",
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
    image: IMG7,
    title: "Live Chat App",
    github: "https://github.com/bennyh960/live-chat-beta",
    demo: "https://chat-app-beta-bh960.herokuapp.com/",
    buttons: "btn btn-primary",
  },
  {
    image: IMG8,
    title: "Simple Store Demo",
    github: "https://github.com/bennyh960/Shoe-store-demo-",
    demo: "https://chat-app-beta-bh960.herokuapp.com/",
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
          <h3>{project.title}</h3>
          <div className="project-links">
            {project.private ? (
              <div className={project.buttons.split(" ")[0]}>Private</div>
            ) : (
              <a href={project.github} className={project.buttons.split(" ")[0]} target="_blank">
                Github
              </a>
            )}
            {project.todo ? (
              <div className={project.buttons.split(" ")[1]}>Soon</div>
            ) : (
              <a href={project.github} className={project.buttons} target="_blank">
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
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">{getData()}</div>
    </section>
  );
};

export default Portfolio;

// carousel
{
  /* <div className="container ">
        <Carousel infiniteLoop={false}>
          <div className="portfolio__container">
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG0} alt="img 1" className="img img-project" />
              </div>
              <h3>MeetBach -Social Recipes App</h3>
              <div className="project-links">
                <div className="disabled-btn">Git private</div>
                <a href="https://dealigence.vc/hitlists" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG1} alt="img 1" className="img img-project" />
              </div>
              <h3>MeetBach -Social Recipes App</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/KitchenMe" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://meetbachv2.herokuapp.com/" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG2} alt="img 1" className="img img-project" />
              </div>
              <h3>MineCraft Game</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/Minecraft-" className="btn" target="_blank">
                  Github
                </a>
                <a
                  href="https://magnificent-stroopwafel-a62e02.netlify.app/game.html"
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          </div>
          <div className="portfolio__container">
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG3} alt="img 1" className="img img-project" />
              </div>
              <h3>TalkToMe - Social Dating app</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/TalkToMe-social" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://precious-heliotrope-1b4fcd.netlify.app/" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG4} alt="img 1" className="img img-project" />
              </div>
              <h3>Bank Accounts Managments</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/BANK-fullStack" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://bank-demo-mongoose.herokuapp.com" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG5} alt="img 1" className="img img-project" />
              </div>
              <h3>Dice Game</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/DiceGameHooks" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://elegant-biscochitos-8f3805.netlify.app/" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          </div>
          <div className="portfolio__container">
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG6} alt="img 1" className="img img-project" />
              </div>
              <h3>Memory Game</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/Memory-Game-" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://thunderous-cascaron-1b45af.netlify.app/" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG7} alt="chat app" className="img img-project" />
              </div>
              <h3>Live Chat App</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/live-chat-beta" className="btn" target="_blank">
                  Github
                </a>
                <a href="https://chat-app-beta-bh960.herokuapp.com/" className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG8} alt="chat app" className="img img-project" />
              </div>
              <h3>Simple Store Demo</h3>
              <div className="project-links">
                <a href="https://github.com/bennyh960/Shoe-store-demo-" className="btn" target="_blank">
                  Github
                </a>
                {/* <a href="https://chat-app-beta-bh960.herokuapp.com/" className="btn btn-primary" target="_blank"> */
}
//           <div className="disabled-btn">Demo Soon</div>
//           {/* </a> */}
//         </div>
//       </article>
//     </div>
//   </Carousel>
// </div> */}
