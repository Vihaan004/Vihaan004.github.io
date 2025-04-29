import React from "react";
import "./Navbar.css"; // Styles for the navbar

export default function Navbar() {
  return (
    <nav className="navbar">
    {/* <div className="nav-container"> */}
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#blog">blog</a></li>
        <li><a href="#music">music</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    {/* </div> */}
    </nav>
  );
}
