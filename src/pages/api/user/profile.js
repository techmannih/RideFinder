import connectDB from "../../../utils/db";

import { getProfile } from "../../../controller/user.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    return getProfile(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
