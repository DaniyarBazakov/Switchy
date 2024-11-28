
import React from 'react';
import useRoadmaps from '../hooks/useRoadmaps'; // Custom hook for fetching roadmaps
// Component to show the dropdown of roadmaps
import '../styles/Roadmap.css';
const RoadmapDropdown = ({ onRoadmapSelect }) => {
  const { roadmaps, loading, error } = useRoadmaps();

  if (loading) return <p>Loading roadmaps...</p>;
  if (error) return <p>Error loading roadmaps: {error.message}</p>;

  return (
    <div className='roadmap-dropdown'>
    <select onChange={(e) => onRoadmapSelect(e.target.value)}>
      <option value="">Select a Roadmap</option>
      {roadmaps.map((roadmap) => (
        <option key={roadmap.roadmap_id} value={roadmap.roadmap_id}>
          {roadmap.role} - {roadmap.industry}
        </option>
      ))}
    </select>
    </div>
  );
};
export default RoadmapDropdown;