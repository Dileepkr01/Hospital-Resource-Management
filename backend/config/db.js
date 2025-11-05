import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected successfully! `);
  } catch (error) {
    console.error(`Error Occurs When connect the MONGODB!`);
    process.exit(1);
  }
};

export default connectDB;
