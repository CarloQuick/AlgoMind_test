//From  Google OAuth and login video

import mongoose from "mongoose";
import Questions from "@/models/questions";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Not Connected to MongoDB", error);
  }
};

export const fetchQuestions = async (ds, level) => {
  try {
    await connect();
    const questions = await Questions.find({ ds, level });
    return questions;
  } catch (error) {
    console.error("Error fetching questions: ", error);
    return [];
  }
};

export default connectMongoDB;
