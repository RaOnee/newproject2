// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

  const navbarStyle2 = {
    backgroundColor: 'red',
    color: 'white',
    padding: '260px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundImage: 'url("https://png.pngtree.com/background/20210711/original/pngtree-2-5d-axonometric-business-desk-work-banner-picture-image_1126034.jpg")',
    backgroundSize: 'cover',
  };

  const navbarStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    marginRight: '20px',
  };
  
  return (
    <div>
    <nav style={navbarStyle}>
    <ul style={{ listStyleType: 'none', display: 'flex', padding: 10 }}>
      <li>
        <Link to="/contacts" style={linkStyle}>Contact List</Link>
      </li>
      <li>
        <Link to="/charts-map" style={linkStyle}>Charts & Map</Link>
      </li>
    </ul>
  </nav>
  <div style={navbarStyle2}></div>
 </div>
  );
};

export default Navbar;
