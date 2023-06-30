const { mongoose } = require("mongoose");

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: [
        {
            courseId: {
                type: String
            }
        }
    ],
    subtotal: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model('Cart', cartSchema)
