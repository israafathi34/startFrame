import React from "react";
import  "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <Link className="navbar-brand start fs-2 fw-bold text-white" to="">
        START FRAMEWORK
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='about'>
                about
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='portfolio'>
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to='contact'>
                CONTACT
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
