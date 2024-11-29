import React,{useState} from 'react';
import useLearningResources from '../hooks/useLearningResources';
import '../styles/StepDetails.css';
import Modal from './Modal';




const StepDetails = ({ stepId }) => {
  const { learningResources, loading, error } = useLearningResources(stepId);
  const [selectedResource, setSelectedResource] = useState(null);

  const handleOpenModal = (resource) => {
    setSelectedResource(resource);
  };

  const handleCloseModal = () => {
    setSelectedResource(null);
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading learning resources...</p>
      </div>
    );

  if (error)
    return <p className="error-message">Error loading learning resources: {error.message}</p>;

  if (learningResources.length === 0)
    return <p className="no-resources-message">No learning resources available for this step.</p>;

  return (
    <div className="step-details-container">
      
      {learningResources.length > 0 ? (
        <ol className="resource-list">
          {learningResources.map((resource, index) => (
            <li key={resource.resource_id} className="resource-item">
              <a
                href="#"
                className="resource-link"
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor behavior
                  handleOpenModal(resource);
                }}
              >
                {index + 1}. {resource.title}
              </a>
            </li>
          ))}
        </ol>
      ) : (
        <p className="no-resources">No resources available</p>
      )}
      {/* Modal */}
      {selectedResource && (
        <Modal resource={selectedResource} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default StepDetails;
