import { signIn } from "@/auth";
import credentials from "next-auth/providers/credentials";

export default async function handler(req, res) {
  try {
    const { username, email, password, xp } = req.body;
    await signIn("credentials", { username, email, password });

    res.status(200).json({ success: true });
  } catch (error) {
    if (error.type === "CredentialsSignin") {
      res.status(401).json({ error: "Invalid credentials." });
    } else {
      res.status(500).json({ error: "Something went wrong." });
    }
  }
}
