-- Seed data for steps table
INSERT INTO steps (roadmap_id, title, description, step_order, completed)
VALUES 
    -- Frontend Developer (roadmap_id = 1)
    (1, 'Learn HTML', 'Understand the structure of web pages using HTML.', 1, FALSE),
    (1, 'Learn CSS', 'Style your websites with CSS to make them visually appealing.', 2, FALSE),
    (1, 'Learn JavaScript', 'Master JavaScript to add interactivity to your web pages.', 3, FALSE),
    (1, 'Build a Frontend Project', 'Create a portfolio project showcasing your frontend skills.', 4, FALSE),
    (1, 'Learn Frameworks (React, Angular, Vue)', 'Get hands-on experience with popular frontend frameworks.', 5, FALSE),

    -- Backend Developer (roadmap_id = 2)
    (2, 'Learn Server-side Programming', 'Learn a server-side programming language like Node.js or Python.', 1, FALSE),
    (2, 'Understand Databases', 'Learn SQL and NoSQL databases to store and manage data.', 2, FALSE),
    (2, 'Learn API Development', 'Build and consume APIs to enable communication between services.', 3, FALSE),
    (2, 'Learn Authentication & Security', 'Understand how to secure your applications with proper authentication.', 4, FALSE),
    (2, 'Build a Backend Project', 'Create a backend service to showcase your server-side skills.', 5, FALSE),
    (2, 'Deploy to Production', 'Learn how to deploy your backend services to production environments.', 6, FALSE),

    -- Nurse (roadmap_id = 3)
    (3, 'Understand Basic Nursing Skills', 'Learn the basic clinical skills required for patient care.', 1, FALSE),
    (3, 'Study Human Anatomy and Physiology', 'Understand the structure and function of the human body.', 2, FALSE),
    (3, 'Complete Clinical Training', 'Gain hands-on experience by completing clinical training hours.', 3, FALSE),
    (3, 'Obtain Certification and Licensure', 'Prepare for and pass the required certification exams.', 4, FALSE),

    -- Financial Analyst (roadmap_id = 4)
    (4, 'Learn Financial Modeling', 'Develop skills in building financial models to analyze company performance.', 1, FALSE),
    (4, 'Understand Financial Statements', 'Learn how to read and interpret financial statements.', 2, FALSE),
    (4, 'Study Market Trends and Economics', 'Understand how market trends impact financial decisions.', 3, FALSE),
    (4, 'Gain Experience in Financial Software', 'Get hands-on experience with tools like Excel and financial modeling software.', 4, FALSE),
    (4, 'Pass Certification Exams', 'Prepare for and pass the necessary certifications to become a Financial Analyst.', 5, FALSE),

    -- Teacher (roadmap_id = 5)
    (5, 'Complete Teaching Degree', 'Obtain a degree in education from an accredited institution.', 1, FALSE),
    (5, 'Gain Classroom Experience', 'Complete student teaching internships to gain real-world experience.', 2, FALSE),
    (5, 'Obtain Certification', 'Pass exams to become a licensed teacher in your region.', 3, FALSE),

    -- UI/UX Designer (roadmap_id = 6)
    (6, 'Learn Design Principles', 'Study the basic principles of design, including layout, typography, and color theory.', 1, FALSE),
    (6, 'Learn Wireframing and Prototyping', 'Get hands-on experience with tools like Figma or Sketch to create wireframes and prototypes.', 2, FALSE),
    (6, 'Study User Research', 'Learn how to conduct user interviews and usability tests to improve designs.', 3, FALSE),
    (6, 'Build a Portfolio', 'Create a portfolio of design projects to showcase your work to potential employers.', 4, FALSE),
    (6, 'Learn Design Tools (Figma, Sketch, etc.)', 'Master industry-standard design tools used by UI/UX designers.', 5, FALSE),

    -- Digital Marketer (roadmap_id = 7)
    (7, 'Learn SEO Basics', 'Understand how to optimize content for search engines to drive traffic.', 1, FALSE),
    (7, 'Study Social Media Marketing', 'Learn how to manage social media accounts and create engaging content.', 2, FALSE),
    (7, 'Learn Google Analytics', 'Understand how to track and analyze website traffic using Google Analytics.', 3, FALSE),
    (7, 'Create a Digital Marketing Campaign', 'Plan and execute a digital marketing campaign to increase brand awareness.', 4, FALSE),

    -- Mechanical Engineer (roadmap_id = 8)
    (8, 'Understand Engineering Principles', 'Learn core mechanical engineering principles like thermodynamics and mechanics.', 1, FALSE),
    (8, 'Learn CAD Software', 'Get hands-on experience with tools like AutoCAD and SolidWorks for design.', 2, FALSE),
    (8, 'Study Materials Science', 'Understand the properties and behavior of different materials used in engineering.', 3, FALSE),
    (8, 'Work on Engineering Projects', 'Get practical experience by working on real-world engineering projects.', 4, FALSE),
    (8, 'Pass Professional Exams', 'Prepare for and pass the required exams to become a licensed engineer.', 5, FALSE),
    (8, 'Obtain Certification', 'Earn certifications in specialized fields like robotics or aerospace engineering.', 6, FALSE),

    -- DevOps Engineer (roadmap_id = 9)
    (9, 'Learn Linux and Scripting', 'Understand how to work with Linux and automate tasks using scripts.', 1, FALSE),
    (9, 'Understand CI/CD Pipelines', 'Learn how to automate the deployment of code using CI/CD tools.', 2, FALSE),
    (9, 'Learn Cloud Technologies', 'Get hands-on experience with cloud platforms like AWS, GCP, or Azure.', 3, FALSE),
    (9, 'Learn Infrastructure as Code', 'Understand tools like Terraform to manage infrastructure using code.', 4, FALSE),
    (9, 'Implement Automation', 'Automate server provisioning, deployment, and scaling tasks.', 5, FALSE),
    (9, 'Monitor and Optimize Systems', 'Learn how to monitor applications and optimize their performance.', 6, FALSE),

    -- Startup Founder (roadmap_id = 10)
    (10, 'Understand Business Fundamentals', 'Learn the basic principles of business management and entrepreneurship.', 1, FALSE),
    (10, 'Create a Business Plan', 'Develop a comprehensive business plan that outlines your vision and strategy.', 2, FALSE),
    (10, 'Build a Prototype', 'Create a working prototype of your product or service to validate the idea.', 3, FALSE),
    (10, 'Launch and Market the Business', 'Launch your business and develop a marketing strategy to attract customers.', 4, FALSE);


