const mongoose = require("mongoose");
const { Schema } = mongoose;

const lessonSchema = Schema(
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
    description: {
      type: String,
      default: function () {
        return this.type === "quiz" ? null : "";
      },
    },
    lengthSeconds: {
      type: Number,
      min: 0,
      default: 0,
    },

    // Video specific fields
    videoUrl: {
      type: String,
      required: function () {
        return this.type === "video";
      },
    },

    // Quiz specific fields
    questions: [
      {
        type: Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);
