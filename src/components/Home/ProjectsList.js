import React from "react";
import projects from "assets/data/projects.json";
import ProjectCard from "components/Home/ProjectCard";

const ProjectsList = () => (
  <React.Fragment>
    <section className="container">
      <h3 className="title has-text-centered">Projects</h3>
      <div className="has-text-centered">dibidibidibidibidibidi...</div>
      <div className="box-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project.project}
            topic={project.topic}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
            isHidden={project.isHidden}
          />
        ))}
      </div>
    </section>
  </React.Fragment>
);

export default ProjectsList;
