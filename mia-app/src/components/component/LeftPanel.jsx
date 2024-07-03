import React from "react";
import Belance from './components/Belance';
import Description from './components/Description';

const LeftPanel = () => {

  return (
   <div className="leftPanel">
    <Belance/>
     <Description/>
   </div>
  );
};

export default LeftPanel;