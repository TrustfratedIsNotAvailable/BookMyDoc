import React from "react";
import "./Card.css";
import { PiTrademarkRegisteredLight } from "react-icons/pi";
import { NavLink } from "react-router";

const Card = ({ doctor }) => {
  const {
    id,
    image,
    name,
    education,
    speciality,
    experience,
    registration_number,
    availability,
  } = doctor;

  const today = new Date().toLocaleString("en-US", { weekday: "long" });
  const isAvailableToday = availability.includes(today);

  // Determine experience label
  let experienceLabel = "";
  if (experience >= 20) {
    experienceLabel = "20+ Years Experience";
  } else if (experience >= 15) {
    experienceLabel = "15+ Years Experience";
  } else if (experience >= 10) {
    experienceLabel = "10+ Years Experience";
  } else if (experience >= 5) {
    experienceLabel = "5+ Years Experience";
  } else {
    experienceLabel = `${experience} Years Experience`;
  }

  return (
    <div className="card bg-base-100 shadow-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <figure className="px-6 pt-6 mb-4 flex justify-center">
        <img src={image} alt={name} className="rounded-xl" loading="lazy" />
      </figure>

      <div className="flex flex-wrap gap-3 px-6 mb-4">
        <span
          className={`badge badge-outline text-sm px-4 py-2 rounded-2xl text-white ${
            isAvailableToday ? "bg-blue-400" : "bg-red-400"
          }`}
        >
          {isAvailableToday ? "Available" : "Not Available"}
        </span>
        <span className="badge badge-outline text-sm px-4 py-2 rounded-2xl text-blue-800 border-blue-800">
          {experienceLabel}
        </span>
      </div>

      <div className="px-6 pb-6 text-left">
        <h2 className="text-lg font-bold mb-1">{name}</h2>
        <p className="text-sm text-gray-700 mb-2">
          {education} - {speciality}
        </p>
        <hr className="my-2 text-gray-200" />

        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
          <PiTrademarkRegisteredLight size={18} color="#0F0F0F70" />
          <span>Reg No: {registration_number}</span>
        </div>

        <div className="mt-4">
          <NavLink
            to={`/doctors/${id}`}
            className="btn btn-sm md:btn-md btn-outline btn-primary w-full"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
