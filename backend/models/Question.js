const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = Schema(
  {
    question: {
      type: String,
      required: true,
    },
    questionType: {
      type: String,
      enum: ["text", "photo"],
      required: true,
    },
    questionPic: String,
    answerSelectionType: {
      type: String,
      enum: ["single", "multiple"],
      required: true,
    },
    answers: {
      type: [String],
      default: [],
    },
    correctAnswer: {},
    point: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
