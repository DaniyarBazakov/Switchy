DROP TABLE IF EXISTS RoadmapProgress CASCADE;
CREATE TABLE RoadmapProgress (
    assessment_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    starting_point VARCHAR(255),
    progress INT,
    suggested_roadmap_id INT,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (suggested_roadmap_id) REFERENCES Roadmap(roadmap_id)
);
