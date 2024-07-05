const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  vehicle_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  deal_info: { 
    type: mongoose.Schema.Types.Mixed, 
    required: true },
});

module.exports = mongoose.model("Deal", dealSchema);
