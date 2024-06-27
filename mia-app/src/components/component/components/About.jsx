import React from "react";
import './styles/about.css';
import Header from "../../Header";
import LeftPanel from "./abaut-component/leftPanel";
import RightPanel from "./abaut-component/rightPanel";
import Information from "./abaut-component/information";

const About = () => {

  return(
    <>
      <Header/>
      <div className="main-container">
        <div className="main">
          <LeftPanel/>
          <RightPanel/>
        </div>
        <Information/>
      </div>
    </>
  )
}

export default About;