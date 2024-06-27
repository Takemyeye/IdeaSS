import React from "react";
import '../styles/about.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const clinets = [
  'What Our Clients Say',
  '"We are thrilled with our partnership with Belance! Their professionalism and creative approach helped us build a website that perfectly reflects our unique style and the atmosphere of our store."',
  'Andrea Granati',
  'Black Mama Store',
  '"Working with Belance was a game-changer for our online presence. Their attention to detail and commitment to delivering top-notch results surpassed our expectations."',
  'John Doe',
  'XYZ Company',
  '"Belance not only designed a stunning website for us but also provided invaluable insights into digital marketing strategies. Highly recommended!"',
  'Jane Smith',
  'ABC Organization'
]

const aboutText = [
  'Ready to get started?',
  "If you're interested in working with us, we'd love to hear from you. Contact us today to discuss your project and how we can help you achieve your digital goals.",
  'Contact Us'
]

const Information = () => {

  return(
    <div className="information-container">
      <span> {clinets[0]} </span>
      <div className="bubna">
        <div className="coments">
          <div className="clients-container">
            <div className="quoteRight">
              <FontAwesomeIcon icon={faQuoteRight}/>
            </div>
            <span> {clinets[1]} </span>
          </div>
          <div className="clients">
            <span> {clinets[2]} </span>
            <span> {clinets[3]} </span>
          </div>
        </div>
        <div className="coments">
          <div className="clients-container">
            <div className="quoteRight">
              <FontAwesomeIcon icon={faQuoteRight}/>
            </div>
            <span> {clinets[4]} </span>
          </div>
          <div className="clients">
            <span> {clinets[5]} </span>
            <span> {clinets[6]} </span>
          </div>
        </div>
        <div className="coments">
          <div className="clients-container">
            <div className="quoteRight">
              <FontAwesomeIcon icon={faQuoteRight}/>
            </div>
            <span> {clinets[7]} </span>
          </div>
          <div className="clients">
            <span> {clinets[8]} </span>
            <span> {clinets[9]} </span>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <span>{aboutText[0]}</span>
        <span>{aboutText[1]}</span>
        <div className="contact-us">
          <Link to="https://mail.google.com/mail/u/0/#search/mellovan2005%40gmail.com">
            <div className="contact">{aboutText[2]}</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Information;