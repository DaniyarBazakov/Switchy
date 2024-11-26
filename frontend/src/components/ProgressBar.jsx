import React from 'react';
import '../styles/Progress.css'

const ProgressBar = ({ total, completed }) => {
  const percentage = total ? (completed / total) * 100 : 0;

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}>
        {Math.round(percentage)}%
      </div>
    </div>
  );
};

export default ProgressBar;
