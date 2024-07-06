import connectDB from "../../../utils/db";
import { getVehiclById } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    return getVehiclById(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}