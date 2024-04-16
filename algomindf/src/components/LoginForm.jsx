//From video to create Login Page with MongoDB
"use client"; //line added much later

import Link from "next/link";
import { useState } from "react";
//added next 2 lines later
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import notebook1 from "../images/notebook1.png";
import girl from "../images/girl.png";
import gg from "../images/google_logo.svg";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
import "../styles/login.css";
import Image from "../../node_modules/next/image";

export default function LoginForm() {
  //added states later
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);

  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
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
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
             
             <div class="mb-4 flex">
              <input
                  type={type}
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
             />
             <span className="flex justify-around items-center" onClick={handleToggle}>
                  <Icon className="absolute mr-10" icon={icon} size={25}/>
              </span>
            </div>
               
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
            <button onClick={() => signIn("google")} className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Image src={gg} width={30} height={30} />
              Continue with Google
            </button>
          </div>
        </div>
        <div className="newb">
          <Image className="girl" src={girl} alt="" />
        </div>
      </div>
    </>
  );
}