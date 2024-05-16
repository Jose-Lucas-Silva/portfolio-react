import React from 'react';
import blogAngular from '../images/blog-angular.png';
import paginaTributo from '../images/pagina-tributo.png';
import cordel from '../images/cordel.png';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section text-center">
      <h2 className="h2-section mb-5">Here are some of my projects</h2>
      <div className="projects-grid row">
        <a href="https://github.com/Jose-Lucas-Silva/blog-angular" target="_blank" className="project project-tile col-md-4">
          <img className="project-image img-fluid mb-3" src={blogAngular} alt="projeto Angular" />
          <p className="project-title">Games Blog</p>
        </a>
        <a href="https://github.com/Jose-Lucas-Silva/Projeto-tributo" target="_blank" className="project project-tile col-md-4">
          <img className="project-image img-fluid mb-3" src={paginaTributo} alt="projeto Pagina de Tributo" />
          <p className="project-title">Página de Tributo</p>
        </a>
        <a href="https://github.com/Jose-Lucas-Silva/projeto-cordel" target="_blank" className="project project-tile col-md-4">
          <img className="project-image img-fluid mb-3" src={cordel} alt="projeto Cordel" />
          <p className="project-title">Projeto Cordel</p>
        </a>
      </div>
    </section>
  );
}

export default ProjectsSection;