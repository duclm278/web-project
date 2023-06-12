const mongoose = require("mongoose");

mongoose.connection.on("connected", () => {
    console.log("connected to database");
});

mongoose.connection.on("disconnected", () => {
    console.log("disconnected from database");
});

module.exports = async function connectMongoDb() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
    } catch (err) {
        console.log(err);
    }
};
