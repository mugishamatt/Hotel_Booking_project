import React, { useContext } from "react";

import "../index.css";
import { UserContext } from "../App";

import { NavLink } from "react-router-dom";
export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  function logout() {
    localStorage.clear();
    setUser(null);
  }
  return (
    <div>
      <nav className="navbar bg-secondary navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <img
            src="https://www.nicepng.com/png/detail/362-3626405_hotel-green-hotel-booking-logo-png.png "
            style={{ width: "80px" }}
            className="navbar-brand"
          />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse  navbar-collapse" id="navbarNavDropdown">
            <NavLink className="nav-link active" aria-current="page" to="/home">
              Home
            </NavLink>

            <ul className="navbar-nav">
              {user && (
                <li className="nav-item" onClick={logout}>
                  <NavLink className="nav-link" to="/home">
                    logout
                  </NavLink>
                </li>
              )}
              {!user && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
