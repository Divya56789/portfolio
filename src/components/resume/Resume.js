import React from 'react';
import './resume.css';
import download from '../../assets/download.svg';


function Resume() {
    const handleDownload = () => {
        const fileUrl = '/DIVYA_NEW_RESUME.pdf'; 
    
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = 'DIVYA_NEW_RESUME.pdf';
        link.target = '_blank';
    
        // Trigger the click event on the anchor element
        link.click();
      }
  return (
    <div className="resume">
          <button onClick={handleDownload}>Download CV</button>
          <img src={download} alt="download" />
        </div>
  )
}

export default Resume