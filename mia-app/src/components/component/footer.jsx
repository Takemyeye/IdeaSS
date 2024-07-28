import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-block">
        <h2>© 2024 Belance</h2>
        <div className="footerContainer">
          <Link to="/maket">
            <h3>Maket Designs</h3>
          </Link>
          <h3>Developers</h3>
          <h3>Privacy Policy</h3>
          <h3>Terms of Service</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer;