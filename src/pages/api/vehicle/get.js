// api/vehicle/getVehicles.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../middleware/Authmiddleware";
import { getVehicles } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized" });
      }
      try {
        await getVehicles(req, res);
      } catch (error) {
        console.error("Error in vehicle request:", error);
        res.status(500).json({ msg: "Server Error" });
      }
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
