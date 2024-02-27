import { connectMongoDB } from "@/lib/mongodb";
import { getServerSession } from "next-auth/next";

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
