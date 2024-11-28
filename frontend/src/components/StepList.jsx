import React, { useState } from 'react';
import useSteps from '../hooks/useSteps'; // Custom hook for fetching steps for a selected roadmap
import StepDetails from './StepDetails';
import '../styles/Roadmap.css';

const StepList = ({ roadmapId, completedSteps, onStepCompletion }) => {
  const { steps, loading, error } = useSteps(roadmapId);
  const [activeStepId, setActiveStepId] = useState(null);

  const handleStepClick = (stepId) => {
    setActiveStepId(activeStepId === stepId ? null : stepId);
  };

  if (loading) return <p>Loading steps...</p>;
  if (error) return <p>Error loading steps: {error.message}</p>;

  return (
    <div className="step-list">
      {steps.map((step) => (
        <div className="step" key={step.step_id}>
          <button onClick={() => handleStepClick(step.step_id)}>
            {step.title}
          </button>
          {activeStepId === step.step_id && (
            <div>
              <StepDetails stepId={step.step_id} />
              <button
                className={`complete-btn ${completedSteps[step.step_id] ? 'completed' : ''}`}
                onClick={() => onStepCompletion(step.step_id)}
              >
                {completedSteps[step.step_id] ? 'Undo Completion' : 'Mark as Complete'}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepList;
