import React, { useEffect, useRef } from "react";
import axios from "axios";
import Lottie from "lottie-web";

import { TextAreaComponent } from "./components/TextArea";
import { KnowledgeComponent } from "./components/Knowledge";
import { ProjectsComponent } from "./components/Projects";

import "./App.css";

const App: React.FC = () => {
  const boyCoddingAnimation = useRef(null);

  // Carregando Animação
  useEffect(() => {
    async function animationHandler() {
      async function loadLoadingAnimation() {
        const animationJsonLink =
          "https://assets3.lottiefiles.com/packages/lf20_iqcxim0l.json";

        const animationJsonData = await (
          await axios.get(animationJsonLink)
        ).data;

        Lottie.loadAnimation({
          container: boyCoddingAnimation.current, // the dom element that will contain the animation: ;
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animationJsonData, // the path to the animation json
        });
      }

      loadLoadingAnimation();
    }
    animationHandler();
  });

  // console.log(window.innerWidth);

  return (
    <div className="main">
      <div id="about_me" className="about_me">
        <div className="content">
          <div
            id="profile_picture"
            className="profile_picture"
            style={{
              backgroundImage:
                "url(https://avatars.githubusercontent.com/u/77082955?s=400&u=a5447a49e9f20e376cf88674c102041cca89eaa4&v=4)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <TextAreaComponent
            title="Hi, My Name's Guilherme Henrique"
            phrase={`"The important thing is never to stop questioning" - Albert Einstein`}
          >
            I'm Full-Stack Developer, I live in Brazil, my Hobbies is study
            Physics and Math, watch series, hear musics and play some game
            Sometimes, I like to solve problems with creativity to turn it the
            Simplest possible, not only for me, but also for other people.
            Something that I like too is to explain things to someone, I Really
            like it. Everyday Studying, learning something else and helping
            people around !
          </TextAreaComponent>
        </div>
        <div
          ref={boyCoddingAnimation}
          className="guy_coddig_animation_animation"
          id="guy_coddig_animation_animation"
        ></div>
      </div>
      <KnowledgeComponent className="knowledge" />
      <div className="projects">
        <h1>Projects</h1>
        <h2 className="project_subtitle">FullStack Projects</h2>
        <ProjectsComponent
          title="Be Nice"
          image_link="https://cdn.discordapp.com/attachments/857701858655076402/955270591198396426/unknown.png"
          repository_link="https://github.com/Guilherme2014-ai/be-nice-interface-react"
          inverted={false}
          className="project_area"
          technical_specifications={[
            "Lang: TypeScript",
            "Database: MySQL",
            "ORM: TypeORM",
            "Framework: React",
            "Framework(Back-end): Express",
            "Background Job: Bull",
          ]}
        >
          The APP is based on Users, on which they can make comments, change
          photo, change profile phrase, accept/decline/view/send friend
          requests... Given this it is logical that you need a screen
          registration and login. The Be Nice registration system has a email
          confirmation logic, where the user needs to confirm email, otherwise
          you will not have full access to the features of the APPLICATION.
          Sending email is done using Nodemailer.
        </ProjectsComponent>
        <ProjectsComponent
          title="E-commerce"
          image_link="https://freevector-images.s3.amazonaws.com/uploads/vector/preview/36682/36682.png"
          repository_link="https://github.com/Guilherme2014-ai/E-Commerce"
          inverted={true}
          className="project_area"
          technical_specifications={[
            "Lang: JavaScript",
            "Database: MySQL",
            "Query Builder: KNEX",
            "Template String: EJS",
            "Framework(Back-end): Express",
            "Web Socket: Socket IO",
          ]}
        >
          This E-commerce is a real-time aplication, where the client can buy
          new clothes and the host user can add, delete, modify clothes, manage
          the clothes transport data, and see in real-time who's buying clothes.
        </ProjectsComponent>
        <h2 className="project_subtitle">Front-end Projects</h2>
        <ProjectsComponent
          title="Netflix Clone"
          image_link="https://t2.tudocdn.net/178296?w=660&h=660"
          repository_link="https://github.com/Guilherme2014-ai/Netflix_Clone"
          production_link="https://guilherme2014-ai.github.io/Netflix_Clone/"
          inverted={false}
          className="project_area"
          technical_specifications={["Lang: JavaScript", "Framework: React"]}
        >
          This project is just for porpouse study, where I made a Netflix clone,
          using react. This app is fully responsible and real-time.
        </ProjectsComponent>
      </div>
    </div>
  );
};

export { App };

// h1 Projects
//
