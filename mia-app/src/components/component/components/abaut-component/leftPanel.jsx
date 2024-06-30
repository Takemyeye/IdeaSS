import React,{ useMemo, useContext}from "react";
import '../styles/about.scss';
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";


const LeftPanel = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="container-left">
      <div className="about-text-container">
        <h1> {translation.aboutUsTitle} </h1>
        <span> {translation.aboutUsDescription} </span>
      </div>
      <div className="about-text-container">
        <h1> {translation.ourHistoryTitle} </h1>
        <span> {translation.ourHistoryText} </span>
      </div>
    </div>
  );
}

export default LeftPanel;