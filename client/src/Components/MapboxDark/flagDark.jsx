import React, { Component } from "react";
import "./mapboxDark.css";

class FlagDark extends Component {
  render() {
    return (
      <svg
        className="marker"
        style={{
          width: "24px",
          height: "24px",
        }}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
      </svg>
    );
  }
}

export default FlagDark;
