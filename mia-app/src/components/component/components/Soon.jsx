import React from "react";
import { Link } from "react-router-dom";
import './styles/Soon.css'

const Soon = () => {

  const video = "video/landingVideo.mp4";

  return(
      <div className="soon">
        <div className="soon-text"> Coming Soon </div> 
        <div className="start-index">
          <Link to={'/home'}>
            <div className="start"> Go Home </div>
          </Link>
        </div>
        <video src={video} autoPlay loop muted playsInline></video>
        <div className="video-overlay"></div>
        <div className="video-overlay-top"></div>
      </div>
  )
}

export default Soon;