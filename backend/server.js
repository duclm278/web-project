const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const dbConnection = require("./mongo");

const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

const courseRouter = require("./routes/course");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const uploadRouter = require("./routes/upload");

app.use("/api/courses", courseRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
    dbConnection();
});