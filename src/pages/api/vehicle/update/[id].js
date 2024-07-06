import connectDB from "../../../../utils/db";
import { updateVehicle } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "PUT") {
    return updateVehicle(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
