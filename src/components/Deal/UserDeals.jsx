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
    <div>
      <h2 className="text-2xl font-bold mb-4">User Deals</h2>
      {userDeals && userDeals.length > 0 ? (
        <ul>
          {userDeals.map((deal) => (
            <li key={deal._id}>
              <h3>{deal.title}</h3>
              <p>{deal.description}</p>
              <p>Price: {deal.price}</p>
              {/* Add more deal details as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No deals found.</p>
      )}
    </div>
  );
};

export default UserDeals;
