-- Seed data for learningResources table
-- Frontend Developer - Learn HTML
INSERT INTO learningResources (step_id, type, title, url, description, provider)
VALUES
    

    (1, 'Ebook', 'HTML & CSS: Design and Build Websites', 'https://www.example.com/html-css-ebook', 
    'This ebook by Jon Duckett is a beginner-friendly guide to learning HTML and CSS. The book covers the fundamentals of web design and teaches you how to create and style webpages effectively. With clear examples and full-color screenshots, this book makes HTML and CSS easy to understand. It is perfect for anyone new to web development who wants to quickly get up to speed with building websites. By the end of the book, you will have the foundation to create beautiful, functional web pages.',
    'Jon Duckett'),


    (6, 'Online Course', 'Node.js for Backend Development', 'https://www.example.com/nodejs-backend', 
    'Node.js is a powerful and flexible JavaScript runtime that is used for server-side programming. Built on Chromes V8 JavaScript engine, Node.js allows developers to run JavaScript code on the server, which opens up new possibilities for web development. Unlike traditional server-side technologies, Node.js operates on a non-blocking, event-driven model, which makes it highly efficient and capable of handling numerous simultaneous connections with minimal resource consumption. This is particularly advantageous for building real-time applications, like chat applications, online games, or collaborative platforms. Node.js also has a large ecosystem of libraries and modules, available through npm (Node Package Manager), making it easier to add functionality and integrate with other tools. In this course, you will learn how to use Node.js to build scalable backend systems. Topics will include setting up a server, handling HTTP requests, connecting to databases, implementing authentication and security, and deploying applications to cloud platforms. By the end of the course, you will have the skills to build a fully functioning backend for web applications using Node.js and understand its role in the broader software development process.',
    'Udemy'),

    (6, 'Article', 'Node.js Guide', 'https://www.example.com/nodejs-guide', 
    'This detailed guide to Node.js provides an in-depth understanding of its architecture and features. You will learn how Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, particularly for building scalable and real-time applications. The guide covers how to install Node.js, create your first server, and work with the Express framework to build APIs. You will also find information about popular Node.js tools and packages that can help you automate common tasks and enhance your development workflow.',
    'MDN Web Docs'),

    (6, 'Video', 'Learn Node.js in 1 Hour', 'https://www.example.com/nodejs-video', 
    'This crash course teaches Node.js in just one hour. It is perfect for developers who already have some experience with JavaScript and want to get a quick overview of Node.js. The video covers essential concepts such as modules, creating a basic server, and handling HTTP requests. It also touches on asynchronous programming, a key feature of Node.js, and shows you how to write non-blocking code to optimize performance.',
    'YouTube'),

    


    (11, 'Book', 'The Design of Everyday Things', 'https://www.example.com/design-everyday-things', 
    'In the world of user experience (UX) design, understanding human psychology and how people interact with products is fundamental to creating effective designs. "The Design of Everyday Things" by Don Norman is a landmark book that explores the principles of user-centered design and how designers can create products that are both functional and intuitive to use. Norman explains how everyday objects, from doorknobs to complex digital interfaces, can either be designed in a way that supports or hinders the user goals. The book introduces critical design principles such as affordance, feedback, and consistency, showing how these can be applied to improve the usability of any product. This book is not just for designers; it is for anyone who wants to understand the deeper psychological aspects of product design. By emphasizing empathy for the user and understanding their cognitive and emotional responses, Norman outlines how to make products that are easy to use, solve real problems, and provide an overall satisfying user experience. Whether you are designing a website, a mobile app, or a physical product, this book is an essential guide for learning how to apply user-centered design principles to create functional, delightful, and user-friendly designs.',
    'MIT Press'),

    (11, 'Video', 'Introduction to UX Design', 'https://www.example.com/intro-to-ux', 
    'This video course provides an introduction to user experience (UX) design, exploring the essential principles and best practices for creating user-centered designs. It covers topics such as usability testing, user research, wireframing, and prototyping. The instructor provides real-world examples and insights into the UX design process, teaching how to develop intuitive user interfaces that meet users’ needs. This course is perfect for beginners who want to start a career in UX design or enhance their existing skills.',
    'LinkedIn Learning'),

    
   

    (9, 'Video', 'Learn MongoDB in 30 Minutes', 'https://www.example.com/learn-mongodb-video', 
    'This short and engaging video is designed for beginners who want to quickly get up to speed with MongoDB. It walks through the basics of MongoDB, including setting up your database, creating collections, and inserting documents. The video also covers querying and updating data, as well as the key differences between MongoDB and SQL databases. This is a great way to get a quick introduction to MongoDB before diving deeper into more advanced topics.',
    'YouTube'),

    (9, 'Book', 'MongoDB: The Definitive Guide', 'https://www.example.com/mongodb-definitive-guide', 
    'This comprehensive book provides an in-depth look at MongoDB, including installation, configuration, and advanced topics such as aggregation, replication, and sharding. Written by leading MongoDB experts, the book explains how to use MongoDB in real-world applications, with practical examples and best practices for developers. The book covers both basic and advanced features of MongoDB, making it suitable for both beginners and experienced developers. By the end of the book, you will have a deep understanding of MongoDB and how to use it effectively in your applications.',
    'Reilly Media'),

    (12, 'Online Course', 'Machine Learning Specialization', 'https://www.example.com/ml-specialization', 
    'This comprehensive specialization on machine learning is designed to teach you the foundations of machine learning, including supervised and unsupervised learning algorithms, as well as deep learning. The course covers key concepts such as linear regression, classification, clustering, and neural networks, and includes hands-on assignments where you can apply these concepts using popular tools like Python, Scikit-learn, and TensorFlow. By the end of the specialization, you will have the skills to build and deploy machine learning models.',
    'Coursera'),

    (12, 'Article', 'A Comprehensive Guide to Machine Learning', 'https://www.example.com/comprehensive-guide-ml', 
    'Machine learning is an exciting and fast-evolving field that enables computers to learn from data and improve over time. This guide covers the fundamentals of machine learning, including types of machine learning (supervised, unsupervised, reinforcement learning), popular algorithms, and the machine learning workflow. The article also explores practical applications of machine learning, such as recommendation systems, image recognition, and natural language processing, providing real-world examples to show how these techniques are used in modern technologies.',
    'Towards Data Science'),

    


    (14, 'Online Course', 'React for Beginners', 'https://www.example.com/react-for-beginners', 
    'React.js is a popular JavaScript library used for building user interfaces, particularly for single-page applications. This course provides an introduction to React, teaching you how to create components, manage state, and handle events. You will learn how to build interactive web applications and get hands-on experience working with React. The course also covers essential tools like React Router and Redux, allowing you to scale your applications as they grow. By the end of the course, you will be able to build your own React applications from scratch.',
    'Codecademy'),

    (14, 'Article', 'An Introduction to React', 'https://www.example.com/intro-to-react', 
    'React is one of the most widely used JavaScript libraries for building user interfaces. In this article, you will learn the basic concepts behind React, including JSX, components, props, and state management. The article provides a clear and concise introduction to React, showing you how to get started with building your first React app. It also highlights best practices for structuring your React components and managing application state.',
    'MDN Web Docs');

    

-- Add more resources for other steps as needed
-- Add more resources similarly for other steps as needed
