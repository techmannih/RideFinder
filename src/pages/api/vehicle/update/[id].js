// api/vehicle/updateVehicle.js
import connectDB from "../../../../utils/db";
import authMiddleware from "../../../middleware/authmiddleware";
import { updateVehicle } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "PUT") {
    authMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized" });
      }
      try {
        await updateVehicle(req, res);
      } catch (error) {
        console.error("Error in vehicle request:", error);
        res.status(500).json({ msg: "Server Error" });
      }
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
