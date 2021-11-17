import React, { Component } from "react";
import Navbar from "./Components/Navbar/navbar.jsx";
import MapBox from "./Components/Mapbox/mapbox.jsx";
import Home from "./Components/Home/Home.jsx";
import { Routes, Route, link } from "react-router-dom";
import "./App.css";
import MapBoxDark from "./Components/MapboxDark/mapboxDark.jsx";
import LogIn from "./Components/Login/Login.jsx";
import Logos from "./Components/Logos/logos.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />{" "}
          <Route exact path="/mapbox" element={<MapBox />} />{" "}
          <Route exact path="/login" element={<LogIn />} />{" "}
          <Route exact path="/mapbox-dark" element={<MapBoxDark />} />{" "}
          <Route exact path="/logos" element={<Logos />} />
        </Routes>{" "}
      </div>
    );
  }
}

export default App;

/*

<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>

*/
