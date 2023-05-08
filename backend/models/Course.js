const mongoose = require("mongoose");
const Lesson = require("./Lesson");

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        required: true
    },
    lessons: [Lesson.schema],
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    studentsEnrolled: {
        type: Number,
        default: 0
    },
    objectives: {
        type: String
    },
    coverImage: {
        type: String,
        required: true
    },
    totalLengthSeconds: {
        type: Number,
    }
}, { timestamps: true });

module.exports = mongoose.model("Course", courseSchema);
