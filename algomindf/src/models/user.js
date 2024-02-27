//Google OAuth and login videos
import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      //for Google OAuth, it was 'name' only
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    provider: {
      type: String,
      required: true,
      enum: ["credentials", "google"],
      // Add other provider options as needed
    },
    xp: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  if (
    this.provider === "credentials" &&
    [this.username, this.password].some((item) =>
      ["", null, undefined].includes(item)
    )
  ) {
    return next(new Error("username and password are required"));
  }
  next();
});

const User = models.User || mongoose.model("User", userSchema);
export default User;
