import React,{ useMemo, useContext}from "react";
import '../styles/about.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";

const Information = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);
  return(
    <div className="information-container">
      <span> {translation.clientsTitle} </span>
      <div className="bubna">
        <div className="coments">
          <div className="clients-container">
            <div className="quoteRight">
              <FontAwesomeIcon icon={faQuoteRight}/>
            </div>
            <span> {translation.client1Quote} </span>
          </div>
          <div className="clients">
            <span> {translation.client1Name} </span>
            <span> {translation.client1Company} </span>
          </div>
        </div>
        <div className="coments">
          <div className="clients-container">
            <div className="quoteRight">
              <FontAwesomeIcon icon={faQuoteRight}/>
            </div>
            <span> {translation.client2Quote} </span>
          </div>
          <div className="clients">
            <span> {translation.client2Name} </span>
            <span> {translation.client2Company} </span>
          </div>
        </div>
        <div className="coments">
          <div className="clients-container">
            <div className="quoteRight">
              <FontAwesomeIcon icon={faQuoteRight}/>
            </div>
            <span> {translation.client3Quote} </span>
          </div>
          <div className="clients">
            <span> {translation.client3Name} </span>
            <span> {translation.client3Company} </span>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <h1>{translation.readyToGetStarted}</h1>
        <span>{translation.contactUsText}</span>
        <div className="contact-us">
          <Link to="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com">
            <div className="contact">{translation.contactUsButton}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Information;