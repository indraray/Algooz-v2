import React from 'react';
import './StyledDescription.css'; // Import your CSS file
import { MdOutlineTimer } from "react-icons/md";

function StyledDescription() {
  // Function to get current time
  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString();
    return currentTime;
  };

  return (
    <div className="styled-description">
      <div className="left-half">
        
        <p className="current-time"><MdOutlineTimer /> <span id='time'>{getCurrentTime()} </span>Servicing Earth</p>
        <p className="description">Transform abstract algorithms into visual mastery with our
           collaborative expertise.Turn bold ideas into impactful brand experiences </p>
      </div>
      <div className="right-half">
        <p>You are here to<span id='visualize'> Visualize</span> </p>
      </div>
    </div>
  );
}

export default StyledDescription;
