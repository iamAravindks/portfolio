import React from "react";
import Project from "../Project/Project";

function Portfolio() {
  const projects = [
    {
      name: "Portifolio",
      description: "My portifolio built with Reactjs",
      image: "work1.jpg",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Express & NoSQL",
        "Heroku & AWS S3",
        "React.js",
        "MERN Stack",
      ],
      github: "https://github.com",
      deployed: "https://github.com",
    },
    {
      name: "Login system",
      description:
        "Login system that is built using Nodejs ,expressjs and mysql .It enables the features like user registration , login , logout and profile view and update , ",
      image: "work2.jpg",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Handlebars.js",
        "Express & Sequelize",
        "Heroku & AWS S3",
      ],
      github: "https://github.com",
      deployed: "https://node-login-3b72754928dd.herokuapp.com/",
    },
    {
      name: "PWA",
      description:
        "This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline. This application is deployed through Heroku.",
      image: "work3.jpeg",
      technologies: ["HTML/CSS", "JavaScript", "Nodejs", "Expressjs"],
      github: "https://github.com",
      deployed: "https://github.com",
    },
    {
      name: "Password generator",
      description:
        "A web app that randomly generate a password that meets certain criteria.create a strong password that provides greater security",
      image: "work4.jpeg",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com",
      deployed: "https://github.com",
    },
    {
      name: "Coding Quiz",
      description:
        "AS A coding boot camp student I WANT to take a timed quiz on JavaScript fundamentals that stores high scores SO THAT I can gauge my progress compared to my peers",
      image: "work2.jpg",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com",
      deployed: "https://github.com",
    },
    {
      name: `Owner avatar logo-maker`,
      description:
        'The application enables users to enter inputs into a inquirer prompt in order to generate a logo "logo.svg" file which contains the users desired results as an SVG image.',
      image: "work1.jpg",
      technologies: [
        "Nodejs",

        "    Saiyan Pride",
        "    Dynamic JavaScript",
        " Node.js ",
        " Jest ",
        "Inquirer.js",
      ],
      github: "https://github.com",
      deployed: "https://github.com",
    },
  ];

  return (
    <section>
      <div className="left">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
