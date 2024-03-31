"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../src/app/globals.css";
import { useRouter } from "next/navigation";
import Lesson from "../src/components/Lesson";
import logo_alligator from "../src/images/logo_alligator.png";
import sample_q_1 from "../src/images/sample_q_1.png";
import sample_q_2 from "../src/images/sample_q_2.png";
//import SampleQuestions from "../src/components/SampleQuestions";

const Homepage = () => {
  // Define state for tabs
  const [activeTab, setActiveTab] = useState("home");

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const router = useRouter();
  const handleSignUpClick = () => {
    router.push("/register");
  };
  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <div className="bg-lime-50 flex flex-col min-h-screen">
      {/* Header section with tabs */}
      <div className="p-4 flex justify-between items-center">
        {/* Tabs */}
        <div className="flex space-x-10 justify-end font-concert_one text-xl">
          <button
            className={`tab-btn ${activeTab === "home" ? "active" : ""}`}
            onClick={() => handleTabClick("home")}
          >
            Home
          </button>
          <button
            className={`tab-btn ${activeTab === "about" ? "active" : ""}`}
            onClick={() => handleTabClick("about")}
          >
            About
          </button>
          <button
            className={`tab-btn ${
              activeTab === "sample questions" ? "active" : ""
            }`}
            onClick={() => handleTabClick("sample questions")}
          >
            Sample Questions
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="p-4 flex justify-between items-center">
        <div>
          <Image src={logo_alligator} width="500" height="500" />
        </div>

        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 px-4 font-nunito">
          {/* <div style={{ fontFamily: "poppins" }}> */}
          {activeTab === "home" && (
            <p>
              Welcome! Unlock the power of data structures and algorithms with
              AlgoMind, your essential tool for mastering the core concepts.
              Build a rock-solid foundation and propel your programming skills
              to new heights. Let's embark on this learning journey together!
            </p>
          )}
          {activeTab === "about" && (
            <p>
              {" "}
              Drawing from our own experiences with learning data structures and
              algorithms at the University of Florida, we aim to develop a
              platform that simplifies these concepts into manageable steps.
              We've incorporated gamified elements such as levels, experience
              points, and badges to make learning an enjoyable experience. Our
              goal is to cultivate a smoother understanding of the subject.
              <br /> <br /> Happy Learning! <br /> <br /> Yours truly, <br />{" "}
              The AlgoMind Assembly
            </p>
          )}
          {activeTab === "sample questions" && (
            <div>
              <p>Here are some questions that you will see in the lessons.</p>
              <div className="flex-col mt-4">
                {/* <Image src={sample_q_1} width="275" height="275"/> */}
                {/* <Image
                    src={sample_q_2}
                    width="275"
                    height="275"
                    /> */}
                {/* <SampleQuestions /> */}
              </div>
            </div>
          )}
          {/* </div> */}

          {activeTab === "home" && (
            <div className="flex justify-center mt-4 space-x-6 transform translate-y-7">
              <button
                onClick={handleSignUpClick}
                className="px-5 h-10 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-300 text-black"
                type="submit"
              >
                Sign Up
              </button>
              <button
                onClick={handleLoginClick}
                className="px-5 h-10 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-300 text-slate-900"
                type="button"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
