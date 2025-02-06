
import React, { useState } from "react";
import "./navbar.css";
import logo from "../assets/numetry logo transparent.png"; // Import logo

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home"); // Track active link

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li className="nav-item">
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              onClick={() => setActive("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#services"
              className={active === "services" ? "active" : ""}
              onClick={() => setActive("services")}
            >
              Services
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              className={active === "about" ? "active" : ""}
              onClick={() => setActive("about")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={() => setActive("contact")}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



