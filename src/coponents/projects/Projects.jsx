import React, { useContext } from "react";
import './projects.css';
import { DataContext } from "../../context/DataContext";

function Projects() {
    const { content, theme } = useContext(DataContext);

    return (
        <section id="projects" className={`section-container ${theme === 'dark' ? 'section-container-dark' : ''}`}>
            <h1 className={`projects-header-h1 ${theme === 'dark' ? 'projects-header-h1-dark' : ''}`}>{content.projects}</h1>
            <div className="projects-container">
                {content.projectsData.map((projectData, index) => (
                    <div key={index} className="project">
                        <img src={projectData.image} className="project-img" alt="Project" />
                        <h3 className={`project-header-h3 ${theme === 'dark' ? 'project-header-h3-dark' : ''}`}>{projectData.title}</h3>
                        <p className={`project-info-p ${theme === 'dark' ? 'project-info-p-dark' : ''}`}>{projectData.description}</p>
                        <div className="project-button">
                            {projectData.library.map((lib, index) => (
                                <button key={index} className={`project-button-info ${theme === 'dark' ? 'project-button-info-dark' : ''}`}>{lib}</button>
                            ))}
                        </div>
                        <div className={`project-routing ${theme === 'dark' ? 'project-routing-dark' : ''}`}>
                            <a href={projectData.github} target="_blank" >GitHub</a>
                            <a href={projectData.website} target="_blank">View Site</a>
                        </div>
                    </div>


                ))}
            </div>
        </section>
    );
}

export default Projects;

