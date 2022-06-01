import React, { useState } from "react";
import SoapForm from "./SoapForm";

const SoapEdit = () => {
  const [editSoap, setEditSoap] = useState({
    product: "this product already exist",
    url: "abcd.com",
    description: "this soap is wonderful!",
  });

  return (
    <div>
      <h2>Edit a Product:</h2>
      <SoapForm soap={editSoap} setSoap={setEditSoap} />
    </div>
  );
};

export default SoapEdit;
