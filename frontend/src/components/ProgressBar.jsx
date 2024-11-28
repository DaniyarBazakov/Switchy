
import React from 'react';
import '../styles/Progress.css'; // Import CSS for progress bar styling

const ProgressBar = ({ steps, completedSteps }) => {
  const totalSteps = steps.length;
  const completedCount = Object.values(completedSteps).filter((completed) => completed).length;
  const progressPercentage = (completedCount / totalSteps) * 100;

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progressPercentage}%` }}
      />
      <p>{Math.round(progressPercentage)}% Complete</p>
    </div>
  );
};

export default ProgressBar;

