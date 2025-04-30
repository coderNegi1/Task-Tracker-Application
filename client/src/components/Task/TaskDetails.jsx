import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TaskDetails = () => {
  const { taskId } = useParams(); // Get taskId from URL
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No token found');
        return;
      }
      try {
        const res = await axios.get(`/api/tasks/${taskId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log(res.data); // Log the task data for verification
        setTask(res.data);
      } catch (err) {
        console.error('Failed to fetch task:', err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [taskId]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-500">Loading...</p>;
  }

  if (!task) {
    return <p className="text-center mt-10 text-red-500">Task not found or error occurred</p>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Task Details</h3>
      <div className="space-y-3 text-gray-700">
        <p><span className="font-medium">Title:</span> {task.title}</p>
        <p><span className="font-medium">Description:</span> {task.description}</p>
        <p><span className="font-medium">Status:</span> 
          <span className={`ml-2 px-2 py-1 rounded text-white text-sm 
            ${task.status === 'Completed' ? 'bg-green-600' :
              task.status === 'In Progress' ? 'bg-yellow-500' :
              'bg-gray-500'}`}>
            {task.status}
          </span>
        </p>
        <p><span className="font-medium">Completion Date:</span> {new Date(task.completionDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TaskDetails;
