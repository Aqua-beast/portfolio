import React from 'react'
import { projects } from '../../data'
import './Projects.css';

function Projects() {
    return (
        <div id='Projects' className='project-bg'>
            <h1 className='project-head'>Projects</h1>
            <div className='project-items'>
                {projects.map((pro) => (
                    <div key={pro.id} className='project-item'>
                        <div className='project-item-link'>
                            <img className='project-item-link-img' src={pro.img} alt={pro.title} />
                            <video controls loop className='project-item-video'>
                                <source src={pro.video} type='video/webm' />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className='project-item-box'>
                            <h2 className='project-item-head'>{pro.title}</h2>
                            <div className='project-item-desc'>{pro.desc}</div>
                            <a className='project-item-button' href={pro.url}>Live View Here</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
