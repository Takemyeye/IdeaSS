import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

export function ComentUnit({clientQuote, clientName, clientCompany }) {
  return (
    <div className="coments">
    <div className="clients-container">
      <div className="quoteRight">
        <FontAwesomeIcon icon={faQuoteRight}/>
      </div>
      <span> {clientQuote} </span>
    </div>
    <div className="clients">
      <span> {clientName} </span>
      <span> {clientCompany} </span>
    </div>
  </div>
  );
};