// src/components/UserVehicle.js

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicleByUserId } from "../../redux/actions/vehicleAction"; // Import your API function for fetching vehicles
import CreateVehicleModal from './CreateVehicle';

const UserVehicle = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = user ? user.id : null; // Assuming you have access to user ID in Redux state
  const userVehicles = useSelector((state) => state.vehicle.userVehicles); // Assuming your reducer stores fetched vehicles
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      dispatch(fetchVehicleByUserId(userId)); // Dispatch action to fetch vehicles when component mounts
    }
  }, [dispatch, userId]);

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-white">Vehicles</h1>
      <button
        onClick={handleCreateClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Vehicle
      </button>
      {userVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-black">
          {userVehicles.map((vehicle) => (
            <div key={vehicle._id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">{vehicle.model}</h2>
              <p className="text-gray-600 mb-2">{vehicle.name}</p>
              <div className="mb-2">
                <p><span className="font-semibold">Type:</span> {vehicle.type}</p>
                <p><span className="font-semibold">Color:</span> {vehicle.vehicle_info.color}</p>
                <p><span className="font-semibold">Mileage:</span> {vehicle.vehicle_info.mileage}</p>
              </div>
              {/* Add more details or actions as needed */}
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2">Edit</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No user vehicles found for this user.</p>
      )}
      {isModalOpen && <CreateVehicleModal onClose={handleCloseModal} />}
    </div>
  );
};

export default UserVehicle;
