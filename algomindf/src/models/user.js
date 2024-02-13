//Google OAuth and login videos
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { //for Google OAuth, it was 'name' only
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: { 
      type: String,
      required: true,
    },
    //add points later
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
