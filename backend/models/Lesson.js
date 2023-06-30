const mongoose = require("mongoose");
const { Schema } = mongoose;

const Course = require("./Course");
const Question = require("./Question");

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
    questions: [Question.schema],
  },
  { timestamps: true }
);

lessonSchema.index({ name: "text", description: "text" });
lessonSchema.statics.moveLessonToCourseIndex = async function (
  lesson,
  courseId,
  index
) {
  let course = null;
  if (courseId) {
    course = await Course.findById(courseId);
    course.lessons.push(lesson._id);
    await course.save();
  }

  // 1-indexed index
  if (index) {
    course?.lessons?.pop();
    course?.lessons?.splice(index - 1, 0, lesson._id);
    await course.save();
  }
};

module.exports = mongoose.model("Lesson", lessonSchema);
