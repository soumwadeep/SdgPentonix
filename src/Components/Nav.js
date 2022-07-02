import React from "react";
import {NavLink} from 'react-router-dom';
const Nav = () => {
  return (
    <>
      <nav className="navbar sticky-top navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            SDG Pentonix
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className={(navData) => navData.isActive ? "nav-link-active" : "navbar-nav-link"}  aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className={(navData) => navData.isActive ? "nav-link-active" : "navbar-nav-link"} to="/about">About</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
