const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const dbConnection = require("./mongo");

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
morgan.token("url", function (req, res) {
  // Decode URI to get original URL (e.g. replace %20 with spaces)
  // return decodeURI(req.originalUrl || req.url);
  return decodeURIComponent(req.originalUrl || req.url);
});
app.use(morgan("dev"));

const courseRouter = require("./routes/course");
const lessonRouter = require("./routes/lesson");
const cartRouter = require("./routes/cart");
const orderRouter = require("./routes/order");
const uploadRouter = require("./routes/upload");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const enrollRouter = require("./routes/enroll");
const progressRouter = require("./routes/progress");
const checkoutRouter = require("./routes/checkout");
const ratingRouter = require("./routes/rating");
const noteRouter = require("./routes/note");
const quizRouter = require("./routes/quiz");

app.use("/api/courses", courseRouter);
app.use("/api/lessons", lessonRouter);
app.use("/api/carts", cartRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);
app.use("/api/admins", adminRouter);
app.use("/api/users", userRouter);
app.use("/api/enroll", enrollRouter);
app.use("/api/progress", progressRouter);
app.use("/api/checkout", checkoutRouter);
app.use("/api/ratings", ratingRouter);
app.use("/api/notes", noteRouter);
app.use("/api/quizzes", quizRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
  dbConnection();
});
