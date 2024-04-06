'use client';

import "../src/app/globals.css";
import DBLayout from "../src/components/DBLayout";
import profile_gator from "../src/images/profile_gator.png";
import Image from "next/image";

const Profile = () => {
    return (
        <DBLayout>
            <div className="text-center">
                <h1 className="my-16 font-concert_one text-2xl text-slate-600">Profile Overview</h1>
            </div>
            <div className="flex justify-center mt-4">
                <div className="h-40 w-40 rounded-full bg-cyan-100 flex items-center justify-center relative mb-8 mt-[-50px]">
                    <Image 
                        src={profile_gator}
                        alt="Profile Gator"
                        width={250}
                        height={250}
                        className="mt-6"
                    />
                </div>
            </div> 
            <div className="pl-56 mb-4 font-concert_one text-xl text-slate-600">
                Username:
            </div> 
            <div className="pl-56 mb-4 font-concert_one text-xl text-slate-600">
                Password:
            </div>
            <div className="pl-56 font-concert_one text-xl text-slate-600">   
                Total XP:
            </div>    
        </DBLayout>    
    );
};

export default Profile; 