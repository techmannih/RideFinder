// src/components/VehicleCard.js

import React from 'react';

const VehicleCard = ({ vehicle, onDetailsClick }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md p-6 max-w-xs">
      <h2 className="text-xl font-semibold mb-2">{vehicle.name}</h2>
      <p className="mb-1"><strong>Type:</strong> {vehicle.type}</p>
      <p className="mb-1"><strong>Model:</strong> {vehicle.model}</p>
      <p className="mb-1"><strong>Color:</strong> {vehicle.vehicle_info.color}</p>
      <p className="mb-1"><strong>Mileage:</strong> {vehicle.vehicle_info.mileage}</p>
      <button 
        onClick={() => onDetailsClick(vehicle._id)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Details
      </button>
    </div>
  );
};

export default VehicleCard;
