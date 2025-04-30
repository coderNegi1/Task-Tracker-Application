import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Vite configuration
export default defineConfig({
  plugins: [
    react(), // React plugin
    tailwindcss(), // Tailwind CSS plugin
  ],
  server: {
    proxy: {
      '/api': 'http://localhost:5000', // API calls will be proxied to the Express backend
    },
  },
});
