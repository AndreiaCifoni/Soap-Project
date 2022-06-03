import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/soaps"}>Soaps</Link>
    </div>
  );
};

export default Home;
