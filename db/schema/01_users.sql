DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    current_field VARCHAR(255),
    desired_field VARCHAR(255),
    skills VARCHAR(255),
    experience VARCHAR(255),
    location VARCHAR(255),
    social_media_link VARCHAR(255),
    image BYTEA,
    bio VARCHAR(255)
);
