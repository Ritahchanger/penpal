const mongoose = require("mongoose");
const { Schema } = mongoose;
const Counter = require("../counter/counter.model");

const orderSchema = new Schema(
  {
    orderId: { type: String, unique: true },

    clientName: {
      type: String,
      required: true,
    },

    page: {
      type: String,
    },

    words: {
      type: String,
      required: true,
    },

    subject: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      enum: [
        "Dissertation",
        "Technical",
        "Non technical",
        "PowerPoint(With Speaker Notes)",
        "PowerPoint(Without Speaker Notes)",
        "Undergraduate",
      ],
      required: true,
    },

    deadline: {
      type: Date,
      required: true,
    },

    time: {
      type: String,
      required: true,
    },

    charges: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
    },

    files: [
      {
        fileName: String,
        downloadURL: String,
        _id: false,
      },
    ],

    paperDetails: {
      type: String,
    },

    assignedAt: {
      type: Date,
      default: null,
    },

    assignedWriter: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    bids: {
      type: Number,
      default: 0,
    },

    biddedWriters: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],

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

    penalty: {
      type: Number,
      default: 0,
    },

    inRevisionCount: {
      type: Number,
      default: 0,
    },
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
