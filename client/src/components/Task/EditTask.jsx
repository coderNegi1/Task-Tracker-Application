import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const { taskId } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    status: '',
    completionDate: '',
    project: ''
  });

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`/api/tasks/${taskId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTask(res.data);
      } catch (err) {
        console.error('Failed to fetch task', err);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await axios.put(`/api/tasks/${taskId}`, task, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert('Task updated successfully');

      let projectId = '';
      if (task.project && typeof task.project === 'object' && task.project._id) {
        projectId = task.project._id;
      } else if (typeof task.project === 'string') {
        projectId = task.project;
      }

      if (!projectId) {
        alert('Project ID missing. Cannot navigate.');
        return;
      }

      navigate(`/dashboard/tasklist/${projectId}`);
    } catch (err) {
      console.error('Failed to update task', err);
      alert('Failed to update task');
    }
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Edit Task</h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={task.title}
            onChange={handleChange}
            placeholder="Title"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows="4"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={task.status}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Completion Date</label>
          <input
            type="date"
            name="completionDate"
            value={task.completionDate}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition duration-200"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
