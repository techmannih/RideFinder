import connectDB from "../../../utils/db";
import { signup } from "../../../controller/user.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    return signup(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
