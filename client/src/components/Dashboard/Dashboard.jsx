import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ProjectList from './ProjectList';
import CreateProject from './CreateProject';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/auth/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); // Store user data
      } catch (error) {
        console.error('Error fetching user data:', error);
        alert('Failed to fetch user data');
        navigate('/login'); // Redirect to login if error occurs
      }
    };

    const fetchProjects = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/projects', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProjects(response.data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        navigate('/login'); // Redirect if not authenticated
      }
    };
    fetchUserData();
    fetchProjects();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Project Dashboard</h1>
        {/* Display user data */}
        {user && (<div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Country:</strong> {user.country}</p>
        </div>
        )}
        {/* Create Project Form */}
        <div className="mb-10">
          <CreateProject />
        </div>

        {/* Project List */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Projects</h2>
          <ProjectList projects={projects} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const [user, setUser] = useState(null); // To hold user data
//   const [projects, setProjects] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/auth/profile', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setUser(response.data); // Store user data
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//         alert('Failed to fetch user data');
//         navigate('/login'); // Redirect to login if error occurs
//       }
//     };

//     const fetchProjects = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await axios.get('/api/projects', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         setProjects(response.data);
//       } catch (error) {
//         console.error('Error fetching projects:', error);
//         alert('Failed to fetch projects');
//       }
//     };

//     fetchUserData();
//     fetchProjects();
//   }, [navigate]);

//   return (
//     <div className="min-h-screen bg-gray-100 px-4 py-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">Project Dashboard</h1>

//         {/* Display user data */}
//         {user && (
//           <div className="mb-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-2">User Information</h2>
//             <p><strong>Name:</strong> {user.name}</p>
//             <p><strong>Email:</strong> {user.email}</p>
//             <p><strong>Country:</strong> {user.country}</p>
//           </div>
//         )}

//         {/* Project List */}
//         <div>
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Projects</h2>
//           {projects.length === 0 ? (
//             <p>No projects found.</p>
//           ) : (
//             <ul>
//               {projects.map((project) => (
//                 <li key={project._id}>
//                   {project.name}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
