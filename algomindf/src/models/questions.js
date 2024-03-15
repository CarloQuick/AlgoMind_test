import mongoose, { Schema, model, models} from "mongoose";


const questionSchema = new Schema(
  {
    ds: {
      type: String,
      required: false,
      enum: ["0", "1", "2"],
    },
    level: {
      type: Number,
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
        type: Number,
        required: true,
    },
    qNum: {
        type: Number,
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

const Questions = models?.Questions || model("Questions", questionSchema);
export default Questions;