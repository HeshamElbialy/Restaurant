import React from "react";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container container-fluid">
        <Link className="navbar-brand" to="/">
          <div>
            <span className="icon">
              <LiaPizzaSliceSolid />
            </span>
            Pizza
          </div>
          <div className="box2">
            <small>Delicous</small>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {!localStorage.getItem("token") ? (
            <>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-disabled="true"
                    to="/reservation"
                  >
                    Reservation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-disabled="true" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </>
          ) : (
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-disabled="true"
                  to="/reservation"
                >
                  Reservation
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/dates">
                  Dates
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-disabled="true"
                  to="/login"
                  onClick={logout}
                >
                  Log Out
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
