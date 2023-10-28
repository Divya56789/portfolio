import React from 'react';
import './header.css';
import project from '../../assets/project__image-removebg.png'
import Resume from '../resume/Resume';

function Header() {
  
  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__text">
          <h4>Hello! Welcome to my site</h4>
          <h1>Hi, m Divya Kumari</h1>
          <h2>React.js developer</h2>
          <p>I am now seeking a new opportunity to apply my knowledge and skills as a ReactJS developer in a professional setting. I am eager to contribute to a dynamic team where I can continue to grow and learn while making a meaningful impact. I am confident that my enthusiasm, adaptability, and dedication will make me a valuable asset to any organization.</p>
        </div>
        <Resume/>
      </div>
      <div className="header__right">
        <img src={project} alt="project" />
      </div>

      
    </div>
  )
}

export default Header;
