import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter'; // Ensure this file exists
import supportImage from '../assets/love04.jpg'; // Replace or remove if not needed

const supportOptions = [
  {
    title: "24/7 Crisis Hotline",
    description: "Speak to trained professionals at any time for emergency assistance.",
    contact: "1-800-123-4567"
  },
  {
    title: "Counseling Services",
    description: "Connect with licensed therapists who specialize in trauma recovery.",
    contact: "support@safevoice.org"
  },
  {
    title: "Shelter & Housing",
    description: "Find temporary safe housing and shelters in your area.",
    contact: "Visit your local center or call the hotline"
  },
  {
    title: "Legal Assistance",
    description: "Access free legal advice and representation for protection orders, cases, and more.",
    contact: "legalhelp@safevoice.org"
  }
];

const initialListings = [
  { id: 1, name: "Safe Shelter NYC", location: "New York", img: supportImage },
  { id: 2, name: "Healing Center LA", location: "Los Angeles", img: supportImage },
  { id: 3, name: "Rescue Haven Chicago", location: "Chicago", img: supportImage }
];

const GetSupport = () => {
  const navigate = useNavigate();
  const [filteredListings, setFilteredListings] = useState(initialListings);

  const handleFilter = ({ location }) => {
    const filtered = initialListings.filter((item) =>
      !location || item.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredListings(filtered);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">SafeVoice</h1>
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <button onClick={() => navigate('/report')} className="hover:text-blue-600">Report</button>
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

      {/* Hero */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-pink-100 to-purple-200">
        <h2 className="text-4xl font-bold text-pink-300 mb-4">Gender-Based Violence Report & Support</h2>
        <p className="text-lg text-gray-700 mb-6">
          Report safely, access help, and find verified resources.
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 bg-pink-900 text-white rounded-xl font-semibold hover:bg-pink-700 transition"
        >
          Get Help Now
        </button>
      </section>

      {/* Search Filters */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h3 className="text-2xl font-semibold mb-4">Find Local Support</h3>
        <SearchFilter onFilter={handleFilter} />
      </section>

      {/* Verified Support Centers */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Verified Support Centers</h3>
        <div className="grid gap-6 md:grid-cols-3">
          {filteredListings.map(listing => (
            <div key={listing.id} className="bg-white rounded-xl shadow hover:shadow-lg transition">
              <img src={listing.img} alt={listing.name} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-4">
                <h4 className="font-semibold text-lg">{listing.name}</h4>
                <p className="text-gray-500">{listing.location}</p>
                <p className="text-green-600 font-bold">Free Services Available</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Options */}
      <div className="bg-gray-50 text-gray-800 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-pink-700 mb-8">Get Support</h1>
          <p className="text-center text-lg mb-10">
            You are not alone. Below are safe, verified support services available for those affected by gender-based violence.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {supportOptions.map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                <h2 className="text-xl font-semibold text-pink-600">{option.title}</h2>
                <p className="mt-2 text-gray-700">{option.description}</p>
                <p className="mt-4 font-semibold text-gray-900">Contact: {option.contact}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              If you are in immediate danger, call <strong>911</strong> or your country's emergency number.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetSupport;
