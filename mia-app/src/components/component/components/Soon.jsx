import React from "react";
import './styles/Soon.css'

const Soon = () => {

  const video = "video/landingVideo.mp4";

  return(
      <div className="soon">
        <div className="soon-text"> Coming Soon </div> 
        <video src={video} autoPlay loop muted playsInline></video>
        <div className="video-overlay"></div>
        <div className="video-overlay-top"></div>
      </div>
  )
}

export default Soon;