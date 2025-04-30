const Project = require('../models/Project');

// Create a new project (limit 4 per user)
exports.createProject = async (req, res) => {
  const { title, description } = req.body;

  try {
    // Count existing projects for the user
    const existingProjects = await Project.find({ user: req.user.id });

    if (existingProjects.length >= 4) {
      return res.status(400).json({ message: 'You can only create up to 4 projects.' });
    }

    // Create the project
    const project = await Project.create({
      title,
      description,
      user: req.user.id,
    });

    res.status(201).json({ message: 'Project created successfully', project });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create project', error: err.message });
  }
};

// Get all projects for the logged-in user
exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch projects', error: err.message });
  }
};
