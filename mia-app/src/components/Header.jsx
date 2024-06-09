import React from "react";
import { Link } from "react-router-dom";
import './styles/Header.css'

const Header = () => {
  return (
    <div className="header">
      <div className="conteiner">    
        <div className="logo-title">
          <Link to={'/'}>
            <div className="logo"></div>
          </Link>
          <Link to={'/'}>
            <div className="title">Idea</div>
          </Link>
        </div>
          <div className="navigation">
            <div className="left-conteiner">Abaut</div>
              <div className="left-conteiner">Works</div>
                <div className="left-conteiner">Socium</div>
                  <div className="left-conteiner">Contact us</div>
                    <div className="left-conteiner">Partner</div>
          </div>
      </div>
        <div className="right-conteiner">Get Started</div>
    </div>
  );
};

export default Header;