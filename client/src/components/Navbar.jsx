import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../style.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="links">
          <Link className="link">
            <h6>ART</h6>
          </Link>
          <Link className="link">
            <h6>SCIENCE</h6>
          </Link>
          <Link className="link">
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link className="link">
            <h6>CINEMA</h6>
          </Link>
          <Link className="link">
            <h6>DESIGN</h6>
          </Link>
          <Link className="link">
            <h6>FOOD</h6>
          </Link>

          <span>
            <h6>Hritik</h6>
          </span>
          <span>
            <h6>LogOut</h6>
          </span>
          <span className="write">write</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
