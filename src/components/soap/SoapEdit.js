import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSoapById, editSoap } from "../../store";
import SoapForm from "./SoapForm";
import history from "../../history";

const SoapEdit = () => {
  const { id } = useParams();

  const soap = useSelector((state) => getSoapById(state, id));

  const [modifiedSoap, setEditSoap] = useState(soap);

  const dispatch = useDispatch();

  const onEditSoapSubmit = (modifiedSoap) => {
    dispatch(editSoap(modifiedSoap));
    history.push(`/info/${soap.id}`);
    window.location.reload();
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
