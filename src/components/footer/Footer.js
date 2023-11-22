import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          {/* colomn1 */}
          <div className="col">
            <h1>THICC MEME INC</h1>
            <ul className="list-unstyled">
              <li>andress</li>
              <li>Storgatan 3 , linköping</li>
              <li>123 33, sweden</li>
              <li>info@pcg.se</li>
              <li>telfon </li>
              <li>070-44444444</li>
            </ul>
          </div>
          {/* colomn2 */}
          <div className="col">
            <h1>WWWWWWWWW</h1>
            <ul className="list-unstyled">
              <li>andress</li>
              <li>Storgatan 3 , linköping</li>
              <li>123 33, sweden</li>
              <li>info@pcg.se</li>
              <li>telfon </li>
              <li>070-44444444</li>
            </ul>
          </div>
          {/* colomn3 */}
          <div className="col">
            <h1>555555</h1>
            <ul className="list-unstyled">
              <li>andress</li>
              <li>Storgatan 3 , linköping</li>
              <li>123 33, sweden</li>
              <li>info@pcg.se</li>
              <li>telfon </li>
              <li>070-44444444</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            © 2021 THICC MEME INC. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
