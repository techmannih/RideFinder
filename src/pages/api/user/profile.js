// api/user/profile/[userid].js
import connectDB from "../../../utils/db";
import authMiddleware from "../../../middleware/authmiddleware"; // Corrected import
import { getProfile } from "../../../controller/user.controller"; // Corrected import path

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    authMiddleware(req, res, async (err) => {
      if (err) {
        return res.status(401).json({ msg: "Unauthorized" });
      }
      try {
        await getProfile(req, res);
      } catch (error) {
        console.error("Error in profile request:", error);
        res.status(500).json({ msg: "Server Error" });
      }
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}