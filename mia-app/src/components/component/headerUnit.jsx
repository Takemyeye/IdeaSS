import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { SocialUnit } from "./social/socialUnit";

export function HeaderUnit({ link, text }) {
  return (
    <Link to={link}>
      <div className="left-container"> {text} </div>
    </Link>
  );
}

export function Navigation({ text, isOpen, onClick }) {
  return (
    <div
      className={`left-container-dropBar ${isOpen ? 'active' : ''}`}
      onClick={onClick}
    >
      {text}
      <p><FontAwesomeIcon icon={faArrowRight} /></p>
      {isOpen && (
        <div className="dropBar">
          <SocialUnit
          icon={faInstagram}
          text="instagram"
          link="https://www.instagram.com/takemyeyehz/"
          />
          <SocialUnit
          icon={faTelegram}
          text="telegram"
          link="https://t.me/takemyeye"
          />
        </div>
      )}
    </div>
  );
}
