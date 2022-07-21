import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

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
      {soapProducts.map((product) => {
        return <SoapCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default SoapList;
