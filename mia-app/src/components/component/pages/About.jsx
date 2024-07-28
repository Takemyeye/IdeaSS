import React from "react";
import './styles/about.scss';
import Header from "../../Header";
import LeftPanel from "./abaut-component/leftPanel";
import RightPanel from "./abaut-component/rightPanel";
import Information from "./abaut-component/information";
import Footer from "../footer";

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
      <Footer/>
    </>
  )
}

export default About;