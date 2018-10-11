import React from "react";
import Project from "../components/Project";
const Projects = () => {
  return (
    <div className="projects-grid">
      <Project
        title="Codemasters"
        image="http://www.vetent.co.nz/images/Cats-Dogs-Pets/Dog1.jpg"
        githubLink="https://github.com/Shavrin/codemasters">
        Evaluate your javascript skills with this simple page. Made with Vue.js
        and jQuery.
      </Project>
      <Project
        title="Websites"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        description="Description"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        description="Description"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        description="Description"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
      <Project
        title="Websites"
        description="Description"
        image="https://bubhub.files.wordpress.com/2010/09/sad-dog1.jpg"
      />
    </div>
  );
};

export default Projects;
