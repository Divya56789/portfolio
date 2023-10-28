import React from 'react';
import './aboutme.css';
import me from '../../assets/me.png'
import Resume from '../resume/Resume';


function AboutMe({sectionRef1}) {
    return (
        <div className='aboutme' ref={sectionRef1}>
            <div className="aboutme__left">
                <img src={me} alt="me" />
            </div>
            <div className="aboutme__right">
                <div className="aboutme__description">
                    <h1>About Me</h1>
                    <p>Hello! My name is Divya Kumari. I'm a passionate, dedicated and skilled Reactjs developer with building responsive and dynamic web applications using HTML, CSS, Js, React.js, and Next.js.  I am committed to creating dynamic and user-friendly web applications.</p>

                </div>
                <div className="aboutme__skills">
                    <div className="skills">
                        <div className="blue">
                            <div className="white">
                                HTML
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="blue">
                            <div className="white">
                            CSS
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="blue">
                            <div className="white">
                            JS
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="blue">
                            <div className="white">
                            Reactjs
                            </div>
                        </div>
                    </div>
                    
                </div>
                <Resume/>
            </div>

        </div>
    )
}

export default AboutMe;