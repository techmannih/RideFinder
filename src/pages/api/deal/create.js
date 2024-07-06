import connectDB from "../../../utils/db";

import { addDealToDealership } from "../../../controller/deal.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    return addDealToDealership(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
