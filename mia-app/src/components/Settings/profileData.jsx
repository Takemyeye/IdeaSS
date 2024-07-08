import React, { useContext, useMemo } from "react";
import ActiveContext from "../ActiveContext";
import translations from "../../utils/translations";
import { ProfileUnit } from "./profileUnit";


const ProfileData = () => {
  const { language, user } = useContext(ActiveContext);
  const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="profile-container">
          <div className="profile-title">
            <h1>{translation.profile}</h1>
            <h3>{translation.profileInfo}</h3>
          </div>
          <div className="data-container">
            <ProfileUnit 
              title={translation.name}
              data={user.username}
              className="lock"
            />
            <ProfileUnit 
              title={translation.email}
              data={user.email}
            />
          </div>
          <div className="userAvatar">
            <h3>{translation.profilePicture}</h3>
            <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`} alt="" />
          </div>
        </div>
  )
}

export default ProfileData;