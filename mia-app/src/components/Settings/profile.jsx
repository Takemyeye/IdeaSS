import React from "react";
import "./styles/profile.scss";
import Header from "../Header";
import ProfileData from "./profileData";
import NotificationBlock from "./notificationBlock";
import Coment from "./coment";

const video = "video/profile-video.mp4";

export function Profile() {


  return (
    <>
      <Header />
      <div className="wrapper">
      <div className="profile-video">
          <video 
            src={video}
            autoPlay
            loop
            muted
            playsInline
            preload="auto">
          </video>
        </div>
        <ProfileData/>
        <NotificationBlock/>
        <Coment/>
      </div>
    </>
  );
}
