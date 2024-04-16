import User from "@/models/user";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
  try {
    const { password, email } = await request.json();
    console.log("Request payload:", { password, email }); // Log the request payload

    await connectMongoDB();

    const existingUser = await User.findOne({ email }).select("_id");
    console.log("Existing user:", existingUser); // Log the existingUser object

    if (!existingUser) {
      console.log("User not found"); // Log that the user wasn't found
      return new NextResponse("User not found", { status: 404 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    existingUser.password = hashedPassword;

    existingUser.resetToken = undefined;
    existingUser.resetTokenExpiry = undefined;

    await existingUser.save();
    console.log("User's password is updated"); // Log that the password was updated
    return new NextResponse("User's password is updated", { status: 200 });
  } catch (err) {
    console.error("Error:", err); // Log any errors that occur
    return new NextResponse(err, { status: 500 });
  }
};
