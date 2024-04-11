// This is a part of the user dashboard

"use client";
import React, { useState, useEffect } from "react";
import "../src/app/globals.css";
import DBLayout from "../src/components/DBLayout";
import ProgressBar from "../src/components/ProgressBar";
async function getUser() {
  const userRes = await fetch("/api/user");
  return userRes.json();
}

const Progress = () => {
  const [prog, setProg] = useState();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser();
        // console.log("User Data: ", userData);
        setProg((prog) => (prog = userData.user.stack1));
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  const progressWidth = ((prog / 3) * 100).toFixed(0) + "%";

  return (
    <DBLayout>
      <div className="text-center">
        <h1 className="my-16 font-concert_one text-2xl text-slate-600">
          Progress Milestones and Metrics
        </h1>
      </div>
      <div className="ml-28 mt-16">
        <div className="font-oswald mb-2">Stack</div>
        <ProgressBar progressWidth={progressWidth} />
      </div>
    </DBLayout>
  );
};

export default Progress;
