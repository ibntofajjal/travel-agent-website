import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <footer>
          <div className="footer-img">
            <img src={Logo} className="img-fluid" width="100" alt="" />
          </div>
          <div className="nav-components">
            <div className="links">
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/contact">
                Contact
              </Link>
              <Link className="link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
