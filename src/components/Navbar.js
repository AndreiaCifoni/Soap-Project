import React from "react";
import { Link } from "react-router-dom";
import "./layout/styles.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-link">
        <Link to={"/Login"}>Login</Link>
        <Link to={"/Register"}>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
