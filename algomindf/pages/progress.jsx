// This is a part of the user dashboard

"use client";
import { useState } from "react";
import "../src/app/globals.css"; 
import DBLayout from "../src/components/DBLayout";
import ProgressBar from "../src/components/ProgressBar";

const Progress = () => {
    return (
      <DBLayout>
        <div className="text-center">
            <h1 className="my-16 font-concert_one text-2xl text-slate-600">Progress Milestones and Metrics</h1>    
        </div>
        <div className="ml-28 mt-16">
            <div className="font-oswald mb-2">Stack</div>
            <ProgressBar />
        </div>
      </DBLayout>
    );
};
  
export default Progress;