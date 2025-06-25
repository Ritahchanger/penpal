const mongoose = require("mongoose");

const { Schema } = mongoose;

const Counter = require("../counter/counter.model");

const orderSchema = new Schema(
  {
    orderId: { type: String, unique: true },
    clientName: { type: String, required: true },
    paperDetails: { type: String, required: true },
    deadline: { type: Date, required: true },
    writer: { type: Schema.Types.ObjectId, ref: "User", default: null },
    assignedAt: { type: Date, default: null },
    bids: { type: Number, default: 0 },
    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "In Review",
        "Completed",
        "Cancelled",
        "Revision",
      ],
      default: "Pending",
    },
    biddedWriters: [{ type: Schema.Types.ObjectId, ref: "User" }],
    charges: { type: Number, required: true },
    penalty: { type: Number, default: 0 },
    files: [{ type: String }],
    description: { type: String },
    inRevisionCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

orderSchema.pre("save", async function (next) {
  if (!this.orderId) {
    const counter = await Counter.findOneAndUpdate(
      { name: "orderId" },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );
    this.orderId = counter.value.toString().padStart(4, "0");
  }
  next();
});

module.exports = mongoose.model("Order", orderSchema);
