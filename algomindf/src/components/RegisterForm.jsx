//From video to create Login Page with MongoDB
"use client";

import Link from "next/link";
import { useState } from "react";
//added later to redirect to Login page after completing registration
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signIn } from "next-auth/react";
import notebook1 from "../images/notebook1.png";
import boy from "../images/boy.png";
import "../styles/register.css";
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeOff);


  //next line - added later for redirect to Login page
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault(); //doesn't allow the page to refresh when submit is clicked

    const isValidEmail = (email) => {
      const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

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
        router.push("/login");
      } else {
        console.log("User registeration failed");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  //console.log("Username: ", username);
  const handleToggle = () => {
    if (type==='password'){
       setIcon(eye);
       setType('text')
    } else {
       setIcon(eyeOff)
       setType('password')
    }
 }
  return (
    <>
    <div className="try">
    <h1 className="sign">Sign Up</h1>
    <div className="image-container">
      <Image className="Note" src={notebook1} alt="" />
      <div className="form-container">
        {/* Use a single <form> element */}
        <form onSubmit={handleSubmit}>
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
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white w-fit text-small py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          <small><Link className="text-sm mt-3 text-right" href={"/login"}>
            Already have an account? <span className="underline">Login</span>
          </Link></small>
          <small>By signing up for AlgoMind, you agree to AlgoMind's</small>
        <div>
          <small><a href="/" className= "underline">Terms of Service</a> & <a href="/" className="underline">Privacy Policy</a>.</small>
        </div>
        <h5><b>Or sign up using:</b></h5>
        <button className="flex items-center px-3 py-2" style={{height: "40px"}}
    onClick={() => signIn("google")}
   >
            <Image
              className="w-5 h-5"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              loading="lazy"
              alt="google logo"
              height ={10}
              width = {10}
    
            />
           
    
           <h1 className="ml-5"> Sign In With Google</h1>
          </button>
        
        </form>
   
      
      </div>
    </div>
    <div className="newb">
      <Image className="boyy" src={boy} alt="" />
    </div>
  </div>

  <Link href="/">Go back to Home</Link>
  </>
  );
}
