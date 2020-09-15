import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ changeClass, order }) => {
  return (
    <div className="navigation">
      <Link
        className="nav-links"
        to="/menu"
        onClick={() => changeClass("neutral")}
      >
        Menu
      </Link>

      {"   "}

      <Link
        to="/about"
        className="nav-links"
        onClick={() => changeClass("neutral")}
      >
        About
      </Link>

      {"   "}

      <Link
        className="nav-links"
        to="/contacts"
        onClick={() => changeClass("neutral")}
      >
        Contacts
      </Link>

      {"   "}

      <Link
        className="home-link"
        to="/"
        onClick={() => changeClass("home-back")}
      >
        Home
      </Link>
    </div>
  );
};

export default NavBar;
