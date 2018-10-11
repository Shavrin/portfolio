import React from "react";

const Project = props => {
  const { title, description } = props;

  return (
    <div className="project">
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default Project;
