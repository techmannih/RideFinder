// src/components/CreateDealModal.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDeal } from '../../redux/actions/dealsAction';
import { toast } from 'react-hot-toast';

const CreateDealModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  
  const [dealData, setDealData] = useState({
    title: '',
    description: '',
    price: 0,
    user: user.id || '',  // Use the user ID from the Redux state
    deal_info: {
      discount: '10%',
      expiry_date: '2024-12-31',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'deal_info.discount' || name === 'deal_info.expiry_date') {
      const key = name.split('.')[1];
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
      toast.error('User ID is missing');
      return;
    }
    dispatch(createDeal(dealData));
    onClose();
    toast.success('Deal created successfully');
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create Deal</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={dealData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={dealData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={dealData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Discount</label>
            <input
              type="text"
              name="deal_info.discount"
              value={dealData.deal_info.discount}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expiry Date</label>
            <input
              type="text"
              name="deal_info.expiry_date"
              value={dealData.deal_info.expiry_date}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
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
