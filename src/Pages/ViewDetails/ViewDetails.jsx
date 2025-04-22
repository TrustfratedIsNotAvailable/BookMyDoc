import React from 'react';
import { PiTrademarkRegisteredLight } from 'react-icons/pi';
import { BsExclamationSquare } from "react-icons/bs";
import { NavLink, useLoaderData,useParams } from 'react-router';

const ViewDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const singleDoctor = data.find(doc => doc.id === parseInt(id));

  const {
    name,
    image,
    education,
    speciality,
    registration_number,
    fee,
    working_at,
    availability
  } = singleDoctor;

  const today = new Date().toLocaleString('en-US', { weekday: 'long' });
  const isAvailableToday = availability.includes(today);

  return (
    <>
      <div className="bg-white max-w-[95%] md:max-w-[80%] mx-auto my-6 md:my-10 px-4 sm:px-6 md:px-10 lg:px-[100px] py-6 md:py-8 rounded-lg">
        <h1 className="text-2xl sm:text-3xl md:text-[32px] text-[#0F0F0F] font-extrabold text-center mb-4 md:mb-6">
          Doctor’s Profile Details
        </h1>
        <p className="text-base sm:text-lg leading-7 text-[#0F0F0F80] text-center md:px-4 lg:px-10">
          <span className="font-semibold text-[#0F0F0F90]">{name}</span> is a skilled medical professional known for delivering high-quality care. 
          Discover their qualifications, experience, specialties, and availability to make an informed decision about your healthcare.
        </p>
      </div>

      <div className="card md:card-side bg-white shadow-sm max-w-[95%] md:max-w-[80%] md:gap-10 mx-auto p-6 my-6">
        <figure className="w-full md:w-1/2 flex justify-center mb-4 md:mb-0">
          <img
            src={image}
            alt={name}
            className="rounded-xl w-full max-w-sm object-cover"
          />
        </figure>

        <div className="card-body w-full md:w-1/2">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-[#0F0F0F80] font-medium">{education}</p>
          <p className="text-[#0F0F0F80]">{speciality}</p>
          <p className="text-[#0F0F0F] font-semibold mt-2">Working at:</p>
          <p className="text-[#0F0F0F]">{working_at}</p>

          <div className="flex items-center gap-2 mt-2 text-[#0F0F0F80]">
            <PiTrademarkRegisteredLight size={20} />
            <p>Reg No: {registration_number}</p>
          </div>

          <div className="mt-3 md:flex md:items-center">
            <p className="font-semibold text-[#0F0F0F]">Availability</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {availability.map((slot, index) => (
                <button
                  key={index}
                  className="btn btn-outline btn-accent text-sm px-4 py-1 rounded-full"
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4">
            <span className="text-[#0F0F0F] font-semibold">Consultation Fee:</span>{" "}
            <span className="text-[#176AE5] font-extrabold">Taka: {fee}</span>{" "}
            <span className="text-[#0F0F0F80]">(incl. VAT)</span>
            <span className="text-[#176AE5]"> per consultation</span>
          </p>
        </div>
      </div>

      <div className="bg-white max-w-[95%] md:max-w-[80%] mx-auto my-6 md:my-10 px-4 sm:px-6 md:px-10 lg:px-[60px] py-6 md:py-8 rounded-lg shadow-md border border-gray-100">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0F0F0F] text-center mb-6">
          Book an Appointment
        </h1>

        <hr className="mb-4 border-dashed text-[#0F0F0F50]" />

        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3 sm:gap-0">
          <p className="text-[#0F0F0F] text-base font-medium">Availability</p>
          <button
            className={`btn text-sm px-4 py-1 rounded-full ${
              isAvailableToday ? "btn-outline btn-success bg-[#09982F20]" : "btn-outline btn-error"
            }`}
            disabled={!isAvailableToday}
          >
            {isAvailableToday ? "Doctor Available Today" : "Not Available Today"}
          </button>
        </div>

        <hr className="mb-4 border-dashed text-[#0F0F0F50]" />

        <div className="mb-6 bg-[#FFA00020] text-[#FFA000] px-4 py-3 rounded-lg flex items-start sm:items-center gap-3 sm:gap-4 flex-col sm:flex-row">
          <BsExclamationSquare className="text-xl shrink-0" />
          <p className="text-sm leading-relaxed text-[#FFA000] max-w-full sm:max-w-[90%]">
            Due to high patient volume, we are currently accepting appointments for today only.
            We appreciate your understanding and cooperation.
          </p>
        </div>

        <NavLink
          to={isAvailableToday ? "/bookings" : "#"}
          onClick={(e) => {
            if (!isAvailableToday) {
              e.preventDefault();
            } else {
              // Get existing bookings from localStorage
              const existing = JSON.parse(localStorage.getItem("bookedDoctors")) || [];
          
              // Avoid duplicates (optional)
              const alreadyBooked = existing.find(doc => doc.id === singleDoctor.id);
              if (!alreadyBooked) {
                existing.push(singleDoctor);
                localStorage.setItem("bookedDoctors", JSON.stringify(existing));
              }
            }
          }}

          className={`btn text-white w-full px-6 py-3 font-semibold text-base ${
            isAvailableToday
              ? "btn-primary"
              : "btn-disabled bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
          disabled={!isAvailableToday}
        >
          {isAvailableToday ? "Book Appointment Now" : "Unavailable Today"}
        </NavLink>
      </div>
    </>
  );
};

export default ViewDetails;
