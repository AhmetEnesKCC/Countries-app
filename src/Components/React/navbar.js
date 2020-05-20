import React from "react";
import WorldIcon from "./SVG/worldIcon";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const [open, setOpenClose] = useState("close");
  const openCloseHamburger = (e) => {
    var container = document.getElementsByClassName("container");
    if (open === "open") {
      container[0].style.marginTop = "0";
      setOpenClose("close");
    } else if (open === "close") {
      container[0].style.marginTop = "120px";
      setOpenClose("open");
    }
  };
  const Hamburger = () => {
    return (
      <div onClick={openCloseHamburger} className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  };

  return (
    <nav>
      <Link to="/home">
        <WorldIcon />
      </Link>
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <Hamburger />
    </nav>
  );
}

export default Nav;
