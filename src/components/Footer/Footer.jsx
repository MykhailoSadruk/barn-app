import React from "react";
import "./style.css";
import logo from "../../assets/Logo.svg";
import envelope from "../../assets/envelopeIcon.svg";
import instagram from "../../assets/instagram logo.svg";
import facebook from "../../assets/facebook logo.svg";
import linkedin from "../../assets/linkedin logo.svg";

export default function Footer() {
  return (
    <div className="footer-container">
      <div>
        <div className="logo footer-logo">
          <img src={logo} alt="logo" />
          <div className="logo-txt">
            <p>MILANO DELIVERY </p>
            <p>QUICK FASHION DELIVERY </p>
          </div>
        </div>
      </div>
      <div className="footer-email">
        <img src={envelope} alt="email" />{" "}
        <a className="email-link" href="mailto:barntechnologies0@gmail.com">
          barntechnologies0@gmail.com
        </a>
      </div>
      <div className="footer-copyright">
        Copyright © BARN srl. Diritti riservati.
      </div>
      <div className="footer-social">
        <a href="https://facebook.com/">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://linkedin.com/">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://instagram.com/">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </div>
  );
}
