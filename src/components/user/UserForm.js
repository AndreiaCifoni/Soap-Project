import React, { useState } from "react";
import "../layout/styles.css";

const owner = {
  name: "Andreia Cifoni",
  email: "ac@email",
  password: "mike",
};

const UserForm = ({ onSubmit, children }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="user-form">
      <form onSubmit={onSubmitHandler}>
        <div>{children}</div>
        <input className="user-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
