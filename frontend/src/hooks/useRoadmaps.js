import { useState, useEffect } from 'react';

const useRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  useEffect(() => {
    // Fetch all roadmaps on component mount
    const fetchRoadmaps = async () =>{
      try{
       const response = await fetch('http://localhost:3001/api/roadmaps');
        if (!response.ok) {
        throw new Error('Failed to fetch roadmaps');
       }
      const data = await response.json();
      console.log(data);
    setRoadmaps(data);
} catch (error) {
    console.error(error);
}
    }
    
     fetchRoadmaps(); 
  }, []);

  const selectRoadmap = (roadmap) => {
    setSelectedRoadmap(roadmap);
  };

  return { roadmaps, selectedRoadmap, selectRoadmap };
};



export default useRoadmaps;