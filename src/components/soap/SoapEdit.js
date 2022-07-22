import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getSoapById } from "../../store";
import SoapForm from "./SoapForm";

const SoapEdit = () => {
  const { id } = useParams();

  const soap = useSelector((state) => getSoapById(state, id));

  const [editSoap, setEditSoap] = useState({
    image: soap.image,
    title: soap.title,
    description: soap.description,
    ingredients: soap.ingredients,
    price: soap.price,
  });

  if (!soap) {
    return null;
  }

  const onEditSoapSubmit = (editSoap) => {
    // dispatch(createSoap(newSoap));
    console.log(editSoap);
    setEditSoap({
      image: "",
      title: "",
      description: "",
      ingredients: "",
      price: "",
    });
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
