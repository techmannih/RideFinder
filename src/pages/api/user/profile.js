// api/user/profile/[userid].js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { getProfile } from "../../../controller/user.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async function () {
      return getProfile(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}