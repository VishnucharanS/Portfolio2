import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{project.projectName}</h3>
      <p>{project.projectDesc.substring(0, 100)}...</p> {/* Short description */}
    </div>
  );
}
