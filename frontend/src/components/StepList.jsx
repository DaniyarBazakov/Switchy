import React from 'react';

const StepsList = ({ steps, onComplete }) => {
  return (
    <ul>
      {steps.map((step) => (
        <li key={step.step_id}>
          <input
            type="checkbox"
            checked={step.completed}
            onChange={(e) => onComplete(step.step_id, e.target.checked)}
          />
          {step.title}: {step.description}
        </li>
      ))}
    </ul>
  );
};

export default StepsList;