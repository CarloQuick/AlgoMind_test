import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
  const { id } = params;
  const { newPassword: password} = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { password });
  return NextResponse.json({ message: "username updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
