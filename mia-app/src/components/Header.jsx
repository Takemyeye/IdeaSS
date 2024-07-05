import React, { useContext, useState, useMemo, useEffect, useRef } from "react";
import "./styles/Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { HeaderUnit, Navigation } from "./component/headerUnit";
import { LanguageUnit } from "./component/languageUnit";
import translations from '../utils/translations';
import ActiveContext from "./ActiveContext";

const img = ['img/Italy.svg', 'img/England.svg', 'img/Russia.svg', 'img/Ukraine.svg', 'img/Poland.svg'];

const Header = ({ hideNavigation, noJustify, hideBars }) => {
  const [navigationVisible, setNavigationVisible] = useState(false);
  const [languageMenuVisible, setLanguageMenuVisible] = useState(false);
  const { language, user } = useContext(ActiveContext);

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
            <HeaderUnit 
              link='/about' 
              text={translation.about}/>
            <HeaderUnit 
              link="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com" 
              text={translation.contactUs}/>
            <div className="left-container" onClick={() => setLanguageMenuVisible(!languageMenuVisible)}> 
              {translation.language} 
            </div>
            <Navigation text={translation.social}/>
            <Navigation text={translation.partner}/>
          </div>
        )}
      </div>
      <div className="right-container">
        {user ? (
          <div className="user-info">
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt={`Аватар пользователя ${user.username}`} />
            <h3>{user.username}</h3>
          </div>
        ) : (
          <Link to='/register'>
            <div className="sign">
              {translation.sign}
            </div>
          </Link>
        )}
      </div>
      <div className={`changeLanguage ${languageMenuVisible ? 'show' : ''}`} ref={languageMenuRef}>
        <div className="language-container">
          <span onClick={() => setLanguageMenuVisible(false)}>
            <FontAwesomeIcon icon={faXmark} /> 
            {translation.language}
          </span>
          <LanguageUnit
            img={img[0]}
            text={translation.it}
            language='it'/>
          <LanguageUnit
            img={img[1]}
            text={translation.en}
            language='en'/>
          <LanguageUnit
            img={img[2]}
            text={translation.ru}
            language='ru'/>
          <LanguageUnit
            img={img[3]}
            text={translation.uk}
            language='uk'/>
          <LanguageUnit
            img={img[4]}
            text={translation.pl}
            language='pl'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
