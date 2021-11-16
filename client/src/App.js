import React, { Component } from "react";
import Navbar from "./Components/Navbar/navbar.jsx";
import MapBox from "./Components/Mapbox/mapbox.jsx";
import Home from "./Components/Home/Home.jsx";
import SignUp from "./Components/SignUp/SignUp.jsx";
import { Routes, Route, link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/mapbox" element={<MapBox />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;

/*

<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>

*/
