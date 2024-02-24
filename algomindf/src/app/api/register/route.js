//From video to create Login Page with MongoDB
import { connectMongoDB } from "@/lib/mongodb";
//import { User } from "@/models/user"; //doesn't work
import User from "../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, email, password, provider } = await req.json();
    //check on server side that connection is working, deleted once models/users.js created
    // console.log("Username: ", username);
    // console.log("Email: ", email);
    // console.log("Password: ", password);
    const hashedPassword = await bcrypt.hash(password, 10); //number of times of hashing
    await connectMongoDB();
    await User.create({ username, email, password: hashedPassword, provider });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
