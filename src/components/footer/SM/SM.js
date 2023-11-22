// SM.js
import React from 'react';
import './SM.css';
import linkedin from "./imageSM/linkedinBild1.png";
import facebookImage from "./imageSM/facebook-bild1.png";
import instagramImage from "./imageSM/instagram-bild1.png";


class SM extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Ni kan nå oss:</h1>
        <div className="container-sm">
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>

          <a href="https://www.facebook.com/din-facebook-profil" target="_blank">
            <img src={facebookImage} alt="" />
          </a>

          <a href="https://www.instagram.com/din-instagram-profil" target="_blank">
            <img src={instagramImage} alt="" />
          </a>
        </div>
      </div>
    );
  }
}

export default SM;
