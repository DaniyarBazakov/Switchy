import { useEffect, useState } from "react";

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If userId is null, do not attempt to fetch data
    if (!userId) {
      setLoading(false);
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/users/${userId}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return { user, loading, error };
};

export default useUser;
