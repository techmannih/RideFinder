// api/vehicle/updateVehicle.js
import connectDB from "../../../../utils/db";
import authMiddleware from "../../../../utils/authMiddleware";
import { updateVehicle } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "PUT") {
    authMiddleware(req, res, async function () {
      return updateVehicle(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
