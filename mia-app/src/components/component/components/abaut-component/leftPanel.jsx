import React,{ useMemo, useContext}from "react";
import '../styles/about.css';
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";


const LeftPanel = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);

  return (
    <div className="container-left">
      <div className="about-text-container">
        <span> {translation.aboutUsTitle} </span>
        <span> {translation.aboutUsDescription} </span>
      </div>
      <div className="about-text-container">
        <span> {translation.ourHistoryTitle} </span>
        <span> {translation.ourHistoryText} </span>
      </div>
    </div>
  );
}

export default LeftPanel;