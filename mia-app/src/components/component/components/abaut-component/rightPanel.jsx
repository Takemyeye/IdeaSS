import React, { useMemo, useContext}from "react";
import '../styles/about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";

const RightPanel = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);

  return(
    <div className="container-right">
      <div className="about-text-container">
        <span>{translation.ourValuesTitle}</span>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <span>{translation.ourValuesCommitment}</span>
            <span>{translation.ourValuesCommitmentText}</span>
          </div>
        </div>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <span>{translation.ourValuesCollaboration}</span>
            <span>{translation.ourValuesCollaborationText}</span>
          </div>
        </div>
        <div className="values-container">
          <FontAwesomeIcon icon={faCheck} />
          <div className="text-container">
            <span>{translation.ourValuesInnovation}</span>
            <span>{translation.ourValuesInnovationText}</span>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <span>{translation.ourMissionTitle}</span>
        <span>{translation.ourMissionText}</span>
      </div>
    </div>
  )
}

export default RightPanel;