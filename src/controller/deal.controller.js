const Deal = require("../models/deal");
const Vehicle = require("../models/vehicle");
const User = require("../models/user");

exports.addDealToDealership = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      vehicleId,
      deal_info,
      user,
      dealcreatorId,
    } = req.body;
    // const dealcreatorId = req.user ? req.user.id : null; // Check if req.user exists

    // Check if the vehicle exists
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      return res.status(404).json({ error: "Vehicle not found" });
    }

    // Check if the deal creator exists
    const dealCreator = await User.findById(dealcreatorId);
    if (!dealCreator) {
      return res.status(404).json({ error: "Deal creator not found" });
    }

    // Check if the dealership owner exists
    const dealershipOwner = await User.findById(user);
    if (!dealershipOwner) {
      return res.status(404).json({ error: "Dealership owner not found" });
    }
    //  if vehicleID,user and dealcreatorId are same then check and add already exist
    const deal = await Deal.findOne({ vehicleId, user, dealcreatorId });
    if (deal) {
      return res.status(400).json({ error: "Deal already exists" });
    }

    // Create new deal
    const newDeal = new Deal({
      title,
      description,
      price,
      vehicleId,
      dealcreatorId,
      user,
      deal_info,
    });

    // Save the deal to the database
    await newDeal.save();

    res.status(201).json({ message: "Deal added successfully", deal: newDeal });
  } catch (error) {
    console.error("Error adding deal:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

exports.getDealsByUserId = async (req, res) => {
  try {
    const userId = req.query.userId;
    console.log("userId", userId);
    const deals = await Deal.find({
      $or: [{ user: userId }, { dealcreatorId: userId }],
    });

    console.log("deals in backend", deals);

    if (!deals || deals.length === 0) {///////important uncomment krke dekhnas
      return res.status(404).json({
        msg: "No deals found for this user",
        status: "error",
        statusCode: 404,
      });
    }

    res.status(200).json({
      data: deals,
      msg: "Deals fetched successfully",
      status: "success",
      statusCode: 200,
    });
  } catch (error) {
    console.error("Error fetching deals by user ID:", error);
    res.status(500).json({
      msg: "Internal Server Error",
      status: "error",
      statusCode: 500,
      details: error.message,
    });
  }
};


exports.getDealsByVehicleId = async (req, res) => {
  console.log("get all deals by vehicle id");
  try {
    const { vehicleId } = req.query;

    const deals = await Deal.find({ vehicleId: vehicleId });

    // if (deals.length) {
    //   return res
    //     .status(404)
    //     .json({ message: "No deals found for this vehicle" });
    // }
    if (!deals.length) { ///////important uncomment krke dekhna
        return res
          .status(404)
          .json({ message: "No deals found for this vehicle" });
      }
    res.status(200).json(deals);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

exports.getDealById = async (req, res) => {
  try {
    const { dealId } = req.query;
    const deal = await Deal.findById(dealId);

    if (!deal) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.status(200).json(deal);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
};

exports.getAllDeals = async (req, res) => {
  try {
    const deals = await Deal.find();

    if (!deals.length) {
      return res.status(404).json({ message: "No deals found" });
    }

    res.status(200).json(deals);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Internal Server Error", details: error.message });
  }
}
