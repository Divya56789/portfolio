import React, { useState } from 'react';
import './navbar.css';
import pic from '../../assets/Mine.png';

const Menu = ({ scrollToSection, sectionRef1, sectionRef2, sectionRef3 }) => {
    return (
        <div>
            <ul>
                <li className='home'>Home</li>
                <li>Resume</li>
                <li onClick={() => scrollToSection(sectionRef1)}>About</li>
                <li onClick={() => scrollToSection(sectionRef2)}>Work Process</li>
                <li onClick={() => scrollToSection(sectionRef3)}>Projects</li>
            </ul>
        </div>
    )
}

function Navbar({ scrollToSection, sectionRef1, sectionRef2, sectionRef3, sectionRef4 }) {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='navbar'>
            <div className="navbar__content">
                <div className="website__navbar">
                    <div className="avatar">
                        <img src={pic} alt="pic" />
                    </div>
                    <div className="navbar__menu">
                        <Menu scrollToSection={scrollToSection} sectionRef1={sectionRef1} sectionRef2={sectionRef2} sectionRef3={sectionRef3} />
                    </div>
                    <div className="navbar__button">
                        <button onClick={() => scrollToSection(sectionRef4)}>Contact</button>
                    </div>
                </div>
                <div className="mobile__navbar">
                    <div className="avatar">
                        <img src={pic} alt="pic" />
                    </div>
                    {toggleMenu ? <button className="close" onClick={() => setToggleMenu(false)}>X</button> : <button className='menu' onClick={() => setToggleMenu(true)}>Menu</button>}
                    {toggleMenu && <div className='menu__container'>
                        <Menu scrollToSection={scrollToSection} sectionRef1={sectionRef1} sectionRef2={sectionRef2} sectionRef3={sectionRef3} />
                    </div>
                    }
                </div>

            </div>

        </div>
    )
}

export default Navbar;