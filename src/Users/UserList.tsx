import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { User } from "../Interfaces"; // Ensure this interface accurately defines the user data
import { baseURL } from "../App";
import { Menu } from "../Menu";

export const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`${baseURL}/api/users`)
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load users.");
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
    <Menu />
      <h1>UserList</h1>
      <Link to="/userCreate" className="btn btn-primary">
        Create New User
      </Link>
      
        {users.map((user) => (
          <li key={user.id}>
            {user.firstName} {user.lastName}
          </li>
        ))}
        <Link to="/userDetails" className="btn btn-primary ms-3">
          Details
        </Link>
        <Link to="/userUpdate" className="btn btn-primary ms-3">
          Update
        </Link>
     
    </>
  );
};
