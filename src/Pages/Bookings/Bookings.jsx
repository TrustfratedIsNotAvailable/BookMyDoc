import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { toast } from 'react-toastify';

const Bookings = () => {
  const [bookedDoctors, setBookedDoctors] = useState([]);

  useEffect(() => {
    const storedDoctors = localStorage.getItem("bookedDoctors");
    if (storedDoctors) {
      setBookedDoctors(JSON.parse(storedDoctors));
    }
  }, []);

  const handleCancel = (indexToRemove) => {
    const updatedDoctors = bookedDoctors.filter((_, index) => index !== indexToRemove);
    setBookedDoctors(updatedDoctors);
    localStorage.setItem("bookedDoctors", JSON.stringify(updatedDoctors));
    toast.warn("Appointment canceled successfully!");
  };

  
  const chartData = bookedDoctors.map((doc) => ({
    name: doc.name,
    value: Number(doc.fee),
    negative: -Number(doc.fee),
  }));

  return (

    <div className="max-w-4xl mx-auto mt-8 px-4">
      {bookedDoctors.length > 0 ? (
        <>
             <h1 className="text-2xl font-bold mb-4 text-center">My Today Appointments</h1>
      <p className="mb-6 text-center">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>
  {/* Rechart */}
<div className="mb-12 bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
  <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">💰 Consultation Fee Overview</h2>

  <ResponsiveContainer width="100%" height={380}>
    <BarChart
      data={chartData}
      margin={{ top: 10, right: 30, left: 0, bottom: 5 }}
    >
      <defs>
        <linearGradient id="colorFee" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#34d399" stopOpacity={0.8}/>
          <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
        </linearGradient>
      </defs>

      <CartesianGrid strokeDasharray="4 4" stroke="#e5e7eb" />
      <XAxis dataKey="name" tick={{ fontSize: 12 }} />
      <YAxis tick={{ fontSize: 12 }} />
      <Tooltip contentStyle={{ backgroundColor: "#f9fafb", borderRadius: "8px", borderColor: "#d1d5db" }} />
      <Legend />
      <Bar dataKey="value" name="Fee" fill="url(#colorFee)" radius={[6, 6, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
</div>


          {bookedDoctors.map((doc, index) => (
  <div key={index} className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-100">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h2 className="text-lg font-semibold text-gray-900">{doc.name}</h2>
        <p className="text-sm text-gray-500">{doc.speciality}</p>
      </div>
      <div className="text-sm text-gray-600 text-right">
        Appointment Fee: <span className="font-semibold">{doc.fee} Taka</span> + Vat
      </div>
    </div>
    <hr className="my-4 border-dashed" />
    <button
      onClick={() => handleCancel(index)}
      className="w-full border border-red-500 text-red-500 py-2 rounded-full font-semibold hover:bg-red-50 transition"
    >
      Cancel Appointment
    </button>
  </div>
))}

        </>
      ) : (
        <>
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-64px)] space-y-6 px-3">
          <img
            src="/public/images/no-appoinment.png"
            alt="No appointments illustration"
            className="w-[200px] h-[180px]"
          />
          <p className="text-[#0F0F0F90] text-2xl">
            No appointments yet — your journey starts with one click. Let’s get you scheduled!
          </p>
          <a
            href="/"
            className="bg-indigo-800 text-white px-6 py-2 rounded-md text-lg font-medium shadow hover:bg-indigo-700 transition"
          >
            Back to Home
          </a>
        </div>
      </>
      
      )}
    </div>
    
  );
};

export default Bookings;