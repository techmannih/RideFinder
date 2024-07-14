// api/deal/addDealToDealership.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../middleware/authmiddleware";
import { addDealToDealership } from "../../../controller/deal.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    authMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized" });
      }
      try {
        await addDealToDealership(req, res);
      } catch (error) {
        console.error("Error in profile request:", error);
        res.status(500).json({ msg: "Server Error" });
      }
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}