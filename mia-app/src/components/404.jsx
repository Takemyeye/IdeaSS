import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Landing.scss';
import Header from './Header';

const NotFound = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 1500); 
  };

  const landingText = [
    'Sorry, the page you are looking for could not be found. It might have been removed, had its name changed, or is temporarily unavailable.'
  ];

  const video = "video/landingVideo.mp4";

  return (
    <>
      <Header />
      <div className={`landing-main  ${fadeOut ? 'fade-out' : ''}`}>
        <div className="landing-video">
          <video src={video} autoPlay loop muted playsInline></video>
          <div class="video-overlay"></div>
          <div class="video-overlay video-overlay--top"></div>
        </div>
        <div className="landing-start">
          <h1> 404 | Page Not Found </h1>
          <div className="landing-text"> {landingText[0]} </div>
          <div className="start" onClick={handleStartClick}> Go Home </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
