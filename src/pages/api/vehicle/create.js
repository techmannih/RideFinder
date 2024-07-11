// api/vehicle/createVehicle.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { createVehicle } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    authMiddleware(req, res, async function () {
      return createVehicle(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
