import React from "react";

import "./Knowledge.css";

const KnowledgeComponent = ({
  id,
  className,
}: {
  id?: string;
  className?: string;
}) => {
  return (
    <div className={className} id={id}>
      <h1>knowledge</h1>
      <div className="knowledge_area">
        <div className="knowledge_box">
          <h2>Frameworks</h2>
          <div>
            <img
              src="https://sergioherrero-portfolio.herokuapp.com/content/tech-icons/express.png"
              alt="EXPRESS"
              width="60"
            />
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              alt="REACT"
              width="60"
            />
            <img
              src="https://cdn.worldvectorlogo.com/logos/socket-io-1.svg"
              alt="SOCKETIO"
              width="60"
            />
          </div>
        </div>
        <div className="knowledge_box">
          <h2>Languages</h2>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
              alt="JS"
              width="60"
            />
            <img
              src="https://iconape.com/wp-content/png_logo_vector/typescript.png"
              alt="TS"
              width="60"
            />
            <img
              src="https://cdn.discordapp.com/attachments/857701858655076402/954811410452447232/1647715137050.png"
              alt="NODEJS"
              width="60"
            />
            <img
              src="https://logodownload.org/wp-content/uploads/2016/10/html5-logo-10.png"
              alt="HTML"
              width="60"
            />
            <img
              src="https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-canvas-logo-netgoblin-deviantart-20.png"
              alt="CSS"
              width="60"
            />
          </div>
        </div>
        <div className="knowledge_box">
          <h2>Technologies</h2>
          <div>
            <img
              src="data:image/png;base64,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"
              alt="DOCKER"
              width="60"
            />
            <img
              src="https://www.freeiconspng.com/uploads/sql-server-icon-png-29.png"
              alt="SQL"
              width="60"
              height="55"
            />
            <img
              src="https://icon-library.com/images/no-sql-icon/no-sql-icon-16.jpg"
              alt="NOSQL"
              width="60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { KnowledgeComponent };
