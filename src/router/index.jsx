// src/router/index.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';        
import Profile from '@/pages/Profile';  
import Settings from '@/pages/Settings';
import Community from '@/pages/Community'; 
import Header from '@/components/Header';
import ErrorPage from '@/components/ErrorPage';

function AppRouter() {

  return (
    <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/community" element={<Community/>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </Router>
  );
}

export default AppRouter;
