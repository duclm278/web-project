const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const SECRET = process.env.SECRET || "hello";
  return jwt.sign({ _id }, SECRET, { expiresIn: "3d" });
};

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ ...user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Signup route
router.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.signup(req.body);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ ...req.body, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Profile route
router.get("/profile", async (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.split(" ")[1];
  const SECRET = process.env.SECRET || "hello";

  try {
    const { _id } = jwt.verify(token, SECRET);

    req.user = await User.findOne({ _id });
    res.status(200).json(req.user);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
});

router.patch("/profile/:id", async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("No such user");
  }

  const user = await User.findByIdAndUpdate(
    { _id: decoded._id },
    { ...req.body }
  );

  if (!user) {
    return res.status(404).send("No such user");
  }

  res.status(200).json({ user });
});

module.exports = router;
