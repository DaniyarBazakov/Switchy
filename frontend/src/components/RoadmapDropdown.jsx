import React from 'react';

const RoadmapDropdown = ({ roadmaps, onSelect }) => {
  return (
    <select onChange={(e) => onSelect(roadmaps[e.target.value])}>
      <option value="">Select a Roadmap</option>
      {roadmaps.map((roadmap, index) => (
        <option key={roadmap.roadmap_id} value={index}>
          {roadmap.role} in {roadmap.industry}
        </option>
      ))}
    </select>
  );
};

export default RoadmapDropdown;