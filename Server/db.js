const mongoose = require('mongoose');
const env = require("dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Database connection error: ', err);
    process.exit(1); // Exit process if connection fails
  }
}; 

module.exports = connectDB;
