import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft, faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ hideNavigation, noJustify, hideBars }) => {
  const [navigationVisible, setNavigationVisible] = useState(false);

  const [barsClicked, setBarsClicked] = useState(false);

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

  const toggleBars = () => {
    setNavigationVisible(!navigationVisible);
    setBarsClicked(!barsClicked);
  };

  return (
    <div className="header">
      <div className={`container ${noJustify ? 'no-justify-space-evenly' : ''}`}>
        <div className="logo-title">
          <Link to={"/home"}>
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
                <FontAwesomeIcon icon={faArrowLeft} /> back
              </div>
              <Link to={'/about'}>
                <div className="left-container"> About </div>
              </Link>
              <Link to="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com">
                <div className="left-container"> Contact Us </div>
              </Link>
              <div className="left-container"> Social <p>
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
              </div>
              <div className="left-container"> Partner <p>
                <FontAwesomeIcon icon={faArrowRight} />
              </p>
              </div>
            </div>
          )}
      </div>
      <div className="right-container">
          <div className="sign"> Sign In </div>
      </div>
    </div>
  );
};

export default Header;