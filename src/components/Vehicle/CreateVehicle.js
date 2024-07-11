
// src/components/CreateVehicleModal.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createVehicle } from '../../redux/actions/vehicleAction';
import { toast } from 'react-hot-toast';

const CreateVehicleModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    type: '',
    name: '',
    model: '',
    vehicle_info: {
      color: '',
      mileage: ''
    },
    user: user.id || ''  // Use the user ID from the Redux state
  });
console.log("user",user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('vehicle_info.')) {
      const key = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        vehicle_info: {
          ...prevData.vehicle_info,
          [key]: value
        }
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.user) {
      toast.error('User ID is missing');
      return;
    }
    dispatch(createVehicle(formData));
    onClose();
    toast.success('Vehicle created successfully');
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50 text-black">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Create Vehicle</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Type</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Model</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Color</label>
            <input
              type="text"
              name="vehicle_info.color"
              value={formData.vehicle_info.color}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mileage</label>
            <input
              type="text"
              name="vehicle_info.mileage"
              value={formData.vehicle_info.mileage}
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

export default CreateVehicleModal;
