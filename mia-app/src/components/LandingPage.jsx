import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Landing.css';
import Header from './Header';

const Landing = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 1500); 
  };

  const landingText = [
    'Innovating your success: Belance shapes your business future with top-tier web applications and creative solutions.'
  ];

  const video = "video/landingVideo.mp4";

  return (
    <>
      <Header hideNavigation={true} noJustify={true} hideBars={true}/>
      <div className={`main ${fadeOut ? 'fade-out' : ''}`}>
        <div className="landing-video">
          <video src={video} autoPlay loop muted playsInline></video>
          <div className="video-overlay"></div>
          <div className="video-overlay-top"></div>
        </div>
        <div className="landing-start">
          <div className="text"> Belance </div>
          <div className="landing-text"> {landingText[0]} </div>
          <div className="start" onClick={handleStartClick}> Get Started </div>
        </div>
      </div>
    </>
  );
};

export default Landing;