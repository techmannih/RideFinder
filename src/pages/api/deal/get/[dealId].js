// api/deal/getDealById.js
import connectDB from "../../../../utils/db";
import authMiddleware from "../../../../utils/authMiddleware";
import { getDealById } from "../../../../controller/deal.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async function () {
      return getDealById(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
