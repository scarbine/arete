import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useHistory } from "react-router";

export const NavBar = (props) => {

  const history = useHistory()

  const handleLogOut = ()=>{
    localStorage.setItem("arete_customer", '')
    history.push("/")
  }

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
          <Link className="navbar_link" to="/walls">
            Walls
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" to="/areas">
            Areas
          </Link>
        </li>
        <li className="navbar_item">
          <Link className="navbar_link" to="/gear">
            Gear Shop
          </Link>
        </li>
        <li className="navbar_item">
          <div className="log_out" onClick={handleLogOut}>
            Log Out
            </div>
          
        </li>
      </ul>
    </>
  );
};
