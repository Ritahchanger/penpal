const mongoose = require("mongoose");


const DateGenerator = require("../utils/DateGenerator")

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNo: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    systemId: {
      type: String,
    },
    socketId: {
      type: String,
      unique: true,
      required: false,
    },
    createdAt: {
      type: String,
      default: DateGenerator(),
    },
    role: {
      type: String,
      enum: ["writer", "admin", "editor"],
      default: "writer",
    },
    profile: {
      fileName: { type: String },
      downloadURL: { type: String },
    },
    educationLevel: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    qualifications: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    pending: {
      type: Boolean,
      default: false,
    },
    bids: {
      type: Number,
      required: true,
      default: 0,
    }
  });

  const User = mongoose.model("User",UserSchema);


  module.exports = User;