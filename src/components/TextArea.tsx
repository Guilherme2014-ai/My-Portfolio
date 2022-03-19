import React from "react";
import { RedirectIconComponent } from "./RedirectIcon";

import "./TextArea.css";

// cuidar dos svg's
const TextAreaComponent = ({
  title,
  phrase,
  children,
}: {
  title: string;
  phrase: string;
  children: string;
}) => {
  return (
    <div className="text_area" id="text_area">
      <h1 className="about_me_title" id="about_me_title">
        {title}
      </h1>
      <p className="about_me_text" id="about_me_text">
        {children}
      </p>
      <br />
      <small className="phrase">{phrase}</small>
      <br />
      <RedirectIconComponent
        title="Github"
        id="github"
        link="https://github.com/Guilherme2014-ai"
        color="blue"
        type="github"
      />
      <RedirectIconComponent
        title="Linkedin"
        id="linkedin"
        link="https://www.linkedin.com/in/guilherme-henrique-0bb264204/"
        color="blue"
        type="linkedin"
      />
      <RedirectIconComponent
        title="WhatsApp"
        id="whatsapp"
        link="https://api.whatsapp.com/send?phone=5515988315201&text=Olá%2C%20envie%20sua%20mensagem%2C%20logo%20irei%20responder."
        color="green"
        type="whatsapp"
      />
    </div>
  );
};

export { TextAreaComponent };
