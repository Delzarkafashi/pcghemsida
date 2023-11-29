import React from "react";
import "./Footer.css";
import SM from './SM/SM.js';
import "../MobileDesign/MobileDesign.css";


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          {/* colomn1 */}
          <div className="col">
            <h1>Contact Info</h1>
            <ul className="list-unstyled">
              <li>Address</li>
              <li>Storgatan 3 , linköping</li>
              <li>123 33, Sweden</li>
              <li><a href="mailto:Delzarkafashi@gmail.com">PSC@gmail.com</a></li>
              <li>Telefon:</li>
              <li><a href="tel:0709224098"> 0709224098</a></li>
            </ul>
          </div>
          {/* colomn2 */}
          <div className="col">
          <SM />
          </div>
          {/* colomn3 */}
          <div className="col">
            <h1>Other</h1>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Webshop Policy</a></li>
              <li><a href="#">Terms&Conditions</a></li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            © 2021 PERFORMANCE COACH&GEAR. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
