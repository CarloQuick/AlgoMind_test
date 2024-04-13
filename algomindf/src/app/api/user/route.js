import { NextResponse } from "next/server";
import User from "../../../models/user";
import { connectMongoDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request) {
  const { name, email, provider, xp } = await request.json();
  await connectMongoDB();
  await User.create({
    name,
    email,
    provider,
    xp: 0,
    stack1: true,
    stack2: true,
    stack3: true,
  });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}

export async function GET(req, res) {
  try {
    const session = await getServerSession(authOptions);
    await connectMongoDB();
    const user = await User.findOne({ email: session.user.email });
    return NextResponse.json({ user });
  } catch (err) {
    console.error({ err });
    return NextResponse.status(500).json(error);
  }
}
