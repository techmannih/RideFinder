const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  vehicle_info: {
    type: Object,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

// Check if the model already exists to avoid OverwriteModelError
const Vehicle =
  mongoose.models.Vehicle || mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
