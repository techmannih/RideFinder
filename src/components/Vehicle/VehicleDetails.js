import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchVehicleById } from '../../redux/actions/vehicleAction';
import { fetchDealsByVehicleId } from '../../redux/actions/dealsAction';
import CreateDealModal from '../Deal/CreateDeal'; // Corrected import for CreateDealModal

const VehicleDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const vehicleDetails = useSelector((state) => state.vehicle.vehicleDetails);
  const { user } = useSelector((state) => state.user);

  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

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
    setIsModalOpen(true); // Open modal when "Add Deal" button is clicked
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal when deal creation is canceled or completed
  };

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Vehicle Details</h1>
      {vehicleDetails ? (
        <div className="bg-gray-900 text-white rounded-lg shadow-md p-6 mt-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">{vehicleDetails.name}</h2>
          <p>
            <strong>Type:</strong> {vehicleDetails.type}
          </p>
          <p>
            <strong>Model:</strong> {vehicleDetails.model}
          </p>
          <p>
            <strong>Color:</strong> {vehicleDetails.vehicle_info.color}
          </p>
          <p>
            <strong>Mileage:</strong> {vehicleDetails.vehicle_info.mileage}
          </p>
          <p>
            <strong>User ID:</strong> {vehicleDetails.user}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4"
            onClick={handleCreateClick} // Open modal on button click
          >
            Add Deal
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded-md m-4"
            onClick={() => DealsOnVehiclehandler(vehicleDetails._id)}
          >
            See Deals
          </button>
          {/* Render modal if isModalOpen is true */}
          {isModalOpen && (
            <CreateDealModal onClose={handleCloseModal} vehicleId={vehicleDetails._id} userId={vehicleDetails.user} />
          )}
        </div>
      ) : (
        <p className="text-white">Loading vehicle details...</p>
      )}
    </div>
  );
};

export default VehicleDetail;
