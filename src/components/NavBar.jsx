import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import logo from "./assets/unnamed (3).png";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // theo tên menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleDropdown = (menuName) => {
    if (openDropdown === menuName) {
      setOpenDropdown(null); 
    } else {
      setOpenDropdown(menuName); 
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="FurEver Care Logo" className="logo-img" />
          <span className="brand-text ms-2">FurEver Care</span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">

            {/* About */}
            <li className="nav-item">
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                About Us
              </NavLink>
            </li>

            {/* Pet Care Sections */}
            <li className={`nav-item dropdown ${openDropdown === "petcare" ? "show" : ""}`}>
              <button className="nav-link dropdown-toggle btn btn-link" onClick={() => handleDropdown("petcare")}>
                Pet Care
              </button>
              <ul className={`dropdown-menu ${openDropdown === "petcare" ? "show" : ""}`}>
                <li><NavLink className="dropdown-item" to="/pet-profile">Pet Profile</NavLink></li>
                <li><NavLink className="dropdown-item" to="/feeding-guide">Feeding Guide</NavLink></li>
                <li><NavLink className="dropdown-item" to="/grooming-videos">Grooming Videos</NavLink></li>
                <li><NavLink className="dropdown-item" to="/health-tips">Health Tips</NavLink></li>
                <li><NavLink className="dropdown-item" to="/training-tips">Training Tips</NavLink></li>
              </ul>
            </li>

            {/* Products */}
            <li className={`nav-item dropdown ${openDropdown === "products" ? "show" : ""}`}>
              <button className="nav-link dropdown-toggle btn btn-link" onClick={() => handleDropdown("products")}>
                Products
              </button>
              <ul className={`dropdown-menu ${openDropdown === "products" ? "show" : ""}`}>
                <li><NavLink className="dropdown-item" to="/food">Dog/Cat Food</NavLink></li>
                <li><NavLink className="dropdown-item" to="/toys">Toys</NavLink></li>
                <li><NavLink className="dropdown-item" to="/grooming">Grooming Essentials</NavLink></li>
                <li><NavLink className="dropdown-item" to="/bedding">Bedding & Apparel</NavLink></li>
                <li><NavLink className="dropdown-item" to="/supplements">Health Supplements</NavLink></li>
              </ul>
            </li>

            {/* Emergency */}
            <li className="nav-item">
              <NavLink to="/emergency" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Emergency Help
              </NavLink>
            </li>

            {/* Veterinarians */}
            <li className={`nav-item dropdown ${openDropdown === "vets" ? "show" : ""}`}>
              <button className="nav-link dropdown-toggle btn btn-link" onClick={() => handleDropdown("vets")}>
                Veterinarians
              </button>
              <ul className={`dropdown-menu ${openDropdown === "vets" ? "show" : ""}`}>
                <li><NavLink className="dropdown-item" to="/vet-profile">Profiles</NavLink></li>
                <li><NavLink className="dropdown-item" to="/vet-times">Time Slots</NavLink></li>
                <li><NavLink className="dropdown-item" to="/vet-cases">Case Studies</NavLink></li>
              </ul>
            </li>

            {/* Pet Shelter */}
            <li className={`nav-item dropdown ${openDropdown === "shelter" ? "show" : ""}`}>
              <button className="nav-link dropdown-toggle btn btn-link" onClick={() => handleDropdown("shelter")}>
                Pet Shelter
              </button>
              <ul className={`dropdown-menu ${openDropdown === "shelter" ? "show" : ""}`}>
                <li><NavLink className="dropdown-item" to="/adoption">Adoption</NavLink></li>
                <li><NavLink className="dropdown-item" to="/gallery">Gallery</NavLink></li>
                <li><NavLink className="dropdown-item" to="/success-stories">Success Stories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/events">Events</NavLink></li>
                <li><NavLink className="dropdown-item" to="/shelter-contact">Shelter Contact</NavLink></li>
              </ul>
            </li>

            {/* Feedback */}
            <li className="nav-item">
              <NavLink to="/feedback" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Feedback
              </NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
                Contact Us
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

