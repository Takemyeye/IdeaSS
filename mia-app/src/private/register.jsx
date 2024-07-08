import { useMemo, useContext } from "react";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import '../components/styles/register.scss';
import translations from "../utils/translations";
import ActiveContext from "../components/ActiveContext";

export function Register () {
  const { language } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  const GITHUB_CLIENT_ID = 'Ov23livGOC5F5BsZaTo9';
  const GITHUB_REDIRECT_URI = 'http://localhost:3000';

  return (
    <>
      <Header/>
      <div className="main">
         <div className="container-register">
            <h1>{translation.sign}</h1>
            <h3>{translation.signInText}</h3>
              <div className="auth">
                <a href='https://discord.com/oauth2/authorize?client_id=1258613251705671690&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=guilds+identify+email'> 
                  <div className="login">
                    <div className="signAuth"> <FontAwesomeIcon icon={faDiscord} /> Continue with Discord </div>
                  </div>
                </a>
                <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${encodeURIComponent(GITHUB_REDIRECT_URI)}&scope=user`}>
                  <div className="login">
                    <div className="signAuth"> <FontAwesomeIcon icon={faGithub} /> Continue with GitHub </div>
                  </div>
                </a>
                <div className="login">
                  <div className="lock"> <FontAwesomeIcon icon={faLock} /> </div>
                  <div className="signAuth"> <FontAwesomeIcon icon={faGoogle} /> Continue with Google </div>
                </div>
              </div>      
         </div>
      </div>
    </>
  )
}
