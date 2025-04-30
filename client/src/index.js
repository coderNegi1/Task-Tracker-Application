import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create the root element for Vite app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: If you want to measure the performance in your app, pass a function
// to log the results (e.g., reportWebVitals(console.log)) or send to an analytics endpoint.
reportWebVitals();
