DROP TABLE IF EXISTS learningResources CASCADE;
CREATE TABLE learningResources (
    resource_id SERIAL PRIMARY KEY,
    step_id INT,
    type VARCHAR(255),
    title VARCHAR(255),
    url VARCHAR(255),
    Description TEXT,
    provider VARCHAR(255),
    FOREIGN KEY (step_id) REFERENCES steps(step_id)
);
