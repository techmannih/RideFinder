const mongoose = require("mongoose");

const soldVehicleSchema = new mongoose.Schema({
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  vehicle_info: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});

module.exports = mongoose.model("SoldVehicle", soldVehicleSchema);
