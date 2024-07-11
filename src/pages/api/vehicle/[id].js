// api/vehicle/getVehicleById.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { getVehicleById } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async function () {
      return getVehicleById(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
