// src/router/index.jsx

/**
 * @module AppRouter
 * @category Router
 * 
 * @description
 * The `AppRouter` component sets up the routing for the application using `react-router-dom`.
 * It defines the various routes of the application, each of which corresponds 
 * to a different page or component.
 * 
 * This component wraps the entire application in a `Router` to enable navigation between pages. 
 * It includes a `Header` component that is shown on all pages.
 * 
 * The `*` route acts as a catch-all for undefined routes and renders the `ErrorPage` component.
 * The route `/user/:userId` dynamically renders the `UserDashboard` page for a user 
 * based on the `userId` passed in the URL.
 * 
 * @returns {JSX.Element} The rendered `AppRouter` component with all defined routes.
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Profile from '@/pages/Profile';
import Settings from '@/pages/Settings';
import Community from '@/pages/Community';
import UserDashboard from '@/pages/UserDashboard'; // New component
import Header from '@/components/Header';
import ErrorPage from '@/components/ErrorPage';

function AppRouter() {
  return (
    <Router>
      <div className="appWrapper">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="/user/:userId" element={<UserDashboard />} /> 
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
