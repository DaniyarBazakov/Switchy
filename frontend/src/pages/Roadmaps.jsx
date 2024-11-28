import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import RoadmapDropdown from '../components/RoadmapDropdown';
import StepList from '../components/StepList';
import ProgressBar from '../components/ProgressBar';
import useSteps from '../hooks/useSteps'; // Assuming this hook fetches steps
import '../styles/Roadmap.css';

const Roadmaps = () => {
  const [selectedRoadmapId, setSelectedRoadmapId] = useState(null);
  const [completedSteps, setCompletedSteps] = useState({});
  const { steps, loading } = useSteps(selectedRoadmapId);

  const handleRoadmapSelect = (roadmapId) => {
    setSelectedRoadmapId(roadmapId);
    setCompletedSteps({}); // Reset steps when a new roadmap is selected
  };

  const handleStepCompletion = (stepId) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId],
    }));
  };

  useEffect(() => {
    
  }, [completedSteps]);

  return (
    <div className="roadmaps-container">
      <Navbar />
      <div className="content">
        <div className="drp-step">
          <RoadmapDropdown onRoadmapSelect={handleRoadmapSelect} />
          {selectedRoadmapId && !loading && (
            <>
              <ProgressBar steps={steps} completedSteps={completedSteps} />
              <StepList
                roadmapId={selectedRoadmapId}
                completedSteps={completedSteps}
                onStepCompletion={handleStepCompletion}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Roadmaps;
