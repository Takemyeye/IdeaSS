import React from "react";
import "../styles/Home.css";
import RightPanelBottom from './components/Works_Scroll';
import Developers from './components/Developers';

const RightPanel = () => {

  return (
    <div className="rightPanel">
      <Developers/>
      <RightPanelBottom/>
    </div>
  );
};

export default RightPanel;