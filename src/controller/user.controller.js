const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const { user_email, user_location, user_info, password } = req.body;

  try {
    let user = await User.findOne({ user_email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({
      user_email,
      user_location,
      user_info,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res
          .status(201)
          .json({ msg: "User registered successfully", user, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.login = async (req, res) => {
  const { user_email, password } = req.body;

  try {
    let user = await User.findOne({ user_email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({ msg: "Login successful", user, token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
// user get own profile by userid?

exports.getProfile = async (req, res) => {
  const userId = req.user.id;

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
  const { user_email, user_location, user_info } = req.body;

  try {
    let user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    user.user_email = user_email;
    user.user_location = user_location;
    user.user_info = user_info;

    await user.save();
    res.status(200).json({ msg: "User updated successfully", user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
