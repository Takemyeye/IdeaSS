import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export function HeaderUnit ({link, text}) {
  return (
    <Link to={link}>
      <div className="left-container"> { text } </div>
    </Link>
  )
}

export function Navigation ({text}) {
  return (
    <div className="left-container"> 
      {text} 
      <p><FontAwesomeIcon icon={faArrowRight} /></p>
    </div>
  )
}