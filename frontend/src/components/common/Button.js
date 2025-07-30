import React from 'react';
import '../../styles/components/Button.css';

const Button = ({ children, type = "button", onClick, className }) => (
  <button type={type} onClick={onClick} className={`btn ${className || ''}`}>
    {children}
  </button>
);

export default Button;
