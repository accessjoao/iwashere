import React, { Component } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import { Toolbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
    fontFamily: "Nunito",
  },
  icon: {
    color: "black",
    fontSize: "2rem",
  },
  appbarTitle: {
    flexGrow: 1.2,
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>I Was Here</h1>
          <Link to="/">
            <i className="material-icons backtext">Home</i>
            <IconButton>
              <HomeIcon className={classes.icon}></HomeIcon>
            </IconButton>
          </Link>
          <Link to="/mapbox">
            <i className="material-icons backtext">MapBox</i>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

/*
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
*/
