import React from "react";
import '../styles/about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const aboutText = [
  'Our Values',
  'Commitment to Excellence',
  'We are dedicated to delivering exceptional results and exceeding our clients` expectations.',
  'Collaboration and Transparency',
  'We believe in open communication and a collaborative approach to ensure our clients are fully involved in the process.',
  'Innovation and Creativity',
  'We constantly strive to stay ahead of the curve, exploring new technologies and design trends to deliver innovative solutions.',
  'Our Mission',
  'our mission is to empower our clients with innovative digital solutions that drive their success. We believe in a collaborative approach, working closely with our clients to understand their unique needs and deliver tailored, high-quality results.'
];

const RightPanel = () => {

  return(
    <div className="container-right">
      <div className="about-text-container">
        <span>{aboutText[0]}</span>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <span>{aboutText[1]}</span>
            <span>{aboutText[2]}</span>
          </div>
        </div>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <span>{aboutText[3]}</span>
            <span>{aboutText[4]}</span>
          </div>
        </div>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <span>{aboutText[5]}</span>
            <span>{aboutText[6]}</span>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <span>{aboutText[7]}</span>
        <span>{aboutText[8]}</span>
      </div>
    </div>
  )
}

export default RightPanel;