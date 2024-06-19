import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = ({ hideNavigation, noJustify }) => {
  return (

    <div className="header">
      <div className={`container ${noJustify ? 'no-justify-space-evenly' : ''}`}>
        <div className="logo-title">
          <Link to={"/home"}>
            <div className="logo"></div>
          </Link>
          <Link to={"/home"}>
            <div className="title">Belance</div>
          </Link>
        </div>
        {!hideNavigation && (
          <div className="navigation">
            <Link to={'/about'}>
              <div className="left-container"> About </div>
            </Link>
            <div className="left-container"> Contact Us </div>
            <Link to={'/works'}>
              <div className="left-container"> Works </div>
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
        <span> Sign up </span>
      </div>
    </div>
    
  );
};

export default Header;