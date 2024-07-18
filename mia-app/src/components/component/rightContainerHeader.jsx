import React, { useMemo, useContext, useState, useRef } from "react";
import { ProfileSettings } from "./profileSettings";
import { Link } from "react-router-dom";
import ActiveContext from "../ActiveContext";
import translations from "../../utils/translations";

export function RightContainer () {
  const { language, user } = useContext(ActiveContext); 
  const [isPanelVisible, setIsPanelVisible] = useState(false);


  const translation = useMemo(() => translations[language], [language]);
  const userPanelRef = useRef(null);

  const toggleDisplay = () => {
    setIsPanelVisible((prevVisible) => !prevVisible);
    if (userPanelRef.current) {
      userPanelRef.current.style.display = isPanelVisible ? 'none' : 'flex';
    }
  };

  return (
    <div className="right-container">
    {user ? (
       <div className="user-info">
       <img onClick={toggleDisplay} src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="" />
       <div className="user-panel" ref={userPanelRef}>
         <div className="user-info">
           <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="" />
           <h3>{user.username}</h3>
         </div>
          <ProfileSettings/>
        </div>
      </div>
    ) : (
      <Link to='/register'>
        <div className="sign">
          {translation.sign}
        </div>
      </Link>
    )}
  </div>
  )
}