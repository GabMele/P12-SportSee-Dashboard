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
          <Route path="/user/:userId" element={<UserDashboard />} /> {/* New dynamic route */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
