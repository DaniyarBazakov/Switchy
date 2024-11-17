DROP TABLE IF EXISTS Post CASCADE;
CREATE TABLE Post (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    content TEXT,
    created_at DATETIME,
    field VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);
