import React, { useState } from "react";
import "./Navbar.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Algooz</div>
      <div className="menu-icon" onClick={toggleMenu}>
      <i className={isOpen ? "fas fa-bars" : "fas fa-ellipsis-v"}></i>
      </div>
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
          <a href="/algorithms" className="nav-link">Algorithms</a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">About</a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
