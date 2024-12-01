import React, { useState } from "react";
import StepDetails from "./StepDetails";
import "../styles/StepList.css";
import useSteps from "../hooks/useSteps";

const StepList = ({ roadmapId, completedSteps, onStepCompletion }) => {
  const { steps, loading, error } = useSteps(roadmapId);
  const [activeStepId, setActiveStepId] = useState(null);

  const handleStepClick = (stepId) => {
    setActiveStepId(activeStepId === stepId ? null : stepId); // Toggle visibility of step details
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
            <div className="step-details-container">
              <StepDetails stepId={step.step_id} />
              <button
                className={`complete-btn ${
                  completedSteps[step.step_id] ? "completed" : ""
                }`}
                onClick={() => onStepCompletion(step.step_id)}
              >
                {completedSteps[step.step_id]
                  ? "Undo Completion"
                  : "Mark as Complete"}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepList;
