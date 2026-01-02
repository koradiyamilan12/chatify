import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const { MONGO_URI } = process.env;
    if (!MONGO_URI) {
      throw new Error("MONGO_URI is not set");
    }
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully: ", connection.connection.host);
  } catch (error) {
    console.error("MongoDB connection failed: ", error);
    process.exit(1); // 1 status code means failure, 0 means success
  }
};
