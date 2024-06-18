import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCode } from '@fortawesome/free-solid-svg-icons';

const Developers = () => {
  
  const developers = ['Developers'];
  const developersData = [
    { name: 'Oleh Bratok', experience: 'Ex: 1 years', level: '3', portfolioLink: 'https://soulswap-portfolio.netlify.app/' },
    { name: 'Mark Herasymchuk', experience: 'Ex: 3 years', level: '5', portfolioLink: 'https://mireg-v.github.io/Web-Resume/' },
  ];

  developersData.sort((a, b) => parseInt(b.level) - parseInt(a.level));

  return (
    <div className="developers-background">
      <div className="developers">
        <div className="developers-title">
          {developers[0]}
          <div className="developers-logo"></div>
        </div>
        <div className="developers-container">
          {developersData.map((developer, index) => (
            <div className="developer" key={index}>
              <div className="avatar"> <FontAwesomeIcon icon={faUser} /> </div>
              <div className="name"> {developer.name} </div>
              <div className="workExpirience"> {developer.experience} </div>
              <Link to={developer.portfolioLink} className="works"> Portfolio <FontAwesomeIcon icon={faCode} /></Link>
              <div className={`level level-${developer.level}`}>lvl {developer.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;