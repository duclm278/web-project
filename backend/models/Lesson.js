const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["video", "quiz"],
      required: true,
    },
    videoUrl: {
      type: String,
    },
    description: {
      type: String,
      default: "",
    },
    lengthSeconds: {
      type: Number,
    },
    quizDetails: {
      quizTitle: String,
      quizSynopsis: String,
      nrOfQuestions: String,
      questions: [
        {
          question: String,
          questionType: String,
          questionPic: String,
          answerSelectionType: String,
          answers: [String],
          correctAnswer: String,
          messageForCorrectAnswer: String,
          messageForIncorrectAnswer: String,
          explanation: String,
          point: String,
        },
      ],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);
