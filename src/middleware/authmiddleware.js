const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const authHeader = req.headers['authorization'] || req.headers['x-auth-token'];
  const token = authHeader && authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;
 // Corrected access to headers
  console.log("Token received:", token);

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
