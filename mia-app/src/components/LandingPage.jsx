import React, { useState, useMemo, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './styles/Landing.scss';
import Header from './Header';
import translations from '../utils/translations';
import ActiveContext from "./ActiveContext";
const Client = require('discord-oauth2-api');

const x = new Client({
  clientID: "1258613251705671690",
  clientSecret: "oR-bG5mQmB4_6BYaLxHlzQNLn_vWm3mq", 
  scopes: ['guilds', 'email', 'identify'],
  redirectURI: "http://localhost:3000/home"});

const video = "video/landingVideo.mp4";

const Landing = () => {
  const [user, setUser] = useState(null)
  const { language } = useContext(ActiveContext);

  const translation = useMemo(() => translations[language], [language]);

  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleStartClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home');
    }, 1500); 
  };

  const queryParameters = new URLSearchParams(window.location.search)
  const code = queryParameters.get("code")
  console.log(code)

  useEffect(() => {
    console.log(user)
    if (code && !user) {
      try {
        x.getAccessToken(code).then(async token => {
          const user = await x.getUser(token.accessToken).catch(e => console.log(e))
          setUser(user)
        }).catch(e => console.log(e))
      } catch (error) {
        
      }
    }
  }, [code, user])

  return (
    <>
      <Header hideNavigation={true} noJustify={true} hideBars={true}/>
      <div className={`landing-main ${fadeOut ? 'fade-out' : ''}`}>
        <div className="landing-video">
          <video src={video} autoPlay loop muted playsInline></video>
          <div class="video-overlay"></div>
          <div class="video-overlay video-overlay--top"></div>
        </div>
        {user && <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`}  />}
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
