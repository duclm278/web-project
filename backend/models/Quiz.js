const mongoose = require("mongoose");
const { Schema } = mongoose;

const quizSchema = Schema(
  {
    lessonId: {
      type: Schema.Types.ObjectId,
      ref: "Lesson",
      required: true,
    },
    quizTitle: {
      type: String,
      required: true,
    },
    quizSynopsis: {
      type: String,
      required: true,
    },
    questions: [
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
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quiz", quizSchema);
