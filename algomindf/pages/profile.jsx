import { useSession, getSession } from "next-auth/react";
import { useState, useEffect } from "react";
import DBLayout from '../src/components/DBLayout';
import Image from "next/image";
import profile_gator from '../src/images/profile_gator.png';
import Link from "next/link";
import UpdatePasswordForm from '../src/components/UpdatePasswordForm';
import UpdateUsernameForm from "../src/components/UpdateUsernameForm";
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Icon } from 'react-icons-kit';
import editicon from '../src/images/editicon.png';


const Profile = ({ session }) => {
    const [userDetails, setUserDetails] = useState(null);
    const [error, setError] = useState(null);
    const [showUpdateUsername, setShowUpdateUsernameForm] = useState(false);
    const [showUpdatePassword, setShowUpdatePasswordForm] = useState(false);
    
    useEffect(() => {
        if (userDetails) {
          return;
        }
        fetch("/api/user", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then(({ user }) => setUserDetails(user || {}))
          .catch((err) => console.error(err));
      }, []);

    if (!session) {
        return <div>Loading...</div>;
    }

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
            {error ? (
                <div className="text-red-500">Error: {error}</div>
            ) : (
                <div className="pl-56 mb-4 font-concert_one text-xl text-slate-600 relative">
                Username: <input 
                    type="text" 
                    value={userDetails ? userDetails.username : "Loading..."} 
                    readOnly 
                    style={readonly} 
                /> 
                <button
                        onClick={() => setShowUpdateUsernameForm(true)}>
                    <Image src={editicon} width={25} height={25}/>
                </button>
            </div>
           
            )}
              {showUpdateUsername && <UpdateUsernameForm onClose={() => setShowUpdateUsernameForm(false)} />}
            <div className="pl-56 mb-4 font-concert_one text-xl text-slate-600">
                Password: <input 
                    type="text" 
                    value={userDetails ? userDetails.password : "secrect..."} 
                    readOnly 
                    style={readonly} 
                /> 
                <button
                    onClick={() => setShowUpdatePasswordForm(true)}>
                    <Image src={editicon} width={25} height={25}/>
                </button>
            </div>
            <div className="pl-56 font-concert_one text-xl text-slate-600">   
                Total XP:  <input type="text" value={  userDetails ? userDetails.xp : "Loading..."} readOnly style={readonly} />
            </div>   
            {showUpdatePassword && <UpdatePasswordForm onClose={() => setShowUpdatePasswordForm(false)} />}
            {/* <div>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={() => setShowUpdateUsernameForm(true)}>Update username</button>
            {showUpdateUsername && <UpdateUsernameForm onClose={() => setShowUpdateUsernameForm(false)} />}
</div> 
       <div>-----</div>  
<div>
<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
onClick={() => setShowUpdatePasswordForm(true)}>Update password</button>
            {showUpdatePassword && <UpdatePasswordForm onClose={() => setShowUpdatePasswordForm(false)} />}
</div> */}
         
        </DBLayout>
             
    );
};

export default Profile;

export async function getServerSideProps(context) {
    const session = await getSession(context);
  
    return {
      props: {
        session,
      },
    };
}

// CSS
const readonly =  {
    border: "2px solid #718599",
    backgroundColor: "transparent",
    color: "inherit",
    fontSize: "inherit",
    fontFamily: "inherit",
    padding: "0",
    width: "auto",
    outline: "none" //  /* Adjust width as needed */
};
