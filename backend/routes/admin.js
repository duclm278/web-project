const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const JWT_SECRET = process.env.JWT_SECRET || "hello";
  return jwt.sign({ _id }, JWT_SECRET, { expiresIn: "3d" });
};

// Login route
router.post("/login", async (req, res) => {
  try {
    const { _id, isAdmin, email } = await User.login(req.body);
    if (!isAdmin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Create token
    const token = createToken(_id);

    res.status(200).json({ _id, isAdmin, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
