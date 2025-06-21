import React from "react";
import CountUp from "react-countup";
import { FaUserMd, FaStar, FaUsers, FaUserFriends } from "react-icons/fa";

const stats = [
  { image: "/images/success-doctor.png", label: "Total Doctors", end: 199 },
  { image: "/images/success-review.png", label: "Total Reviews", end: 467 },
  { image: "/images/success-patients.png", label: "Patients", end: 1900 },
  { image: "/images/success-staffs.png", label: "Total Staffs", end: 300 },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-14 px-6 rounded-xl shadow-lg">
      <h2 className="text-3xl font-extrabold text-center mb-3 text-gray-900">
        We Provide Best Medical Services
      </h2>
      <p className="max-w-xl mx-auto text-center text-gray-600 mb-12 leading-relaxed">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.label}
              className="w-16 h-16 mb-4 object-contain"
              loading="lazy"
            />
            <div className="text-5xl font-extrabold text-indigo-700 mb-2 select-none">
              <CountUp end={item.end} duration={4} />+
            </div>
            <p className="text-lg font-semibold text-gray-700">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
