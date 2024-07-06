import connectDB from "../../../utils/db";
import { getDealsByUserId } from "../../../controller/deal.controller";

export default async function handler(req, res) {
    await connectDB();
    
    if (req.method === "GET") {
        return getDealsByUserId(req, res);
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
    }
    