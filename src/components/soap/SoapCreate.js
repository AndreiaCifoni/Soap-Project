import React, { useState } from "react";
import SoapForm from "./SoapForm";
import soaps from "../../apis/soaps";

const SoapCreate = () => {
  const [newSoap, setNewSoap] = useState({
    product: "",
    url: "",
    description: "",
  });

  const onSubmit = async (newSoap) => {
    const response = await soaps.post("/soaps", { ...newSoap });
    console.log(response);
  };

  return (
    <div>
      <h1 className="soap-form-title">Create a new Product:</h1>
      <SoapForm soap={newSoap} setSoap={setNewSoap} onSubmit={onSubmit} />
    </div>
  );
};

export default SoapCreate;
