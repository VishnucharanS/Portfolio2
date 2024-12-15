import React, { useState } from "react";
import "./MyProjects.scss"; // Custom SCSS file
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { myProjectsSection } from "../../portfolio";

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDescription = () => {
    setSelectedProject(null);
  };

  return (
    <div className="main" id="myprojects">
      <div className="projects-main-div">
        <div className="projects-header">
          <h1 className="heading">{myProjectsSection.title}</h1>
          <p className="subTitle">{myProjectsSection.subtitle}</p>
        </div>
        <div className="projects-cards-div">
          {myProjectsSection.projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-description-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={closeProjectDescription}>
              &times;
            </span>
            <h2>{selectedProject.projectName}</h2>
            <p>{selectedProject.projectDesc}</p>

            {/* Optional images */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="project-images">
                {selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`Project ${index + 1}`} />
                ))}
              </div>
            )}

            {/* Optional link */}
            {selectedProject.footerLink &&
              selectedProject.footerLink.length > 0 &&
              selectedProject.footerLink[0].url && (
                <a
                  href={selectedProject.footerLink[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {selectedProject.footerLink[0].name}
                </a>
              )}
          </div>
        </div>
      )}
    </div>
  );
}
