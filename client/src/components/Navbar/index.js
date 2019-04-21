import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand text-light coolFont" to="/">
        A List
      </Link>
      <div>
        <ul className="navbar-nav">
            
        <li className="nav-item">
            <Link
              to="/create-profile"
              className={window.location.pathname === "/create-profile" ? "nav-link active" : "nav-link"}
            >
              Create a Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/query"
              className={window.location.pathname === "/query" ? "nav-link active" : "nav-link"}
            >
              Search Musicians
            </Link>
          </li>
         
        
      
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
