'use client';

import "../src/app/globals.css";
import DBLayout from "../src/components/DBLayout";

const Profile = () => {
    return (
        <DBLayout>
            <div className="text-center">
                <h1 className="my-16 font-concert_one text-2xl text-slate-600">Profile</h1>
            </div>     
        </DBLayout>    
    );
};

export default Profile; 