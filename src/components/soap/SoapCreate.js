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
      <h2>Create a new Product:</h2>
      <SoapForm soap={newSoap} setSoap={setNewSoap} />
    </div>
  );
};

export default SoapCreate;
