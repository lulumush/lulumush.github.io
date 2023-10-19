import './project.css'
import React from 'react'
import { projectData } from '../../data'

const Project = () => {
    return (
        <section id='projects' className='container'>
            <h2>{projectData.title}</h2>
            <div className='project__content'>
                {projectData.projects.map((project, index) => (
                    <div className="card" key={index}>
                        <img src={project.image} className="card__image" alt='' />
                        <div className="card__overlay">
                            <div className="overlay__text">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <span className='tags'>
                                    {project.tags.map((tag, index) =>
                                        <div key={index}>
                                            {tag}
                                        </div>
                                    )}
                                </span>
                                <div className='buttons'>
                                    <a href={project.demo} target='_blank' rel="noreferrer" className="button">Demo</a>
                                    <a href={project.repo} target='_blank' rel="noreferrer" className="button">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Project
