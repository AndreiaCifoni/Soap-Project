import React from "react";
import { Link } from "react-router-dom";

const Soaps = () => {
  return (
    <React.Fragment>
      <Link to="/soapcreate">New Soap</Link>
      <Link to="/soapedit">Edit a Soap</Link>
    </React.Fragment>
  );
};

export default Soaps;
