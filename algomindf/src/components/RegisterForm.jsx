//From video to create Login Page with MongoDB
"use client";

import Link from "next/link";
import { useState } from "react";
//added later to redirect to Login page after completing registration
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //next line - added later for redirect to Login page
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); //doesn't allow the page to refresh when submit is clicked

    if (!username || !email || !password) {
      //if any of the values are missing
      setError("All fields are necessary");
      return;
    }

    try {
      //added when checking for userExists
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists");
        return;
      }

      //initial code in try-catch
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          provider: "credentials",
        }),
      });

      if (res.ok) {
        //reset the form (blank, no error message)
        const form = e.target;
        form.reset();
        //next line - added to redirect to login page after successful Regsitration
        router.push("/");
      } else {
        console.log("User registeration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  //console.log("Username: ", username);

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-small py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <Link className="text-sm mt-3 text-right" href={"/"}>
            Already have an account? <span className="underline">Login</span>
          </Link>
        </form>

        {/* Line with "OR" in the middle */}
        <div className="flex items-center my-4">
          <div className="border-t border-gray-500 flex-grow"></div>
          <span className="mx-4 text-gray-500">OR</span>
          <div className="border-t border-gray-500 flex-grow"></div>
        </div>

        <div className="flex items-center justify-center h-1/2 dark:bg-gray-800">
          <button
            onClick={() => signIn("google")}
            className="flex items-center px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150"
          >
            <Image
              className="w-6 h-6"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
              height={30}
              width={30}
            />
            <span className="ml-2">Sign In With Google</span>
          </button>
        </div>
      </div>
    </div>
  );
}
