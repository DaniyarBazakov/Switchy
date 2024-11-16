// App.js (React component)
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch mock users from backend
    fetch('http://localhost:5000/api/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
