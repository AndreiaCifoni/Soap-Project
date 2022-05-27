import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/soaps"}>Soaps</Link>
      <Link to={"/workshop"}>Workshop</Link>
    </div>
  );
};

export default Home;
