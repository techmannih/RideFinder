// api/vehicle/getVehicles.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { getVehicles } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async function () {
      return getVehicles(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
