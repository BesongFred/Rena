import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Report = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    incident: '',
    consentToContact: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: Send to API or backend here
    console.log('Submitted Report:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-pink-50 text-center px-4">
        <h1 className="text-3xl font-bold text-pink-700 mb-4">Thank You for Your Report</h1>
        <p className="text-gray-700 mb-6 max-w-md">
          Your report has been received. If you requested to be contacted, a support worker will reach out to you shortly.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">SafeVoice</h1>
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          {/* <button onClick={() => navigate('/report')} className="hover:text-blue-600">Report</button> */}
          <button onClick={() => navigate('/GetSupport')} className="hover:text-blue-600">Get Support</button>
          <button onClick={() => navigate('/AboutUs')} className="hover:text-blue-600">About</button>
          <button
            onClick={() => navigate('/login')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </div>
      </nav>

      {/* Form Section */}
      <div className="min-h-screen bg-pink-50 py-12 px-4 flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-xl w-full">
          <h2 className="text-2xl font-bold text-pink-700 mb-6 text-center">Report an Incident</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700">Your Name (Optional)</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md"
                placeholder="Leave blank to stay anonymous"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Email (Optional)</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-md"
                placeholder="We’ll only contact you if you consent"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Location of Incident</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md"
                placeholder="City, neighborhood, or place"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Describe What Happened</label>
              <textarea
                name="incident"
                value={formData.incident}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md h-32"
                placeholder="Include as much detail as you feel comfortable sharing"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="consentToContact"
                checked={formData.consentToContact}
                onChange={handleChange}
              />
              <label className="text-sm text-gray-700">I consent to be contacted by a support worker</label>
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Report;
