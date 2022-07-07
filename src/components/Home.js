import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import "./layout/styles.css";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Link className="soap-link" to={"/soaplist"}>
          Soaps
        </Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
