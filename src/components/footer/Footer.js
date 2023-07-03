import React from 'react';
import pic from '../../assets/Mine.png';
import linkedIn from '../../assets/linkedin_circled.svg';
import github from '../../assets/github.svg';
import './footer.css';


const Divider = () => {
    return(
        <div className="divider"></div>
    )
}

function Footer() {
    return (
        <div className='footer'>
            <div className="footer__content">
            <div className="avatar">
                <img src={pic} alt="pic" />
            </div>
            <h3>React Developer</h3>
            </div>
            
            <p>If you have found my application and work intriguing, I would be thrilled if you could follow me on LinkedIn and GitHub for the latest updates on my projects and professional endeavors.</p>
            <div className="follow__btn">
                <div className="avatar">
                    <a href="https://www.linkedin.com/in/divya-k-b9b696254/"  target='_blank' rel="noreferrer"><img src={linkedIn} alt="linkedIn" /></a>
                </div>
                <div className="avatar">
                    <a href="https://github.com/Divya56789" target='_blank' rel="noreferrer"><img src={github} alt="github" /></a>
                    
                </div>
            </div>
            <Divider/>
            <h5 className='copyright'>Copyright 2023 <span>Portfolio Website.</span> All Right Reserved.</h5>
        </div>
    )
}

export default Footer;