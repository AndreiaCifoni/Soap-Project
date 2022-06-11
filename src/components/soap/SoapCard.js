import React from "react";
import "../layout/styles.css";

const SoapCard = () => {
  return (
    <div className="soap-card">
      <img
        className="card-img"
        src="https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29hcCUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        alt="soap"
      />
      <div className="card-text">
        <h3>NAME HERE</h3>
        <p>Price:</p>
        <p>Description:</p>
      </div>
      <button className="card-btn">Add to cart</button>
    </div>
  );
};

export default SoapCard;
