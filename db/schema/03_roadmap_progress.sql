DROP TABLE IF EXISTS roadmapProgresses CASCADE;
CREATE TABLE roadmapProgresses (
    assessment_id SERIAL PRIMARY KEY,
    user_id INT,
    starting_point VARCHAR(255),
    progress INT,
    suggested_roadmap_id INT,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (suggested_roadmap_id) REFERENCES roadmaps(roadmap_id)
);
