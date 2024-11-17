DROP TABLE IF EXISTS cognitiveTestResults CASCADE;
CREATE TABLE cognitiveTestResults (
    cognitive_result_id SERIAL PRIMARY KEY,
    user_id INT,
    starting_point VARCHAR(255),
    skills_gap VARCHAR(255),
    template INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (template) REFERENCES cognitiveTestTemplates(cognitive_test_id)
);
