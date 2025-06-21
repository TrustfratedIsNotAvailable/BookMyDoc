import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import Rechart from "../../Components/Rechart/Rechart";
import { BiError } from "react-icons/bi";
import { Link } from "react-router";

const Bookings = () => {
  const [bookedDoctors, setBookedDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const storedDoctors = localStorage.getItem("bookedDoctors");
    if (storedDoctors) {
      setBookedDoctors(JSON.parse(storedDoctors));
    }
  }, []);

  const handleCancel = (indexToRemove) => {
    const updatedDoctors = bookedDoctors.filter(
      (_, index) => index !== indexToRemove
    );
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
    <>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>

      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-48px)]">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mt-8 px-4">
          {bookedDoctors.length > 0 ? (
            <>
              <h1 className="text-2xl font-bold mb-4 text-center">
                My Today Appointments
              </h1>
              <p className="mb-6 text-center">
                Our platform connects you with verified, experienced doctors
                across various specialties — all at your convenience.
              </p>

              {/* Rechart */}
              <div className="mb-12 bg-gradient-to-br from-white to-gray-100 p-6 rounded-xl shadow-lg border border-gray-200">
                <h2 className="text-xl font-bold mb-6 text-gray-800 text-center">
                  💰 Consultation Fee Overview
                </h2>
                <div className="flex justify-center">
                  <Rechart data={chartData} />
                </div>
              </div>

              {bookedDoctors.map((doc, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-xl p-6 mb-6 border border-gray-100"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h2 className="text-lg font-semibold text-gray-900">
                        {doc.name}
                      </h2>
                      <p className="text-sm text-gray-500">{doc.speciality}</p>
                    </div>
                    <div className="text-sm text-gray-600 text-right">
                      Appointment Fee:{" "}
                      <span className="font-semibold">{doc.fee} Taka</span> +
                      Vat
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
            <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-64px)] space-y-6 px-3">
              <BiError size={80} className="text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">
                You have no appointments booked.
              </h2>
              <p className="text-gray-500">
                Go to the doctors page to schedule your next consultation.
              </p>
              <Link
                to="/"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Book Now
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Bookings;
