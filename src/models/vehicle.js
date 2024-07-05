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
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
