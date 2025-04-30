import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const TaskList = () => {
  const { projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      try {
        const res = await axios.get(`/api/tasks?project=${projectId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setTasks(res.data);
      } catch (err) {
        console.error('Failed to fetch tasks', err);
      }
    };

    fetchTasks();
  }, [projectId]);

  const handleCreateTask = () => {
    navigate(`/dashboard/create-task?projectId=${projectId}`);
  };

  const handleEditTask = (taskId) => {
    navigate(`/dashboard/edit-task/${taskId}`);
  };

  const handleDeleteTask = async (taskId) => {
    const token = localStorage.getItem('token');
    try {
      await axios.delete(`/api/tasks/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTasks(tasks.filter(task => task._id !== taskId));
      alert('Task deleted successfully');
    } catch (err) {
      console.error('Failed to delete task', err);
      alert('Failed to delete task');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-semibold text-gray-800">Tasks for this Project</h3>
        <button
          onClick={handleCreateTask}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
         Create Task
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="text-gray-600">No tasks found for this project.</p>
      ) : (
        <div className="space-y-4">
          {tasks.map(task => (
            <div
              key={task._id}
              className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between items-start md:items-center"
            >
              <div className="flex-1">
                <h4 className="text-lg font-medium text-gray-800">{task.title}</h4>
                <p className="text-sm text-gray-500 mb-2">{task.status}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => navigate(`/dashboard/task/${task._id}`)}
                  className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                   View
                </button>
                <button
                  onClick={() => handleEditTask(task._id)}
                  className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                >
                   Edit
                </button>
                <button
                  onClick={() => handleDeleteTask(task._id)}
                  className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                   Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
