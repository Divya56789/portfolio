import React from 'react';
import download from '../../assets/download.svg';
import discover from '../../assets/brain.svg';
import define from '../../assets/define.svg';
import design from '../../assets/design.svg';
import develop from '../../assets/develop.svg';
import deploy from '../../assets/deploy.svg';
import './mywork.css';


function MyWork({sectionRef2}) {
  return (
    <div className='mywork' ref={sectionRef2}>
      <div className="mywork__items">
        <h1>Our Work Process</h1>
        <p>As a ReactJS developer, my work process revolves around five key stages: discover, define, design, develop, and deploy. Each stage plays a vital role in delivering high-quality and impactful web applications.</p>
        <div className="resume">
          <button>Download CV</button>
          <img src={download} alt="download" />
        </div>

      </div>

      <div className="our__work__process">
        <div className="discover">
          <div className="first-layer">
            <div className="second-layer">
              <img src={discover} alt="discover" />
            </div>
          </div>
          <h3>Discover</h3>
        </div>

        <div className="define">
          <div className="first-layer">
            <div className="second-layer">
              <img src={define} alt="define" />
            </div>
          </div>
          <h3>Define</h3>
        </div>

        <div className="ideate">
          <div className="first-layer">
            <div className="second-layer">
              <img src={design} alt="design" />
            </div>
          </div>
          <h3>Design</h3>
        </div>

        <div className="design">
          <div className="first-layer">
            <div className="second-layer">
              <img src={develop} alt="develop" />
            </div>
          </div>
          <h3>Develop</h3>
        </div>

        <div className="impliment">
          <div className="first-layer">
            <div className="second-layer">
              <img src={deploy} alt="deploy" />
            </div>
          </div>
          <h3>Deploy</h3>
        </div>
      </div>
    </div>
  )
}

export default MyWork;