import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const NavbarHome = () => {

  return (
    <ul className="nav header">
      <li className="nav-item btn-exit">
        <Link className="nav-link " to="/login">
          Exit
        </Link>
      </li>
    </ul>
  );
};

export default NavbarHome;
