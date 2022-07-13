import React from "react";
import { Link, useParams } from "react-router-dom";
import SoapProducts from "./SoapProducts";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import "../layout/styles.css";

const SoapInfo = () => {
  const { id } = useParams();

  return (
    <div className="info-container">
      <img
        className="info-img"
        src={SoapProducts[id].image}
        alt={SoapProducts[id].title}
      />
      <div>
        <h1>{SoapProducts[id].title}</h1>
        <div>{SoapProducts[id].description}</div>
        <div>{SoapProducts[id].ingredients}</div>
        <div>{SoapProducts[id].price}</div>
        <div>
          <Link className="info-btn" to="/soaplist">
            Back
          </Link>
          <button className="info-btn">
            <ShoppingCartIcon className="icon" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoapInfo;
