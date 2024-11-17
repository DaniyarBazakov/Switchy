DROP TABLE IF EXISTS cognitiveTestTemplates CASCADE;
CREATE TABLE cognitiveTestTemplates (
    cognitive_test_id SERIAL PRIMARY KEY,
    starting_point VARCHAR(255),
    skills_gap VARCHAR(255)
);
