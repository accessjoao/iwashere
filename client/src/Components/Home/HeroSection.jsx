import React from "react";
import "../../App.css";
import { Button } from "./../Navbar/Button";
import "./HeroSection.css";
import bgVideo from "./video-2.mp4";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src={bgVideo} autoPlay loop muted />
      <h1>I Was Here</h1>
      <p>Double click on the map to log where you've been!</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          SIGN IN
          <i className="fas fa-sign-in-alt"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
