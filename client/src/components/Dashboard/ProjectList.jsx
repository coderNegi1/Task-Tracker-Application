import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
  if (!projects.length) {
    return (
      <div className="text-gray-500 text-center mt-4">
        No projects found. Start by creating one!
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project._id}
          className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition duration-300"
        >
          <h4 className="text-lg font-semibold text-blue-600 mb-2">
            <Link to={`/dashboard/tasklist/${project._id}`} className="hover:underline">
              {project.title}
            </Link>
          </h4>
          <p className="text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
