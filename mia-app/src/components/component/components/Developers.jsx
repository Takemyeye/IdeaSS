import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode, faInfo } from '@fortawesome/free-solid-svg-icons';

const Developers = () => {
  const [hoverInfoVisible, setHoverInfoVisible] = useState(false);
  const [hoverInfoLevelVisible, setHoverInfoLevelVisible] = useState(false);

  const developersBackgroundRef = useRef(null);

  const handleInfoClick = () => {
    setHoverInfoVisible(!hoverInfoVisible);
    if (hoverInfoLevelVisible) {
      setHoverInfoLevelVisible(false);
    }
  };

  const levelClick = () => {
    setHoverInfoLevelVisible(!hoverInfoLevelVisible);
  };

  const handleClickOutside = (event) => {
    if (developersBackgroundRef.current && !developersBackgroundRef.current.contains(event.target)) {
      setHoverInfoVisible(false);
      setHoverInfoLevelVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const developers = ['Developers'];
  const developersData = [
    { name: 'Davide Pelucchini', experience: 'Ex: 1 month', level: '5', portfolioLink: '' },
    { name: 'Leandro Fonti', experience: 'Ex: 1 month', level: '5', portfolioLink: '' },
    { name: 'Oleh Bratok', experience: 'Ex: 1 year', level: '5', portfolioLink: 'https://soulswap-portfolio.netlify.app/' },
    { name: 'Mark Herasymchuk', experience: 'Ex: 3 years', level: '5', portfolioLink: 'https://mireg-v.github.io/Web-Resume/' },
  ];

  developersData.sort((a, b) => parseInt(b.level) - parseInt(a.level));

  const levelDescriptions = [
    { level: 1, text: 'Basic web development skills. Typically perform tasks under the guidance of more experienced colleagues.' },
    { level: 2, text: 'Deeper understanding of core development concepts. Can work independently on simple projects.' },
    { level: 3, text: 'Experienced professionals with a strong grasp of application architecture and best development practices. Can tackle complex tasks and deliver high-quality products.' },
    { level: 4, text: 'Developers who may temporarily not meet client expectations or quality standards. Additional support or training may be required.' },
    { level: 5, text: 'Experts with extensive development experience, demonstrating high competence and ability to work independently. Often sought for handling key projects.' }
  ];
  levelDescriptions.sort((a, b) => parseInt(b.level) - parseInt(a.level));

  const developersInfo = [
    { text: 'Initial Level: All developers start at level but they always have the opportunity to advance.'},
    { text: 'All orders, wishes that will be written to us by mail |mellovan@gmail.com| are handled personally by the Belance team'},
    { text: 'Maximum level: 5, which indicates the highest quality of work and speed of development.'},
    { text: 'Level Reduction: Levels decrease with client dissatisfaction.'},
    { text: 'Clients can choose developers for simple pages based on levels and portfolio. If you need a full-fledged application like "online store..." then Belance Team will handle this order'}
  ];

  return (
    <div className="developers-background" ref={developersBackgroundRef}>
      <div className={`hover-info ${hoverInfoVisible ? 'visible' : ''}`}>
        <div className="developers-information">
          <span> Developers in Belance </span>
            {developersInfo.map(desc => (
              <div className="classification">
                <p key={desc.level} className={`level level-${desc.level}`}>{desc.level}</p>
                {desc.text}
              </div>
            ))}
        </div>
      </div>
      <div className={`hover-info ${hoverInfoLevelVisible ? 'visible' : ''}`}>
        <div className="developers-information">
          <span> Level System </span>
          {levelDescriptions.map(desc => (
            <div className="classification">
              <p key={desc.level} className={`level level-${desc.level}`}>{desc.level}</p>
              {desc.text}
            </div>
          ))}
        </div>
      </div>
      <div className="developers">
        <div className="home-title">
          {developers[0]}
          <div className="home-logo"></div>
          <div className="info" onClick={handleInfoClick}> <FontAwesomeIcon icon={faInfo} /> </div>
        </div>
        <div className="developers-container">
          {developersData.map((developer, index) => (
            <div className="developer" key={index}>
              <div className="avatar"> <FontAwesomeIcon icon={faUser} /> </div>
              <div className="name"> {developer.name} </div>
              <div className="workExperience"> {developer.experience} </div>
              <Link to={developer.portfolioLink} className="works"> Portfolio <FontAwesomeIcon icon={faCode} /></Link>
              <div className={`level level-${developer.level}`} onClick={levelClick}>lvl {developer.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;