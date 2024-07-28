import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1",
    imageUrl: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of project 2",
    imageUrl: "https://via.placeholder.com/150"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <div key={project.id} className="project">
            <h3>{project.title}</h3>
            <img src={project.imageUrl} alt={project.title} />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;