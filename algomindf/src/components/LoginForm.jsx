//From video to create Login Page with MongoDB
"use client"; //line added much later

import Link from "next/link";
import { useState } from "react";
//added next 2 lines later
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import notebook1 from "../images/notebook1.png";
import girl from "../images/girl.png";
import "../styles/login.css";
import Image from "../../node_modules/next/image";

export default function LoginForm() {
  //added states later
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("/dashboard");
    } catch (error) {}
  };

  //intial code
  return (
    <>
      <div className="try">
        <h1 className="sign">Log In</h1>
        <div className="image-container">
          <Image className="Note" src={notebook1} alt="" />
          <div className="form-container">
            {/* Use a single <form> element */}
            <form onSubmit={handleSubmit}>
              {/* Form input fields go here */}
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
                Login
              </button>
              {error && (
                <div className="bg-red-500 text-white w-fit text-small py-1 px-3 rounded-md mt-2">
                  {error}
                </div>
              )}

              <Link href={"/register"}>
                Don't have an account?{" "}
                <span className="underline">Register</span>
              </Link>

              <span className="flex items-center px-3 py-2" style={{ height: "40px" }}>
    <hr className="border-gray-500 w-20" />
    OR
    <hr className="border-gray-500 w-20" />
</span>


            </form>

            <div>
              <p className="text-white text-[16px] mb-4">
                Forget Password?
                <Link
                  href="/forgetpassword"
                  className="ml-2 text-blue-500 underline"

                >
                  Reset Password
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="newb">
          <Image className="girl" src={girl} alt="" />
        </div>
      </div>
    </>
  );
}
