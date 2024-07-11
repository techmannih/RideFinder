// api/vehicle/getDealsByVehicleId.js
import connectDB from "../../../../utils/db";
import authMiddleware from "../../../../utils/authMiddleware";
import { getDealsByVehicleId } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async function () {
      return getDealsByVehicleId(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
