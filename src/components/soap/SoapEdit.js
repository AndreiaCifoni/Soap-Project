import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSoapById, editSoap } from "../../store";
import SoapForm from "./SoapForm";

const SoapEdit = () => {
  const { id } = useParams();

  const soap = useSelector((state) => getSoapById(state, id));

  const [modifiedSoap, setEditSoap] = useState({
    image: soap.image,
    title: soap.title,
    description: soap.description,
    ingredients: soap.ingredients,
    price: soap.price,
  });

  const dispatch = useDispatch();

  const onEditSoapSubmit = (modifiedSoap) => {
    dispatch(editSoap(modifiedSoap));
    console.log(modifiedSoap);
    setEditSoap({
      image: "",
      title: "",
      description: "",
      ingredients: "",
      price: "",
    });
  };

  if (!soap) {
    return null;
  }

  return (
    <div>
      <h1 className="soap-form-title">Edit a Product:</h1>
      <SoapForm
        soap={modifiedSoap}
        setSoap={setEditSoap}
        onSubmitHandler={onEditSoapSubmit}
      />
    </div>
  );
};

export default SoapEdit;
