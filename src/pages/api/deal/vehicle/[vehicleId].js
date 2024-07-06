import connectDB from "../../../../utils/db";
import { getDealsByVehicleId } from "../../../../controller/vehicle.controller";

export default async function handler(req, res) {
    await connectDB();
    
    if (req.method === "GET") {
        return getDealsByVehicleId(req, res);
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
    }

