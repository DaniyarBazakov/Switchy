import { useEffect, useState } from "react";

const usePostsByID = (userId) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return; // Exit early if userId is not provided

    const fetchPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/posts/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
        setError(null); // Reset error on successful fetch
      } catch (error) {
        console.error(error);
        setError(error.message); // Set error state for UI feedback
      }
    };

    fetchPosts();
  }, [userId]); // Ensure the dependency array is correctly closed

  return { posts, error };
};

export default usePostsByID;
