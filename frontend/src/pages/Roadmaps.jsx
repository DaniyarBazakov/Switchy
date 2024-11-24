import React from "react";
import Navbar from "../components/Navbar";
import RoadmapDropdown from '../components/RoadmapDropdown';
import StepsList from '../components/StepList';
import ProgressBar from '../components/ProgressBar';
import useRoadmaps from '../hooks/useRoadmaps';
import useSteps from '../hooks/useSteps';


const Roadmaps = () =>{
  
  const { roadmaps, selectedRoadmap, selectRoadmap } = useRoadmaps();
  const { steps, completedSteps, fetchSteps, updateStepCompletion } = useSteps();

  const handleRoadmapSelect = (roadmap) => {
    selectRoadmap(roadmap);
    fetchSteps(roadmap.roadmap_id);
  };

  return (
    <div className="app-container">
      <Navbar/>
      <h1>Roadmaps</h1>
      <RoadmapDropdown roadmaps={roadmaps} onSelect={handleRoadmapSelect} />
      {selectedRoadmap && (
        <>
          <h2>{selectedRoadmap.role} in {selectedRoadmap.industry}</h2>
          <ProgressBar total={steps.length} completed={completedSteps} />
          <StepsList steps={steps} onComplete={updateStepCompletion} />
        </>
      )}
    </div>
  );
}

export default Roadmaps;