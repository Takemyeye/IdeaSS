import React from "react";
import '../styles/Home.css';
import Belance from './components/Belance';

const LeftPanel = () => {

  return (
   <div className="leftPanel">
    <Belance/>
      <div className="description-container">
          <div className="description-background-left">
            <div className="description">

            </div>
          </div>
          <div className="description-background-right">
            <div className="description">
              
            </div>
          </div>
      </div>
   </div>
  );
};

export default LeftPanel;