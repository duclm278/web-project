const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
  console.log("Connected to database");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from database");
});

module.exports = async function connectMongoDb() {
  const MONGO_DB_URI = process.env.MONGO_DB_URI || "mongodb://localhost:27017/";

  try {
    await mongoose.connect(MONGO_DB_URI);
  } catch (err) {
    console.log(err);
  }
};
