import React from 'react';

const features = [
  {
    emoji: "📢",
    title: "Anonymous Reporting",
    description: "Report incidents safely and confidentially without revealing your identity."
  },
  {
    emoji: "💬",
    title: "24/7 Chat Support",
    description: "Access round-the-clock emotional and informational support."
  },
  {
    emoji: "📚",
    title: "Educational Resources",
    description: "Learn about rights, protection laws, and how to support others."
  },
  {
    emoji: "🏥",
    title: "Find Nearby Help Centers",
    description: "Locate verified shelters, clinics, and legal aid near you."
  },
  {
    emoji: "👩‍⚕️",
    title: "Talk to a Professional",
    description: "Connect with therapists, counselors, or legal advisors."
  }
];

export default function ServiceFeatures() {
  return (
    <section className="py-16 bg-white text-gray-800 px-6">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-12">
        🔷 Key Features & Services
      </h2>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="bg-pink-50 border border-pink-200 rounded-2xl p-6 shadow hover:shadow-lg transition">
            <div className="text-4xl mb-4">{feature.emoji}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-700">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
