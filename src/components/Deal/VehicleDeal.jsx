import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { fetchDealsByVehicleId } from '../../redux/actions/dealsAction';

const VehicleDeals = () => {
  const router = useRouter();
  const { vehicleId } = router.query;
  const dispatch = useDispatch();
  const vehicleDeals = useSelector((state) => state.deal.vehicleDeals); // Select vehicleDeals from state

  useEffect(() => {
    if (vehicleId) {
      dispatch(fetchDealsByVehicleId(vehicleId));
    }
  }, [vehicleId, dispatch]);

  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Deals for Vehicle</h1>
      {vehicleDeals && vehicleDeals.length > 0   ? (
        vehicleDeals.map((deal) => (
          <div key={deal._id} className="bg-gray-900 text-white rounded-lg shadow-md p-6 mt-6 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold mb-4">{deal.title}</h2>
            <p>
              <strong>Description:</strong> {deal.description}
            </p>
            <p>
              <strong>Price:</strong> ${deal.price}
            </p>
            <p>
              <strong>Discount:</strong> {deal.deal_info?.discount}
            </p>
            <p>
              <strong>Expiry Date:</strong> {deal.deal_info?.expiry_date}
            </p>
          </div>
        ))
      ) : (
        <p className="text-white">NO deal found</p>
      )}
    </div>
  );
};

export default VehicleDeals;
