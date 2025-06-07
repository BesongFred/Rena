import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import LoginPage from './pages/LoginPage'; // ✅ Make sure this file exists
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import GetSupport from './pages/GetSupport';
import Report from './pages/Report';
import Learnmore from './pages/Learnmore';
import Service from './components/Service';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/GetSupport" element={<GetSupport />} />
        <Route path="/report" element={<Report />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </Router>
  );
}

export default App;
