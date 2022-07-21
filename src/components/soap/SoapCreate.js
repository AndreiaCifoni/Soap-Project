import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SoapForm from "./SoapForm";
import { createSoap } from "../../store";

const SoapCreate = () => {
  const [newSoap, setNewSoap] = useState({
    image: "",
    title: "",
    description: "",
    ingredients: "",
    price: "",
  });

  const dispatch = useDispatch();

  const onNewSoapSubmit = (newSoap) => {
    dispatch(createSoap(newSoap));
    setNewSoap({
      image: "",
      title: "",
      description: "",
      ingredients: "",
      price: "",
    });
  };

  return (
    <div>
      <h1 className="soap-form-title">Create a new Product:</h1>
      <SoapForm
        soap={newSoap}
        setSoap={setNewSoap}
        onSubmitHandler={onNewSoapSubmit}
      />
    </div>
  );
};

export default SoapCreate;
