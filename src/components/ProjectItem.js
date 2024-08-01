import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      {technologies.map((technologies, id) => {
        return <span key={id}>{technologies}</span>
      }
    )}
    
    </div>
  
  );
}

export default ProjectItem;
