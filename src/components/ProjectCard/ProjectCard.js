import React from "react";
import "./ProjectCard.scss"; // Style for project card

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={onClick}>
      <h3>{project.projectName}</h3>
      <p>{project.projectDesc.substring(0, 100)}...</p> {/* Displaying short description */}
    </div>
  );
}
