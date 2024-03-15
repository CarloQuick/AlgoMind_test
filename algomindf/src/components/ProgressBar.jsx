// Reference: https://flowbite.com/docs/components/progress/ 

'use client'
import { useState } from "react";

const progressWidth = '50%'; 

const ProgressBar = () => {
    return (
        <div className="w-[750px] rounded-full h-4.5 bg-slate-200">
            <div className="bg-teal-400 h-4.5 text-s font-medium text-indigo-50 text-center p-0.5 leading-none rounded-full transition-all" style={{ width: progressWidth }}>{progressWidth}</div>
        </div>      
    );
};

export default ProgressBar;