"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component from next/image
import "../src/app/globals.css";
import logo_alligator from "../src/images/logo_alligator.png";
import { useRouter } from "next/navigation";

const Homepage: React.FC = () => {
  // Define state for tabs
  const [activeTab, setActiveTab] = useState<string>("home");

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
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
    <div className="flex flex-col">
      {/* Header section with tabs */}
      <div className="p-4 flex justify-between items-center">
        {/* Tabs */}
        <div className="flex space-x-10 justify-end">
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
      <div className="bg-gray-100 p-4 flex justify-between items-center">
        <div>
          <Image
            src={logo_alligator}
            width="500"
            height="500"
            alt="logo_alligator"
          />
        </div>

        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 px-4">
          <div style={{ fontFamily: "sans-serif" }}>
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
                Drawing from our own experiences with learning data structures
                and algorithms at the University of Florida, we aim to develop a
                platform that simplifies these concepts into manageable steps.
                We've incorporated gamified elements such as levels, experience
                points, and badges to make learning an enjoyable experience. Our
                goal is to cultivate a smoother understanding of the subject.
                <br /> <br /> Happy Learning! <br /> <br /> Yours truly, <br />{" "}
                The AlgoMind Assembly
              </p>
            )}
            {activeTab === "sample questions" && (
              <p> Provide a few questions here. </p>
            )}
          </div>

          {activeTab === "home" && (
            <div className="flex justify-center mt-4 space-x-6 transform translate-y-7">
              <button
                onClick={handleSignUpClick}
                className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-300 text-black"
                type="submit"
              >
                Sign Up
              </button>
              <button
                onClick={handleLoginClick}
                className="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-yellow-300 text-slate-900"
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
