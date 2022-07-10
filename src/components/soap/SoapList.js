import React from "react";
// import { Link } from "react-router-dom";
import SoapCard from "./SoapCard";

const SoapList = () => {
  return (
    <div>
      {/* <div>
        <Link className="soap-list-btn" to="/soapcreate">
          New Soap
        </Link>
        <Link className="soap-list-btn" to="/soapedit">
          Edit a Soap
        </Link>
      </div> */}
      <SoapCard />
    </div>
  );
};

export default SoapList;
