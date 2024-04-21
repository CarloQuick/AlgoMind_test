import User from "@/models/user";
import crypto from "crypto";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export const POST = async (request) => {
    try {
      const { email } = await request.json();
      await connectMongoDB();
  
      const existingUser = await User.findOne({ email }).select("_id");
      if (!existingUser) {
        return new NextResponse("Email doesn't exist.", { status: 400 });
      }
  
      const resetToken = crypto.randomBytes(20).toString("hex");
      const passwordResetToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
      const passwordResetExpires = Date.now() + 3600000;
  
      existingUser.resetToken = passwordResetToken;
      existingUser.resetTokenExpiry = passwordResetExpires;
      const resetUrl = `localhost:3000/reset-password/${resetToken}`;
      console.log(resetUrl);
  
      const body = "Reset Password by clicking on the following URL: " + resetUrl;
      const msg = {
        to: email,
        from: "vitran@ufl.edu",
        subject: "Reset Password",
        text: body,
      };
  
      sgMail.setApiKey(process.env.SENDGRID_API_KEY || "");
  
      await sgMail.send(msg);
  
      await existingUser.save();
  
      return new NextResponse("Email is sent for resetting password.", {
        status: 200,
      });
    } catch (error) {
      console.error("Error:", error);
      return new NextResponse("Failed to process request.", { status: 500 });
    }
  };
  