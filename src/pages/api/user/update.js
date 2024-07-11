// api/user/update
import connectDB from "../../../utils/db";
import authMiddleware from "../../../utils/authMiddleware";
import { updateProfile } from "../../../controller/user.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "PUT") {
    authMiddleware(req, res, async function () {
      return updateProfile(req, res);
    });
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
