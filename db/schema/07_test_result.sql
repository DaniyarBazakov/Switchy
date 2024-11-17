DROP TABLE IF EXISTS CognitiveTestResult CASCADE;
CREATE TABLE CognitiveTestResult (
    user_id INT,
    starting_point VARCHAR(255),
    skills_gap VARCHAR(255),
    template INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (template) REFERENCES CognitiveTestTemplate(cognitive_test_id)
);
