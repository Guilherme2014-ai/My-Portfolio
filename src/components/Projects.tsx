/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import "./Projects.css";

const ProjectsComponent = ({
  className,
  id,
  image_link,
  inverted,
  title,
  technical_specifications,
  repository_link,
  production_link,
  children,
}: {
  className?: string;
  repository_link: string;
  production_link?: string;
  id?: string;
  title: string;
  image_link: string;
  inverted: boolean;
  technical_specifications: string[];
  children: string;
}) => {
  return (
    <div
      className={className}
      style={{
        flexDirection: inverted ? "row-reverse" : "row",
      }}
    >
      <a href={`${production_link || repository_link}`}>
        <img src={image_link} alt="project_image" />
      </a>
      <div>
        <h2>{title}</h2>
        <ul>
          <h3>Specifications</h3>
          {technical_specifications.map((content) => (
            <li>{content}</li>
          ))}
        </ul>
        <p className="content_text">{children}</p>
        <br />
        <small>
          <strong>
            Repository:{" "}
            <a
              style={{
                color: "blue",
              }}
              href={`${repository_link}`}
            >{`${repository_link}`}</a>
          </strong>
        </small>
        {production_link && (
          <div>
            <br />
            <small>
              <strong>
                Production Link:{" "}
                <a
                  style={{
                    color: "blue",
                  }}
                  href={`${production_link}`}
                >{`${production_link}`}</a>
              </strong>
            </small>
          </div>
        )}
      </div>
    </div>
  );
};

export { ProjectsComponent };
//production_link
