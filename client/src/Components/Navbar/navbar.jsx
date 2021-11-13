import React, { Component } from "react";
import "./navbar.css";
import logo from "./maps-icon.png";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <img className="img" src={logo} height="30" alt=""></img>
      </div>
    );
  }
}

export default Navbar;
