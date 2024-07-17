import React from "react";
import {
  FaTachometerAlt,
  FaSnowflake,
  FaChair,
  FaDoorOpen,
  FaCar,
  FaCogs,
} from "react-icons/fa";

const VehicleCard = ({ vehicle, onDetailsClick }) => {
  return (
    
    
    <div className="border-2 border-gray-700 text-white rounded-xl shadow-md w-64 h-96 flex flex-col">
      <div className="h-40 bg-gray-700 rounded-t-xl relative">
        {/* Example image tag */}
        {/* <img
          src={vehicle.image}  // Assuming vehicle object has an image property
          alt={vehicle.name}   // Alt text for accessibility
          className="object-cover w-full h-full rounded-t-xl"
        /> */}
      </div>
      <h2 className="text-xl font-semibold text-center p-2">{vehicle.name}</h2>
      <p className="bg-slate-900 text-center text-xl font-normal p-2">
        Starting at {vehicle.price}
      </p>
      <div className="flex justify-center items-center gap-4 p-4 flex-grow">
        <div className="text-left text-white">
          <p className="flex items-center m-1">
            <FaCar className="mr-2" />
            Type: {vehicle.type}
          </p>
          <p className="flex items-center m-1">
            <FaCogs className="mr-2" />
            Model: {vehicle.model}
          </p>
          <p className="flex items-center m-1">
            <FaTachometerAlt className="mr-2" />
            Mileage: {vehicle.vehicle_info.mileage}
          </p>
        </div>
        <div className="text-left text-white">
          <p className="flex items-center m-1">
            <FaSnowflake className="mr-2" />
            AC/Heater: {vehicle.vehicle_info.ac_heater}
          </p>
          <p className="flex items-center m-1">
            <FaChair className="mr-2" />
            Seats: {vehicle.vehicle_info.seats}
          </p>
          <p className="flex items-center m-1">
            <FaDoorOpen className="mr-2" />
            Doors: {vehicle.vehicle_info.doors}
          </p>
        </div>
      </div>
      <div className="flex justify-center p-2 bg-gray-700 rounded-b-xl">
        <button
          onClick={() => onDetailsClick(vehicle._id)}
          className="px-4 py-2  text-white rounded"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
