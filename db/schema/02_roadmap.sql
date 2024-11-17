DROP TABLE IF EXISTS roadmaps CASCADE;
CREATE TABLE roadmaps (
    roadmap_id SERIAL PRIMARY KEY,
    industry VARCHAR(255),
    role VARCHAR(255),
    steps INT,
    description TEXT
);
