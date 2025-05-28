import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Styles for the navbar

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#experience">experience</a></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><a href="#music">music</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  );
}
