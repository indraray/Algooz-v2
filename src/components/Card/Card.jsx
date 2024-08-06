import React from 'react';
import './Card.css';
import PseudocodeDisplay from '../../PseudoCodeDisplay';


const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
         
        <h2 className="card-title">{title}</h2>
        <p className="card-description"><PseudocodeDisplay pseudocode={description} /></p>

      </div>
    </div>
  );
};

export default Card;
