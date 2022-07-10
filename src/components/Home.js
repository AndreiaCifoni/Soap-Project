import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import "./layout/styles.css";

const Home = () => {
  return (
    <div>
      <Link className="soap-link" to={"/soaplist"}>
        Soaps
      </Link>
    </div>
  );
};

export default Home;
