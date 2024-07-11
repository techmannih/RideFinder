// api/deal/addDealToDealership.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { addDealToDealership } from "../../../controller/deal.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    authMiddleware(req, res, async function () {
      return addDealToDealership(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}