import React from 'react';

function Project({ href, src, alt, title }) {
  return (
    <a href={href} target="_blank" className="project project-tile">
      <img className="project-image" src={src} alt={alt} />
      <p className="project-title">{title}</p>
    </a>
  );
}

export default Project;