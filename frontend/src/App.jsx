import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import KnowMore from './pages/KnowMore';
import Profile from './pages/Profile';
import RoleDetails from './pages/RoleDetails';
import Assessment from './pages/Assessment';
import Result from './pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/know-more" element={<KnowMore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/role/:id" element={<RoleDetails />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
