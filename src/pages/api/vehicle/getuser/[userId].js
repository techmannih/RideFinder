// api/vehicle/getVehicleByUserId.js
import connectDB from "../../../../utils/db";
import authMiddleware from "../../../../middleware/authmiddleware";
import { getVehicleByUserId } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized" });
      }
      try {
        await getVehicleByUserId(req, res);
      } catch (error) {
        console.error("Error in vehicle request:", error);
        res.status(500).json({ msg: "Server Error" });
      }
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
