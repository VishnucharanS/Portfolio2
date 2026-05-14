import React, { useState } from "react";
import "./MyProjects.scss";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { myProjectsSection } from "../../portfolio";

export default function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentMediaIndex(0); // Reset to first media on open
    setIsZoomed(false); // Reset zoom
  };

  const closeProjectDescription = () => {
    setSelectedProject(null);
    setCurrentMediaIndex(0);
    setIsZoomed(false);
  };

  const handleMediaNavigation = (direction) => {
    if (!selectedProject.images || selectedProject.images.length === 0) return;
    const totalMedia = selectedProject.images.length;
    const newIndex =
      (currentMediaIndex + direction + totalMedia) % totalMedia;
    setCurrentMediaIndex(newIndex);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
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

            {/* Optional Point-wise Text */}
            {selectedProject.points && selectedProject.points.length > 0 && (
              <ul className="point-list">
                {selectedProject.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}

            {/* Media Viewer */}
            {selectedProject.images && selectedProject.images.length > 0 && (
              <div className="media-viewer">
                <button
                  className="media-nav left-arrow"
                  onClick={() => handleMediaNavigation(-1)}
                >
                  &#8592;
                </button>

                {selectedProject.images[currentMediaIndex] ? (
                  selectedProject.images[currentMediaIndex].endsWith(".mp4") ? (
                    <video
                      className={`media-preview ${isZoomed ? "zoomed" : ""}`}
                      src={selectedProject.images[currentMediaIndex]}
                      controls
                      onClick={toggleZoom}
                    />
                  ) : (
                    <img
                      className={`media-preview ${isZoomed ? "zoomed" : ""}`}
                      src={selectedProject.images[currentMediaIndex]}
                      alt={`Media ${currentMediaIndex + 1}`}
                      onClick={toggleZoom}
                    />
                  )
                ) : (
                  <p>No media available</p> // Fallback text if media is missing
                )}

                <button
                  className="media-nav right-arrow"
                  onClick={() => handleMediaNavigation(1)}
                >
                  &#8594;
                </button>
              </div>
            )}

            {/* Media Navigation Indicator */}
            <div className="media-indicator">
              <div className="circle-container">
                {selectedProject.images.map((_, index) => (
                  <div
                    key={index}
                    className={`circle ${currentMediaIndex === index ? "active" : ""}`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Footer Link */}
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
