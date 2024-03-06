// src/app/api/lesson/route.js
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Questions from "@/models/questions";

// export const config = {
//   api: {
//     externalResolver: true,
//   },
// };

export async function GET() {
  
    await connectMongoDB();
    const questions = await Questions.find();
    return NextResponse.json({questions});

 
}
