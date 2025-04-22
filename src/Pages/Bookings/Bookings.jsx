import React, { useEffect, useState } from 'react';

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
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold mb-4">My Today Appointments</h1>
      <p className="mb-6">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
      </p>

      {bookedDoctors.length > 0 ? (
        bookedDoctors.map((doc, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg mb-6">
            <h2 className="text-xl font-semibold">{doc.name}</h2>
            <p className="text-gray-600">{doc.speciality}</p>
            <p className="text-sm text-gray-500">Reg No: {doc.registration_number}</p>
            <p className="text-sm text-gray-500">Working at: {doc.working_at}</p>
            <p className="text-sm text-blue-600 font-bold mt-2">Fee: Taka {doc.fee}</p>
            <button
              onClick={() => handleCancel(index)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel Appointment
            </button>
          </div>
        ))
      ) : (
        <p className="text-gray-500">No appointments booked yet.</p>
      )}
    </div>
  );
};

export default Bookings;
