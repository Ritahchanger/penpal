const mongoose = require("mongoose");
require("dotenv").config();

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDatabase;
