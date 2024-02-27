import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    ds: {
      type: String,
      required: false,
      enum: [0, 1, 2],
    },
    level: {
      type: Int32,
      required: true,
    },
    choices: {
      type: Array,
      required: false,
    },
    correctAnswer: {
      type: String,
      required: true,
    },
    pointValue: {
        type: Int32,
        required: true,
    },
    qNum: {
        type: Int32,
        required: true,
    },
    qType: {
        type: String,
        required: true,
        enum: ["MC", "Code"],
    },
    question: {
        type: String,
        required: true,
    },
  },
);

const Questions = models.Questions;
export default Questions;