DROP TABLE IF EXISTS LearningResource CASCADE;
CREATE TABLE LearningResource (
    resource_id INT PRIMARY KEY AUTO_INCREMENT,
    step_id INT,
    type VARCHAR(255),
    title VARCHAR(255),
    url VARCHAR(255),
    provider VARCHAR(255),
    FOREIGN KEY (step_id) REFERENCES Step(step_id)
);
