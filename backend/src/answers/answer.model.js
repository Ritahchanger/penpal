const mongoose = require("mongoose");

const { Schema } = mongoose;

const answerSchema = new Schema(
  {
    order: { type: Schema.Types.ObjectId, ref: "Order", required: true }, 
    writer: { type: Schema.Types.ObjectId, ref: "User", required: true }, 
    content: { type: String, required: true },
    files: [{ type: String }],
    isRevision: { type: Boolean, default: false }, 
    revisionNumber: { type: Number, default: 0 }, 
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Answer", answerSchema);
