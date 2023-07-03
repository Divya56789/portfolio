import React from 'react';
import './header.css';
import download from '../../assets/download.svg';
import project from '../../assets/project__image-removebg.png'

function Header() {
   const handleDownload = () => {
    const fileUrl = '/Divya__k__Resume.pdf'; 

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'Divya__k__Resume.pdf';
    link.target = '_blank';

    // Trigger the click event on the anchor element
    link.click();
  }
  return (
    <div className='header'>
      <div className="header__left">
        <div className="header__text">
          <h4>Hello! Welcome to my site</h4>
          <h1>Hi, m Divya Kumari</h1>
          <h2>Fresher React developer</h2>
          <p>I am now seeking an opportunity to apply my knowledge and skills as a ReactJS developer in a professional setting. I am eager to contribute to a dynamic team where I can continue to grow and learn while making a meaningful impact. I am confident that my enthusiasm, adaptability, and dedication will make me a valuable asset to any organization.</p>
        </div>
        <div className="resume">
          <button onClick={handleDownload}>Download CV</button>
          <img src={download} alt="download" />
        </div>
      </div>
      <div className="header__right">
        <img src={project} alt="project" />
      </div>

      
    </div>
  )
}

export default Header;
