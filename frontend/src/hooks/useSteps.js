import { useState } from 'react';

const useSteps = () => {
  const [steps, setSteps] = useState([]);
  const [completedSteps, setCompletedSteps] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchSteps = (roadmapId) => {
    setLoading(true);
    console.log("Idis");
    console.log(roadmapId);
    fetch(`http://localhost:3001/api/roadmaps/${roadmapId}/steps`)
      .then((res) => res.json())
      .then((data) => {
        setSteps(data);
        console.log(data);
        const completed = data.filter((step) => step.completed).length;
        setCompletedSteps(completed);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching steps:', error);
        setLoading(false);
      });
  };

  const updateStepCompletion = (stepId, completed) => {
    // Optimistic UI update: Update steps immediately while waiting for the server
    const updatedSteps = steps.map((step) =>
      step.step_id === stepId ? { ...step, completed } : step
    );
    setSteps(updatedSteps);
    const completedCount = updatedSteps.filter((step) => step.completed).length;
    setCompletedSteps(completedCount);

    // Then make the API call to persist the changes
    fetch(`http://localhost:3001/api/steps/${stepId}/complete`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed }),
    })
      .catch((error) => console.error('Error updating step:', error));
  };

  return { steps, completedSteps, fetchSteps, updateStepCompletion, loading };
};

export default useSteps;
