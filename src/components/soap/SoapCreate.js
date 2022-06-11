import React, { useState } from "react";
import SoapForm from "./SoapForm";

const SoapCreate = () => {
  const [newSoap, setNewSoap] = useState({
    product: "",
    url: "",
    description: "",
  });

  return (
    <div>
      <h1 className="soap-form-title">Create a new Product:</h1>
      <SoapForm soap={newSoap} setSoap={setNewSoap} />
    </div>
  );
};

export default SoapCreate;
