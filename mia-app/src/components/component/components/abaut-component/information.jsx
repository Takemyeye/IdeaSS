import React,{ useMemo, useContext}from "react";
import { Link } from "react-router-dom";
import { ComentUnit } from "./coments/comentUnit";
import ActiveContext from "../../../ActiveContext";
import translations from "../../../../utils/translations";

const Information = () => {

const { language } = useContext(ActiveContext);

const translation = useMemo(() => translations[language], [language]);
  return(
    <div className="information-container">
      <span> {translation.clientsTitle} </span>
      <div className="bubna">
        <ComentUnit
          clientQuote={translation.client1Quote}
          clientName={translation.client1Name}
          clientCompany={translation.client1Company} />
        <ComentUnit
          clientQuote={translation.client2Quote}
          clientName={translation.client2Name}
          clientCompany={translation.client2Company} />
        <ComentUnit
          clientQuote={translation.client3Quote}
          clientName={translation.client3Name}
          clientCompany={translation.client3Company} />
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