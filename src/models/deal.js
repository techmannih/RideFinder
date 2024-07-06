const mongoose = require("mongoose");

const dealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  dealcreatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  vehicleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  deal_info: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
});
// Check if the model already exists to avoid OverwriteModelError
const Deal = mongoose.models.Deal || mongoose.model("Deal", dealSchema);

module.exports = Deal;
