import React from "react";
import "./styles/Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="logo-title">
          <Link to={"/"}>
            <div className="logo"></div>
          </Link>
          <Link to={"/"}>
            <div className="title">Belance</div>
          </Link>
        </div>
        <div className="navigation">
          <div className="left-container">About</div>
          <div className="left-container">Contact Us</div>
          <div className="left-container"> Works <p>
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
          <div className="left-container"> Social <p>
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
          <div className="left-container"> Partner <p>
              <FontAwesomeIcon icon={faArrowRight} />
            </p>
          </div>
        </div>
      </div>
      <div className="right-container">
        <div className="start">Get Started</div>
      </div>
    </div>
  );
};

export default Header;
