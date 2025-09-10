import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"; // import CSS mới

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSubDropdown = () => setIsSubDropdownOpen(!isSubDropdownOpen);

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          FurEver Care
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
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className={`nav-item dropdown ${isDropdownOpen ? "show" : ""}`}>
              <button
                className="nav-link dropdown-toggle btn btn-link"
                onClick={toggleDropdown}
              >
                Shop
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
                <li>
                  <NavLink className="dropdown-item" to="/buy">
                    Pet Food
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="./pages/cheatandchew">
                    Cheat and Chew
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="./pages/pettoys">
                    Pet Toys
                  </NavLink>
                </li>

                <li>
                  <NavLink className="dropdown-item" to="./pages/petgrooming">
                    Pet Grooming
                  </NavLink>
                </li>


                <li
                  className={`dropdown-submenu ${
                    isSubDropdownOpen ? "show" : ""
                  }`}
                >
                  <button
                    className="dropdown-item dropdown-toggle btn btn-link"
                    onClick={toggleSubDropdown}
                  >
                    Dropdown
                  </button>
                  <ul
                    className={`dropdown-menu ${
                      isSubDropdownOpen ? "show" : ""
                    }`}
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/submenu1">
                        Sub Menu One
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/submenu2">
                        Sub Menu Two
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/submenu3">
                        Sub Menu Three
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
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
