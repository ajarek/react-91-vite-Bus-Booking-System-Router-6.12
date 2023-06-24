import React from 'react';
import './Modal.css';

const Modal = ({ amount, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you for your payment!</h2>
        <p>Transaction amount: {amount}</p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
