import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/pages/NotFound.css";

const NotFound = () => (
  <div className="not-found">
    <h2>404 - Page Not Found</h2>
    <p>Looks like this page doesn't exist.</p>
    <Link to="/" className="btn">Go Home</Link>
  </div>
);

export default NotFound;
