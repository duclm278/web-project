const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const requireAuth = require("../middleware/requireAuth");

const createToken = (_id) => {
  const SECRET = process.env.SECRET || "hello";
  return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};

// Login route
router.post("/login", async (req, res) => {
  try {
    const { _id, firstName, lastName, email } = await User.login(req.body);

    // Create token
    const token = createToken(_id);

    res.status(200).json({ firstName, lastName, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { _id, firstName, lastName, email } = await User.create(req.body);

    // Create token
    const token = createToken(_id);

    res.status(200).json({ firstName, lastName, email, token });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Protect below routes
router.use(requireAuth);

// Profile route
router.get("/profile", async (req, res) => {
  if (!req.user) {
    return res.status(404).send("No such user");
  }

  res.status(200).json(req.user);
});

router.patch("/profile", async (req, res) => {
  const { _id } = req.user;
  const user = await User.findByIdAndUpdate(_id, req.body, { new: true });
  if (!user) {
    return res.status(404).send("No such user");
  }

  res.status(200).json(user);
});

module.exports = router;
