import React from 'react';
import './Card.css';
import { PiTrademarkRegisteredLight } from "react-icons/pi";

const Card = ({ doctor }) => {
    const {
        image,
        name,
        education,
        experience,
        registration_number
    } = doctor;

    return (
        <div className="card bg-base-100 shadow-sm overflow-hidden">
            <figure className="px-8 pt-8 mb-4">
                <img
                    src={image}
                    alt={name}
                    className="rounded-xl"
                />
            </figure>

            <div className="flex gap-3 px-8">
                <button className="btn btn-outline btn-accent rounded-2xl">
                    Available
                </button>
                <button className="btn btn-outline btn-accent rounded-2xl">
                    {experience}
                </button>
            </div>

            <div className="card-body items-start text-left">
                <h2 className="card-title">{name}</h2>
                <p>{education}</p>
                <hr />
                
                <div className="flex items-center gap-2">
                    <PiTrademarkRegisteredLight size={20} color="#0F0F0F70" />
                    <p>Reg No: {registration_number}</p>
                </div>

                <div className="card-actions mt-4">
                    <button className="btn btn-outline btn-primary">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
