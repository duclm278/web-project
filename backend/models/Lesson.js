const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    videoUrl: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    lengthSeconds: {
        type: Number,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model("Lesson", lessonSchema);
