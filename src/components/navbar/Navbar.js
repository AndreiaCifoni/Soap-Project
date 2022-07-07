import React, { useState } from "react";
import NavMenu from "./navMenu";
import { Link } from "react-router-dom";
import { BeakerIcon, PlusCircleIcon } from "@heroicons/react/solid";
import ".././layout/styles.css";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const onNavIcon = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <h1>Hello Soap!</h1>
      <div>
        <i onClick={onNavIcon} className="nav-icon">
          {clicked ? (
            <BeakerIcon className="icon" />
          ) : (
            <PlusCircleIcon className="icon" />
          )}
        </i>
      </div>
      <ul className={clicked ? "nav-full" : "nav-cell"}>
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
