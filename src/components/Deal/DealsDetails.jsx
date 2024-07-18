// components/DealDetails.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchDealById } from "../../redux/actions/dealsAction";

const DealDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  const dispatch = useDispatch();
  const deal = useSelector((state) => state.deal.deal);
  console.log("deal", deal);

  useEffect(() => {
    if (id) {
      console.log("id", id);
      dispatch(fetchDealById(id));
    }
  }, [dispatch, id]);

  if (!deal) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen max-w-7xl p-8 mx-auto">
      <h1 className="text-white text-3xl mb-5">{deal.title}</h1>
      <p className="text-white mb-2">{deal.description}</p>
      <p className="text-white text-lg font-semibold">Price: ${deal.price}</p>
      <p className="text-white mb-2">Discount: {deal.deal_info?.discount}</p>
      <p className="text-white mb-2">Expiry Date: {deal.deal_info?.expiry_date}</p>
      <p className="text-white mb-2">Deal Creator ID: {deal.dealcreatorId}</p>
      <p className="text-white mb-2">Vehicle ID: {deal.vehicleId}</p>
      <p className="text-white mb-2">User: {deal.user}</p>
      <p className="text-white mb-2">Deal ID: {deal._id}</p>
      {/* Add more deal details as needed */}
    </div>
  );
};

export default DealDetails;
