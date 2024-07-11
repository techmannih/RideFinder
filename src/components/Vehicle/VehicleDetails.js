// src/components/VehicleDetail.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchVehicleById } from '../../redux/actions/vehicleAction';

const VehicleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const vehicleDetails = useSelector((state) => state.vehicle.vehicleDetails);

  useEffect(() => {
    if (id) {
      dispatch(fetchVehicleById(id));
    }
  }, [id, dispatch]);

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Vehicle Details</h1>
      {vehicleDetails ? (
        <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 mt-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{vehicleDetails.name}</h2>
          <p><strong>Type:</strong> {vehicleDetails.type}</p>
          <p><strong>Model:</strong> {vehicleDetails.model}</p>
          <p><strong>Color:</strong> {vehicleDetails.vehicle_info.color}</p>
          <p><strong>Mileage:</strong> {vehicleDetails.vehicle_info.mileage}</p>
          <p><strong>User ID:</strong> {vehicleDetails.user}</p>
        </div>
      ) : (
        <p className="text-white">Loading vehicle details...</p>
      )}
    </div>
  );
};

export default VehicleDetail;
