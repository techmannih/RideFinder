import connectDB from "../../../utils/db";
import { updateProfile } from "../../../controller/user.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "PUT") {
    return updateProfile(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
