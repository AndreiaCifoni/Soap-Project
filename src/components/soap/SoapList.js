import React from "react";
import { Link } from "react-router-dom";

const SoapList = () => {
  return (
    <div>
      <Link className="soap-list-btn" to="/soapcreate">
        New Soap
      </Link>
      <Link className="soap-list-btn" to="/soapedit">
        Edit a Soap
      </Link>
    </div>
  );
};

export default SoapList;
