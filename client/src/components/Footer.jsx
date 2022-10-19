import React from "react";
import "../style.scss";
import Logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="logo"/>
      <span>
        Made with ♥️ and <b>React.js</b>.
      </span>
    </footer>
  );
};

export default Footer;
