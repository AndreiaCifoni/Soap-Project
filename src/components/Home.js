import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./layout/styles.css";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Link className="soap-link" to={"/soaps"}>
          Soaps
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
