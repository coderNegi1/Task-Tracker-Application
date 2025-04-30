Task Tracker Application
The Task Tracker Application allows users to manage their projects and tasks effectively. This application is designed for multiple users, where each user can have up to 4 projects. Each project can contain multiple tasks, and each task can be tracked with details like title, description, and progress status.

Features
Signup: Allows users to create an account by providing email, password, name, and country.

Login: Authenticates users using email and password.

Create a Project: Users can create a new project (limit: 4 projects per user).

Create a Task: Users can create tasks for their projects.

Read a Task: Users can view tasks and their details.

Update a Task: Users can update the details of a task.

Delete a Task: Users can delete a task from a project.

User Information
Each user is required to provide the following details upon registration:

Email: For account identification.

Password: For secure authentication.

Name: To personalize the user profile.

Country: To store the user's country information.

Task Information
Each task has the following attributes:

Title: A short name/heading for the task.

Description: A detailed explanation of the task.

Status: To track progress (e.g., "Not Started", "In Progress", "Completed").

Creation Date: The date when the task was created.

Completion Date: The date when the task is marked as completed (optional).

Tech Stack
Backend: ExpressJS (Node.js framework)

Frontend: ReactJS

Database: MongoDB (NoSQL database)

Authentication: JWT (JSON Web Token) for user authentication

State Management: React's useState, useEffect

CSS Framework: TailwindCSS for responsive design

API Requests: Axios for HTTP requests

Project Structure
bash
Copy
Edit
task-tracker-app/
├── backend/
│   ├── controllers/
│   │   ├── authController.js      # Handles user authentication (login/signup)
│   │   ├── projectController.js   # Manages project-related APIs
│   │   └── taskController.js      # Manages task-related APIs
│   ├── models/
│   │   ├── User.js                # User model schema
│   │   ├── Project.js             # Project model schema
│   │   └── Task.js                # Task model schema
│   ├── routes/
│   │   ├── authRoutes.js          # Routes for login/signup
│   │   ├── projectRoutes.js       # Routes for project management
│   │   └── taskRoutes.js          # Routes for task management
│   ├── middleware/
│   │   └── authMiddleware.js      # Middleware for protecting routes (JWT)
│   ├── server.js                  # Entry point for Express server
│   └── config.js                  # Database connection & other configurations
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js          # Header component with navigation
│   │   │   ├── TaskList.js        # Task listing component
│   │   │   └── ProjectList.js     # Project listing component
│   │   ├── pages/
│   │   │   ├── Login.js           # Login page
│   │   │   ├── Signup.js          # Signup page
│   │   │   ├── Dashboard.js       # Dashboard page for managing projects/tasks
│   │   ├── App.js                 # Main React App component
│   │   ├── index.js               # React entry point
│   │   └── axiosInstance.js       # Axios setup for API calls
│   └── tailwind.config.js          # TailwindCSS configuration
├── .env                            # Environment variables (e.g., JWT_SECRET, DB_URI)
├── .gitignore                      # Git ignore file
└── package.json                    # Project dependencies and scripts# Task-Tracker-Application
