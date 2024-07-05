const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: true,
    unique: true,
  },
  user_location: {
    type: String,
    required: true,
  },
  user_info: {
    type: Object,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  vehicle_info: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
    },
  ],
  sold_vehicle_info: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SoldVehicle",
    },
  ],
  deals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Deal",
    },
  ],
});

// Check if the model already exists to avoid OverwriteModelError
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
