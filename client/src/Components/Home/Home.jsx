import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/mapbox">
        <i className="material-icons backtext">Home</i>
      </Link>
    </div>
  );
}

export default Home;
