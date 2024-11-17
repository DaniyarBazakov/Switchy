// App.js (React component)
import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch users when component mounts
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

  // Fetch posts when component mounts
  useEffect(() => {
    fetch('http://localhost:3001/api/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>

      <h1>Posts List</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>User ID:</strong> {post.user_id} <br />
            <strong>Content:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
