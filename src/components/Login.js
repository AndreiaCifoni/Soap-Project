import React, { useState } from "react";

const owner = {
  name: "Andreia Cifoni",
  email: "ac@email",
  password: "mike",
};

const Login = () => {
  const [validation, setValidation] = useState({
    name: "",
    email: "",
    password: "",
  });

  return (
    <form>
      <div>
        <div>
          <label>User</label>
          <input
            type="text"
            value={validation.name}
            onChange={(e) =>
              setValidation({ ...validation, name: e.target.value })
            }
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={validation.email}
            onChange={(e) =>
              setValidation({ ...validation, email: e.target.value })
            }
          />
        </div>
        <div>
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
    </form>
  );
};

export default Login;
