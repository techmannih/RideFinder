import connectDB from "../../../../utils/db";
import { getVehicleByUserId } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    return getVehicleByUserId(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
