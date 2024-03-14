import React, { useContext } from 'react';
import GithubLogo from '../../assests/github.svg'
import LinkedInLogo from '../../assests/linkedin-in.svg'
import './hero.css';
import { DataContext } from "../../context/DataContext";




function Hero() {

    const { content, theme } = useContext(DataContext);

    return (
        <div className={`hero-container ${theme === 'dark' ? 'hero-container-dark' : ''}`}>

            <div className="left-section">
                <p className={`hero-name ${theme === 'dark' ? 'hero-name-dark' : ''}`}>
                    {content.profileData.name}
                </p>
                <h1 className={`hero-h1 ${theme === 'dark' ? 'hero-h1-dark' : ''}`}
                >{content.title}</h1>
                <p className={`left-section-info ${theme === 'dark' ? 'left-section-info-dark' : ''}`}>
                    {content.intro}</p>
                <div className="button-container-hero">
                    <button className={`hire-button ${theme === 'dark' ? 'hire-button-dark' : ''}`}>
                        {content.headerData.headerButtons[2]}
                    </button>

                    <a href="https://github.com/cuneytcagriyilmaz" target="_blank">
                        <button className={`github-button ${theme === 'dark' ? 'github-button-dark' : ''}`}>
                            <img src={GithubLogo} />Github
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/cuneytcagriyilmaz/" target="_blank">
                        <button className={`linkedIn-button ${theme === 'dark' ? 'linkedIn-button-dark' : ''}`}>
                            <img src={LinkedInLogo} />Linkedin</button>
                    </a>
                </div>
            </div>
            <div className="right-section">
                <img className={`hero-photo ${theme === 'dark' ? 'hero-photo-dark' : ''}`} src="/Cagri.jpg" />
            </div>
        </div>
    );
}

export default Hero;
