const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
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
  car_info: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model("Car", carSchema);
