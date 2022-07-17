import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { getSoapById } from "../../store";
import "../layout/styles.css";

const SoapInfo = () => {
  const { id } = useParams();

  const soap = useSelector((state) => getSoapById(state, id));

  if (!soap) {
    return null;
  }

  return (
    <div className="info-container">
      <img className="info-img" src={soap.image} alt={soap.title} />
      <div className="info-content">
        <h1 className="info-title">{soap.title}</h1>
        <div className="info-text">
          <div>{soap.description}</div>
          <div>Ingredients: {soap.ingredients}</div>
        </div>
        <div className="info-price">${soap.price}</div>
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
