import React, { useEffect, useState } from 'react';


const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  return(<div>
    <h1>Posts List</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>User ID:</strong> {post.user_id} <br />
            <strong>Content:</strong> {post.content}
          </li>
        ))}
      </ul>
    </div>)


}
export default Posts;