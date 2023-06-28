const mongoose = require("mongoose");
const { Schema } = mongoose;

const Lesson = require("./Lesson");

const courseSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    lessons: [Lesson.schema],
    totalRating: {
      type: Number,
      default: 0,
    },
    numRating: {
      type: Number,
      default: 0,
    },
    studentsEnrolled: {
      type: Number,
      default: 0,
    },
    objectives: {
      type: String,
    },
    coverImage: {
      type: String,
      required: true,
    },
    totalLengthSeconds: {
      type: Number,
    },
  },
  { timestamps: true }
);

courseSchema.index({ name: "text", description: "text" });

module.exports = mongoose.model("Course", courseSchema);
