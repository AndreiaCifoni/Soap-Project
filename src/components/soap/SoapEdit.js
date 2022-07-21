import React, { useState } from "react";
import SoapForm from "./SoapForm";

const SoapEdit = () => {
  const [editSoap, setEditSoap] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: "",
    price: "",
  });

  const onEditSoapSubmit = (editSoap) => {
    // dispatch(createSoap(newSoap));
    // setNewSoap({
    //   image: "",
    //   title: "",
    //   description: "",
    //   ingredients: "",
    //   price: "",
    // });
  };

  return (
    <div>
      <h1 className="soap-form-title">Edit a Product:</h1>
      <SoapForm
        soap={editSoap}
        setSoap={setEditSoap}
        onSubmitHandler={onEditSoapSubmit}
      />
    </div>
  );
};

export default SoapEdit;
