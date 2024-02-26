//needed for Google OAuth and login
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"; //for login
import GoogleProvider from "next-auth/providers/google"; //for google
import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},

      async authorize(credentials) {
        //testing if link to dashboard works, when return null; get invalid credentials
        //const user = { id: "1"};
        //return user;

        const { email, password } = credentials;

        try {
          await connectMongoDB();
          const user = await User.findOne({ email }).select("+password");
          console.log({ user });
          if (!user) {
            return null; //no user found
          }

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (!passwordsMatch) {
            return null; //passwords don't match
          }

          return user;
        } catch (error) {
          console.log("Error: ", error);
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  //from login
  session: {
    strategy: "jwt", //jwt = json web tokens
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  //from google

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { username, name, email, xp } = user;
        try {
          await connectMongoDB();
          const userExists = await User.findOne({ email });
          if (!userExists) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "applications/json",
              },
              body: JSON.stringify({
                name,
                email,
                provider: account.provider,
                xp,
              }),
            });
            if (res.ok) {
              return user;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
      console.log("authed user", { user });
      return user;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
