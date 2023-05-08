const { mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
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
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: {
        type: String,
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
