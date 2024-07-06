import connectDB from "../../../../utils/db";
import { getDealById } from "../../../../controller/deal.controller";

export default async function handler(req, res) {

    await connectDB();
    
    if (req.method === "GET") {
        return getDealById(req, res);
    } else {
        res.status(405).json({ msg: "Method not allowed" });
    }
    }