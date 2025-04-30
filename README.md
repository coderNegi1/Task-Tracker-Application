Task Tracker Application
Hey there! 

Welcome to my Task Tracker Application. This is a full-stack web app that lets users create and manage their projects and tasks. It’s built with ExpressJS for the backend, ReactJS for the frontend, and MongoDB to store data. The app also uses JWT (JSON Web Tokens) for user authentication.

What Can You Do with This App?
With this app, you can:

Sign up and log in using your email and password (no more passwords written on paper!).

Create and manage your projects. You can have up to 4 projects at once.

Add tasks to your projects. Each task can have a status (like To Do, In Progress, Completed) to track your progress.

Update and delete tasks whenever you need to make changes.

Tech Stack 
Here’s what I used to build this:

Backend: ExpressJS (the API is super lightweight and handles everything)

Frontend: ReactJS (for a dynamic, responsive UI)

Database: MongoDB (using Mongoose for easier management)

Authentication: JWT (so you can securely log in)

Styling: TailwindCSS (for clean and modern design)

Notifications: React Toastify (for showing success/error messages)

What You’ll Need
Before you can get started, make sure you have the following on your local machine:

Node.js (v14 or higher)

MongoDB (can be local or via MongoDB Atlas)

Git (for version control)

A web browser to run the app

How to Run the App
1. Clone the Repo
First, grab a copy of the project:

bash
Copy
Edit
git clone https://github.com/<your-username>/task-tracker-app.git
cd task-tracker-app
2. Set Up the Backend
Go to the backend folder:

bash
Copy
Edit
cd backend
Install the dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend directory. Inside, you’ll need to add:

JWT_SECRET: Your secret key for JWT signing (keep this safe).

DB_URI: MongoDB connection string (e.g., mongodb://localhost:27017/task-tracker or your MongoDB Atlas URI).

Example .env file:

env
Copy
Edit
JWT_SECRET=my-super-secret-key
DB_URI=mongodb://localhost:27017/task-tracker
Start the backend:

bash
Copy
Edit
npm start
This will start your server at http://localhost:5000.

3. Set Up the Frontend
Now, navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install the dependencies for the frontend:

bash
Copy
Edit
npm install
Run the frontend server:

bash
Copy
Edit
npm run dev
The frontend will be available at http://localhost:3000.

API Endpoints
Here are the main routes for interacting with the backend:

User Authentication
POST /api/auth/signup: Create a new user.

Body: { email, password, name, country }

POST /api/auth/login: Log in a user and receive a JWT token.

Body: { email, password }

Project Management
POST /api/projects: Create a new project.

Body: { title, description }

GET /api/projects: Get all projects for the logged-in user.

Task Management
POST /api/tasks: Create a new task.

Body: { title, description, status, projectId }

GET /api/tasks: Get all tasks for the logged-in user.

Query param: project=<project-id> to filter tasks by project.

GET /api/tasks/:taskId: Get details of a specific task.

PUT /api/tasks/:taskId: Update a task.

Body: { title, description, status, completedAt }

DELETE /api/tasks/:taskId: Delete a specific task.

Deployment (Bonus Points)
If you want to deploy this app, you can use platforms like Heroku for the backend and Netlify/Vercel for the frontend.

Backend on Heroku
Log in to Heroku:

bash
Copy
Edit
heroku login
Create a new Heroku app:

bash
Copy
Edit
heroku create
Push your app to Heroku:

bash
Copy
Edit
git push heroku main
Set the necessary environment variables on Heroku:

bash
Copy
Edit
heroku config:set JWT_SECRET=my-super-secret-key
heroku config:set DB_URI=mongodb://localhost:27017/task-tracker
Frontend on Netlify/Vercel
Go to Netlify or Vercel.

Connect your GitHub repository.

Deploy your frontend and it’ll automatically be live!

Environment Variables
For the backend, you’ll need to create a .env file with these values:

JWT_SECRET: Your secret key for signing JWT tokens. It’s a random string (you can use any string here).

DB_URI: The MongoDB URI to connect to your database (local or MongoDB Atlas).

Example .env file:

env
Copy
Edit
JWT_SECRET=my-super-secret-key
DB_URI=mongodb://localhost:27017/task-tracker
Final Thoughts 
This app is a simple yet effective way to keep track of your tasks and projects. I’ve built it with flexibility in mind, so you can easily scale it or add new features if needed. I hope it helps you stay organized!

If you have any feedback or ideas for improvements, feel free to open an issue or create a pull request. 

Author: Prashant Negi


