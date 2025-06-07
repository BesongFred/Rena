// src/pages/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Service from '../components/Service';
const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-pink-600">SafeVoice</h1>
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-pink-600">Home</button>
          <button onClick={() => navigate('/report')} className="hover:text-pink-600">Report</button>
          <button onClick={() => navigate('/GetSupport')} className="hover:text-pink-600">Get Support</button>
          <button onClick={() => navigate('/login')} className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700">
            Login
          </button>
        </div>
      </nav>

      {/* About Section */}
      <main className="flex-grow px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-pink-700 mb-6">About SafeVoice</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          SafeVoice is a platform designed to empower survivors and witnesses of gender-based violence. We provide a secure, anonymous space to report incidents, access verified support services, and learn about your rights.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Why We Exist</h3>
            <p className="text-gray-700">
              Millions experience gender-based violence every year, yet many remain silent due to fear or lack of access to support. SafeVoice aims to break this silence by connecting users to life-saving resources quickly and safely.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-pink-600 mb-2">Our Mission</h3>
            <p className="text-gray-700">
              We strive to create a world where everyone feels safe and heard. Our mission is to support survivors, educate communities, and advocate for systemic change through technology and compassion.
            </p>
          </div>
        </div>

        {/* Learn More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/learnmore')}
            className="px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition"
          >
            Learn More &rarr;
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white border-t mt-8">
        &copy; {new Date().getFullYear()} SafeVoice. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUs;
