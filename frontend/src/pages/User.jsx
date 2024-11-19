import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const User = () =>{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


useEffect(() => {
  fetch('http://localhost:3001/api/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error);
      setLoading(false);
    });
}, []);

return(<div><Navbar/>
  <h1>Users List</h1>
  <ul>
    {users.map((user) => (
      <li key={user.user_id}>
        {user.name} - {user.email}
      </li>
    ))}
  </ul></div>);

}

export default User;