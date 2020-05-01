import React from "react";
import { Switch } from "react-router";
import { Link } from "react-router-dom";
import "./navbar.css";
const NavbarAuth = () => {
  return (
    <ul className="nav header">
      <li className="nav-item btn-exit">
        <Link className="nav-link " to="/registration">
          Registration
        </Link>
      </li>
      <li className="nav-item btn-exit">
        <Link className="nav-link " to="/login">
          Authentication
        </Link>
      </li>
    </ul>
  );
};

export default NavbarAuth;
