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
      <div className="info-content">
        <h1 className="info-title">{SoapProducts[id].title}</h1>
        <div className="info-text">
          <div>{SoapProducts[id].description}</div>
          <div>Ingredients: {SoapProducts[id].ingredients}</div>
        </div>
        <div className="info-price">${SoapProducts[id].price}</div>
        <div className="info-btn-container">
          <Link className="info-btn info-link" to="/soaplist">
            Back to list
          </Link>
          <button className="info-btn info-btn-buy">
            <ShoppingCartIcon className="info-icon" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SoapInfo;
