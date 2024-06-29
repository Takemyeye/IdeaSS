import React, { useState, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Landing.css';
import Header from './Header';
import translations from '../utils/translations';
import ActiveContext from "./ActiveContext";

const landingText = [
  'Innovating your success: Belance shapes your business future with top-tier web applications and creative solutions.'
];

const video = "video/landingVideo.mp4";

const Landing = () => {
  const { language, handleLanguageChange } = useContext(ActiveContext);

  const translation = useMemo(() => translations[language], [language]);

  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 1500); 
  };


  return (
    <>
      <Header hideNavigation={true} noJustify={true} hideBars={true}/>
      <div className={`landing-main ${fadeOut ? 'fade-out' : ''}`}>
        <div className="landing-video">
          <video src={video} autoPlay loop muted playsInline></video>
          <div className="video-overlay"></div>
          <div className="video-overlay-top"></div>
        </div>
        <div className="landing-start">
          <div className="text"> Belance </div>
          <div className="landing-text"> {translation.innovatingSuccess} </div>
          <div className="start" onClick={handleStartClick}> {translation.getStarted} </div>
        </div>
      </div>
    </>
  );
};

export default Landing;