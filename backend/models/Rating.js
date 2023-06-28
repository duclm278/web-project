const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = Schema(
  {
    courseId: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    comment: String,
    score: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rating", ratingSchema);
