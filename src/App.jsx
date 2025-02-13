// src/App.js

/**
 * @module App
 *
 * @category Core
 *
 * @description
 * The main application component that initializes routing using `AppRouter`.
 *
 * @returns {JSX.Element} The root component rendering the application router.
 */

import AppRouter from '@/router';        

const App = () => {
  return <AppRouter />;
};

export default App;

