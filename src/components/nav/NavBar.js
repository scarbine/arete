import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <>
      <ul className="navbar">
        <li className="navbar_item">
          <Link className="navbar_link" to="/">
            Arete
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" to="/climbers">
            Climbers
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" to="/routes">
            Routes
          </Link>
	  </li>
        <li className="navbar_item">
          <Link className="navbar_link" to="/gear">
            Gear
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" to="/walls">
            Walls
          </Link>
        </li>
      </ul>
    </>
  );
};