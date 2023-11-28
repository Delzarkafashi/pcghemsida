import React from 'react';
import { Link, useNavigate, useResolvedPath, useMatch } from 'react-router-dom';
import SearchBar from '../SearchBarFolder/SearchBar';
import LogAndSing from '../LogAndSingFolder/LogAndSing';
import '../../MobileDesign/MobileDesign.css';
import './Navbar.css';
import logop from "./logo.jpg"

export default function Navbar() {
  const navigate = useNavigate();

  const handleTitleClick = () => {
    navigate('/');
  };

  return (
    <nav className="nav">
     <Link to="/" id="back-to-top-anchor" onClick={handleTitleClick} 
     style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
     <img src= {logop} alt="" style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px' }} />
     <span style={{ fontSize: '30px' }}>Performance Coach&Gear</span>
     </Link>



      <div className="user-actions">
        <LogAndSing />
      </div>
      <div className="SN">
        <div className="searchBar">
          <SearchBar />
        </div>
        <ul className="nav-bar">
          <CustomLink to="/">Hem</CustomLink>
          <CustomLink to="/product">Produkt</CustomLink>
          <CustomLink to="/coaching">Coaching</CustomLink>
          <CustomLink to="/customerservice">Kundtjänst</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActiv = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActiv ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
