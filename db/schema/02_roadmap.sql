DROP TABLE IF EXISTS Roadmap CASCADE;
CREATE TABLE Roadmap (
    roadmap_id INT PRIMARY KEY AUTO_INCREMENT,
    industry VARCHAR(255),
    role VARCHAR(255),
    steps INT,
    description TEXT
);
