import React, { useContext, useState, useMemo, useEffect, useRef } from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import translations from '../utils/translations';
import ActiveContext from "./ActiveContext";

const img = ['img/Italy.svg', 'img/England.svg', 'img/Russia.svg', 'img/Ukraine.svg', 'img/Poland.svg'];

const Header = ({ hideNavigation, noJustify, hideBars }) => {
  const [navigationVisible, setNavigationVisible] = useState(false);
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const { language, handleLanguageChange } = useContext(ActiveContext);

  const translation = useMemo(() => translations[language], [language]);

  const languageMenuRef = useRef(null);

  const toggleBars = () => {
    setNavigationVisible(!navigationVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNavigationVisible(false);
      } else {
        setNavigationVisible(!hideNavigation);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [hideNavigation]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target)) {
        setLanguageMenuVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header>
      <div className={`container ${noJustify ? 'no-justify-space-evenly' : ''}`}>
        <div className="logo-title">
          <Link to="/home">
            <div className="logo"></div>
          </Link>
          {!hideBars && (
            <div className="menu" onClick={toggleBars}>
              <FontAwesomeIcon icon={faBars} />
            </div>
          )}
        </div>
        {!hideNavigation && (
          <div className="navigation" style={{ display: navigationVisible ? 'flex' : 'none' }}>
            <div className="back" onClick={toggleBars}>
              <FontAwesomeIcon icon={faArrowLeft} /> 
              {translation.back}
            </div>
            <Link to={'/about'}>
              <div className="left-container"> { translation.about } </div>
            </Link>
            <Link to="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com">
              <div className="left-container"> { translation.contactUs } </div>
            </Link>
            <div className="left-container" onClick={() => setLanguageMenuVisible(!languageMenuVisible)}> 
              { translation.language } 
            </div>
            <div className="left-container"> 
              {translation.social} 
              <p><FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
            <div className="left-container"> 
              {translation.partner} 
              <p><FontAwesomeIcon icon={faArrowRight} /></p>
            </div>
          </div>
        )}
      </div>
      <div className="right-container">
        <div className="sign">{translation.sign}</div>
      </div>
      <div className={`changeLanguage ${languageMenuVisible ? 'show' : ''}`} ref={languageMenuRef}>
        <div className="language-container">
          <span onClick={() => setLanguageMenuVisible(false)}>
            <FontAwesomeIcon icon={faXmark} /> 
            {translation.language}
          </span>
          <div className="language-block" onClick={() => handleLanguageChange('it')}>
             {translation.it}
             <img src={img[0]} alt="Italian flag" /> 
          </div>
          <div className="language-block" onClick={() => handleLanguageChange('en')}>           
            {translation.en} 
            <img src={img[1]} alt="English flag" /> 
          </div>
          <div className="language-block" onClick={() => handleLanguageChange('ru')}>              
            {translation.ru} 
            <img src={img[2]} alt="Russian flag" /> 
          </div>
          <div className="language-block" onClick={() => handleLanguageChange('uk')}>              
            {translation.uk} 
            <img src={img[3]} alt="Ukrainian flag" /> 
          </div>
          <div className="language-block" onClick={() => handleLanguageChange('pl')}>              
            {translation.pl} 
            <img src={img[4]} alt="Polish flag" /> 
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;