import React from 'react';
import CountUp from 'react-countup';
import { FaUserMd, FaStar, FaUsers, FaUserFriends } from 'react-icons/fa';

const stats = [
  { image:'/images/success-doctor.png' , label: 'Total Doctors', end: 199 },
  { image:'/images/success-review.png', label: 'Total Reviews', end: 467 },
  { image:'/images/success-patients.png', label: 'Patients', end: 1900 },
  { image:'/images/success-staffs.png', label: 'Total Staffs', end: 300 },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-4 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-2">
        We Provide Best Medical Services
      </h2>
      <p className="text-center text-gray-500 mb-8">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
        {
        stats.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <img src={item.image} alt="" className='w-16 h-16 mb-2' />
            <div className="text-5xl font-extrabold text-gray-800">
              <CountUp end={item.end} duration={5} />+
            </div>
            <p className="text-xl text-[#0F0F0F80] mt-1">{item.label}</p>
          </div>
        ))
        }
      </div>
    </section>
  );
};

export default StatsSection;
