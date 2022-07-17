import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

import SoapCard from "./SoapCard";
import { fetchSoaps, getSoaps } from "../../store";

const SoapList = () => {
  const dispatch = useDispatch();
  const soapProducts = useSelector(getSoaps);

  useEffect(() => {
    dispatch(fetchSoaps());
  }, []);

  return (
    <div className="list-container">
      {/* <div>
        <Link className="soap-list-btn" to="/soapcreate">
          New Soap
        </Link>
        <Link className="soap-list-btn" to="/soapedit">
          Edit a Soap
        </Link>
      </div> */}
      {soapProducts.map((product) => {
        return <SoapCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default SoapList;
