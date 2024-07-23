import React, { useContext } from "react";
import Header from './Header';
import ActiveContext from "./ActiveContext";
import AuthComponent from "../private/AuthComponent"
import './styles/Landing.scss';
import { LandingUnit } from "./component/landingUnit/landingUnit";

const Landing = () => {
  const { user } = useContext(ActiveContext);

  const avatarUrl = user ? `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png` : null;

  return (
    <>
      <AuthComponent />
      <Header
        hideNavigation={true}
        noJustify={true}
        hideBars={true}
        user={user && user.username}
        avatarUrl={avatarUrl}/>
      <LandingUnit/>
    </>
  );
};

export default Landing;