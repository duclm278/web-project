const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = async (req, res, next) => {
  // Verify user is authenticated
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];
  const SECRET = process.env.SECRET || "hello";

  try {
    const { _id } = jwt.verify(token, SECRET);

    req.user = await User.findOne({ _id });
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request is not authorized" });
  }
};

module.exports = requireAuth;
