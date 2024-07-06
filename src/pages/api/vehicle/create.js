import connectDB from "../../../utils/db";
import { createVehicle } from "../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    return createVehicle(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
