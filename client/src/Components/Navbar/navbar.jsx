import React, { useState, Component } from "react";
import "./navbar.css";
import logo from "./maps-icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-containter">
          <Link to="/">
            <i class="fas fa-home"></i>
          </Link>

          <Link to="/mapbox" className="navbar-logo">
            <i class="fas fa-globe-americas"></i>
          </Link>

          <div className="menu-icon"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

/*
class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img className="img" src={logo} height="30" alt=""></img>
        
        <Link to="/mapbox">
          <i className="material-icons backtext">MapBox</i>
        </Link>
      </div>
    );
  }
}

export default Navbar;

*/
