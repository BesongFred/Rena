// src/pages/HomePage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../components/SearchFilter';
import ServiceFeatures from '../components/Service';

import loveImage3 from '../assets/love01.jpg';
import loveImage2 from '../assets/love02.jpg';
import loveImage04 from '../assets/love04.jpg';

export default function HomePage() {
  const navigate = useNavigate();

  const listings = [
    { id: 2, name: "Community Help LA", location: "Los Angeles", price: 0, img: loveImage3 },
    { id: 3, name: "Safe Haven - Chicago", location: "Chicago", price: 0, img: loveImage04 },
    { id: 4, name: "Safe Haven - Chicago", location: "Chicago", price: 0, img: loveImage2 },
  ];

  const [filteredListings, setFilteredListings] = useState(listings);

  const handleFilter = ({ location, maxPrice }) => {
    const filtered = listings.filter((item) =>
      (!location || item.location.toLowerCase().includes(location.toLowerCase())) &&
      (!maxPrice || item.price <= parseInt(maxPrice))
    );
    setFilteredListings(filtered);
  };

  const testimonials = [
    { id: 1, name: "Alice", feedback: "This app helped me get the support I needed quickly and safely." },
    { id: 2, name: "Brian", feedback: "A vital resource for anyone facing violence or seeking guidance." },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
        <h1 className="text-xl font-bold text-blue-600">SafeVoice</h1>
        <div className="space-x-4">
          <button onClick={() => navigate('/')} className="hover:text-blue-600">Home</button>
          <button onClick={() => navigate('/report')} className="hover:text-blue-600">Report</button>
          <button onClick={() => navigate('/GetSupport')} className="hover:text-blue-600">Get Support</button>
          <button onClick={() => navigate('/AboutUs')} className="hover:text-blue-600">About</button>
          <button onClick={() => navigate('/Service')} className="hover:text-blue-600">Service</button>
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
        <h2 className="text-4xl font-bold text-pink-800 mb-4">Gender-Based Violence Report & Support</h2>
        <p className="text-lg text-gray-700 mb-6">
          Report safely, access help, and find verified resources.
        </p>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 bg-pink-600 text-white rounded-xl font-semibold hover:bg-pink-700 transition"
        >
          Get Help Now
        </button>
      </section>

      {/* Services Section */}
      <ServiceFeatures />

      {/* Search Filters */}
      <section className="max-w-4xl mx-auto py-8 px-4">
        <h3 className="text-2xl font-semibold mb-4">Find Local Support</h3>
        <SearchFilter onFilter={handleFilter} />
      </section>

      {/* Featured Support Centers */}
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

      {/* Testimonials */}
      <section className="bg-pink-50 py-12 px-4">
        <h3 className="text-2xl font-semibold text-center mb-6">What Survivors Say</h3>
        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-700 mb-2">"{t.feedback}"</p>
              <p className="text-right font-semibold text-pink-600">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500 bg-white mt-8 border-t">
        &copy; {new Date().getFullYear()} SafeVoice. All rights reserved.
      </footer>
    </div>
  );
}
