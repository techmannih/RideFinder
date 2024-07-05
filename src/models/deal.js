const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Car",
    required: true,
  },
  deal_info: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true },
});

module.exports = mongoose.model("Deal", dealSchema);
