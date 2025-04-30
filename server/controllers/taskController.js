const Task = require('../models/Task');

// Create a task
exports.createTask = async (req, res) => {
  const { title, description, status, project } = req.body;

  try {
    if (!title || !description || !status) {
      return res.status(400).json({ message: 'Title, description, and status are required' });
    }

    const task = new Task({
      title,
      description,
      status,
      project,
      user: req.user.id,
    });

    await task.save();
    res.status(201).json({ message: 'Task created successfully', task });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task', error: err.message });
  }
};

// Get all tasks for a user (optional: filter by project)
exports.getTasks = async (req, res) => {
  try {
    const filter = { user: req.user.id };

    if (req.query.project) {
      filter.project = req.query.project;
    }

    const tasks = await Task.find(filter).sort({ createdAt: -1 });

    if (tasks.length === 0) {
      return res.status(404).json({ message: 'No tasks found' });
    }

    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch tasks', error: err.message });
  }
};

// Get a specific task by taskId
exports.getTaskById = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch task', error: err.message });
  }
};

// Update a task
exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, description, status, completedAt } = req.body;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.status = status || task.status;
    task.completedAt = completedAt || task.completedAt;

    await task.save();
    res.status(200).json({ message: 'Task updated successfully', task });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task', error: err.message });
  }
};

// Delete a task
exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.deleteOne();
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task', error: err.message });
  }
};
