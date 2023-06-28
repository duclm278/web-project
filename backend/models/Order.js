const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = Schema(
  {
    userId: {
      type: String,
      //   type: Schema.Types.ObjectId,
      //   ref: "User",
      required: true,
    },
    items: [
      {
        courseId: String,
        // type: Schema.Types.ObjectId,
        // ref: "Course",
      },
    ],
    amount: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
