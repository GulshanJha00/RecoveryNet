import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="banner">
      <div className="navname">
        <h1>RecoveryNet</h1>
      </div>
      <div className="buttons">
        <Link to="/">Home</Link>
        <Link to="/details">How to Use?</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="dropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          {dropdownOpen ? "Close" : "Menu"}
        </button>
        <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/details">How to Use?</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
