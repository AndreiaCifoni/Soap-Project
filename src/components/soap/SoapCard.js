import React from "react";
import SoapProducts from "./SoapProducts";
import { ShoppingCartIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import "../layout/styles.css";

const SoapCard = () => {
  return (
    <div>
      {SoapProducts.map((product) => {
        return (
          <div className="soap-card">
            <img className="card-img" src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>
              <CurrencyDollarIcon className="icon" />
              {product.price}
            </p>
            <div>
              <button className="card-btn">See more...</button>
              <button className="card-btn">
                <ShoppingCartIcon className="icon" />
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SoapCard;
