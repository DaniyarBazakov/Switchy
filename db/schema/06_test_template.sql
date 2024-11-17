DROP TABLE IF EXISTS CognitiveTestTemplate CASCADE;
CREATE TABLE CognitiveTestTemplate (
    cognitive_test_id INT PRIMARY KEY AUTO_INCREMENT,
    starting_point VARCHAR(255),
    skills_gap VARCHAR(255)
);
