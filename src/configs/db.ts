import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    }
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("Connected to database successfully");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};

export default connectToDB;
