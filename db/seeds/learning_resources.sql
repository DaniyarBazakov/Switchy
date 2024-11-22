-- Seed data for learningResources table
INSERT INTO learningResources (step_id, type, title, url, provider)
VALUES 
    -- Frontend Developer (roadmap_id = 1)
    -- Step 1: Learn HTML
    (1, 'Course', 'HTML for Beginners', 'https://www.example.com/html-course', 'Udemy'),
    (1, 'Article', 'HTML Basics', 'https://www.example.com/html-basics', 'W3Schools'),

    -- Step 2: Learn CSS
    (2, 'Course', 'CSS Crash Course', 'https://www.example.com/css-course', 'Codecademy'),
    (2, 'Video', 'CSS Styling Tips', 'https://www.example.com/css-tips', 'YouTube'),

    -- Step 3: Learn JavaScript
    (3, 'Course', 'JavaScript for Beginners', 'https://www.example.com/js-course', 'FreeCodeCamp'),
    (3, 'Book', 'JavaScript: The Good Parts', 'https://www.example.com/js-good-parts', 'O''Reilly'),

    -- Step 4: Build a Frontend Project
    (4, 'Tutorial', 'Building a Portfolio Website', 'https://www.example.com/portfolio-tutorial', 'MDN Web Docs'),

    -- Step 5: Learn Frameworks (React, Angular, Vue)
    (5, 'Course', 'React for Beginners', 'https://www.example.com/react-course', 'Egghead.io'),

    -- Backend Developer (roadmap_id = 2)
    -- Step 1: Learn Server-side Programming
    (6, 'Course', 'Node.js Fundamentals', 'https://www.example.com/nodejs-fundamentals', 'Coursera'),

    -- Step 2: Understand Databases
    (7, 'Article', 'Introduction to SQL Databases', 'https://www.example.com/sql-intro', 'Medium'),

    -- Step 3: Learn API Development
    (8, 'Course', 'Building RESTful APIs with Node.js', 'https://www.example.com/rest-api-course', 'Udemy'),

    -- Step 4: Learn Authentication & Security
    (9, 'Video', 'Authentication in Node.js', 'https://www.example.com/authentication-video', 'YouTube'),

    -- Step 5: Build a Backend Project
    (10, 'Tutorial', 'Creating a REST API Project', 'https://www.example.com/api-project', 'GitHub'),

    -- Step 6: Deploy to Production
    (11, 'Article', 'How to Deploy Node.js to Heroku', 'https://www.example.com/deploy-heroku', 'Heroku'),

    -- Nurse (roadmap_id = 3)
    -- Step 1: Understand Basic Nursing Skills
    (12, 'Course', 'Basic Nursing Skills 101', 'https://www.example.com/nursing-skills', 'Coursera'),

    -- Step 2: Study Human Anatomy and Physiology
    (13, 'Textbook', 'Anatomy and Physiology for Nurses', 'https://www.example.com/anatomy-book', 'McGraw-Hill'),

    -- Step 3: Complete Clinical Training
    (14, 'Video', 'Clinical Training Tips', 'https://www.example.com/clinical-training', 'YouTube'),

    -- Step 4: Obtain Certification and Licensure
    (15, 'Article', 'How to Become a Certified Nurse', 'https://www.example.com/certification-guide', 'Nursing.com'),

    -- Financial Analyst (roadmap_id = 4)
    -- Step 1: Learn Financial Modeling
    (16, 'Course', 'Financial Modeling for Beginners', 'https://www.example.com/financial-modeling', 'LinkedIn Learning'),

    -- Step 2: Understand Financial Statements
    (17, 'Book', 'Financial Statement Analysis', 'https://www.example.com/financial-statement-book', 'Wiley'),

    -- Step 3: Study Market Trends and Economics
    (18, 'Video', 'Understanding Market Trends', 'https://www.example.com/market-trends-video', 'YouTube'),

    -- Step 4: Gain Experience in Financial Software
    (19, 'Course', 'Excel for Financial Analysis', 'https://www.example.com/excel-financial', 'Udemy'),

    -- Step 5: Pass Certification Exams
    (20, 'Article', 'Preparing for CFA Exam', 'https://www.example.com/cfa-exam-guide', 'CFA Institute'),

    -- Teacher (roadmap_id = 5)
    -- Step 1: Complete Teaching Degree
    (21, 'Course', 'Becoming a Teacher: A Guide', 'https://www.example.com/teaching-degree', 'EdX'),

    -- Step 2: Gain Classroom Experience
    (22, 'Article', 'How to Get Classroom Experience', 'https://www.example.com/classroom-experience', 'Teach.com'),

    -- Step 3: Obtain Certification
    (23, 'Video', 'Teacher Certification Process', 'https://www.example.com/teacher-certification', 'YouTube'),

    -- UI/UX Designer (roadmap_id = 6)
    -- Step 1: Learn Design Principles
    (24, 'Course', 'Design Principles for Beginners', 'https://www.example.com/design-principles', 'Skillshare'),

    -- Step 2: Learn Wireframing and Prototyping
    (25, 'Course', 'Wireframing and Prototyping with Figma', 'https://www.example.com/figma-wireframing', 'Udemy'),

    -- Step 3: Study User Research
    (26, 'Article', 'User Research Methods', 'https://www.example.com/user-research', 'UX Design'),

    -- Step 4: Build a Portfolio
    (27, 'Tutorial', 'Creating a UX Design Portfolio', 'https://www.example.com/ux-portfolio', 'UX Mastery'),

    -- Step 5: Learn Design Tools (Figma, Sketch, etc.)
    (28, 'Course', 'Master Figma for UI/UX Design', 'https://www.example.com/figma-course', 'LinkedIn Learning');
