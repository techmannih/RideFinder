// api/deal/getDealsByUserId.js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { getDealsByUserId } from "../../../controller/deal.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async function () {
      return getDealsByUserId(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
