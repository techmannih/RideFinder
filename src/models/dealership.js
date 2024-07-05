const mongoose = require("mongoose");

const dealershipSchema = new mongoose.Schema({
  dealership_email: {
    type: String,
    required: true,
    unique: true,
  },
  dealership_name: {
    type: String,
    required: true,
  },
  dealership_location: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dealership_info: {
    type: Object,
    required: true,
  },
  cars: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Car",
    },
  ],
  deals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deal",
    },
  ],
  sold_vehicles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoldVehicle",
    },
  ],
});

module.exports = mongoose.model("Dealership", dealershipSchema);
