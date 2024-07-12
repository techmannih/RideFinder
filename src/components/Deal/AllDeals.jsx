import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeals } from "../../redux/actions/dealsAction";
import { useRouter } from "next/router";
import CreateDealForm from "./CreateDeal"; // Import the create deal form component

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

  // State to control modal open/close
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-black min-h-screen p-5">
      <h1 className="text-white text-3xl mb-5">All Deals</h1>
      {/* Button to open modal */}
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-5"
        onClick={openModal}
      >
        Create Deal
      </button>

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

      {/* Modal for creating a deal */}
      {isModalOpen && <CreateDealForm onClose={closeModal} />}
    </div>
  );
};

export default AllDeals;
