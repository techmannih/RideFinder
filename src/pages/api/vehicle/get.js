import connectDB from "../../../utils/db";
import { getVehicles } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    return getVehicles(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
