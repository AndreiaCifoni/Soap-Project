import React, { useState } from "react";
import UserForm from "./UserForm";
import "../layout/styles.css";

const Login = () => {
  const [validation, setValidation] = useState({
    name: "",
    password: "",
  });

  const onSubmit = () => {
    alert("submited login");
  };

  return (
    <div>
      <h1 className="user-form-title">Login</h1>
      <UserForm onSubmit={onSubmit}>
        <div>
          <label>User</label>
          <input
            className="user-input"
            type="text"
            value={validation.name}
            onChange={(e) =>
              setValidation({ ...validation, name: e.target.value })
            }
          />
        </div>
        <div>
          <label>Password</label>
          <input
            className="user-input"
            type="password"
            value={validation.password}
            onChange={(e) =>
              setValidation({ ...validation, password: e.target.value })
            }
          />
        </div>
      </UserForm>
    </div>
  );
};

export default Login;
