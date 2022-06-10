import React, { useState } from "react";
import "../layout/styles.css";

const owner = {
  name: "Andreia Cifoni",
  email: "ac@email",
  password: "mike",
};

const UserForm = () => {
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (
      validation.name === owner.name &&
      validation.email === owner.email &&
      validation.password === owner.password
    ) {
      return alert("Welcome");
    } else {
      return alert("You are not the owner!");
    }
  };

  return (
    <div className="user-form">
      <form onSubmit={onSubmitHandler}>
        <div>
          <div className="user-input">
            <label>User</label>
            <input
              type="text"
              value={validation.name}
              onChange={(e) =>
                setValidation({ ...validation, name: e.target.value })
              }
            />
          </div>
          <div className="user-input">
            <label>Email</label>
            <input
              type="email"
              value={validation.email}
              onChange={(e) =>
                setValidation({ ...validation, email: e.target.value })
              }
            />
          </div>
          <div className="user-input">
            <label>Password</label>
            <input
              type="password"
              value={validation.password}
              onChange={(e) =>
                setValidation({ ...validation, password: e.target.value })
              }
            />
          </div>
        </div>
        <input className="user-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UserForm;
