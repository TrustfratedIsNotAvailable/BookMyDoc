import React, { useEffect, useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
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
      <h1 className="text-2xl font-bold mb-4">My Today Appointments</h1>
      <p className="mb-6">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      {bookedDoctors.length > 0 ? (
        <>
          <div className="mb-12 bg-white p-4 rounded-lg shadow-md">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorFee" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#10b981" fillOpacity={1} fill="url(#colorFee)" />
                <Area type="monotone" dataKey="negative" stroke="#10b981" fillOpacity={0.4} fill="url(#colorFee)" />
              </AreaChart>
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
        <p className="text-gray-500">No appointments booked yet.</p>
      )}
    </div>
    
  );
};

export default Bookings;
