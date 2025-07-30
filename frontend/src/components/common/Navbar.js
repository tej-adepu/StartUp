import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/components/Navbar.css';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">Validator</div>
    <ul className="navbar-links">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/validate">Submit</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Navbar;
