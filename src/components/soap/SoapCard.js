import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon, CurrencyDollarIcon } from "@heroicons/react/solid";
import "../layout/styles.css";

const SoapCard = ({ product }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={product.image} alt={product.title} />
      <div className="card-text">
        <h2>{product.title}</h2>
        <p>
          <CurrencyDollarIcon className="icon" />
          {product.price}
        </p>
      </div>
      <div>
        <Link className="card-btn card-link" to={`/info/${product.id}`}>
          See more...
        </Link>
        <button className="card-btn card-btn-buy">
          <ShoppingCartIcon className="card-icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default SoapCard;
