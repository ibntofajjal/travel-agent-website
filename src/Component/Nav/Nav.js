import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top my-nav d-block mb-5">
        <div class="container">
          <Link to="/home" class="navbar-brand">
            <img src={Logo} alt="" width="100" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0 fs-4 navs ">
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/addSpot"
                >
                  Add Travel Spot
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/booking"
                >
                  My Booking
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/manage"
                >
                  Manage All Booking
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-dark"
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="buttons ms-auto">
              <Link to="/login">
                <button className="btn btn-outline me-3">LogIn</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
