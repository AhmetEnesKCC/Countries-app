import React from "react";
import { link, Link } from "react-router-dom";

function HamburgerMenu() {
  return (
    <div className="hamburgerMenu">
      <Link to="/home">
        <h3>Home</h3>
      </Link>
      <Link to="/about">
        <h3>About</h3>
      </Link>
      <Link to="/contact">
        <h3>Contact</h3>
      </Link>
    </div>
  );
}

export default HamburgerMenu;
