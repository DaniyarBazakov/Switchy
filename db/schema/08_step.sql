DROP TABLE IF EXISTS Step CASCADE;
CREATE TABLE Step (
    step_id INT PRIMARY KEY AUTO_INCREMENT,
    roadmap_id INT,
    title VARCHAR(255),
    description TEXT,
    order INT,
    FOREIGN KEY (roadmap_id) REFERENCES Roadmap(roadmap_id)
);
