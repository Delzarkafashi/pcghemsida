import React from 'react';
import './Coaching.css';
import NewsBild from './newsbild.jpg';
import { Link } from "react-router-dom"
import coach from "./PI/Coaching.jpg"

export default function coaching() {
    return (
      <div className='wrapper'>
        <div className="home-div">
          <p className="home-par">
            <h3>Coaching</h3>
            Coachingtjänster är avgörande för personlig och professionell
            utveckling genom att erbjuda skräddarsydd vägledning och stöd.
            Oavsett om det gäller karriär, kompetensutveckling eller livsbalans,
            ger coaching en strukturerad metod för att nå mål. Genom aktivt
            lyssnande och konstruktiv feedback hjälper coacher klienter att
            identifiera styrkor och övervinna utmaningar. Denna interaktion
            främjar självmedvetenhet och ger en känsla av riktning, vilket
            befäster individens förmåga att navigera genom livets komplexiteter
            för kontinuerlig tillväxt och framgång.
          </p>
          <img src={coach} alt="customer-service" width={500} height={320} />
        </div>

        <div className="home-div2">
          <p className="home-par">
            <h3>Coaching</h3>
            Coachingtjänster är avgörande för personlig och professionell
            utveckling genom att erbjuda skräddarsydd vägledning och stöd.
            Oavsett om det gäller karriär, kompetensutveckling eller livsbalans,
            ger coaching en strukturerad metod för att nå mål. Genom aktivt
            lyssnande och konstruktiv feedback hjälper coacher klienter att
            identifiera styrkor och övervinna utmaningar. Denna interaktion
            främjar självmedvetenhet och ger en känsla av riktning, vilket
            befäster individens förmåga att navigera genom livets komplexiteter
            för kontinuerlig tillväxt och framgång.
          </p>
          <img src={coach} alt="customer-service" width={500} height={320} />
        </div>

        <div className="home-div3">
          <p className="home-par">
            <h3>Coaching</h3>
            Coachingtjänster är avgörande för personlig och professionell
            utveckling genom att erbjuda skräddarsydd vägledning och stöd.
            Oavsett om det gäller karriär, kompetensutveckling eller livsbalans,
            ger coaching en strukturerad metod för att nå mål. Genom aktivt
            lyssnande och konstruktiv feedback hjälper coacher klienter att
            identifiera styrkor och övervinna utmaningar. Denna interaktion
            främjar självmedvetenhet och ger en känsla av riktning, vilket
            befäster individens förmåga att navigera genom livets komplexiteter
            för kontinuerlig tillväxt och framgång.
          </p>
          <img src={coach} alt="customer-service" width={500} height={320} />
        </div>
      </div>
    );
  }
  
  