import React, { useState, useEffect } from "react";
// eslint-disable-next-line
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="nav-containter">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>

          <Link to="/logos" className="navbar-logo">
          <i className="fas fa-cogs"></i>
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas-fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/mapbox"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Map
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/mapbox-dark"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Dark Map
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;