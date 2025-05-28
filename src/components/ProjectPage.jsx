import { useEffect } from "react";
import projectsData from "../data/projectsData";
import "./ProjectPage.css";
import { Link } from "react-router-dom";

function ProjectPage() {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-page">      <div className="project-page-header">
        <h1>Projects</h1>
        <Link to="/#projects-section" className="back-link">
          <div className="link-arrow back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
            </svg>
          </div>
          Back to Home
        </Link>
      </div>
      <div className="projects-grid">
        {projectsData.map(project => (
          <a href={project.link} className="project-card-link" key={project.id} target="_blank" rel="noopener noreferrer">
            <div className="project-item">
              {project.isFeatured && (
                <div className="featured-icon" title="Featured Project">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
                  </svg>
                </div>
              )}              <div className="project-image">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.name} 
                    className="project-img" 
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.querySelector('.project-image-placeholder').style.display = 'block';
                    }}
                  />
                ) : null}
                <div className="project-image-placeholder" style={{display: project.imageUrl ? 'none' : 'block'}}></div>
              </div>
              <div className="project-content">
                <div className="project-title">{project.name}</div>
                <div className="project-description">{project.description}</div>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag-item">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
