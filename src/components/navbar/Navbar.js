import React, { useState } from "react";
import NavMenu from "./navMenu";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import ".././layout/styles.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const onNavIcon = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-title">Hello Soap!</h1>
      <div className="nav-icon">
        <i onClick={onNavIcon}>
          {clicked ? <XIcon className="icon" /> : <MenuIcon className="icon" />}
        </i>
      </div>
      <ul className={clicked ? "nav-list  nav-cell" : "nav-list"}>
        {NavMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;

{
  /* <div className="nav-container">
<div className="nav-link">
  <Link to="/login">Login</Link>
  <Link to="/register">Register</Link>
</div>
</div> */
}
