import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doxbin">Doxbin</Link></li>
        <li><Link to="/ipcs-host">IPCS'Host</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
