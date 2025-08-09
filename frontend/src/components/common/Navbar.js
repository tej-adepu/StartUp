import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Validator</div>
    <ul className="navbar-links">
      <li><Link to="/">Dashboard</Link></li>
      <li><Link to="/validate">Validation</Link></li>
      <li><Link to="/submit">Submit</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;
