// This is part of the user dashboard
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
 
import logo_text from "../images/logo_text.png";
import profile_icon from "../images/user_db/profile_icon.png";
import lesson_icon from "../images/user_db/lesson_icon.png";
import dashboard from "../images/user_db/dashboard.png";
import badge_icon from "../images/user_db/badge_icon.png";
import progress_icon from "../images/user_db/progress_icon.png";
import logout_door from "../images/user_db/logout_door.png";
import desk_lamp from "../images/desk_lamp.png";


const activeLinkStyle = 'flex items-center gap-2 font-concert_one text-primary-800 mb-4 text-xl text-lime-600 font-large bg-indigo-200'
const normalLinkStyle = 'flex items-center gap-2 font-concert_one text-primary-800 mb-4 text-xl text-slate-600 font-large hover:bg-indigo-200'


const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex">
      <div className={`bg-indigo-300 w-52 p-3 flex-col h-screen gap-7 ${isOpen ? "w-52" : "w-3"} duration-300 relative`}>
        <div className="rounded-full absolute -right-3 top-9">
          <Image
            src={desk_lamp}
            width={30}
            height={30}
            style={{ transform: !isOpen ? 'scaleX(-1)' : 'none' }}  //flips the icon around, becomes mirrored image
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="flex justify-center items-center">
          <Image src={logo_text} width={130} height={130} layout="fixed" />
        </div>
        <div className="flex flex-col gap-1"> 
        <Link 
          href="/dashboard"
          className={`${pathname === '/dashboard' ? activeLinkStyle : normalLinkStyle}`}>
            <div className="inline-flex">
              <Image 
                src={dashboard} 
                width={isOpen ? 18 : 12} 
                height={isOpen ? 18 : 12} 
                layout="fixed" />
                <span className={`ml-1 ${!isOpen && "scale-0"}`}>Dashboard</span>
            </div>
            {/* <Image src={lesson_icon} alt="Dashboard" width={18} height={18} layout="fixed" />
            <span className={`ml-1 ${!isOpen && "scale-0"}`}>Dashboard</span> */}
        </Link>
        <Link 
          href="/profile"
          className={`${pathname === '/profile' ? activeLinkStyle : normalLinkStyle}`}>
            <div className="inline-flex">
            <Image 
              src={profile_icon} 
              width={25} 
              height={25} layout="fixed" />
              <h1 className={`ml-1 ${!isOpen && "scale-0"}`}>Profile</h1>
            </div>
        </Link>
        <Link 
          href="/progress"
          className={`${pathname === '/progress' ? activeLinkStyle : normalLinkStyle}`}>
            <div className="inline-flex">
              <Image 
                src={progress_icon}
                width={24} 
                height={24} 
                layout="fixed" />
              <h1 className={`ml-1 ${!isOpen && "scale-0"}`}>Progress</h1>
            </div>
        </Link>
        <Link 
          href="/badge"
          className={`${pathname === '/badge' ? activeLinkStyle : normalLinkStyle}`}>
            <div className="inline-flex">
              <Image 
                src={badge_icon}
                width={22} 
                height={22} 
                layout="fixed" />
              <h1 className={`ml-1 ${!isOpen && "scale-0"}`}>Badge</h1>
            </div>          
        </Link>
        <Link 
          href="/logout"
          className={`${pathname === '/logout' ? activeLinkStyle : normalLinkStyle}`}>
            <div className="inline-flex">
              <Image 
                src={logout_door}
                width={18} 
                height={18} 
                layout="fixed" 
              />
              <h1 className={`ml-1 ${!isOpen && "scale-0"}`}>Log out</h1>
            </div>           
        </Link>
      </div>
      </div>
      {/* <div className="flex justify-center items-center">
        <Image src={logo_text} width={130} height={130} layout="fixed" />
      </div> */}
      
    </div>
    // </div>
  );
};

export default Sidebar;
