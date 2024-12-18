import { useState, useEffect } from 'react';

const useSteps = (roadmapId) => {
  const [steps, setSteps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (roadmapId) {
      fetch(`http://localhost:3001/api/roadmaps/${roadmapId}/steps`)
        .then((response) => response.json())
        .then((data) => {
          setSteps(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [roadmapId]);

  return { steps, loading, error };
};

export default useSteps;
