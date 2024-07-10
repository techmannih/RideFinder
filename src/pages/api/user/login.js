// /car-dealership-website
// |-- /components
// |   |-- /Admin
// |   |-- /User
// |   |-- /Dealership
// |   |-- /Car
// |-- /controllers
// |   |-- adminController.js
// |   |-- userController.js
// |   |-- dealController.js
// |   |-- carController.js
// |   |-- dealershipController.js
// |-- /middleware
// |   |-- authMiddleware.js
// |-- /pages
// |   |-- /api
// |   |   |-- /admin
// |   |   |   |-- login.js
// |   |   |   |-- signup.js
// |   |   |   |-- logout.js
// |   |   |-- /user
// |   |   |   |-- login.js
// |   |   |   |-- signup.js
// |   |   |   |-- logout.js
// |   |   |   |-- my-vehicles.js
// |   |   |   |-- add-vehicle.js
// |   |   |-- /deal
// |   |   |   |-- add-deal.js
// |   |   |   |-- deals-on-car.js
// |   |   |   |-- dealership-deals.js
// |   |   |-- /car
// |   |   |   |-- index.js
// |   |   |   |-- dealership-cars.js
// |   |   |   |-- add-car.js
// |   |   |-- /dealership
// |   |   |   |-- login.js
// |   |   |   |-- signup.js
// |   |   |   |-- logout.js
// |   |   |   |-- dealerships-with-car.js
// |   |   |   |-- add-car.js
// |   |   |   |-- add-deal.js
// |   |   |   |-- sold-vehicles.js
// |   |   |-- /soldVehicle
// |   |   |   |-- add-vehicle.js
// |-- /pages
// |   |-- /admin
// |   |   |-- login.js
// |   |   |-- signup.js
// |   |   |-- logout.js
// |   |-- /user
// |   |   |-- login.js
// |   |   |-- signup.js
// |   |   |-- logout.js
// |   |   |-- my-vehicles.js
// |   |   |-- add-vehicle.js
// |   |-- /deal
// |   |   |-- add-deal.js
// |   |   |-- deals-on-car.js
// |   |   |-- dealership-deals.js
// |   |-- /car
// |   |   |-- index.js
// |   |   |-- dealership-cars.js
// |   |   |-- add-car.js
// |   |-- /dealership
// |   |   |-- login.js
// |   |   |-- signup.js
// |   |   |-- logout.js
// |   |   |-- dealerships-with-car.js
// |   |   |-- add-car.js
// |   |   |-- add-deal.js
// |   |   |-- sold-vehicles.js
// |   |-- /soldVehicle
// |   |   |-- add-vehicle.js
// |-- /redux
// |   |-- /slices
// |   |   |-- adminSlice.js
// |   |   |-- userSlice.js
// |   |   |-- dealSlice.js
// |   |   |-- carSlice.js
// |   |   |-- dealershipSlice.js
// |   |-- store.js
// |-- /utils
// |   |-- db.js
// |   layout.js
// |   index.js
// |-- next.config.js
// |-- package.json

import connectDB from "../../../utils/db";
import { login } from "../../../controller/user.controller";

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "POST") {
    return login(req, res);
  } else {
    res.status(405).json({ msg: "Method not allowed" });
  }
}
