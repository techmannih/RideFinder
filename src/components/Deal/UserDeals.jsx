import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealsByUserId } from "../../redux/actions/dealsAction";

const UserDeals = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { userDeals, loading, error } = useSelector((state) => state.deal);

  useEffect(() => {
    if (user && user.id) {
      dispatch(fetchDealsByUserId(user.id));
    }
  }, [dispatch, user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="bg-black min-h-screen max-w-7xl p-8 mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">User Deals</h2>
      {userDeals && userDeals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userDeals.map((deal) => (
            <div
              key={deal._id}
              className="bg-gray-900 rounded-lg shadow-md p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
              <p className="text-gray-300 mb-4">{deal.description}</p>
              <p className="text-gray-300">Price: {deal.price}</p>
              {/* Add more deal details as needed */}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No deals found.</p>
      )}
    </div>
  );
};

export default UserDeals;
