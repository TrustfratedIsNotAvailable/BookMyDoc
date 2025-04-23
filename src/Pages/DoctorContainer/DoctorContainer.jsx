import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';

const DoctorContainer = ({ doctors, showAll, onToggle }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className="text-[40px] font-extrabold text-center mb-4">
        Our Best Doctors
      </h1>

      <p className="text-[16px] font-regular text-center mb-8">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
        Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>

      {loading ? (
        <div className="flex items-center justify-center min-h-[calc(100vh-48px)]">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <div className="max-w-[95%] md:max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {doctors.map((doctor) => (
              <Card key={doctor.id} doctor={doctor} />
            ))}
          </div>

          <div className="text-center my-20">
            <button
              onClick={onToggle}
              className="btn bg-indigo-800 text-white text-xl rounded-4xl px-[30px] py-[15px]"
            >
              {showAll ? 'View Less' : 'View All Doctors'}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default DoctorContainer;
