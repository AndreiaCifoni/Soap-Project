import React from "react";
import { Link } from "react-router-dom";
import SoapProducts from "./SoapProducts";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import "../layout/styles.css";

const SoapInfo = () => {
  return (
    <div>
      {SoapProducts.map((product) => {
        return (
          <div className="info-container">
            <img className="info-img" src={product.image} alt={product.title} />
            <div>
              <h1>{product.title}</h1>
              <div>{product.description}</div>
              <div>{product.ingredients}</div>
              <div>{product.price}</div>
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
      })}
    </div>
  );
};

export default SoapInfo;
