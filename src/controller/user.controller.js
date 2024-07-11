const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Signup handler
exports.signup = async (req, res) => {
  const { email, location, user_info, password } = req.body;
  console.log("Received signup request with body:", req.body);
  
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.warn(`User with email ${email} already exists.`);
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create new user
    const newUser = new User({
      email,
      location,
      user_info,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);

    // Save user to database
    await newUser.save();

    // Prepare JWT payload
    const payload = {
      user: {
        id: newUser.id,
      },
    };

    // Sign JWT and send response
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        console.log("User registered successfully:", newUser);
        res.status(201).json({ msg: "User registered successfully", user: newUser, token });
      }
    );
  } catch (error) {
    console.error("Error during signup:", error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

// Login handler
exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Received login request with body:", req.body);

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      console.warn(`Invalid login attempt with email ${email}: User not found.`);
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.warn(`Invalid login attempt for user ${email}: Incorrect password.`);
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    // Prepare JWT payload
    const payload = {
      user: {
        id: user.id,
      },
    };

    // Sign JWT and send response
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        console.log("User logged in successfully:", user);
        res.status(200).json({ msg: "Login successful", user, token });
      }
    );
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

// user get own profile by userid?
exports.getProfile = async (req, res) => {
  const userId = req.user.id;
  console.log("Received get profile request for user:", userId);

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
// user update own profile by userid?
exports.updateProfile = async (req, res) => {
  const userId = req.user.id;
  const { 
    email, 
    location, user_info } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user.email = email;
    user.location = location;
    user.user_info = user_info;

    await user.save();
    res.status(200).json({ msg: "User updated successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
