import { useState, useEffect } from 'react';

const useLearningResources = (stepId) => {
  const [learningResources, setLearningResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (stepId) {
      fetch(`http://localhost:3001/api/steps/${stepId}/resources`)
        .then((response) => response.json())
        .then((data) => {
          setLearningResources(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
    }
  }, [stepId]);

  return { learningResources, loading, error };
};

export default useLearningResources;
