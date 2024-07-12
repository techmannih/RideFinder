import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createDeal } from "../../redux/actions/dealsAction";
import { toast } from "react-hot-toast";

const CreateDealModal = ({ onClose, vehicleId, userId }) => {
  const dispatch = useDispatch();
  console.log("vehicleId", vehicleId);
  console.log("userId", userId);
  const { user } = useSelector((state) => state.user);
  console.log("user", user.id);
  const [dealData, setDealData] = useState({
    title: "",
    description: "",
    price: 0,
    vehicleId: vehicleId,
    user: userId,
    dealcreatorId: user.id || "",
    deal_info: {
      discount: "10%",
      expiry_date: "2024-12-31",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "deal_info.discount" || name === "deal_info.expiry_date") {
      const key = name.split(".")[1];
      setDealData((prevData) => ({
        ...prevData,
        deal_info: {
          ...prevData.deal_info,
          [key]: value,
        },
      }));
    } else {
      setDealData({ ...dealData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!dealData.user) {
      toast.error("User ID is missing");
      return;
    }
    dispatch(createDeal(dealData));
    onClose(); // Close modal on submit
    toast.success("Deal created successfully");
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create Deal</h2>
        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={dealData.title}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={dealData.description}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Price */}
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={dealData.price}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Discount */}
          <div className="mb-4">
            <label
              htmlFor="discount"
              className="block text-sm font-medium text-gray-700"
            >
              Discount
            </label>
            <input
              type="text"
              id="discount"
              name="deal_info.discount"
              value={dealData.deal_info.discount}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Expiry Date */}
          <div className="mb-4">
            <label
              htmlFor="expiry_date"
              className="block text-sm font-medium text-gray-700"
            >
              Expiry Date
            </label>
            <input
              type="date"
              id="expiry_date"
              name="deal_info.expiry_date"
              value={dealData.deal_info.expiry_date}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          {/* Form actions */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose} // Close modal on cancel
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDealModal;
