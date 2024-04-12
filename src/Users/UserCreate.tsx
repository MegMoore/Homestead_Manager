import React, { useState } from "react";
import { User } from "../Interfaces";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../App";

export const UserCreate = () => {
  const [values, setValues] = useState<User>({
    id: 0,
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    isAdmin: false,
  });

  const navigate = useNavigate();
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log("Updating with data:", values);

    axios
      .post(`${baseURL}/api/users`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Log the update response
        console.log("Update response:", response.data);

        // Navigate after successful update
        navigate("/userList");
      })
      .catch((err) => console.error("Update error:", err));
  };

  return (
    <>
      <div>Create New User</div>

      <div className="input-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          className="form-control"
          placeholder="Enter First Name"
          value={values?.firstName}
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          className="form-control"
          placeholder="Enter Last Name"
          value={values?.lastName}
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="Username"
          className="form-control"
          placeholder="Enter Username"
          value={values?.username}
          onChange={(e) => setValues({ ...values, username: e.target.value })}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="Password"
          className="form-control"
          placeholder="Enter Password"
          value={values?.password}
          onChange={(e) => setValues({ ...values, password: e.target.value })}
        />
      </div>

      <div className="mb-2">
        <label htmlFor="isAdmin">Is Admin</label>
        <input
          type="checkbox"
          name="isAdmin"
          className="form-check-input"
          checked={values.isAdmin}
          onChange={(e) => setValues({ ...values, isAdmin: e.target.checked })}
        />
      </div>

      <button onClick={handleSubmit} className="btn btn-success">
        Create
      </button>
      <Link to="/userList" className="btn btn-primary ms-3">
        Back
      </Link>
    </>
  );
};
