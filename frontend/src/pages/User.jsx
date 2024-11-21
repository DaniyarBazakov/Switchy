import React from "react";

import Navbar from "../components/Navbar";
import useFetchUsers from "../hooks/useFetchUser";
const User = () =>{
  const { users, loading: usersLoading, error: usersError } = useFetchUsers();

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