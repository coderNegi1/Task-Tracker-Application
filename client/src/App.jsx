import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// You can uncomment Navbar when ready
 import Navbar from './components/Layout/Navbar';
import Home from './components/Home';  // Import Home component
import Login from './components/Auth/Login.jsx';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import CreateProject from './components/Dashboard/CreateProject';
import CreateTask from './components/Task/CreateTask';
import TaskList from './components/Task/TaskList';
import TaskDetails from './components/Task/TaskDetails';
import EditTask from './components/Task/EditTask';

function App() {
  return (
    <Router>
      {/* Optionally uncomment the Navbar when ready */}
      <Navbar />
      <Routes>
        {/* Define all the routes for the components */}
        <Route path="/" element={<Home />} />  {/* Home Page */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/create-project" element={<CreateProject />} />
        <Route path="/dashboard/tasklist/:projectId" element={<TaskList />} />
        <Route path="/dashboard/task/:taskId" element={<TaskDetails />} />
        <Route path="/dashboard/edit-task/:taskId" element={<EditTask />} />
        <Route path="/dashboard/create-task" element={<CreateTask />} />
      </Routes>
    </Router>
  );
}

export default App;
