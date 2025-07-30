import React from 'react';
import '../../styles/components/Modal.css';

const Modal = ({ title, content, onClose }) => (
  <div className="modal-overlay">
    <div className="modal">
      <h3>{title}</h3>
      <p>{content}</p>
      <button className="btn" onClick={onClose}>Close</button>
    </div>
  </div>
);

export default Modal;
