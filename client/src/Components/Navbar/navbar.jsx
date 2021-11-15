import React, { Component } from "react";
import "./navbar.css";
import logo from "./maps-icon.png";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img className="img" src={logo} height="30" alt=""></img>
        <Link to="/">
          <i className="material-icons backtext">Home</i>
        </Link>
        <Link to="/mapbox">
          <i className="material-icons backtext">MapBox</i>
        </Link>
      </div>
    );
  }
}

export default Navbar;
