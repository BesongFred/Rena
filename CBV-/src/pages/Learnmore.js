// src/pages/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">SafeVoice</h1>
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <button onClick={() => navigate('/report')} className="hover:text-blue-600">Report</button>
          <button onClick={() => navigate('/GetSupport')} className="hover:text-blue-600">Get Support</button>
          <button onClick={() => navigate('/AboutUs')} className="text-blue-600 font-semibold underline">About</button>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-6">
          At SafeVoice, our goal is to provide a safe, confidential space for individuals affected by gender-based violence. 
          We believe in empowering survivors, advocating for justice, and connecting people with trusted local resources.
        </p>

        <p className="text-md text-gray-600 mb-8">
          Whether you're looking to report an incident, find counseling, or access legal help, our platform makes it easier 
          to find the support you need—when you need it most. We're proud to collaborate with verified support centers and legal experts 
          to ensure every person gets compassionate, professional assistance.
        </p>

        <button
          onClick={() => navigate('/GetSupport')}
          className="bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-pink-700 transition"
        >
          GetSupport
        </button>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t mt-12">
        &copy; {new Date().getFullYear()} SafeVoice. Built with care for survivors everywhere.
      </footer>
    </div>
  );
};

export default AboutUs;
