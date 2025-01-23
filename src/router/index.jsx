// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';        // Updated page name
import Profile from '@/pages/Profile';  // Updated page name
import Settings from '@/pages/Settings';// Updated page name
import Community from '@/pages/Community'; // Updated page name
import Header from '../components/Header';

function AppRouter() {

  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/community" element={<Community/>} />
        </Routes>
    </Router>
  );
}

export default AppRouter;
