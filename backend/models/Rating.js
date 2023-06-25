const { mongoose } = require("mongoose");

const ratingSchema = new mongoose.Schema({
    courseId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    comment: String,
    score: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Rating", ratingSchema);
