import Deal from "@/models/deal";
const Vehicle = require("../models/vehicle");

// Create and Save a new Vehicle
export const createVehicle = async (req, res) => {
  try {
    // Validate request
    if (!req.body.type) {
      return res.status(400).send({ message: "Content can not be empty!" });
    }

    // Create a Vehicle
    const newVehicle = new Vehicle({
      type: req.body.type,
      name: req.body.name,
      model: req.body.model,
      vehicle_info: req.body.vehicle_info,
      user: req.body.user,
    });

    // Save Vehicle in the database
    const savedVehicle = await newVehicle.save();
    res.send(savedVehicle);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Vehicle.",
    });
  }
};
// Retrieve all Vehicles from the database.
export const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({});
    res.send(vehicles);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving vehicles.",
    });
  }
};
// Find a single Vehicle with an id
export const getDealsByVehicleId = async (req, res) => {
  const { vehicleId } = req.query; // Use req.query for dynamic routes in Next.js API routes
  console.log(vehicleId);

  try {
    const deals = await Deal.find({ vehicleId: vehicleId });
    if (!deals || deals.length === 0) {
      res.status(404).send({ message: "No deals found for Vehicle with id " + vehicleId });
    } else {
      res.send(deals);
    }
  } catch (err) {
    console.error("Error retrieving deals:", err);
    res.status(500).send({ message: "Error retrieving deals for Vehicle with id " + vehicleId });
  }
};
// update a vehicle details by id
export const updateVehicle = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update cannot be empty!",
    });
  }

  const { id } = req.query; // Use req.query for dynamic routes in Next.js API routes

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });
    if (!updatedVehicle) {
      res.status(404).send({
        message: `Cannot update Vehicle with id=${id}. Maybe Vehicle was not found!`,
      });
    } else {
      res.send({ message: "Vehicle was updated successfully." });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Vehicle with id=" + id,
    });
  }
};
// Get vehicles by user id
export const getVehicleByUserId = async (req, res) => {
  const userId = req.query.userId; // Extract userId from req.query
  console.log(`User ID: ${userId}`);

  try {
    const vehicles = await Vehicle.find({ user: userId });
    if (!vehicles || vehicles.length === 0) {
      res
        .status(404)
        .send({ message: `Not found Vehicle with user id=${userId}` });
    } else {
      res.send(vehicles);
    }
  } catch (err) {
    res.status(500).send({
      message: `Error retrieving Vehicle with user id=${userId}`,
    });
  }
};
