import React, { useEffect, useRef } from "react";
import axios from "axios";
import Lottie from "lottie-web";
import "./App.css";
import { TextAreaComponent } from "./components/TextArea";

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
      <br />
      <div>
        <h1>knowledge</h1>
      </div>
    </div>
  );
};

export { App };
