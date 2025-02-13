// src/main.jsx

/**
 * @module Root
 * 
 * @category Entry Point
 * 
 * @description
 * This file serves as the entry point for the React application. It uses `StrictMode` 
 * to help identify potential issues in the app during development. The `App` component 
 * is rendered into the root DOM element, and global styles are applied from `global.scss`.
 * 
 * @returns {JSX.Element} The root component of the app rendered in strict mode.
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.scss'; // Global styles for the application
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
