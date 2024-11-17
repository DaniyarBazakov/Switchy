DROP TABLE IF EXISTS steps CASCADE;
CREATE TABLE steps (
    step_id SERIAL PRIMARY KEY,
    roadmap_id INT,
    title VARCHAR(255),
    description TEXT,
    step_order INT,
    FOREIGN KEY (roadmap_id) REFERENCES roadmaps(roadmap_id)
);
