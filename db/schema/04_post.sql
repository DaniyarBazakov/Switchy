DROP TABLE IF EXISTS posts CASCADE;
CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    user_id INT,
    content TEXT,
    created_at TIMESTAMP,
    field VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
