import * as React from "react";
import Link from "next/link";
import Image from 'next/image'
import { useState } from "react";
import notebook1 from "../src/app/register/notebook1.png";
import boy from "../src/app/register/boy.png";
import girl from "../src/app/register/girl.png"
import '../src/app/register/register.css';

export default function Register() {
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (event) => {
    event.preventDefault();
    // Add your registration logic here
    console.log("User registered:", { userName, email, password });
  };

  return (
    <>
      <div className="try">
        <h1 className="sign">Sign Up</h1>
        <div className="image-container">
          <Image className="Note" src={notebook1} alt="" />
          <div className="form-container">
            {/* Use a single <form> element */}
            <form onSubmit={registerUser}>
              {/* Form input fields go here */}
              <input type="text" id="username" name="username" placeholder="Username"/>
              <input type="email" id="email" name="email" placeholder="Email"/>
              <input type="password" id="password" name="password" placeholder="Password" />
              <button type="submit">Submit</button>
            </form>

            <small>By signing up for AlgoMind, you agree to AlgoMind's</small>
            <div>
              <a href="/">Terms of Service</a> & <a href="/">Privacy Policy</a>.
            </div>
            <h5><b>Or sign up using:</b></h5>
            <button type="submit">Sign up with Google</button>
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
