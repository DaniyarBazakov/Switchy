import { useState, useEffect } from 'react';

const useRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/roadmaps')
      .then((response) => response.json())
      .then((data) => {
        setRoadmaps(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { roadmaps, loading, error };
};

export default useRoadmaps;
