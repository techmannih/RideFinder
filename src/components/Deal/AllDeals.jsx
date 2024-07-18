import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals } from "../../redux/actions/dealsAction";
import { useRouter } from "next/router";

const AllDeals = () => {
  const dispatch = useDispatch();
  const deals = useSelector((state) => state.deal.deals);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchDeals());
  }, [dispatch]);

  const handleDetailsClick = (dealId) => {
    router.push(`/deals/get/${dealId}`);
  };

  return (
    <div className="bg-black min-h-screen max-w-7xl p-8 mx-auto">
      <h1 className="text-white text-3xl mb-5">All Deals</h1>

      {deals && deals.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {deals.map((deal) => (
            <div
              key={deal._id}
              className="bg-gray-800 text-white p-5 rounded-lg shadow-lg"
            >
              <h2 className="text-xl font-bold mb-2">{deal.title}</h2>
              <p className="mb-2">{deal.description}</p>
              <p className="text-lg font-semibold">{deal.price}</p>
              <button
                className="mt-3 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => handleDetailsClick(deal._id)}
              >
                Details
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">No deals available</p>
      )}
    </div>
  );
};

export default AllDeals;
