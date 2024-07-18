// components/DealDetails.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { fetchDealById } from "../../redux/actions/dealsAction";
import { fetchUserProfileById } from "../../redux/actions/userAction";

const DealDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  const dispatch = useDispatch();
  const deal = useSelector((state) => state.deal.deal);
  const user = useSelector((state) => state.user.users.find(u => u._id === deal?.dealcreatorId));
  console.log("user", user);
  console.log("deal", deal);

  useEffect(() => {
    if (id) {
      console.log("id", id);
      dispatch(fetchDealById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (deal && deal.dealcreatorId) {
      dispatch(fetchUserProfileById(deal.dealcreatorId));
    }
  }, [deal, dispatch]);
  const handleUserClick = () => {
    dispatch(fetchUserProfileById(deal.dealcreatorId));
    router.push(`/user/${deal.dealcreatorId}`);
  };
  if (!deal) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen max-w-7xl p-8 mx-auto">
       {user && (
          <p
            className="text-xl text-white cursor-pointer"
            onClick={handleUserClick}
          >
            {user.user_info.fullname}
          </p>
        )}
      <h1 className="text-white text-3xl mb-5">{deal.title}</h1>
      <p className="text-white mb-2">{deal.description}</p>
      <p className="text-white text-lg font-semibold">Price: ${deal.price}</p>
      <p className="text-white mb-2">Discount: {deal.deal_info?.discount}</p>
      <p className="text-white mb-2">Expiry Date: {deal.deal_info?.expiry_date}</p>
      <p className="text-white mb-2">Deal Creator ID: {deal.dealcreatorId}</p>
      <p className="text-white mb-2">Vehicle ID: {deal.vehicleId}</p>
      <p className="text-white mb-2">User: {deal.user}</p>
      <p className="text-white mb-2">Deal ID: {deal._id}</p>
    </div>
  );
};

export default DealDetails;
