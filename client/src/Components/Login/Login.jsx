import React from "react";
import { useNavigate } from "react-router";
import "../../App.css";
import "./Login.css";
import bgVideo from "../Home/video-2.mp4";

function LogIn() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/mapbox");
  };
  return (
    <div className="hero-container">
      <video src={bgVideo} autoPlay loop muted />
      <form method="post" className="card card-login" onSubmit={handleSubmit}>
        <h2 className="insta-font">I Was Here</h2>
        <input
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          required
          minLength="6"
          placeholder="Password"
        />
        <br />
        <button className="btn blue insta-btn">Log In</button>
        {/* <Link className="blue-text  text-darken-4" to="/">forgot password ?</Link> */}
      </form>
    </div>
  );
}

export default LogIn;
