import { NextResponse } from "next/server";
import User from "../../../models/user";
import { connectMongoDB } from "@/lib/mongodb";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectMongoDB();
  await User.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}
