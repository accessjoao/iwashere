import React, { Component } from "react";
import Navbar from "./Components/Navbar/navbar.jsx";
import MapBox from "./Components/Mapbox/mapbox.jsx";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MapBox />
      </div>
    );
  }
}

export default App;

/*

<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>

*/
