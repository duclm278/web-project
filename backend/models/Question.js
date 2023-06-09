const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = Schema(
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
    messageForCorrectAnswer: String,
    messageForIncorrectAnswer: String,
    explanation: String,
    point: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
