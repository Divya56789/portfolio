import React from 'react';
import './projects.css';
import login from '../../assets/login.png';
import weather from '../../assets/weather.png';
import shop from '../../assets/Beige Minimalist Mood Photo Collage.png';

function Projects({sectionRef3}) {
  return (
    <div className='latest__projects' ref={sectionRef3}>
        <h1>Latest Projects</h1>
        <p>My recent projects, including the dynamic weather app and the e-commerce application, have been instrumental in expanding my React development skills and showcasing my ability to create intuitive, visually appealing, and high-performing applications. I am excited to bring this expertise to new projects and continue pushing the boundaries of what can be achieved with ReactJS.</p>
        <div className="latest__projects__container">
            <div className="container">
                <img src={login} alt="project1" />
            </div>
            <div className="container">
                <img src={weather} alt="project1" />
            </div>
            <div className="container">
                <img src={shop} alt="project1" />
            </div>
        </div>
    </div>
  )
}

export default Projects;