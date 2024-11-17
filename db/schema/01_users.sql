DROP TABLE IF EXISTS User CASCADE;
CREATE TABLE User (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    current_field VARCHAR(255),
    desired_field VARCHAR(255),
    skills VARCHAR(255),
    experience VARCHAR(255),
    location VARCHAR(255),
    social_media_link VARCHAR(255),
    image BLOB,
    bio VARCHAR(255)
);
