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

  const onCloseMenu = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="nav-container">
      <h1 className="nav-title">Hello Soap!</h1>
      <div className="nav-icon">
        <i onClick={onNavIcon}>
          {clicked ? (
            <XIcon className="nav-icon-icon" />
          ) : (
            <MenuIcon className="nav-icon-icon" />
          )}
        </i>
      </div>
      <ul className={clicked ? "nav-list  nav-cell" : "nav-list"}>
        {NavMenu.map((item, index) => {
          return (
            <li key={index}>
              <Link onClick={onCloseMenu} className={item.cName} to={item.url}>
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
