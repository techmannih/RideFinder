// src/components/UserVehicle.js

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchVehicleByUserId } from "../../redux/actions/vehicleAction"; // Import your API function for fetching vehicles
import CreateVehicleModal from "./CreateVehicle";
import Router from "next/router";
import {
  FaTachometerAlt,
  FaSnowflake,
  FaChair,
  FaDoorOpen,
  FaCar,
  FaCogs,
} from "react-icons/fa";
const UserVehicle = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const userId = user ? user.id : null; // Assuming you have access to user ID in Redux state
  const userVehicles = useSelector((state) => state.vehicle.userVehicles); // Assuming your reducer stores fetched vehicles
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = Router;
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

  const handleDetailsClick = (vehicleId) => {
    router.push(`/vehicle/${vehicleId}`);
  };
  return (
    <div className="container max-w-7xl p-8 mx-auto">
      <h1 className="text-3xl font-bold text-white">Vehicles</h1>
      <button
        onClick={handleCreateClick}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Create Vehicle
      </button>
      {userVehicles.length > 0 ? (
        <div className="flex  justify-center items-center">
          {userVehicles.map((vehicle) => (
            <div
              key={vehicle._id}
              className="border-2 border-gray-700 text-white rounded-xl shadow-md w-96 mx-auto"
            >
              <div className="h-60 bg-gray-700 rounded-t-xl relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="object-cover w-full h-full rounded-t-xl"
                />
              </div>
              <h2 className="text-xl font-semibold text-center p-4">
                {vehicle.name}
              </h2>
              <p className="bg-slate-900 text-center text-xl font-normal p-4">
                Starting at {vehicle.price}
              </p>
              <div className="flex justify-center items-center gap-4 p-4">
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
              <div className="flex justify-center border-1 rounded-b-xl">
                <button className=" text-white px-4 py-2 rounded-bl-xl w-full bg-gray-500 ">
                  Edit
                </button>
                <button
                  className=" text-white px-4 py-2 w-full  border-2 border-gray-500 rounded-br-xl"
                  onClick={() => handleDetailsClick(vehicle._id)}
                >
                  details
                </button>
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
