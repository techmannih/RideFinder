// src/components/Vehicles.js

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchVehicles } from '../../redux/actions/vehicleAction';
import VehicleCard from './VehicleCard';
import CreateVehicleModal from './CreateVehicle';

const Vehicles = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const vehicles = useSelector((state) => state.vehicle.vehicles);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const handleDetailsClick = (vehicleId) => {
    router.push(`/vehicle/${vehicleId}`);
  };

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">Vehicles</h1>
        <button
          onClick={handleCreateClick}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Create Vehicle
        </button>
      </div>
      {vehicles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle._id} vehicle={vehicle} onDetailsClick={handleDetailsClick} />
          ))}
        </div>
      ) : (
        <p className="text-white">No vehicles available.</p>
      )}
      {isModalOpen && <CreateVehicleModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Vehicles;
