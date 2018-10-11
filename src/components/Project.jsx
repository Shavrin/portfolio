import React from "react";

const Project = props => {
  const { title, image, githubLink, youtubeLink, children } = props;

  return (
    <article className="project">
      <img src={image} alt="Preview" className="preview" />
      <p className="projectTitle">{title}</p>
      <p>{children}</p>
      <a href={githubLink} />
      <a href={youtubeLink} />
    </article>
  );
};

export default Project;
