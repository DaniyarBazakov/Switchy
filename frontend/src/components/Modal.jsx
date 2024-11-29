import React,{useState} from 'react';

import '../styles/Modal.css';



// Modal component
const Modal = ({ resource, onClose }) => {
  if (!resource) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{resource.title}</h2>
        <p>{resource.description || 'No description available.'}</p>
        <a href={resource.url} target="_blank" rel="noopener noreferrer">
          Visit resource
        </a>
        <button className="close-modal" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
 export default Modal;