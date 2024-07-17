import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchVehicleById } from '../../redux/actions/vehicleAction';
import { fetchDealsByVehicleId } from '../../redux/actions/dealsAction';
import CreateDealModal from '../Deal/CreateDeal';
import {
  FaTachometerAlt,
  FaSnowflake,
  FaChair,
  FaDoorOpen,
  FaCar,
  FaCogs,
} from 'react-icons/fa';

const VehicleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const vehicleDetails = useSelector((state) => state.vehicle.vehicleDetails);
  const { user } = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchVehicleById(id));
    }
  }, [id, dispatch]);

  const DealsOnVehiclehandler = (vehicleId) => {
    dispatch(fetchDealsByVehicleId(vehicleId));
    router.push(`/deals/vehicle/${vehicleId}`);
  };

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen  max-w-7xl p-8 mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Vehicle Details</h1>
      {vehicleDetails ? (
        <div className="border-2 border-gray-700 text-white rounded-xl shadow-md w-96 mx-auto">
          <div className="h-60 bg-gray-700 rounded-t-xl relative">
            <img
              src={vehicleDetails.image}
              alt={vehicleDetails.name}
              className="object-cover w-full h-full rounded-t-xl"
            />
          </div>
          <h2 className="text-xl font-semibold text-center p-4">{vehicleDetails.name}</h2>
          <p className="bg-slate-900 text-center text-xl font-normal p-4">
            Starting at {vehicleDetails.price}
          </p>
          <div className="flex justify-center items-center gap-4 p-4">
            <div className="text-left text-white">
              <p className="flex items-center m-1">
                <FaCar className="mr-2" />
                Type: {vehicleDetails.type}
              </p>
              <p className="flex items-center m-1">
                <FaCogs className="mr-2" />
                Model: {vehicleDetails.model}
              </p>
              <p className="flex items-center m-1">
                <FaTachometerAlt className="mr-2" />
                Mileage: {vehicleDetails.vehicle_info.mileage}
              </p>
            </div>
            <div className="text-left text-white">
              <p className="flex items-center m-1">
                <FaSnowflake className="mr-2" />
                AC/Heater: {vehicleDetails.vehicle_info.ac_heater}
              </p>
              <p className="flex items-center m-1">
                <FaChair className="mr-2" />
                Seats: {vehicleDetails.vehicle_info.seats}
              </p>
              <p className="flex items-center m-1">
                <FaDoorOpen className="mr-2" />
                Doors: {vehicleDetails.vehicle_info.doors}
              </p>
            </div>
          </div>
          <div className="flex justify-center border-1 rounded-b-xl">
            <button
              className=" text-white px-4 py-2 rounded-bl-xl w-full  bg-gray-500 "
              onClick={handleCreateClick}
            >
              Add Deal
            </button>
            <button
              className=" text-white px-4 py-2 w-full  border-2 border-gray-500 rounded-br-xl"
              onClick={() => DealsOnVehiclehandler(vehicleDetails._id)}
            >
              See Deals
            </button>
          </div>
          {isModalOpen && (
            <CreateDealModal onClose={handleCloseModal} vehicleId={vehicleDetails._id} userId={vehicleDetails.user} />
          )}
        </div>
      ) : (
        <p className="text-white text-center">Loading vehicle details...</p>
      )}
    </div>
  );
};

export default VehicleDetail;
