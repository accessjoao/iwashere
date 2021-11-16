import React, { Component } from "react";
import "./navbar.css";

import { Link } from "react-router-dom";
import { AppBar, IconButton, makeStyles } from "@material-ui/core";
import HomeIcon from "@mui/icons-material/Home";
import { Toolbar } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "Nunito",
  },
  appbar: {
    background: "none",
  },
  appbarWrapper: {
    width: "60%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: 2,
  },

  icon: {
    color: "black",
    fontSize: "2rem",
  },

  colorText: {
    color: "green",
  },

  title: {
    background: "none",
    color: "none",
    fontFamily: "Nunito",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            I<span className={classes.colorText}>Was</span>Here.
          </h1>
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

        <h1 className={classes.title}>
          Select the places you've
          <br />
          <span className={classes.colorText}>Visited.</span>
        </h1>
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

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#5AFF3D',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4.5rem',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
}));
*/
